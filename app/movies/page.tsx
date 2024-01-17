import Image from 'next/image';
import { fetchMovies } from '../lib/fetchData';

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
    <main className="flex flex-wrap justify-center p-4">
      {movies.results.map((movie: MovieProps) => (
        <div key={movie.id} className="flex flex-col bg-secondary w-[300px]">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`${movie.title} poster`}
            width={300}
            height={450}
          />
          <h2>{movie.title}</h2>
          <p>
            Release date: <span>{movie.release_date}</span>
            <span>{movie.vote_average}</span>
          </p>
          <p>{movie.overview}</p>
        </div>
      ))}
    </main>
  );
}
