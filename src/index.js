import React from 'react';
import {NPupBar} from './npupBar';
import {NPupStyles} from './styles';
import {NPupDefaults} from './defaults';
import {NPupAnimations} from './animations';

/* Export addMessage function */
export function addMessage(text, closeText = '', closeCallback = null, type = '', timeout = NPupDefaults.defaultTimeout, color = NPupStyles.textColor.default) {
	let newMessageId = NPupDefaults.getNewElementId();
	NPupDefaults._NPupBar.refNPupBar.addMessage({messageId: newMessageId, text, closeText, closeCallback, type, timeout, color});
}

/* Export clearMessages function */
export function clearMessages() {
	NPupDefaults._NPupBar.refNPupBar.clearMessages();
}

/* Export container */
export default class NPupBars extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		if (!NPupDefaults._NPupBar) {
			NPupDefaults.setNPupBar(this);
		}
		NPupAnimations.setAnimation();
		return (
			<NPupBar key={NPupDefaults.npupUniqueId} id={NPupDefaults.npupUniqueId} ref={(r) => this.refNPupBar = r} />
		);
	}
}

/* Export ChangeStyles function */
export function changeContainerStyle(newStyle) {
	NPupStyles.changeContainerStyle(newStyle);
}

export function changeContentContainerStyle(newStyle) {
	NPupStyles.changeContentContainerStyle(newStyle);
}

export function reRender() {
	NPupDefaults.reRenderNPupBar();
}
