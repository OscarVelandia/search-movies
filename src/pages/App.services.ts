import { customFetch } from "../utils/customFetch";

export type Movie = {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  video: boolean;
  media_type: string;
  id: string;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: Array<string>;
  release_date: string;
};

export const getMovies = () => {
  return customFetch<{ results: Array<Movie> }>("4/list/1").then(
    ({ results }) => results
  );
};
