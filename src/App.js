import React, { Component } from 'react';
import './App.scss';

// components
import AnnoyingModal from './components/annoying-modal';
//import HiddenButton from './components/hidden-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro">
					<h2 className="title">wait for it</h2>
					<span className="hint tooltip tooltip-top" data-tooltip="Hover outside of the window.">
						Hint
					</span>
				</div>
				<AnnoyingModal />
				{/* <HiddenButton /> */}
				<button className="reload-button tooltip tooltip-right" data-tooltip="refresh page">
					<i className="fas fa-sync-alt"></i>
				</button>
				<a href="https://codepen.io/joshuaward/pens/public/" className="external-link tooltip tooltip-left" data-tooltip="Codepen" target="_blank">
					<i className="fab fa-codepen"></i>
				</a>
      </div>
    );
  }
}

export default App;
