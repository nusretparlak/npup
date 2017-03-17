import React from 'react';
import {NPupBar} from './npupBar';
import {NPupStyles} from './styles';
import {NPupDefaults} from './defaults';
import {NPupAnimations} from './animations';

/* Export function */
export function addMessage(text, closeText = '', closeCallback = null, type = '', timeout = NPupDefaults.defaultTimeout, color = NPupStyles.textColor.default) {
	let newMessageId = NPupDefaults.getNewElementId();
	NPupDefaults._NPupBar.refNPupBar.addMessage({messageId: newMessageId, text, closeText, closeCallback, type, timeout, color});
}

/* Export container */
export default class extends React.Component {
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
