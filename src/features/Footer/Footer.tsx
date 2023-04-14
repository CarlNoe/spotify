import "./Footer.scss"
import CurrentSong from "./CurrentSong/CurrentSong"

function Footer() {
  return (
    <footer className="Footer">
        <CurrentSong songName="Song Name" artistName="Artist Name" liked={true} />
    </footer>
  )
}

export default Footer