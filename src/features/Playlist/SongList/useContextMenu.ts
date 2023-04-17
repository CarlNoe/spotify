import { useState } from "react";
import { Song } from "../playlistSlice";

export const useContextMenu = () => {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    song: Song | null;
  }>({ x: 0, y: 0, song: null });

  const handleContextMenu = (event: React.MouseEvent, song: Song) => {
    event.preventDefault();
    setContextMenu({
      x: event.clientX,
      y: event.clientY,
      song,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({ x: 0, y: 0, song: null });
  };

  return { contextMenu, handleContextMenu, closeContextMenu };
};
