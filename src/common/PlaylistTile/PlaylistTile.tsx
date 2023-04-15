import "./PlaylistTile.scss";
import { Link } from "react-router-dom";
import HeartIcon from "../../assets/heartFilled.svg";

interface PlaylistTileProps {
  playlistId: string;
  playlistName: string;
  playlistGradient: string;
  isLikedSongs?: boolean;
}

function PlaylistTile(props: PlaylistTileProps) {
  const { playlistId, playlistName, playlistGradient, isLikedSongs } = props;

  return (
    <Link to={`/playlist/${playlistId}`}>
      <div className="PlaylistTile">
        <div className="playlistImage" style={{ background: playlistGradient }}>
          {isLikedSongs && <img src={HeartIcon} alt="heart" />}
        </div>
        <span>{playlistName}</span>
      </div>
    </Link>
  );
}

export default PlaylistTile;
