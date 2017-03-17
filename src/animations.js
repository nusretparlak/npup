import {NPupDefaults} from './defaults';

export class NPupAnimations {
	static setAnimation() {
		let styleSheet = document.styleSheets;
		let keyframes;
		if (styleSheet[0]) {
			keyframes =
			`@keyframes ${NPupDefaults.lastAnimationName} {
				0% { opacity:1; }
				100% { opacity:0; }
			}`;
			// 99% { opacity:1; display: block; }
			styleSheet[0].insertRule(keyframes, styleSheet[0].cssRules.length);
		}
		if (styleSheet[1]) {
			keyframes =
			`@-webkit-keyframes ${NPupDefaults.lastAnimationName} {
				0% { opacity:1; }
				100% { opacity:0; }
			}`;
			styleSheet[1].insertRule(keyframes, styleSheet[1].cssRules.length);
		}
		if (styleSheet[2]) {
			keyframes =
			`@keyframes ${NPupDefaults.firstAnimationName} {
				0% { opacity:0; }
				100% { opacity:1; }
			}`;
			styleSheet[2].insertRule(keyframes, styleSheet[2].cssRules.length);
		}
		if (styleSheet[3]) {
			keyframes =
			`@-webkit-keyframes ${NPupDefaults.firstAnimationName} {
				0% { opacity:0; }
				100% { opacity:1; }
			}`;
			styleSheet[3].insertRule(keyframes, styleSheet[3].cssRules.length);
		}
		// if (styleSheet[1]) {
		// 	keyframes =
		// 	`@-ms-keyframes ${NPupDefaults.lastAnimationName} {
		// 		0% { opacity:1; }
		// 		100% { opacity:0; }
		// 	}`;
		// 	styleSheet[1].insertRule(keyframes, styleSheet[1].cssRules.length);
		// }
		// if (styleSheet[3]) {
		// 	keyframes =
		// 	`@-o-keyframes ${NPupDefaults.lastAnimationName} {
		// 		0% { opacity:1; }
		// 		100% { opacity:0; }
		// 	}`;
		// 	styleSheet[3].insertRule(keyframes, styleSheet[3].cssRules.length);
		// }
		// if (styleSheet[4]) {
		// 	keyframes =
		// 	`@-moz-keyframes ${NPupDefaults.lastAnimationName} {
		// 		0% { opacity:1; }
		// 		100% { opacity:0; }
		// 	}`;
		// 	styleSheet[4].insertRule(keyframes, styleSheet[4].cssRules.length);
		// }
	}
}
