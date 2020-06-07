wp.blocks.registerBlockType('gutenberg-demo/demo1', {
	title: 'CodeUp Demo 1',
	category: 'common',
	icon: 'admin-tools',
	edit: function() {
			return <div className="jsx-in-edit-component">"Hello WordPress Editor!"</div>
	},
	save: function() {
			return <div className="jsx-in-save-component">"Hello WordPress Website!"</div>
	}
});

// Actually ... this is the minimum ..
// Must have title, category and a save function returning at least 1 element.
//If only save component is present it will be used for both save and edit
wp.blocks.registerBlockType('gutenberg-demo/demo0', {
	title: 'CodeUp Demo 0',
	category: 'common',
	save: function() {return <wp.element.Fragment></wp.element.Fragment>}
});
