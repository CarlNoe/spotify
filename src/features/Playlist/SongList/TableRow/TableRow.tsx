import React from "react";
import { Song } from "../../../Playlist/playlistSlice";
import heartGreen from "../../../../assets/heartGreen.svg";
import heart from "../../../../assets/heart.svg";

interface TableRowProps {
  song: Song;
  index: number;
  isLiked: boolean;
  handleContextMenu: (event: React.MouseEvent, song: Song) => void;
  handleHeartClick: (song: Song) => void;
}

const TableRow: React.FC<TableRowProps> = ({
  song,
  index,
  isLiked,
  handleContextMenu,
  handleHeartClick,
}) => {
  const duration = `${Math.floor(song.duration / 60)}:${song.duration % 60}`;

  return (
    <tr key={song.id} onContextMenu={(event) => handleContextMenu(event, song)}>
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
      <td>{duration}</td>
    </tr>
  );
};

export default TableRow;
