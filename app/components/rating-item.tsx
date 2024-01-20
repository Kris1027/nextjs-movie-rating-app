'use client';
import { useState } from 'react';
import { RateMovie, RateTvShow } from '../lib/rateData';
import Button from '../ui/button';
import { useRouter } from 'next/navigation';

export default function RatingItem({
  id,
  type,
}: {
  id: number;
  type: 'movie' | 'tvShow';
}) {
  const [rating, setRating] = useState<number>(0);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let response;
    if (type === 'movie') {
      response = await RateMovie(id, rating);
    } else if (type === 'tvShow') {
      response = await RateTvShow(id, rating);
    }
    router.push('/rated');
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="number"
        min="0"
        max="10"
        step="0.5"
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <Button type="submit">rate</Button>
    </form>
  );
}
