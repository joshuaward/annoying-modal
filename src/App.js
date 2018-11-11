import React, { Component } from 'react';
import './App.scss';

// components
import AnnoyingModal from './components/annoying-modal';
import HiddenButton from './components/hidden-button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro">
					<h2 className="title">wait for it</h2>
					<span className="hint" data-tooltip="Hover outside of the window.">
						Hint
					</span>
				</div>
				<AnnoyingModal />
				<HiddenButton />
				<button className="reload-button">
					<i className="fas fa-sync-alt"></i>
				</button>
      </div>
    );
  }
}

export default App;
