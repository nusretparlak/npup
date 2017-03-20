import React, {PropTypes} from 'react';
import {NPupStyles} from './styles';
import {NPupDefaults} from './defaults';

/* React NPupComponent Component */
export class NPupComponent extends React.Component {
	static propTypes = {
		messageId: PropTypes.string,
		text: PropTypes.string,
		closeText: PropTypes.string,
		closeCallback: PropTypes.func,
		timeout: PropTypes.number,
		type: PropTypes.string,
		color: PropTypes.object,
		style: PropTypes.oneOfType([
			PropTypes.object,
			PropTypes.bool
		])
	};
	static isUpdate = false;

	state = {
		contentContainerStyle: null
	};

	getStyles() {
		let styles = {};
		switch (this.props.type) {
			case 'success':
				const successStyle = {
					backgroundColor: NPupStyles.backgroundColor.success,
					color: NPupStyles.textColor.success
				};
				styles.contentContainerStyle = Object.assign({}, NPupStyles.contentContainerStyle, successStyle);
				break;
			case 'error':
				const errorStyle = {
					backgroundColor: NPupStyles.backgroundColor.error,
					color: NPupStyles.textColor.error
				};
				styles.contentContainerStyle = Object.assign({}, NPupStyles.contentContainerStyle, errorStyle);
				break;
			case 'warning':
				const warningStyle = {
					backgroundColor: NPupStyles.backgroundColor.warning,
					color: NPupStyles.textColor.warning
				};
				styles.contentContainerStyle = Object.assign({}, NPupStyles.contentContainerStyle, warningStyle);
				break;
			case 'custom':
				const customStyle = {
					backgroundColor: this.props.color.background
				};
				const customTextStyle = {
					color: this.props.color.text
				};
				styles.contentContainerStyle = Object.assign({}, NPupStyles.contentContainerStyle, customStyle);
				styles.contentTextStyle = Object.assign({}, NPupStyles.contentTextStyle, customTextStyle);
				break;
			default:
				styles.contentContainerStyle = Object.assign({}, NPupStyles.contentContainerStyle);
				break;
		}

		if (!styles.contentTextStyle) {
			styles.contentTextStyle = NPupStyles.contentTextStyle;
		}
		styles.contentButtonContainerStyle = NPupStyles.contentButtonContainerStyle;
		styles.contentButtonStyle = NPupStyles.contentButtonStyle;

		return styles;
	}

	getVisibleState(context) {
		if (this.props.closeText && this.props.timeout <= 0) {
			return;
		}
		let base = this.getStyles().contentContainerStyle;
		const messageId = this.props.messageId;
		setTimeout(function() {
			if (NPupDefaults.isMessageExist(messageId)) {
				context.updateStyle(base, NPupStyles.containerHideStyle);
				setTimeout(function() {
					if (NPupDefaults.isMessageExist(messageId)) {
						NPupDefaults.close(messageId);
					}
				}, NPupDefaults.lastAnimationDuration);
			}
		}, this.props.timeout);
	}

	updateStyle(base, update) {
		this.isUpdate = true;
		this.setState({contentContainerStyle: Object.assign({}, base, update)});
	}

	getBaseStyle() {
		this.isUpdate = true;
		this.setState({contentContainerStyle: this.getStyles().contentContainerStyle});
	}

	componentDidMount() {
		this.getBaseStyle();
		this.getVisibleState(this);
	}

	shouldComponentUpdate() {
		if (this.isUpdate) {
			this.isUpdate = false;
			return true;
		}
		return false;
	}

	closeNPup(context, messageId) {
		if (NPupDefaults.isMessageExist(messageId)) {
			let base = this.getStyles().contentContainerStyle;
			context.updateStyle(base, NPupStyles.containerHideStyle);
			setTimeout(function() {
				if (NPupDefaults.isMessageExist(messageId)) {
					NPupDefaults.close(messageId);
				}
			}, NPupDefaults.lastAnimationDuration);
		}
	}

	actionButton(context, messageId, closeCallback) {
		setTimeout(function() {
			closeCallback();
		}, 0);
		if (NPupDefaults.isMessageExist(messageId)) {
			let base = this.getStyles().contentContainerStyle;
			context.updateStyle(base, NPupStyles.containerHideStyle);
			setTimeout(function() {
				if (NPupDefaults.isMessageExist(messageId)) {
					NPupDefaults.close(messageId);
				}
			}, NPupDefaults.lastAnimationDuration);
		}
	}

	render() {
		let {closeText, closeCallback} = this.props;
		if (closeText) {
			if (closeCallback) {
				return this.renderWithActionButton();
			}
			return this.renderWithButton();
		}
		return this.renderWithoutButton();
	}

	renderWithActionButton() {
		let {messageId, text, closeText, closeCallback, type} = this.props;
		let styles = this.getStyles();
		return (
			<div ref={(r) => this.mainDiv2 = r} className="npup" style={this.state.contentContainerStyle}>
				<div className={type} style={styles.contentTextStyle}>{text}</div>
				<div className={type} style={styles.contentButtonContainerStyle}>
					<div className={type} style={styles.contentButtonStyle} onClick={this.actionButton.bind(this, this, messageId, closeCallback)}>{closeText}</div>
				</div>
			</div>
		);
	}

	renderWithButton() {
		let {messageId, text, closeText, type} = this.props;
		let styles = this.getStyles();
		return (
			<div ref={(r) => this.mainDiv2 = r} className="npup" style={this.state.contentContainerStyle}>
				<div className={type} style={styles.contentTextStyle}>{text}</div>
				<div className={type} style={styles.contentButtonContainerStyle}>
					<div className={type} style={styles.contentButtonStyle} onClick={this.closeNPup.bind(this, this, messageId)}>{closeText}</div>
				</div>
			</div>
		);
	}

	renderWithoutButton() {
		let {text, type} = this.props;
		let styles = this.getStyles();
		return (
			<div ref={(r) => this.mainDiv2 = r} className="npup" style={this.state.contentContainerStyle}>
				<div className={type} style={styles.contentTextStyle}>{text}</div>
			</div>
		);
	}
}
