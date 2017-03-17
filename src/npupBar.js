import React from 'react';
import {NPupComponent} from './npupComponent';
import {NPupStyles} from './styles';
import {NPupDefaults} from './defaults';

/* React NPupComponent Component */
export class NPupBar extends React.Component {
	static queueLock = false;
	state = {
		messages: []
	};

	addMessage(newMessage) {
		NPupDefaults.addMessage(newMessage);
		this.setState({messages: Object.assign({}, NPupDefaults.messages)});
	}

	render() {
		let componentArray;
		if (NPupDefaults.messages) {
			componentArray = NPupDefaults.messages.map((message) => {
				return (
					<NPupComponent
						key={message.messageId}
						messageId={message.messageId}
						text={message.text}
						closeText={message.closeText}
						closeCallback={message.closeCallback}
						timeout={message.timeout}
						type={message.type}
						color={message.color} />
				);
			});
		}
		return (
			<div ref={(r) => this.mainDiv = r} className="npup" style={NPupStyles.containerStyle}>
				{componentArray}
			</div>
		);
	}
}
