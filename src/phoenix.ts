import './helpers/screen';
import './helpers/window';

import { hyper } from './helpers/config';
import { onKey } from './helpers/key';
import { titleModal } from './helpers/modal';

Phoenix.set({
	daemon: true,
	openAtLogin: true,
});

// onKey('§', hyper, () => {
// 	const win = Window.focused();
// 	if (!win) {
// 		return;
// 	}
// 	titleModal('CHANGE', 2, phoenixApp && phoenixApp.icon());
// 	win.setFullScreen(true);
// });
//
// onKey('=', hyper, () => {
// 	const win = Window.focused();
// 	if (!win) {
// 		return;
// 	}
// 	titleModal('CHANGE 2', 2, phoenixApp && phoenixApp.icon());
// 	win.setSize({width: 800, height: 800});
// });


new Key('f', ['ctrl', 'shift'], () => {
	const win = Window.focused();

	// @ts-ignore
	win.setTopLeft({x: 0, y: 0});
	// @ts-ignore
	win.setSize({width: 1680, height: 1050});
});

const phoenixApp = App.get('Phoenix');

titleModal('Phoenix loaded!', 2, phoenixApp && phoenixApp.icon());
