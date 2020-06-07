//This is a terrible thing to do.  Do not do this.
wp.blocks.registerBlockType('gutenberg-demo/demo2', {
	title: 'CodeUp Demo 2',
	category: 'common',
	icon: 'arrow-up-alt',
	edit: class extends wp.element.Component {

		componentDidMount() {console.log("demo2 EDIT componentDidMount() called");}
		componentDidUpdate() {console.log("demo2 EDIT componentDidUpdate() called");}
		componentWillUnmount() {console.log("demo2 EDIT componentWillUnmount() called");}

		render() {
			console.log('demo2 EDIT render called');
			return <div className="jsx-in-edit-component">"Hello WordPress Editor from Class based component!"</div>
		}
	},
	save: class extends wp.element.Component {

		componentDidMount() {console.log("demo2 SAVE componentDidMount() called");}
		componentDidUpdate() {console.log("demo2 SAVE componentDidUpdate() called");}
		componentWillUnmount() {console.log("demo2 SAVE componentWillUnmount() called");}

		render() {
			console.log('demo2 SAVE render called');
			return <div className="jsx-in-save-component">"Hello WordPress Website from Class based component!"</div>
		}
	}
});
