import Image from 'next/image';
import { DisplayType } from '../page';

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

  return (
    <div>
      {data.map((displayData) => (
        <div key={displayData.id}>
          <Image
            className="w-40"
            src={`https://image.tmdb.org/t/p/original${displayData.poster_path}`}
            alt="movie poster"
            width={200}
            height={300}
          />
          <h1>
            {displayType === DisplayType.Movies
              ? displayData.title
              : displayData.name}
          </h1>
          <p>
            Release Date:{' '}
            <span>
              {displayType === DisplayType.Movies
                ? displayData.release_date
                : displayData.first_air_date}
            </span>{' '}
            | Rating: <span>{displayData.vote_average}</span>
          </p>
          <p>Description: {displayData.overview.slice(0, 400) + '...'}</p>
        </div>
      ))}
    </div>
  );
}
