import homeIcon from "../../assets/Sidebar/home.svg";
import spotifyLogo from "../../assets/Sidebar/spotify.svg";
import addIcon from "../../assets/Sidebar/add.svg";
import heartIcon from "../../assets/Sidebar/likesong.svg";
import SideNavButton from "./SideNavButton/SideNavButton";
import SideActionButton from "./SideActionButton/SideActionButton";
import "./Sidebar.scss";
import PlaylistList from "./PlaylistList/PlaylistList";

interface SidebarProps {
  onCreatePlaylistClick: () => void;
}

function Sidebar(props: SidebarProps) {
  const { onCreatePlaylistClick } = props;

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
          onClick={onCreatePlaylistClick}
        />
        <SideActionButton
          iconPath={heartIcon}
          text="Liked Songs"
          onClick={() => {}}
        />
      </div>
      <PlaylistList />
    </div>
  );
}

export default Sidebar;
