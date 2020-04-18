var VideoPlayer = (props) => {
  // console.log('this is a video object?', props.video)
  // declare necessary variables to modify a video list entry to fit given data
  const mediaTitle = props.video.snippet.title;
  const mediaDescription = props.video.snippet.description;
  const mediaVideoID = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={mediaVideoID} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{mediaTitle}</h3>
      <div>{mediaDescription}</div>
    </div>
  </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;
