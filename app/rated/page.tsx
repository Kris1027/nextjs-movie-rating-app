'use client';
import { useState, useEffect } from 'react';
import MovieItem, { type MovieProps } from '../components/movie-item';
import { GetRatedMovies } from '../lib/rateData';

export default function RatedPage() {
  const [ratedMovies, setRatedMovies] = useState({ results: [] });

  useEffect(() => {
    const fetchRatedMovies = async () => {
      const movies = await GetRatedMovies();
      setRatedMovies(movies);
    };

    fetchRatedMovies();
  }, []);

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4 max-w-[1280px] mx-auto">
      {ratedMovies.results.map((movie: MovieProps) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </main>
  );
}
