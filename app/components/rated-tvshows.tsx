'use client';
import { useState, useEffect } from 'react';
import { GetRatedTvShows } from '../lib/rateData';
import TvShowItem, { TvShowProps } from './tvshow-item';

export default function RatedTvShows() {
  const [ratedTvShows, setRatedTvShows] = useState({ results: [] });

  useEffect(() => {
    const fetchRatedMovies = async () => {
      const tvShows = await GetRatedTvShows();
      setRatedTvShows(tvShows);
    };

    fetchRatedMovies();
  }, [ratedTvShows.results.length]);

  return (
    <div className="flex flex-wrap gap-4">
      {ratedTvShows.results.length > 0 ? (
        ratedTvShows.results.map((tvShow: TvShowProps) => (
          <TvShowItem key={tvShow.id} tvShow={tvShow} />
        ))
      ) : (
        <p>No rated Tv shows</p>
      )}
    </div>
  );
}
