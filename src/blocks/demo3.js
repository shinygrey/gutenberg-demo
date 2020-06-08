//So what do we do with all this?
//source: 'text' to extract the inner text from markup

wp.blocks.registerBlockType('gutenberg-demo/demo3', {
	title: 'CodeUp Demo 3',
	category: 'common',
	icon: 'arrow-left-alt2',

	attributes: {
		//deliberately broken to show need for selector and source
		mainText: {},
	},

	edit: function(props) {

		console.log('demo3 EDIT render called');

		return <div className='jsx-in-edit-component'>
			<p>
				<i>Static part of the block in the editor</i>
			</p>
			<wp.blockEditor.RichText
			  onChange={ content => props.setAttributes({ mainText: content }) }
			  value={ props.attributes.mainText }
			  multiline="p"
			  placeholder="Type text here"
			  formattingControls={ ['bold', 'italic', 'underline'] }
			  isSelected={ props.attributes.isSelected }
			/>
		</div>

	},

	save: function(props) {

		return <div style={{border: 'solid DarkOrange 2px'}} className='jsx-in-save-component rootdiv'>{ props.attributes.mainText }</div>

	}
});

