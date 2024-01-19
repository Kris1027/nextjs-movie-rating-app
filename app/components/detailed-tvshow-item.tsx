import Image from 'next/image';

type DetailedTvshowItemProps = {
  name: string;
  adult: boolean;
  overview: string;
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
  const ratingMovieColor = () => {
    if (tvShow.vote_average >= 9) {
      return 'text-violet-500';
    }
    if (tvShow.vote_average >= 8) {
      return 'text-green-500';
    }
    if (tvShow.vote_average >= 7) {
      return 'text-yellow-500';
    }
    if (tvShow.vote_average >= 6) {
      return 'text-orange-500';
    }
    if (tvShow.vote_average < 6) {
      return 'text-red-500';
    }
  };

  return (
    <main className="flex gap-4 w-3/4 mx-auto p-4">
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
          alt={`${tvShow.name} poster`}
          width={500}
          height={650}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold">{tvShow.name}</h1>
        <p className={ratingMovieColor()}>{tvShow.vote_average.toFixed(2)}</p>
        <p>{tvShow.release_date}</p>
        <p>IMDB ID: {tvShow.imdb_id}</p>
        <p>
          Is movie for adult:{' '}
          {tvShow.adult ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span className="text-green-500">No</span>
          )}
        </p>
        <p>Budget: {tvShow.budget} $</p>
        <p className="flex gap-1">
          Genres:
          {tvShow.genres.map((gen) => (
            <span key={gen.id}>{gen.name},</span>
          ))}
        </p>
        <p>Popularity: {tvShow.popularity}</p>
        <p>{tvShow.overview}</p>
        <p>Revenue: {tvShow.revenue}</p>
        <p>Runtime: {tvShow.runtime}</p>
        <p>Language: {tvShow.original_language}</p>
      </div>
    </main>
  );
}
