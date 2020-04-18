
var VideoListEntry = (props) => {

  // declare necessary variables tomodify a video list entry to fit given data
  const mediaTitle = props.video.snippet.title;
  const mediaDescription = props.video.snippet.description;
  const mediaImage = props.video.snippet.thumbnails.default.url;
  const mediaEtag = props.video.etag;

  // console.log(mediaTitle, 'media title');
  // console.log(mediaDescription, 'media description');
  // console.log(mediaImage, 'media image');

  return (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={mediaImage} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={() => props.handleTitleClick(mediaEtag)}>{mediaTitle}</div>
      <div className="video-list-entry-detail">{mediaDescription}</div>
    </div>
  </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
