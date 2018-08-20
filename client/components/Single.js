import React from 'react';
import { connect } from 'react-redux';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
	render() {
		console.log('Single: ', this.props)
		const {postId} = this.props.match.params;
		const i = this.props.posts.findIndex( 
			(post) => post.code === postId
		);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];

		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props}  />
				<Comments postComments={postComments} {...this.props} />
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

export default connect(mapStateToProps)(Single);