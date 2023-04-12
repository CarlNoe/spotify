import homeIcon from "../../assets/Sidebar/home.svg";
import spotifyLogo from "../../assets/Sidebar/spotify.svg";
import addIcon from "../../assets/Sidebar/add.svg";
import heartIcon from "../../assets/Sidebar/likesong.svg";
import SideNavButton from "./SideNavButton/SideNavButton";
import SideActionButton from "./SideActionButton/SideActionButton";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      <nav>
        <SideNavButton iconPath={homeIcon} text="Home" onClick={() => {}} />
      </nav>
      <div className="actions">
        <SideActionButton
          iconPath={addIcon}
          text="Create Playlist"
          onClick={() => {}}
        />
        <SideActionButton
          iconPath={heartIcon}
          text="Liked Songs"
          onClick={() => {}}
        />
      </div>
      <div className="playlists">
        <h3>Playlists</h3>
      </div>
    </div>
  );
}

export default Sidebar;
