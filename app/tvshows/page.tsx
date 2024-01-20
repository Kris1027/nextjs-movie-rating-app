import { fetchTvShows } from '../lib/fetchData';
import TvShowItem, { type TvShowProps } from '../components/tvshow-item';

export default async function TvShowsPage() {
  const tvShows = await fetchTvShows();

  return (
    <main className="flex flex-wrap gap-4 justify-center p-4 max-w-[1280px] mx-auto">
      {tvShows.results.map((tvShow: TvShowProps) => (
        <TvShowItem key={tvShow.id} tvShow={tvShow} />
      ))}
    </main>
  );
}
