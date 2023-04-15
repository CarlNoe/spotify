import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import "./Playlist.scss";
import Header from "./Header/Header";
import SongList from "./SongList/SongList";

function Playlist() {
  const { playlistId } = useParams<{ playlistId: string }>();
  const yourPlaylist = useSelector((state: RootState) =>
    state.playlist.find((pl) => pl.id === playlistId)
  );
  const top50Playlist = useSelector((state: RootState) =>
    state.home.top50Playlists.find((pl) => pl.id === playlistId)
  );

  const playlist = yourPlaylist || top50Playlist;

  if (!playlist) {
    return <div className="Playlist">Playlist not found</div>;
  }

  const isTop50 = top50Playlist !== undefined;
  const isLikedSongs =
    yourPlaylist && yourPlaylist.id === "liked-songs" ? true : false;

  return (
    <div className="Playlist">
      <Header
        playlist={playlist}
        isTop50={isTop50}
        isLikedSongs={isLikedSongs}
      />
      <SongList songs={playlist.songs} />
    </div>
  );
}

export default Playlist;
