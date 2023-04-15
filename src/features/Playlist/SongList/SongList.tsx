import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { addSongToPlaylist, Song } from "../playlistSlice";
import "./SongList.scss";
import heartGreen from "../../../assets/heartGreen.svg";
import heartFilled from "../../../assets/heartFilled.svg";

interface SongListProps {
  songs: Song[];
}

function SongList({ songs }: SongListProps) {
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

  return (
    <div className="SongList">
      {contextMenu.song && (
        <div
          className="ContextMenu"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <header>
            <h3>Add to playlist</h3>
          </header>
          {playlists.map((playlist) => (
            <div key={playlist.id} onClick={() => handleClick(playlist.id)}>
              {playlist.name}
            </div>
          ))}
        </div>
      )}
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
            {songs.map((song, index) => (
              <tr
                key={song.id}
                onContextMenu={(event) => handleContextMenu(event, song)}
              >
                <td className="indexTd">{index + 1}</td>
                <td className="likeTd">
                  <img
                    src={song.favorite ? heartFilled : heartGreen}
                    alt="heart"
                    onClick={() => {
                      song.favorite = !song.favorite;
                    }}
                  />
                </td>
                <td>{song.title}</td>
                <td>{song.year}</td>
                <td>{song.genre}</td>
                <td>{song.popularity}</td>
                <td>
                  {Math.floor(song.duration / 60) + ":" + (song.duration % 60)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SongList;
