import Image from 'next/image';
import { fetchTvShows } from '../lib/fetchData';
import Link from 'next/link';

type TvShowProps = {
  id: number;
  overview: string;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date?: string;
};

export default async function TvShowsPage() {
  const tvShows = await fetchTvShows();

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4">
      {tvShows.results.map((tvShow: TvShowProps) => (
        <Link
          href={`/tvshows/${tvShow.id}`}
          key={tvShow.id}
          className="flex flex-col bg-secondary w-[300px]"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
            alt={`${tvShow.name} poster`}
            width={300}
            height={450}
          />
          <div className="p-2">
            <h2>{tvShow.name}</h2>
            <p>
              Release date: <span>{tvShow.first_air_date}</span> | Rating:{' '}
              <span>{tvShow.vote_average}</span>
            </p>
            <p>{tvShow.overview.slice(0, 250) + '...'}</p>
          </div>
        </Link>
      ))}
    </main>
  );
}
