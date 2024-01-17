import Image from 'next/image';
import { fetchMovies } from '../lib/fetchData';
import Link from 'next/link';

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
        <Link
          href={`/movies/${movie.id}`}
          key={movie.id}
          className="flex flex-col bg-secondary w-[300px]"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`${movie.title} poster`}
            width={300}
            height={450}
          />
          <div className="p-2">
            <h2>{movie.title}</h2>
            <p>
              Release date: <span>{movie.release_date}</span> | Rated:{' '}
              <span>{movie.vote_average}</span>
            </p>
            <p>{movie.overview.slice(0, 250) + '...'}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
