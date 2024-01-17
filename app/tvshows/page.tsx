import Image from 'next/image';
import { fetchTvShows } from '../lib/fetchData';

type TvShowProps = {
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date?: string;
};

export default async function MoviesPage() {
  const movies = await fetchTvShows();

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4">
      {movies.results.map((movie: TvShowProps) => (
        <div key={movie.id} className="flex flex-col bg-secondary w-[300px]">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={`${movie.name} poster`}
            width={300}
            height={450}
          />
          <div className="p-2">
            <h2>{movie.name}</h2>
            <p>
              Release date: <span>{movie.first_air_date}</span> | Rating:{' '}
              <span>{movie.vote_average}</span>
            </p>
            <p>{movie.overview.slice(0, 250) + '...'}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
