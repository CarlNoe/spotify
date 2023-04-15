import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { initializeLikedSongsPlaylist } from "../../Playlist/playlistSlice";
import { RootState } from "../../../store";
import "./YourPlaylists.scss";
import PlaylistTile from "../../../common/PlaylistTile/PlaylistTile";

function YourPlaylists() {
  const playlists = useSelector((state: RootState) => state.playlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeLikedSongsPlaylist());
  }, [dispatch]);

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
            isLikedSongs={playlist.isLikedSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default YourPlaylists;
