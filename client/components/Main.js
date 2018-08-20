import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
	render() {

		const children = React.Children.map(this.props.children, (child) => {
			return React.cloneElement(child, this.props)
		});

		console.log({children})

		return (
			<div>
				<h1>
					<Link to="/">Reduxtagram</Link>
				</h1>

				{ children }
			</div>
		)
	}
};

export default Main;