import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./PageDisplayer.scss";

const PageDisplayer = () => {
  return (
    <div className="PageDisplayer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistId" element={<div>Playlist</div>} />
        <Route path="/liked" element={<div>Liked Songs</div>} />
      </Routes>
    </div>
  );
};

export default PageDisplayer;
