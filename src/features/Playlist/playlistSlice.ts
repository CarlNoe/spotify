import { v4 as uuidv4 } from "uuid";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomGradient } from "../../utils/gradient";

export interface Song {
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
  isLikedSongs?: boolean;
}

const initialState: PlaylistType[] = [];

const playlistSlice = createSlice({
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

    initializeLikedSongsPlaylist(state) {
      if (!state.some((playlist) => playlist.isLikedSongs)) {
        state.push({
          id: "liked-songs",
          name: "Liked Songs",
          songs: [],
          gradient:
            "linear-gradient(135deg, #4000F4 0%, #603AED 22.48%, #7C6EE6 46.93%, #979FE1 65.71%, #A2B3DE 77.68%, #ADC8DC 88.93%, #C0ECD7 100%)",
          isLikedSongs: true,
        });
      }
    },
  },
});

export const {
  createPlaylist,
  addSongToPlaylist,
  initializeLikedSongsPlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;
