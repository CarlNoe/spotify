import { createSlice } from "@reduxjs/toolkit";
import { generateTop50Playlists } from "./homeSliceUtils";
import { Song } from "../Playlist/playlistSlice";
export interface Top50PlaylistType {
  id: string;
  name: string;
  songs: Song[];
  gradient: string;
  year: number;
}

const initialState: { top50Playlists: Top50PlaylistType[] } = {
  top50Playlists: generateTop50Playlists(),
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
