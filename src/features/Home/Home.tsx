import "./Home.scss";
import YourPlaylists from "./YourPlaylists/YourPlaylists";
import Top50 from "./Top50/Top50";

function Home() {
  return (
    <div className="Home">
      <YourPlaylists />
      <Top50 />
    </div>
  );
}

export default Home;
