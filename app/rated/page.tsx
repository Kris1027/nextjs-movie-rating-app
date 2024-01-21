import RatedMovies from '../components/rated-movies';
import RatedTvShows from '../components/rated-tvshows';

export default function RatedPage() {
  return (
    <main className="flex flex-col items-center p-4 max-w-[1280px] mx-auto text-center">
      <p className="text-3xl font-bold pb-4">Rated movies:</p>
      <RatedMovies />
      <p className="text-3xl font-bold py-4">Rated Tv shows:</p>
      <RatedTvShows />
    </main>
  );
}
