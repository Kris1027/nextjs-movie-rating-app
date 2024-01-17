'use client';
import { useEffect, useState } from 'react';
import Button from './ui/button';
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

  useEffect(() => {
    async function fetchData() {
      if (displayType === DisplayType.Movies) {
        const data = await fetchMovies();
        setData(data.results);
      } else {
        const data = await fetchTvShows();
        setData(data.results);
      }
    }

    fetchData();
  }, [displayType]);

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4">
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
          TV Shows
        </Button>
      </div>

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
