import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData : exampleVideoData,
      currentVideo : 0
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(index) {
    this.setState({
      currentVideo: index
    });
  }

  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
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
