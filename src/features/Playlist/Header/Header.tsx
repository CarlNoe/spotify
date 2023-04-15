import "./Header.scss";
import HeartIcon from "../../../assets/heartFilled.svg";

interface HeaderProps {
  playlist: {
    name: string;
    gradient: string;
  };
  isTop50: boolean;
  isLikedSongs: boolean;
}

function Header(props: HeaderProps) {
  const { playlist, isTop50, isLikedSongs } = props;
  return (
    <header style={{ background: playlist.gradient }} className="Header">
      <div className="bg-blur">
        <div
          className="playlistImage"
          style={{ background: playlist.gradient }}
        >
          {isTop50 && <span className="top50">{playlist.name}</span>}
          {isLikedSongs && <img src={HeartIcon} alt="heart" />}
        </div>
        <h1>{playlist.name}</h1>
      </div>
    </header>
  );
}

export default Header;
