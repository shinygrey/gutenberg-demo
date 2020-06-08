wp.blocks.registerBlockType('gutenberg-demo/demo5', {
	title: 'CodeUp Demo 5',
	category: 'common',
	icon: 'arrow-down-alt',

	attributes: {
		alignment: {
			type: 'string',
			default: 'none'
		},
		toggle1: {
			type: 'boolean',
		},
		mainText: {
			selector: '.rootdiv',
			source: 'children'
		},
	},

	edit: function(props) {
		const {Fragment} = wp.element;
		const {InspectorControls, BlockControls, AlignmentToolbar, RichText} = wp.blockEditor;
		const {PanelBody, PenelRow, FormToggle} = wp.components;

		return (<Fragment>

			<InspectorControls>
				<PanelBody>
					<FormToggle
						checked = { !!props.attributes.toggle1 }
						onChange = {(newValue) => {
							props.setAttributes(
								{ toggle1: !props.attributes.toggle1 }
							);
						}}
					/>
					<label> Demo Toggle</label>
				</PanelBody>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value ={ props.attributes.alignment }
					onChange = {(newAlignment) => {
						props.setAttributes(
							{ alignment: newAlignment === undefined ? 'none' : newAlignment }
						);
					}}
				/>
			</BlockControls>

			<div className='demo5-editor-root'>
				<p>
					<i>Static part of Demo 5 block in the editor</i>
				</p>
				<RichText
					onChange={ content => props.setAttributes({ mainText: content }) }
					value={ props.attributes.mainText }
					multiline="p"
					placeholder="Type text here"
					formattingControls={ ['bold', 'italic', 'underline'] }
					isSelected={ props.attributes.isSelected }
				/>
			</div>

		</Fragment>)
	},

	save: function(props) {

		return(
			<div
				style={{border: 'solid DarkSlateBlue 2px', textAlign: props.attributes.alignment, padding: '8px' }}
				className='jsx-in-save-component rootdiv'
				data-toggle= { props.attributes.toggle1 }
			>
				{ props.attributes.mainText }
			</div>
		)
	}
});
