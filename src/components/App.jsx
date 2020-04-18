// import video list for use in app
import VideoList from './VideoList.js';
import exampleVideoData from './../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from './../lib/searchYouTube.js';
import YOUTUBE_API_KEY from './../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      // remaining videos minus current video
      currentVideoList: exampleVideoData.filter(video => video !== exampleVideoData[0]),
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.callBackVideos = this.callBackVideos.bind(this);
  }

  handleTitleClick(myEtag) {
    this.setState({
      currentVideo: this.state.videos.filter(video => video.etag === myEtag)[0],
    });
    this.setState({
      currentVideoList: this.state.videos.filter(video => video.etag !== myEtag),
    });
  }

  handleSearchSubmit(searchValue){
    const searchOptions = {
      key: YOUTUBE_API_KEY,
      query: searchValue,
      max: 5,
    };
    searchYouTube(searchOptions, this.callBackVideos);
  }

  callBackVideos(array){
    this.setState({
      videos: array,
    })
    console.log(this.state.videos);
    this.setState({
      currentVideo: this.state.videos[0],
    });
    this.setState({
      currentVideoList: this.state.videos.filter(video => video !== this.state.videos[0]),
    });
  }

/*
  handleSearchSubmit (search.value) {
  const options = { key = API, max = 5, query = 'value'};
  searchYoutube(options, callback = () => {})
  this.setState({
    currentVideo = data.items[0]
  })
  this.setState({
    currentVideoList = data.items without [0]
  })
  }
 */
  render() {
    return (
      <div>
        <div><h2>Recast.ly!</h2></div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search handleSearchSubmit={this.handleSearchSubmit}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.currentVideo} /> </h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.state.currentVideoList} handleTitleClick={this.handleTitleClick}/></h5></div>
          </div>
        </div>
      </div>
    )
  }
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
