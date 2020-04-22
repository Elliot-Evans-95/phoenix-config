export function setEventHandler(event: any, handler: any, one = false ) {
	Event[one ? 'once' : 'on']( event, handler );
}

export function detectNamedAnchor (x: any, y: any) {
	const anchors = ['top-left', 'top-right', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'];

	for ( const anchor of anchors ) {
		if ( isAnchored ( x, y, anchor ) ) return anchor;
	}
}

export function setFrame (x: any, y, width: any, height: any, window = Window.focused () ) {

	if (_.isString (x) ) {
		setFrame(...getNamedFrame(x), y || window);
		setAnchor(...getNamedAnchor(x), y || window);

	} else {

		if ( !window ) return;

		const screen = window.screen (),
			frame = screen.flippedVisibleFrame ();

		window.setFrame ({
			x: frame.x + ( frame.width * x ),
			y: frame.y + ( frame.height * y ),
			width: frame.width * width,
			height: frame.height * height
		});

	}

}
