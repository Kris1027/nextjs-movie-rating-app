'use client';
import { useState, useEffect } from 'react';
import MovieItem, { type MovieProps } from '../components/movie-item';
import { GetRatedMovies } from '../lib/rateData';

export default function RatedMovies() {
  const [ratedMovies, setRatedMovies] = useState({ results: [] });

  useEffect(() => {
    const fetchRatedMovies = async () => {
      const movies = await GetRatedMovies();
      setRatedMovies(movies);
    };

    fetchRatedMovies();
  }, []);

  return (
    <>
      {ratedMovies.results.map((movie: MovieProps) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </>
  );
}
