import { fetchMovies } from '../lib/fetchData';
import MovieItem from '../components/movie-item';

type MovieProps = {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4">
      {movies.results.map((movie: MovieProps) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
