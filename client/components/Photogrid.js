import React from 'react';
import {connect} from 'react-redux'
import Photo from './Photo';

class Photogrid extends React.Component {

	render() {
		// console.log(this.props)

		return (
			<div className="photo-grid">
				{this.props.posts.map( (post, i) => 
					<Photo {...this.props} key={i} i={i} post={post} /> )}
			</div>
		);

		// const {posts} = this.props;

		// return (
		// 	<div className="photo-grid">
		// 		{ posts.map((post, i) => <div>{i}</div>)}
		// 	</div>
		// )
	}
};

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	}
}

export default connect(mapStateToProps)(Photogrid);