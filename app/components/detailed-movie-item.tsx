import Image from 'next/image';
import RatingItem from './rating-item';

type DetailedMovieItemProps = {
  id: number;
  title: string;
  adult: boolean;
  overview: string;
  production_companies: ProductionCompanies[];
  poster_path: string;
  release_date: string;
  vote_average: number;
  budget: number;
  genres: Genres[];
  popularity: number;
  imdb_id: string;
  revenue: number;
  runtime: number;
  original_language: string;
};

type Movie = {
  movie: DetailedMovieItemProps;
};

type ProductionCompanies = {
  id: number;
  name: string;
};

type Genres = {
  id: number;
  name: string;
};

export default function DetailedMovieItem({ movie }: Movie) {
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
    <div className="flex flex-col md:flex-row">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.title} poster`}
        width={500}
        height={750}
        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 px-4"
      />
      <div className="p-4 w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5 2xl:w-5/6">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className={ratingMovieColor()}>{movie.vote_average.toFixed(2)}</p>
        <p>{movie.release_date}</p>
        <p>IMDB ID: {movie.imdb_id}</p>
        <p>
          Is movie for adult:{' '}
          {movie.adult ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span className="text-green-500">No</span>
          )}
        </p>
        <p>Budget: {movie.budget.toLocaleString()} $</p>
        <p className="flex gap-1">
          Genres:
          {movie.genres.map((gen) => (
            <span key={gen.id}>{gen.name},</span>
          ))}
        </p>
        <p>Popularity: {movie.popularity}</p>
        <p>{movie.overview}</p>
        <p className="flex gap-1">
          Production companies:
          {movie.production_companies.map((prod) => (
            <span key={prod.id}>{prod.name},</span>
          ))}
        </p>
        <p>Revenue: {movie.revenue}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>Language: {movie.original_language}</p>
        <RatingItem id={movie.id} type="movie" />
      </div>
    </div>
  );
}
