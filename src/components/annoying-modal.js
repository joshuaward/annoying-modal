import React, { Component } from 'react';

class AnnoyingModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			class: ''
		}
	}

	componentWillMount() {
		this.setState({
			class: 'show'
		})
	}

	render() {
		return (
			<div className="annoyingModal">
				<div className="annoyingModal-wrapper">
					<button className="button close" type="button">
						<i className="fas fa-times"></i>
					</button>
					<header>
						<h1>This is an annoying modal</h1>
					</header>
					<main>
						<p>This modal appears when your mouse exits the window/document. These are used in situations where peoeple are desparate to keep you on their site as if some annoying modal asking me to sign up for your newsletter/spam will keep me there. It only appears once, but it's still annoying. If you want it to appear again, just refresh the page.</p>
					</main>
					<footer>
						<div className="confirmation">
							<h4>did it annoy you?</h4>
						</div>
						<div className="actions">
							<button className="button yes" type="button">yes</button>
							<button className="button no" type="button">no</button>
						</div>
					</footer>
				</div>
			</div>
		)
	}
}

export default AnnoyingModal;