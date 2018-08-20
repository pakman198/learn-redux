import React from 'react';
import { Link } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class Photo extends React.Component {
	render(){
		const {post, i, comments} = this.props;

		// console.log({post})

		return (
			<figure className="grid-figure">
				<div className="grid-photo-rap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_url} alt={post.caption} className="grid-photo" />
					</Link>

					<CSSTransitionGroup transitionName="like"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">{post.likes}</span>
					</CSSTransitionGroup>
				</div>

				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button onClick={this.props.increment.bind(null, i)} 
						className="likes">&hearts; {post.likes}</button>
						<Link to={`/view/${post.code}`} className="button">
							<span className="comment-count">
								<span className="speech-bubble"></span> &nbsp;
								{ comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>
			</figure>
		);
	}
	
};

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(Photo); 