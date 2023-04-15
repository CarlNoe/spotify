import React from 'react';
import './ContextMenu.scss';
import { Song } from '../../features/Playlist/playlistSlice';

interface ContextMenuProps {
  x: number;
  y: number;
  song: Song | null;
  playlists: any;
  handleClick: (playlistId: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  song,
  playlists,
  handleClick,
}) => {
  if (!song) return null;

  return (
    <div className="ContextMenu" style={{ top: y, left: x }}>
      <header>
        <h3>Add to playlist</h3>
      </header>
      {playlists.map((playlist: any) => (
        <div key={playlist.id} onClick={() => handleClick(playlist.id)}>
          {playlist.name}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
