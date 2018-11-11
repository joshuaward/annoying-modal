import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);

// more scripts
const annoyingModal = document.querySelector('.annoyingModal');
const annoyingModal_wrapper = document.querySelector('.annoyingModal-wrapper');
const buttons = document.querySelectorAll('.button');

// event function
function addEvent(obj, evt, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evt, fn, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on', evt, fn);
	}
}

// target mouseout event
addEvent(document, 'mouseout', function(evt) {
	if (evt.toElement == null && evt.relatedTarget == null) {
		annoyingModal.classList.add('show');
		annoyingModal_wrapper.classList.add('show');
	}
})

// close modal on button click
buttons.forEach(button => button.addEventListener('click', () => {
	annoyingModal.remove();
	annoyingModal_wrapper.remove();
}))

// close modal on background click
annoyingModal.addEventListener('click', () => {
	annoyingModal.remove();
	annoyingModal_wrapper.remove();
})

// peeking hipster
const hipster = document.querySelector('.hipster');
const hintHover = document.querySelector('.hint');
hintHover.addEventListener('mouseenter', () => {
	hipster.classList.add('show');
})
hintHover.addEventListener('mouseleave', () => {
	hipster.classList.remove('show');
})

// reload button
const reloadButton = document.querySelector('.reload-button');
reloadButton.addEventListener('click', () => {
	window.location.reload();
})