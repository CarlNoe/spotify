import { createSlice } from "@reduxjs/toolkit";
import { generateTop50Playlists } from "./homeSliceUtils";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  duration: number;
  popularity: number;
}

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
