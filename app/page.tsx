'use client';
import { useEffect, useState } from 'react';
import Button from './components/button';
import ColumnDisplay from './components/column-display';
import { fetchMovies, fetchTvShows } from './lib/fetchData';

export enum DisplayType {
  Movies = 'movies',
  TvShows = 'tvshows',
}

export default function Home() {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        if (displayType === DisplayType.Movies) {
          const data = await fetchMovies();
          setData(data.results);
        } else {
          const data = await fetchTvShows();
          setData(data.results);
        }
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [displayType]);

  return (
    <main className="flex flex-col flex-wrap gap-5 p-5">
      <div className="flex justify-center">
        <Button
          onClick={() => setDisplayType(DisplayType.Movies)}
          isSelected={displayType === DisplayType.Movies}
        >
          Movies
        </Button>
        <Button
          onClick={() => setDisplayType(DisplayType.TvShows)}
          isSelected={displayType === DisplayType.TvShows}
        >
          Tv Shows
        </Button>
      </div>

      {isLoading && <div>Loading...</div>}
      {isError && <div>Something went wrong...</div>}

      <div>
        {displayType === DisplayType.Movies ? (
          <ColumnDisplay data={data} displayType={DisplayType.Movies} />
        ) : (
          <ColumnDisplay data={data} displayType={DisplayType.TvShows} />
        )}
      </div>
    </main>
  );
}
