import "./MediaPlayer.scss";
import raphael_shuffle from "../../../assets/ActionBar/MediaIcons/raphael_shuffle.svg";
import previous from "../../../assets/ActionBar/MediaIcons/previous.svg";
import play from "../../../assets/ActionBar/MediaIcons/play.svg";
import next from "../../../assets/ActionBar/MediaIcons/next.svg";
import repeat from "../../../assets/ActionBar/MediaIcons/repeat.svg";

function MediaPlayer() {
  return (
    <div className="MediaPlayer">
      <div className="controls">
        <img src={raphael_shuffle} alt="Shuffle" />
        <img className="previous" src={previous} alt="Previous" />
        <img className="playBtn" src={play} alt="Play" />
        <img className="next" src={next} alt="Next" />
        <img src={repeat} alt="Repeat" />
      </div>
      <div className="time">
        <span className="currentTime">0:00</span>
        <div className="timeBar" />
        <span className="totalTime">2:42</span>
      </div>
    </div>
  );
}

export default MediaPlayer;
