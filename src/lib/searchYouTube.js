
import exampleVideoData from '../data/exampleVideoData.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search`,
    data: options,
    type: 'GET',
    contentType: 'application/json',
    success: callback,
    error: function (error) {
      console.error('recastly: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;


//https://stackoverflow.com/questions/22613903/youtube-api-v3-get-list-of-users-videos
//https://stackoverflow.com/questions/34914554/youtubedata-api-v3-error-400-required-parameter-part
//https://www.googleapis.com/youtube/v3/search?q=hello&part=snippet&maxResults=5&key=AIzaSyDxGAzvejvpfmV2gAL049uX5qzPyMQZ9Fg



// {
//   key: options.YOUTUBE_API_KEY,
//   maxResults5,
//   part: 'snippet',
//   q: options,
//   fields: 'items(snippet(title,description,thumbnails(default(url))),id(videoId))'
// },