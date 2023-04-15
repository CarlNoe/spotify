import "./Top50.scss";
import PlaylistBox from "../../../common/PlaylistBox/PlaylistBox";

function Top50() {
  return (
    <div className="Top50">
      <h2>Top 50</h2>
      <div className="playlistList">
        <PlaylistBox
          playlistId="1"
          playlistName="Top 50"
          playlistGradient="linear-gradient(90deg, #FF0000 0%, #FF00FF 100%)"
          playlistYear="2021"
        />
        <PlaylistBox
          playlistId="2"
          playlistName="Top 50"
          playlistGradient="linear-gradient(90deg, #FF0000 0%, #FF00FF 100%)"
          playlistYear="2021"
        />
      </div>
    </div>
  );
}

export default Top50;
