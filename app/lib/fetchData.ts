export async function fetchMovies() {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong with fetching movies');
  }

  return res.json();
}

export async function fetchTvShows() {
  const res = await fetch(
    'https://api.themoviedb.org/3/tv/popular?language=en-US',
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong with fetching tv shows');
  }

  return res.json();
}

export async function fetchMovieDetails(movieSlug: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieSlug}?language=en-US`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong with fetching movie details');
  }

  return res.json();
}

export async function fetchTvShowDetails(tvShowSlug: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowSlug}?language=en-US`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Something went wrong with fetching tv show details');
  }

  return res.json();
}
