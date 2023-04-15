import { useState } from "react";
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
import heartGreen from "../../../assets/heartGreen.svg";
import heart from "../../../assets/heart.svg";
import ContextMenu from "../../../common/ContextMenu/ContextMenu";

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

  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    song: Song | null;
  }>({ x: 0, y: 0, song: null });
  const dispatch = useDispatch();
  const playlists = useSelector((state: RootState) => state.playlist);

  const handleContextMenu = (event: React.MouseEvent, song: Song) => {
    event.preventDefault();
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      song,
    });
  };

  const handleClick = (playlistId: string) => {
    if (contextMenu.song) {
      dispatch(addSongToPlaylist({ playlistId, song: contextMenu.song }));
    }
    setContextMenu({ x: 0, y: 0, song: null });
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
                <tr
                  key={song.id}
                  onContextMenu={(event) => handleContextMenu(event, song)}
                >
                  <td className="indexTd">{index + 1}</td>
                  <td className="likeTd">
                    <img
                      src={isLiked ? heartGreen : heart}
                      alt="heart"
                      onClick={() => handleHeartClick(song)}
                    />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.year}</td>
                  <td>{song.genre}</td>
                  <td>{song.popularity}</td>
                  <td>
                    {Math.floor(song.duration / 60) +
                      ":" +
                      (song.duration % 60)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SongList;
