import Image from 'next/image';
import Link from 'next/link';

export type MovieProps = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  rating?: number;
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
    <Link className="w-[350px] h-[450px] relative" href={`/movies/${movie.id}`}>
      <div className="p-2 absolute w-full z-10 opacity-0 hover:opacity-100 h-full bg-secondary bg-opacity-60 flex flex-col items-start">
        <h1 className="font-bold text-3xl p-1 w-full flex justify-between">
          <span>{movie.title}</span>{' '}
          <span className={ratingMovieColor()}>
            {movie.vote_average.toFixed(2)}
          </span>
        </h1>
        <p className="italic">
          Release date: <span>{movie.release_date}</span>
        </p>
        {movie.rating && (
          <p className="text-3xl">
            Your Rating:{' '}
            <span className="font-bold text-red-500">{movie.rating}</span>
          </p>
        )}
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.title} poster`}
        fill
      />
    </Link>
  );
}
