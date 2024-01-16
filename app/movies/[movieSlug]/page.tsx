'use client';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '@/app/lib/fetchData';
import Image from 'next/image';

type MovieProps = {
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
};

export default function DetailedMoviePage({
  params,
}: {
  params: { movieSlug: string };
}) {
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(params.movieSlug);
      setMovie(movieDetails);
    };

    fetchData();
  }, [params.movieSlug]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
      />
      <div className="flex flex-col">
        <h1>{movie.title}</h1>
        <p>Release date: {movie.release_date}</p>
        <p>
          Movie rating: {movie.vote_average} Votes: {movie.vote_count}
        </p>
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  );
}
