import Image from 'next/image';
import RatingItem from './rating-item';
import { totalRatingColor } from './rating-color';

type DetailedTvshowItemProps = {
  id: number;
  name: string;
  adult: boolean;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  genres: Genres[];
  popularity: number;
  original_language: string;
};

type TvShow = {
  tvShow: DetailedTvshowItemProps;
};

type Creators = {
  id: number;
  name: string;
};

type Genres = {
  id: number;
  name: string;
};

export default function DetailedTvshowItem({ tvShow }: TvShow) {
  return (
    <main className="px-4 flex flex-col items-center md:flex-row gap-4 md:justify-between">
      <Image
        src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
        alt={`${tvShow.name} poster`}
        width={400}
        height={550}
      />
      <div className="w-full md:w-1/2">
        <div className="flex justify-between text-3xl font-bold mb-4">
          <h1>{tvShow.name}</h1>
          <p className={totalRatingColor(tvShow)}>
            {tvShow.vote_average.toFixed(2)}
          </p>
        </div>
        <p>
          <span className="font-bold text-xl">Realease date: </span>
          {tvShow.first_air_date}
        </p>
        <p>
          <span className="font-bold text-xl">Is tv show for adult: </span>
          {tvShow.adult ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span className="text-green-500">No</span>
          )}
        </p>
        <p className="flex gap-1 items-center">
          <span className="font-bold text-xl">Genres:</span>
          {tvShow.genres.map((gen) => (
            <span key={gen.id}>{gen.name},</span>
          ))}
        </p>
        <p>
          <span className="font-bold text-xl">Popularity: </span>
          {tvShow.popularity}
        </p>
        <p>
          <span className="font-bold text-xl">Language: </span>
          {tvShow.original_language}
        </p>
        <p className="flex flex-col items-center">
          <span className="font-bold text-xl">Description: </span>
          {tvShow.overview}
        </p>
        <RatingItem id={tvShow.id} type="tvShow" />
      </div>
    </main>
  );
}
