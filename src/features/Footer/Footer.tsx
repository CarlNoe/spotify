import "./Footer.scss";
import CurrentSong from "./CurrentSong/CurrentSong";
import MediaPlayer from "./MediaPlayer/MediaPlayer";
import Options from "./Options/Options";

function Footer() {
  return (
    <footer className="Footer">
      <CurrentSong songName="Song Name" artistName="Artist Name" liked={true} />
      <MediaPlayer />
      <Options />
    </footer>
  );
}

export default Footer;
