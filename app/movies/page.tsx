import { fetchMovies } from '../lib/fetchData';
import MovieItem, { type MovieProps } from '../components/movie-item';

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
