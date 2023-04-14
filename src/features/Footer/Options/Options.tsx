import "./Options.scss";
import mic from "../../../assets/ActionBar/mic.svg";
import queue from "../../../assets/ActionBar/queue.svg";
import platform from "../../../assets/ActionBar/platform.svg";
import speaker from "../../../assets/ActionBar/speaker.svg";
import expand from "../../../assets/ActionBar/expand.svg";

function Options() {
  return (
    <div className="Options">
      <img className="mic" src={mic} alt="Mic" />
      <img className="queue" src={queue} alt="Queue" />
      <img className="platform" src={platform} alt="Platform" />
      <img className="speaker" src={speaker} alt="Speaker" />
      <div className="volumeBar" />
      <img className="expand" src={expand} alt="Expand" />
    </div>
  );
}

export default Options;
