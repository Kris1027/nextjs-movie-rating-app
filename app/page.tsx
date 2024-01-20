import MovieItem, { type MovieProps } from './components/movie-item';
import { fetchMovies, fetchTvShows } from './lib/fetchData';
import TvShowItem, { type TvShowProps } from './components/tvshow-item';

export default async function Home() {
  const movies = await fetchMovies();
  const tvShows = await fetchTvShows();

  return (
    <main className="p-4 max-w-[1280px] mx-auto">
      <h1 className="text-center pb-4 text-3xl text-quaternary uppercase">
        Find your favorite movies
      </h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {movies.results.map((movie: MovieProps) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <h1 className="text-center pb-4 text-3xl text-quaternary uppercase">
        Find your favorite tv shows
      </h1>
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {tvShows.results.map((tvShow: TvShowProps) => (
          <TvShowItem key={tvShow.id} tvShow={tvShow} />
        ))}
      </div>
    </main>
  );
}
