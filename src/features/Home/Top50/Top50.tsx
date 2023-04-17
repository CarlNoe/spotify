import "./Top50.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import PlaylistBox from "../../../common/PlaylistBox/PlaylistBox";

function Top50() {
  const top50Playlists = useSelector(
    (state: RootState) => state.home.top50Playlists
  );

  return (
    <div className="Top50">
      <h2>Top 50</h2>
      <div className="playlistList">
        {top50Playlists.map((playlist) => (
          <PlaylistBox
            key={playlist.id}
            playlistId={playlist.id}
            playlistName={playlist.name}
            playlistGradient={playlist.gradient}
            playlistYear={playlist.year.toString()}
          />
        ))}
      </div>
    </div>
  );
}

export default Top50;
