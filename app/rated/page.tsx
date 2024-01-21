import RatedMovies from '../components/rated-movies';
import RatedTvShows from '../components/rated-tvshows';

export default function RatedPage() {
  return (
    <main className="p-4 max-w-[1280px] mx-auto">
      <RatedMovies />
      <RatedTvShows />
    </main>
  );
}
