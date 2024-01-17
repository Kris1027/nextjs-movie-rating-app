import Image from 'next/image';
import { DisplayType } from '../page';
import clsx from 'clsx';
import Link from 'next/link';

type DisplayData = {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
};

type ColumnDisplayProps = {
  data: DisplayData[];
  displayType?: DisplayType;
};

export default function ColumnDisplay(props: ColumnDisplayProps) {
  const { data, displayType } = props;

  const ratingColor = (data: DisplayData) => {
    if (data.vote_average >= 9) {
      return 'text-violet-500';
    }
    if (data.vote_average >= 8) {
      return 'text-green-500';
    }
    if (data.vote_average >= 7) {
      return 'text-yellow-500';
    }
    if (data.vote_average >= 6) {
      return 'text-orange-500';
    }
    if (data.vote_average < 6) {
      return 'text-red-500';
    }
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {data.map((displayData) => (
        <Link
          href={`/${
            displayType === DisplayType.Movies ? 'movies' : 'tvshows'
          }/${displayData.id}`}
          className="flex flex-col bg-secondary w-[300px]"
          key={displayData.id}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${displayData.poster_path}`}
            alt="movie poster"
            height={450}
            width={300}
          />
          <div className="p-2">
            <h1 className=" font-bold text-xl text-quinary">
              {displayType === DisplayType.Movies
                ? displayData.title
                : displayData.name}
            </h1>
            <p className="text-quaternary">
              Release Date:{' '}
              <span className="font-semibold">
                {displayType === DisplayType.Movies
                  ? displayData.release_date
                  : displayData.first_air_date}
              </span>{' '}
              | Rating:{' '}
              <span className={clsx('font-semibold', ratingColor(displayData))}>
                {displayData.vote_average.toFixed(2)}
              </span>
            </p>
            <p className=" text-quaternary opacity-80">
              Description: {displayData.overview.slice(0, 200) + '...'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
