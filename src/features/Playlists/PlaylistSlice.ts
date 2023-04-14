import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: PlaylistType[] = [];

const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    createPlaylist(state, action: PayloadAction<string>) {
      const newPlaylist: PlaylistType = {
        id: "temporary",
        name: action.payload,
        songs: [],
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
