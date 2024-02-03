import Image from 'next/image';
import RatingItem from './rating-item';
import { totalRatingColor } from './rating-color';

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
  return (
    <div className="px-4 flex flex-col flex-wrap md:flex-row gap-4">
      <div className="w-full h-[700px] md:w-1/2 md:h-auto relative">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} poster`}
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="flex justify-between text-3xl font-bold mb-4">
          <h1>{movie.title}</h1>
          <p className={totalRatingColor(movie)}>
            {movie.vote_average.toFixed(2)}
          </p>
        </div>
        <p>
          <span className="font-bold text-xl">Realease date: </span>
          {movie.release_date}
        </p>
        <p>
          <span className="font-bold text-xl">IMDB ID:</span> {movie.imdb_id}
        </p>
        <p>
          <span className="font-bold text-xl">Is movie for adult: </span>
          {movie.adult ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span className="text-green-500">No</span>
          )}
        </p>
        <p>
          <span className="font-bold text-xl">Budget: </span>
          {movie.budget.toLocaleString()} $
        </p>
        <p className="flex gap-1 items-center">
          <span className="font-bold text-xl">Genres:</span>
          {movie.genres.map((gen) => (
            <span key={gen.id}>{gen.name},</span>
          ))}
        </p>
        <p>
          <span className="font-bold text-xl">Popularity: </span>
          {movie.popularity}
        </p>
        <p>
          <span className="font-bold text-xl">Revenue: </span>
          {movie.revenue}
        </p>
        <p>
          <span className="font-bold text-xl">Runtime: </span>
          {movie.runtime}
        </p>
        <p>
          <span className="font-bold text-xl">Language: </span>
          {movie.original_language}
        </p>
        <p className="flex flex-col items-center">
          <span className="font-bold text-xl">Description: </span>
          {movie.overview}
        </p>
        <p className="flex flex-col items-center">
          <span className="font-bold text-xl">Production companies:</span>
          {movie.production_companies.map((prod) => (
            <span key={prod.id}>{prod.name},</span>
          ))}
        </p>
        <RatingItem id={movie.id} type="movie" />
      </div>
    </div>
  );
}
