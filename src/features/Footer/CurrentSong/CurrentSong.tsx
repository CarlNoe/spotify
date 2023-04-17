import heartGreen from "../../../assets/heartGreen.svg";
import heart from "../../../assets/heart.svg";
import "./CurrentSong.scss";

interface CurrentSongProps {
  songName: string;
  artistName: string;
  liked: boolean;
}

function CurrentSong(props: CurrentSongProps) {
  const { songName, artistName, liked } = props;

  return (
    <div className="CurrentSong">
      <div className="cover">{"Playlist Name"}</div>
      <div className="songInfo">
        <span className="songName">{songName}</span>
        <span className="artistName">{artistName}</span>
      </div>
      <img src={liked ? heartGreen : heart} alt="Like" />
    </div>
  );
}

export default CurrentSong;
