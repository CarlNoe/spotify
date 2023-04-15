import homeIcon from "../../assets/Sidebar/home.svg";
import spotifyLogo from "../../assets/Sidebar/spotify.svg";
import addIcon from "../../assets/Sidebar/add.svg";
import heartIcon from "../../assets/Sidebar/likesong.svg";
import SideNavButton from "./SideNavButton/SideNavButton";
import SideActionButton from "./SideActionButton/SideActionButton";
import "./Sidebar.scss";
import PlaylistList from "./PlaylistList/PlaylistList";
import { Link } from "react-router-dom";

interface SidebarProps {
  onCreatePlaylistClick: () => void;
}

function Sidebar(props: SidebarProps) {
  const { onCreatePlaylistClick } = props;

  return (
    <div className="Sidebar">
      <Link to="/" className="logo-container">
        <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
      </Link>
      <nav>
        <SideNavButton iconPath={homeIcon} text="Home" to="/" />
      </nav>
      <div className="actions">
        <SideActionButton
          iconPath={addIcon}
          text="Create Playlist"
          onClick={onCreatePlaylistClick}
        />
        <SideActionButton
          iconPath={heartIcon}
          text="Liked Songs"
          to="/playlist/liked-songs"
        />
      </div>
      <PlaylistList />
    </div>
  );
}

export default Sidebar;
