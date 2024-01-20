import DetailedTvshowItem from '@/app/components/detailed-tvshow-item';
import { fetchTvShowDetails } from '@/app/lib/fetchData';

export default async function DetailedTvShowPage({
  params,
}: {
  params: { tvShowSlug: string };
}) {
  const tvShow = await fetchTvShowDetails(params.tvShowSlug);

  return (
    <main className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 py-4 max-w-[1280px] mx-auto">
      <DetailedTvshowItem tvShow={tvShow} />
    </main>
  );
}
