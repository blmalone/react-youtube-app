import React, { Component } from  'react' // import react from node_modules folder and extract Component out. Syntactic sugar

class SearchBar extends Component {
	//This is called when the component is created and the super(props) called the constructor of React.Component
	//We are setting the state for this class based component.
	constructor(props) {
		super(props);

		//Adding state - taking input from search bar and updating 'term' value.
		this.state = {term: ''};
	}

	render () {
		//React specific onChange event, you can find more in the react docs
		//The input element is a controled component because it retrieves it's value from state. 
		return (
			<div className = "search-bar">
				<input 
				value = {this.state.term}
				onChange={event => this.onInputChange(event.target.value)} />
			</div>
		)
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}

//Each component is siloed to it's own JS file - if you want to use it elsewhere you need to explicitly export it
export default SearchBar;

	//This function can also be condensed with ES6 to - onChange = {event => console.log(event.target.value)}
	// onInputChange (event) {
	// 	console.log(event.target.value);
	// 	//State should always be set this way and not with = operator like the constructor :)
	// 	this.setState({term: event.target.value});
	// }

