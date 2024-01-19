import DetailedMovieItem from '@/app/components/detailed-movie-item';
import { fetchMovieDetails } from '@/app/lib/fetchData';
import { notFound } from 'next/navigation';

export default async function DetailedMoviePage({
  params,
}: {
  params: { movieSlug: string };
}) {
  const movie = await fetchMovieDetails(params.movieSlug);

  if (!movie) {
    notFound();
  }

  return (
    <main className="flex flex-wrap justify-center p-4 gap-4">
      <DetailedMovieItem movie={movie} />
    </main>
  );
}
