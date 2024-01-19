import Image from 'next/image';

type DetailedTvshowItemProps = {
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
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
        alt={`${tvShow.name} poster`}
        width={500}
        height={750}
      />
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold">{tvShow.name}</h1>
        <p className={ratingMovieColor()}>{tvShow.vote_average.toFixed(2)}</p>
        <p>{tvShow.first_air_date}</p>
        <p>
          Is movie for adult:{' '}
          {tvShow.adult ? (
            <span className="text-red-500">Yes</span>
          ) : (
            <span className="text-green-500">No</span>
          )}
        </p>
        <p className="flex gap-1">
          Genres:
          {tvShow.genres.map((gen) => (
            <span key={gen.id}>{gen.name},</span>
          ))}
        </p>
        <p>Popularity: {tvShow.popularity}</p>
        <p>{tvShow.overview}</p>
        <p>Language: {tvShow.original_language}</p>
      </div>
    </>
  );
}
