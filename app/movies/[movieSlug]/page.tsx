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
    <main className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 py-4 max-w-[1280px] mx-auto">
      <DetailedMovieItem movie={movie} />
    </main>
  );
}
