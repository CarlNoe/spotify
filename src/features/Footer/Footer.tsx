import "./Footer.scss";
import CurrentSong from "./CurrentSong/CurrentSong";
import MediaPlayer from "./MediaPlayer/MediaPlayer";

function Footer() {
  return (
    <footer className="Footer">
      <CurrentSong songName="Song Name" artistName="Artist Name" liked={true} />
      <MediaPlayer />
    </footer>
  );
}

export default Footer;
