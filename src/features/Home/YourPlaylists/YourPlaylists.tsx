import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import "./YourPlaylists.scss";
import PlaylistTile from "../../../common/PlaylistTile/PlaylistTile";

function YourPlaylists() {
  const playlists = useSelector((state: RootState) => state.playlists);

  return (
    <div className="YourPlaylists">
      <h2>Your Playlists</h2>
      <div className="playlistList">
        {playlists.map((playlist) => (
          <PlaylistTile
            key={playlist.id}
            playlistId={playlist.id}
            playlistName={playlist.name}
            playlistGradient={playlist.gradient}
          />
        ))}
      </div>
    </div>
  );
}

export default YourPlaylists;
