enum Orientation {
	NorthWest,
	NorthEast,
	SouthWest,
	SouthEast,
}

export {titleModal, originOnScreen, applyMargin, Orientation};

function titleModal(text: string, duration: number = 1, icon?: Phoenix.Icon) {
	const m = new Modal();
	m.text = text;
	m.duration = duration;
	if (icon) {
		m.icon = icon;
	}
	m.showTitleOn(Screen.main());
}

Modal.prototype.showTitleOn = function _showTitleOn(screen: Screen) {
	showAt(this, screen, 2, 1 + 1 / 3);
};

Modal.prototype.showCenterOn = function _showCenterOn(screen: Screen) {
	showAt(this, screen, 2, 2);
};

function showAt(
	modal: Modal,
	screen: Screen,
	widthDiv: number,
	heightDiv: number,
) {
	const {height, width} = modal.frame();
	const sf = screen.flippedVisibleFrame();
	modal.origin = {
		x: sf.x + (sf.width - width) / widthDiv,
		y: sf.y + (sf.height - height) / heightDiv,
	};
	modal.show();
}

function originOnScreen(
	modal: Modal,
	screen: Screen,
	orientation: Orientation,
): Point {
	const {width: mWidth} = modal.frame();
	let {width, height, x, y} = screen.flippedVisibleFrame();
	const {height: fHeight} = screen.flippedFrame();

	if (orientation === Orientation.SouthEast) {
		x = x + width - mWidth;
		y = fHeight - height - y;
	} else if (orientation === Orientation.SouthWest) {
		x = 0;
		y = fHeight - height - y;
	}

	return {x, y};
}

function applyMargin({x, y}: Point, xmargin: number, ymargin: number) {
	x -= xmargin;
	y += ymargin;
	return {x, y};
}
