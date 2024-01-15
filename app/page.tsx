'use client';
import { useState } from 'react';
import Button from './components/button';

enum DisplayType {
  Movies = 'movies',
  TvShows = 'tvshows',
}

export default function Home() {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  return (
    <main>
      <div className="flex justify-center gap-1">
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
    </main>
  );
}
