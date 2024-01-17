import { fetchTvShowDetails } from '@/app/lib/fetchData';

export default async function DetailedTvShowPage({
  params,
}: {
  params: { tvShowSlug: string };
}) {
  const tvShow = await fetchTvShowDetails(params.tvShowSlug);

  return (
    <div>
      <h1>Detailed Tv show page</h1>
      <p>{tvShow.name}</p>
    </div>
  );
}
