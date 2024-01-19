import Image from 'next/image';
import Link from 'next/link';

export type TvShowProps = {
  id: number;
  poster_path: string;
  name: string;
  vote_average: number;
  first_air_date?: string;
};

export default function TvShowItem({ tvShow }: { tvShow: TvShowProps }) {
  const ratingTvShowColor = () => {
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
    <Link
      className="w-[350px] h-[450px] relative"
      href={`/tvshows/${tvShow.id}`}
    >
      <div className="p-2 absolute w-full z-10 opacity-0 hover:opacity-80 h-full bg-secondary bg-opacity-60 flex flex-col">
        <h1 className="flex justify-between font-bold text-xl p-1">
          <span>{tvShow.name}</span>{' '}
          <span className={ratingTvShowColor()}>
            {tvShow.vote_average.toFixed(2)}
          </span>
        </h1>
        <p className="italic">
          Release date: <span>{tvShow.first_air_date}</span>
        </p>
      </div>
      <Image
        src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
        alt={`${tvShow.name} poster`}
        fill
      />
    </Link>
  );
}
