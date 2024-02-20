import { fetchMovies } from '../lib/fetchData';
import MovieItem, { type MovieProps } from '../components/movie-item';

export const metadata = {
  title: 'All movies',
  description: 'All movies available in the database',
};

export default async function MoviesPage() {
  const movies = await fetchMovies();

  return (
    <main className="flex flex-wrap justify-center gap-1 p-1">
      {movies.results.map((movie: MovieProps) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
