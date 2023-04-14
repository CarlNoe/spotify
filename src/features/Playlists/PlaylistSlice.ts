import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomGradient } from "../../utils/gradient";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  year: number;
  duration: number;
  popularity: number;
  favorite: boolean;
}

interface PlaylistType {
  id: string;
  name: string;
  songs: Song[];
  gradient: string;
}

const initialState: PlaylistType[] = [];

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    createPlaylist(state, action: PayloadAction<string>) {
      const newPlaylist: PlaylistType = {
        id: uuidv4(),
        name: action.payload,
        songs: [],
        gradient: generateRandomGradient(),
      };
      state.push(newPlaylist);
    },
    addSongToPlaylist(
      state,
      action: PayloadAction<{ playlistId: string; song: Song }>
    ) {
      const playlist = state.find(
        (playlist) => playlist.id === action.payload.playlistId
      );
      if (playlist) {
        playlist.songs.push(action.payload.song);
      }
    },
  },
});

export const { createPlaylist, addSongToPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
