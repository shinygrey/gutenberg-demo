wp.blocks.registerBlockType('gutenberg-demo/demo4', {
	title: 'CodeUp Demo 4',
	category: 'common',
	icon: 'arrow-right-alt2',

	attributes: {
		foo: {
			source: 'attribute',
			type: 'string',
			attribute: 'alt',
			selector: '.rootdiv',
		},
		bar: {
			type: 'string',
			source: 'text',
			selector: '.rootdiv',
		},
		mainText: {
			selector: '.rootdiv',
			source: 'children'
		},
	},


/*
selector: '.rootdiv',
source: 'children'
type: 'array',
source: 'children',
selector: '.rootdiv'
*/

	edit: function(props) {

		return <div className='jsx-in-edit-component'>
			<p>
				<i>Static part of Demo 4 block in the editor</i>
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

		return <div style={{border: 'solid DarkSlateBlue 2px'}} className='jsx-in-save-component rootdiv'>{ props.attributes.mainText }</div>

	}
});
