import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  addSongToPlaylist,
  Song,
  addSongToLikedSongs,
  removeSongFromLikedSongs,
  toggleFavorite,
} from "../playlistSlice";
import "./SongList.scss";
import ContextMenu from "../../../common/ContextMenu/ContextMenu";
import TableRow from "./TableRow/TableRow";
import { useContextMenu } from "./useContextMenu";

interface SongListProps {
  songs: Song[];
  likedSongs?: Song[];
}

function SongList(props: SongListProps) {
  const { songs } = props;
  const likedSongs =
    useSelector(
      (state: RootState) =>
        state.playlist.find((playlist) => playlist.isLikedSongs)?.songs
    ) || [];

  const dispatch = useDispatch();
  const playlists = useSelector((state: RootState) => state.playlist);

  const { contextMenu, handleContextMenu, closeContextMenu } = useContextMenu();

  const handleClick = (playlistId: string) => {
    if (contextMenu.song) {
      dispatch(addSongToPlaylist({ playlistId, song: contextMenu.song }));
    }
    closeContextMenu();
  };

  const handleHeartClick = (song: Song) => {
    const isLiked = likedSongs.some((likedSong) => likedSong.id === song.id);

    if (isLiked) {
      dispatch(removeSongFromLikedSongs(song.id));
    } else {
      dispatch(addSongToLikedSongs(song));
    }
    dispatch(toggleFavorite(song.id));
  };

  return (
    <div className="SongList">
      <ContextMenu
        x={contextMenu.x}
        y={contextMenu.y}
        song={contextMenu.song}
        playlists={playlists}
        handleClick={handleClick}
      />
      <div className="tableWrapper">
        <table>
          <thead>
            <tr>
              <th className="indexTh">#</th>
              <th className="likeTh"></th>
              <th>TITLE</th>
              <th>YEAR</th>
              <th>GENRE</th>
              <th>POPULARITY</th>
              <th>DURATION</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => {
              const isLiked = likedSongs.some(
                (likedSong) => likedSong.id === song.id
              );
              return (
                <TableRow
                  key={song.id}
                  song={song}
                  index={index}
                  isLiked={isLiked}
                  handleContextMenu={handleContextMenu}
                  handleHeartClick={handleHeartClick}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SongList;
