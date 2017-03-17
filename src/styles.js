import {NPupDefaults} from './defaults';

export class NPupStyles {
	static backgroundColor = {
		default: '#000000',
		warning: '#000000',
		error: '#000000',
		success: '#000000'
	};
	static textColor = {
		default: '#FFFFFF',
		warning: '#FFFFFF',
		error: '#FFFFFF',
		success: '#FFFFFF'
	};
	static buttonColor = {
		default: '#FFCC00',
		warning: '#FFCC00',
		error: '#FFCC00',
		success: '#FFCC00'
	};
	static containerStyle = {
		position: 'fixed',
		width: '50%',
		margin: '0px 0px 24px 24px',
		right: '0px',
		bottom: '0px',
		left: '0px',
		textAlign: 'center',
		zIndex: '999999',
		pointerEvents: 'none'
	};
	static contentContainerStyle = {
		cursor: 'default',
		display: 'table',
		minWidth: '320px',
		maxWidth: '512px',
		borderRadius: '3px',
		backgroundColor: NPupStyles.backgroundColor.default,
		color: NPupStyles.textColor.default,
		padding: '2px 16px 2px 24px',
		margin: '5px 0px 0px 0px',
		pointerEvents: 'all',
		transition: 'all ' + NPupDefaults.firstAnimationDuration + 'ms ease',
		// Vendor Prefixes
		msTransition: 'all ' + NPupDefaults.firstAnimationDuration + 'ms ease',
		WebkitTransition: 'all ' + NPupDefaults.firstAnimationDuration + 'ms ease',
		OTransition: 'all ' + NPupDefaults.firstAnimationDuration + 'ms ease',
		MozTransition: 'all ' + NPupDefaults.firstAnimationDuration + 'ms ease',
		animationName: NPupDefaults.firstAnimationName,
		animationTimingFunction: 'ease-in-out',
		animationDuration: NPupDefaults.firstAnimationDuration + 'ms',
		animationDelay: '0.0s',
		animationIterationCount: 1,
		animationDirection: 'normal',
		animationFillMode: 'forwards'
	};
	static contentTextStyle = {
		cursor: 'text',
		float: 'left',
		padding: '14px 0px 14px 0px',
		margin: '0px',
		textAlign: '-webkit-left',
		fontSize: '13px',
		color: NPupStyles.textColor.default
	};
	static contentButtonContainerStyle = {
		cursor: 'pointer',
		float: 'right',
		display: 'table',
		height: '36px',
		margin: '3.5px 0px',
		padding: '0px 6px'
	};
	static contentButtonStyle = {
		display: 'table-cell',
		verticalAlign: 'middle',
		fontSize: '14px',
		fontWeight: '500',
		color: NPupStyles.buttonColor.default
	};
	static containerHideStyle = {
		animationName: NPupDefaults.lastAnimationName,
		animationTimingFunction: 'ease-in-out',
		animationDuration: NPupDefaults.lastAnimationDuration + 'ms',
		animationDelay: '0.0s',
		animationIterationCount: 1,
		animationDirection: 'normal',
		animationFillMode: 'forwards'
	};

	static changeBackgroundColorStyle(newStyle) {
		this.backgroundColor = Object.assign({}, this.backgroundColor, newStyle);
	}

	static changeTextColorStyle(newStyle) {
		this.textColor = Object.assign({}, this.textColor, newStyle);
	}

	static changeButtonColorStyle(newStyle) {
		this.buttonColor = Object.assign({}, this.buttonColor, newStyle);
	}

	static changeContainerStyle(newStyle) {
		this.containerStyle = Object.assign({}, this.containerStyle, newStyle);
	}

	static changeContentContainerStyle(newStyle) {
		this.contentContainerStyle = Object.assign({}, this.contentContainerStyle, newStyle);
	}

	static changeContentTextStyle(newStyle) {
		this.contentTextStyle = Object.assign({}, this.contentTextStyle, newStyle);
	}

	static changeContentButtonContainerStyle(newStyle) {
		this.contentButtonContainerStyle = Object.assign({}, this.contentButtonContainerStyle, newStyle);
	}

	static changeContentButtonStyle(newStyle) {
		this.contentButtonStyle = Object.assign({}, this.contentButtonStyle, newStyle);
	}

	static changeContainerHideStyle(newStyle) {
		this.containerHideStyle = Object.assign({}, this.containerHideStyle, newStyle);
	}
}
