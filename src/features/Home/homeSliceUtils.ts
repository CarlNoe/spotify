import data from "../../static/data.json";
import { v4 as uuidv4 } from "uuid";
import { Top50PlaylistType } from "./homeSlice";
import { generateRandomGradient } from "../../utils/gradient";

export const generateTop50Playlists = (): Top50PlaylistType[] => {
  const years = Array.from(new Set(data.map((song) => song.year)));
  years.sort((a, b) => b - a);
  const playlists: Top50PlaylistType[] = [];

  years.forEach((year) => {
    const top50Songs = data
      .filter((song) => song.year === year)
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 50)
      .map((song) => ({
        id: uuidv4(),
        title: String(song.title),
        artist: song.artist,
        genre: song.genre,
        year: song.year,
        duration: song.duration,
        popularity: song.popularity,
      }));

    playlists.push({
      id: uuidv4(),
      name: `Top 50 ${year}`,
      songs: top50Songs,
      gradient: generateRandomGradient(),
      year: year,
    });
  });

  return playlists;
};
