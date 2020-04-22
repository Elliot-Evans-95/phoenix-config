import './helpers/screen';
import './helpers/window';

import { hyper } from './helpers/config';
import { onKey } from './helpers/key';
import { titleModal } from './helpers/modal';
import {detectNamedAnchor, setEventHandler, setFrame} from './helpers/otherHelpers';

Phoenix.set({
	daemon: true,
	openAtLogin: true,
});

// onKey('=', hyper, () => {
// 	const win = Window.focused();
// 	if (!win) {
// 		return;
// 	}
// 	titleModal('CHANGE 2', 2, phoenixApp && phoenixApp.icon());
// 	win.setSize({width: 800, height: 800});
// });

let isSnapping = false;
let snappingFrame = {};

setEventHandler( 'mouseDidLeftDrag', () => {
	if ( isSnapping ) return;

	const window = Window.focused ();
	if ( !window ) return;

	isSnapping = true;
	snappingFrame = window.frame();

	setEventHandler( 'mouseDidLeftClick', ({ x: any, y: any }) => {
		isSnapping = false;

		const window = Window.focused ();
		if (!window) return;

		const frame = window.frame();
		if (frame.x === snappingFrame.x && frame.y === snappingFrame.y) return;
		if (frame.width !== snappingFrame.width || frame.height !== snappingFrame.height) return;

		const name = detectNamedAnchor (x, y);
		if (!name) return;
		setFrame(name);
	}, true );

});


new Key('f', ['ctrl', 'shift'], () => {
	const win = Window.focused();
	if(!win) return;
	win.setTopLeft({x: 0, y: 0});
	win.setSize({width: 1680, height: 1050});
});

const phoenixApp = App.get('Phoenix');

titleModal('Phoenix loaded!', 2, phoenixApp && phoenixApp.icon());
