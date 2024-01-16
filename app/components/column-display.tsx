import Image from 'next/image';
import { DisplayType } from '../page';
import clsx from 'clsx';

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
  displayType: DisplayType;
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
    <div className="flex flex-wrap text-vio gap-1 justify-center">
      {data.map((displayData) => (
        <div className=" bg-secondary w-[350px]" key={displayData.id}>
          <Image
            src={`https://image.tmdb.org/t/p/original${displayData.poster_path}`}
            alt="movie poster"
            height={500}
            width={350}
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
              Description: {displayData.overview.slice(0, 400) + '...'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
