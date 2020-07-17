/*
 * implementing withColors higher order component
 * https://github.com/WordPress/gutenberg/blob/master/packages/block-editor/src/components/colors/with-colors.js
 * 
 * todo - add attributes with wp.hooks.addFilter('blocks.registerBlockType' ...
 */

const { withColors, InspectorControls, PanelColorSettings, getColorClassName } = wp.blockEditor;
const { compose, withInstanceId } = wp.compose;
const { Fragment, useEffect } = wp.element;
const { ColorPicker, PanelBody, PanelRow } = wp.components;

var Demo6edit = withColors( {backgroundColour1: 'background-color' }, { textColour1: 'color' } )(
	function( props ) {
		useEffect(() => {});
		// Props added by withColors HOC.
		var backgroundColour1 = props.backgroundColour1;
		var setBackgroundColour1 = props.setBackgroundColour1;
		var textColour1 = props.textColour1;
		var setTextColour1 = props.setTextColour1;

		var paragraphClasses = (
			( backgroundColour1.class || '' ) + ' ' + ( textColour1.class || '' )
		).trim();
		return <Fragment>
			<p className={paragraphClasses}
				style= {{
					backgroundColor: backgroundColour1.value,
					color: textColour1.value,
				}}
			>'Hello from demo6 edit'</p>
			<InspectorControls>
				<PanelColorSettings
					title={'Colour Settings'}
					colorSettings={ [
						{
							value: backgroundColour1.value,
							onChange: setBackgroundColour1,
							label: 'The Background Colour',
						},
						{
							value: textColour1.value,
							onChange: setTextColour1,
							label: 'The Text Colour',
						},
					] }
				/>
				<PanelBody title="Unused - for reference" initialOpen={ false }>
					<ColorPicker
						color={ 'blue'}
						onChangeComplete={ (value) => {}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	}
);

wp.blocks.registerBlockType( 'gutenberg-demo/demo6', {
	title: 'CodeUp Demo 6',
	description: 'block showing use of withColors higher order component',
	icon: 'arrow-right-alt',
	category: 'common',
	attributes: {
		backgroundColour1: {type: 'string', default: 'white'},
		textColour1: {type: 'string', default: 'black'}
	},
	edit: Demo6edit,
	save: function( props ) {
		var attributes = props.attributes;

		var textClass = getColorClassName( 'color', attributes.textColour1 );
		var backgroundClass = getColorClassName( 'background-color', attributes.backgroundColour1 );

		var paragraphClasses = (
			( backgroundClass || '' ) + ' ' + ( textClass || '' )
		).trim();

		// style={backgroundColor: backgroundClass, color: textClass}
		return <p className={paragraphClasses}>'Hello from demo6 save'</p>
	}
});
