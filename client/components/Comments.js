import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	renderComment(comment, i){
		return (
			<div className="comment" key={i}>
				<p>
					<strong>{ comment.user }</strong>
					{ comment.text }
					
				</p>
			</div>
		);
	}

	handleSubmit(e){
		e.preventDefault();
		console.log('handleSubmit:', this)

		const { postId } = this.props.match.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;

		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}

	render(){
		console.log('Comments: ', this.props);
		const {postComments} = this.props;
		return (
			<div className="comments">
				{this.props.postComments.map((comment,i) =>  this.renderComment(comment, i))}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(Comments);