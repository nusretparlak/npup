# Information & Warning Popup for React.js.

## Installation

The recommended way to include this sdk into your project is by using npm. Install it into your project as a dependency with

```sh
$ npm install npup --save
```

## How to use

To include the modules in the browser context use a bundler tool like `Browserify` or `Webpack`.

## Import into your project

To include this project you need to require the module by using CommonJS syntax or ES6 Modules Syntax (recommended).


```js
// ES6
import NPupBar, { addMessage } from 'npup'
/* NPupBar is the default export.
   It represents the React Component that contains the NPupComponents.

   You can give the default export any name
   but in this example it will be referenced as NPupBar */

```

For best results, render the `NPupBar` component in the higher DOM node possible, such as:

```js
// react's app render function
render() {
	return (
		<div className='main'>
			<NPupBar />
			...
		</div>
	)
}

```

Then just call NPupBar with `addMessage(message)`

```js

addMessage('Info');

```

## Options

The npup function `addMessage()` supports `text`, `closeText`, `closeCallback`, `type`, `timeout` and `color` attributes in the following way.

`addMessage(text, closeText, closeCallback, type, timeout, color)`


`text`: required => is the content of the npup.


`closeText`: not required => is the content of the close button caption of npup.


`closeCallback`: not required => is the callback function when close button clicked from outside.
if closeText did not define, it does not return callback.


`type`: not required => consists of three variants:

- `success` to render a success popup.
- `warning` to render a warning popup.
- `error` to render an error popup.
- `custom` to render user defined colors for the popup.

`timeout` is the time (in milliseconds) the toast will remain on screen.
if it's not set, it will display for the default `5000ms` time.
You can also pass `-1` to cause the notification to display persistently.

`color` is for the `background` as well as the `text` of the notification. It accepts an object with the following properties

```js
let myColorStyle = { background: '#0E1717', text: "#FFFFFF" };
addMessage("sample information", "custom", 4000, myColorStyle);
```

## Settings

Settings of npup

### Defaults

```js
import {NPupDefaults} from 'npup/defaults';
```

call `NPupDefaults.setDurations(defaultTimeout, firstAnimationDuration, lastAnimationDuration)` to set npup times.

`defaultTimeout`: required => is the time of show on the screen.

`firstAnimationDuration`: required => is the time of starting animation.

`lastAnimationDuration`: required => is the time of closing animation.

### Styles

```js
import {NPupStyles} from 'npup/styles';
```

call `NPupStyles.changeBackgroundColorStyle(newStyle)` to set background colors.

`newStyle`: required => is the background colors array.
```js
NPupStyles.changeBackgroundColorStyle({
	default: '#000000',
	warning: '#000000',
	error: '#000000',
	success: '#000000'
});
```