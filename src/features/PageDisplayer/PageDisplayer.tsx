import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Playlist from "../Playlist/Playlist";
import "./PageDisplayer.scss";

const PageDisplayer = () => {
  return (
    <div className="PageDisplayer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
      </Routes>
    </div>
  );
};

export default PageDisplayer;
