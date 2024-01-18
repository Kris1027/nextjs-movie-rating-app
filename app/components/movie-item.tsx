import Image from 'next/image';
import Link from 'next/link';

export type MovieProps = {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

export default function MovieItem({ movie }: { movie: MovieProps }) {
  const ratingMovieColor = () => {
    if (movie.vote_average >= 9) {
      return 'text-violet-500';
    }
    if (movie.vote_average >= 8) {
      return 'text-green-500';
    }
    if (movie.vote_average >= 7) {
      return 'text-yellow-500';
    }
    if (movie.vote_average >= 6) {
      return 'text-orange-500';
    }
    if (movie.vote_average < 6) {
      return 'text-red-500';
    }
  };

  return (
    <Link
      href={`/movies/${movie.id}`}
      className="flex flex-col bg-secondary w-[300px]"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width={300}
        height={450}
      />
      <div className="p-2">
        <h2 className="flex justify-between font-bold text-xl p-1">
          <span>{movie.title}</span>{' '}
          <span className={ratingMovieColor()}>
            {movie.vote_average.toFixed(2)}
          </span>
        </h2>
        <p className="italic text-quaternary">
          Release date: <span>{movie.release_date}</span>
        </p>
        <p className="text-quaternary opacity-80">
          {movie.overview.slice(0, 250) + '...'}
        </p>
      </div>
    </Link>
  );
}
