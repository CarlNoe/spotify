import "./PlaylistTile.scss";
import { Link } from "react-router-dom";

interface PlaylistTileProps {
  playlistId: string;
  playlistName: string;
  playlistGradient: string;
}

function PlaylistTile(props: PlaylistTileProps) {
  const { playlistId } = props;
  return (
    <Link to={`/playlist/${playlistId}`}>
      <div className="PlaylistTile">
        <div
          className="playlistImage"
          style={{ background: props.playlistGradient }}
        />
        <span>{props.playlistName}</span>
      </div>
    </Link>
  );
}

export default PlaylistTile;
