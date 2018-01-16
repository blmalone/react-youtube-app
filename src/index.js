import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
//import reducers from './reducers';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBbUv6ZJ2Xu6q0lVsx3CYTuPgAEuXCG21o';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('bitcoin')
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render () {
		//Here we are throttling our video search requests
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		//passing data like this is referred to as passing props
		//We are using a callback technique with VideoList
		return (
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList 
					onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
					videos = {this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
//   </Provider>
//   , document.querySelector('.container'));
