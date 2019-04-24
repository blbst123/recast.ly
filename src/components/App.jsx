import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoInfo from './VideoInfo.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: exampleVideoData,
      currentVideo: 0,
      searchTerm: ''
    };
    this.changeVideo = this.changeVideo.bind(this);
    this.callYouTube = this.callYouTube.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  changeVideo(index) {
    this.setState({
      currentVideo: index
    });
  }

  callYouTube() {
    var options = {
      part: 'snippet,statistics',
      q: this.state.searchTerm,
      maxResults: 10,
      key: YOUTUBE_API_KEY,
      fields: 'items(snippet(title,description,thumbnails(default(url))),id(videoId),statistics)'
    };
    searchYouTube(options, (data) => {
      this.setState({
        videoData: data.items
      });
      console.log(data.items);
    });
  }

  updateSearchTerm(input) {
    this.setState({
      searchTerm: input
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <img className="logo" src="https://cdn.shopify.com/s/files/1/0252/7365/files/red-whale-logo_RGB_grande.png?5596" alt=""/>
        <div className="col-md-6 offset-md-3">
          <Search callYouTube={this.callYouTube} updateSearchTerm={this.updateSearchTerm} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoData[this.state.currentVideo]} />
        </div>
        <div className="col-md-5">
          <VideoList changeVideo={this.changeVideo} videos={this.state.videoData} />
        </div>
      </div>
    </div>);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById('app'));
export default App;
