import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlaylist } from "./features/Playlists/PlaylistSlice";
import Sidebar from "./features/Sidebar/Sidebar";
import InputPopup from "./common/InputPopup/InputPopup";
import Footer from "./features/Footer/Footer";
import PageDisplayer from "./features/PageDisplayer/PageDisplayer";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const handleCreatePlaylistClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCreatePlaylist = (playlistName: string) => {
    dispatch(createPlaylist(playlistName));
    setShowPopup(false);
  };

  return (
    <div>
      <Sidebar onCreatePlaylistClick={handleCreatePlaylistClick} />
      <Footer />
      {showPopup && (
        <InputPopup
          headerText="Create Playlist"
          buttonText="Create"
          onButtonClick={handleCreatePlaylist}
          onClose={handleClosePopup}
        />
      )}
      <PageDisplayer />
    </div>
  );
};

export default App;
