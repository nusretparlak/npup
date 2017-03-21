export class NPupDefaults {
	static npupUniqueId = 'npup-unique-id';
	static npupElementId = 'npup-element-';
	static firstAnimationName = 'npup-first-animation-name';
	static lastAnimationName = 'npup-last-animation-name';
	static _NPupBar;
	static messages = [];
	static firstAnimationDuration = 300; // ms
	static lastAnimationDuration = 500; // ms
	static defaultTimeout = 5000; // ms
	static elementId = 0;
	static closeCallback = null;

	static setDurations(defaultTimeout, firstAnimationDuration, lastAnimationDuration) {
		this.defaultTimeout = defaultTimeout;
		this.firstAnimationDuration = firstAnimationDuration;
		this.lastAnimationDuration = lastAnimationDuration;
	}
	static getNewElementId() {
		this.elementId += 1;
		return this.npupElementId + this.elementId;
	}
	static setNPupBar(__NPupBar) {
		this._NPupBar = __NPupBar;
	}
	static addMessage(newMessage) {
		this.messages.push(newMessage);
	}
	static removeMessage(messageId) {
		let deletedIndex = -1;
		for (let i = 0; i < this.messages.length; ++i) {
			if (this.messages[i].messageId === messageId) {
				deletedIndex = i;
				break;
			}
		}
		if (deletedIndex >= 0) {
			this.messages.splice(deletedIndex, 1);
			return true;
		}
		return false;
	}
	static clearMessages() {
		this.messages = [];
	}
	static isMessageExist(messageId) {
		let deletedIndex = -1;
		for (let i = 0; i < this.messages.length; ++i) {
			if (this.messages[i].messageId === messageId) {
				deletedIndex = i;
				break;
			}
		}
		if (deletedIndex >= 0) {
			return true;
		}
		return false;
	}
	static close(messageId) {
		if (this.removeMessage(messageId)) {
			this._NPupBar.refNPupBar.setState({messages: Object.assign({}, this.messages)});
		}
	}
	static reRenderNPupBar() {
		this._NPupBar.refNPupBar.setState({messages: Object.assign({}, this.messages)});
	}
}
