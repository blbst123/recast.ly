import YOUTUBE_API_KEY from '../config/youtube.js';
import exampleVideoData from '../data/exampleVideoData.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?q=hello&part=snippet&maxResults=5&key=${YOUTUBE_API_KEY}`,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log(data);
    },
    error: errorCB || function (error) {
      console.error('recastly: Failed to fetch messages', error);
    }
  });
};

// searchYouTube();

export default searchYouTube;


//https://stackoverflow.com/questions/22613903/youtube-api-v3-get-list-of-users-videos
//https://stackoverflow.com/questions/34914554/youtubedata-api-v3-error-400-required-parameter-part
//https://www.googleapis.com/youtube/v3/search?q=hello&part=snippet&maxResults=5&key=AIzaSyDxGAzvejvpfmV2gAL049uX5qzPyMQZ9Fg