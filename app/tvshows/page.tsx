import { fetchTvShows } from '../lib/fetchData';
import TvShowItem, { type TvShowProps } from '../components/tvshow-item';

export const metadata = {
  title: 'All tv shows',
  description: 'All tv shows available in the database',
};

export default async function TvShowsPage() {
  const tvShows = await fetchTvShows();

  return (
    <main className="flex flex-wrap justify-center gap-1 p-1">
      {tvShows.results.map((tvShow: TvShowProps) => (
        <TvShowItem key={tvShow.id} tvShow={tvShow} />
      ))}
    </main>
  );
}
