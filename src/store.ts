import { configureStore } from "@reduxjs/toolkit";
import playlistsReducer from "./features/Playlists/PlaylistSlice";
import homeReducer from "./features/Home/homeSlice";

export const store = configureStore({
  reducer: {
    playlists: playlistsReducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
