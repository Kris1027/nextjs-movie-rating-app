import DetailedTvshowItem from '@/app/components/detailed-tvshow-item';
import { fetchTvShowDetails } from '@/app/lib/fetchData';

export default async function DetailedTvShowPage({
  params,
}: {
  params: { tvShowSlug: string };
}) {
  const tvShow = await fetchTvShowDetails(params.tvShowSlug);

  return (
    <main className="flex justify-center p-4 gap-4">
      <DetailedTvshowItem tvShow={tvShow} />
    </main>
  );
}
