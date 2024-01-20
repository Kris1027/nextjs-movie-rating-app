'use client';
import { useState } from 'react';
import { RateMovie } from '../lib/rateData';

export default function RatingItem({ movieId }: { movieId: number }) {
  const [rating, setRating] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await RateMovie(movieId, rating);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        min="0"
        max="10"
        step="0.5"
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button type="submit">rate</button>
    </form>
  );
}
