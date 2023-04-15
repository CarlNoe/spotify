import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store";
import "./PlaylistList.scss";

function PlaylistList() {
  const playlists = useSelector((state: RootState) => state.playlist);

  return (
    <ul className="PlaylistList">
      {playlists
        .filter((playlist) => !playlist.isLikedSongs)
        .map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
          </li>
        ))}
    </ul>
  );
}

export default PlaylistList;
