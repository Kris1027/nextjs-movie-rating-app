import DetailedTvshowItem from '@/app/components/detailed-tvshow-item';
import { fetchTvShowDetails } from '@/app/lib/fetchData';

export default async function DetailedTvShowPage({
  params,
}: {
  params: { tvShowSlug: string };
}) {
  const tvShow = await fetchTvShowDetails(params.tvShowSlug);

  return (
    <div>
      <DetailedTvshowItem tvShow={tvShow} />
    </div>
  );
}
