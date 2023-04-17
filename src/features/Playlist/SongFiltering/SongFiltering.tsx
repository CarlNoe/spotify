import "./SongFiltering.scss";
import { Dispatch, SetStateAction } from "react";

interface SongFilteringProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  sortCriteria: "title" | "year" | "genre" | "popularity" | "duration";
  setSortCriteria: Dispatch<
    SetStateAction<"title" | "year" | "genre" | "popularity" | "duration">
  >;
}

const SongFiltering = ({
  filter,
  setFilter,
  sortCriteria,
  setSortCriteria,
}: SongFilteringProps) => {
  return (
    <div className="SongFiltering">
      <input
        type="text"
        placeholder="Artist, songs, or podcasts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select
        value={sortCriteria}
        onChange={(e) => setSortCriteria(e.target.value as any)}
      >
        <option value="title">Title</option>
        <option value="year">Year</option>
        <option value="genre">Genre</option>
        <option value="popularity">Popularity</option>
        <option value="duration">Duration</option>
      </select>
    </div>
  );
};

export default SongFiltering;
