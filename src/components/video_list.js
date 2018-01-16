import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		//The key is necessary so that React can update records in a speedy fashion.
		return (
			<VideoListItem 
				onVideoSelect = {props.onVideoSelect}
				key = {video.etag}
				video = {video} />
		);
	})
	//React is very intelligent about rendering arrays of items. i.e. will render all li from videoItems
	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;
