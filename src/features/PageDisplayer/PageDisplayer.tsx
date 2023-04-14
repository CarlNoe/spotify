import { Route, Routes } from "react-router-dom";
import "./PageDisplayer.scss";

const PageDisplayer = () => {
  return (
    <div className="PageDisplayer">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/playlist/:playlistId" element={<div>Playlist</div>} />
        <Route path="/liked" element={<div>Liked Songs</div>} />
      </Routes>
    </div>
  );
};

export default PageDisplayer;
