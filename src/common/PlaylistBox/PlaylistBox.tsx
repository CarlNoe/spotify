import "./PlaylistBox.scss";
import { Link } from "react-router-dom";

interface PlaylistBoxProps {
  playlistId: string;
  playlistName: string;
  playlistGradient: string;
  playlistYear: string;
}

function PlaylistBox(props: PlaylistBoxProps) {
  const { playlistId, playlistName, playlistGradient, playlistYear } = props;

  return (
    <Link to={`/playlist/${playlistId}`}>
      <div className="PlaylistBox">
        <div className="playlistImage" style={{ background: playlistGradient }}>
          <span>{playlistName}</span>
          <span>{playlistYear}</span>
        </div>
        <span className="name">{playlistName}</span>
        <span className="year">{playlistYear}</span>
      </div>
    </Link>
  );
}

export default PlaylistBox;
