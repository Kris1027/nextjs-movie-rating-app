import Image from 'next/image';
import Link from 'next/link';

export type TvShowProps = {
  id: number;
  overview: string;
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
      href={`/movies/${tvShow.id}`}
      className="flex flex-col bg-secondary w-[300px]"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${tvShow.poster_path}`}
        alt={`${tvShow.name} poster`}
        width={300}
        height={450}
      />
      <div className="p-2">
        <h2 className="flex justify-between font-bold text-xl p-1">
          <span>{tvShow.name}</span>{' '}
          <span className={ratingTvShowColor()}>
            {tvShow.vote_average.toFixed(2)}
          </span>
        </h2>
        <p className="italic text-quaternary">
          Release date: <span>{tvShow.first_air_date}</span>
        </p>
        <p className="text-quaternary opacity-80">
          {tvShow.overview.slice(0, 250) + '...'}
        </p>
      </div>
    </Link>
  );
}
