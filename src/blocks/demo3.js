//So what do we do with all this?
//source: 'text' to extract the inner text from markup

wp.blocks.registerBlockType('gutenberg-demo/demo3', {
	title: 'CodeUp Demo 3',
	category: 'common',
	icon: 'arrow-left-alt2',

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
/* show what happens when type and source removed 
Without selector, the block can't reconstruct itself from the saved html
*/
		mainText: {
			selector: '.rootdiv',
			source: 'children'
		},
	},

/*
type: 'array',
source: 'children',
selector: '.rootdiv'
*/

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

		return <div className='jsx-in-save-component rootdiv'>{ props.attributes.mainText }</div>

	}
});

