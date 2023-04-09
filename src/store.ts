import { configureStore } from "@reduxjs/toolkit";
// import playlistsReducer, { Playlist } from "./Slices/playlistsSlice";

export interface State {
  //   playlists: Playlist[];
}

export default configureStore({
  reducer: {
    // playlists: playlistsReducer,
  },
});
