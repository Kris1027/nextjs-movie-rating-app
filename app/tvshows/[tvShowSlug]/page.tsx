'use client';
import { useEffect, useState } from 'react';
import { fetchTvShowDetails, fetchTvShows } from '@/app/lib/fetchData';
import Image from 'next/image';

type MovieProps = {
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
};

export default function DetailedTvShowPage({
  params,
}: {
  params: { TvShowSlug: string };
}) {
  const [movie, setMovie] = useState<MovieProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchTvShowDetails(params.TvShowSlug);
      setMovie(movieDetails);
    };

    fetchData();
  }, [params.TvShowSlug]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.name}
        width={500}
        height={750}
      />
      <div className="flex flex-col">
        <h1>{movie.name}</h1>
        <p>Release date: {movie.first_air_date}</p>
        <p>
          Movie rating: {movie.vote_average} Votes: {movie.vote_count}
        </p>
        <p>Description: {movie.overview}</p>
      </div>
    </div>
  );
}
