import Image from 'next/image';
import Link from 'next/link';
import { totalRatingColor, yourRatingColor } from './rating-color';
import clsx from 'clsx';

export type TvShowProps = {
  id: number;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date?: string;
  rating?: number;
};

export default function TvShowItem({ tvShow }: { tvShow: TvShowProps }) {
  return (
    <Link
      className="w-[350px] h-[450px] relative"
      href={`/tvshows/${tvShow.id}`}
    >
      <div className="p-2 absolute w-full z-10 opacity-0 hover:opacity-100 h-full bg-secondary bg-opacity-60 flex flex-col items-start">
        <h1 className="font-bold text-3xl p-1 w-full flex justify-between text-start">
          <span>{tvShow.name}</span>{' '}
          <span className={totalRatingColor(tvShow)}>
            {tvShow.vote_average.toFixed(2)}
          </span>
        </h1>
        <p className="italic">
          Release date: <span>{tvShow.first_air_date}</span>
        </p>
        {tvShow.rating && (
          <p className="text-3xl">
            Your Rating:{' '}
            <span className={clsx('font-extrabold', yourRatingColor(tvShow))}>
              {tvShow.rating}
            </span>
          </p>
        )}
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
        alt={`${tvShow.name} poster`}
        fill
      />
    </Link>
  );
}
