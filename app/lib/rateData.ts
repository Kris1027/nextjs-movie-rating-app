export async function RateMovie(movieId: number, rating: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      'guest_session_id'
    )}&api_key=1f6707947cf0eca727cc2f9b144ea076`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json;charset=utf-8',
      },

      body: `{"value":${rating}}`,
    }
  );

  return res.json();
}

export async function RateTvShow(tvShowId: number, rating: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
      'guest_session_id'
    )}&api_key=1f6707947cf0eca727cc2f9b144ea076`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json;charset=utf-8',
      },

      body: `{"value":${rating}}`,
    }
  );

  return res.json();
}

export async function GetRatedMovies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      'guest_session_id'
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=1f6707947cf0eca727cc2f9b144ea076`
  );

  return res.json();
}

export async function GetRatedTvShows() {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      'guest_session_id'
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=1f6707947cf0eca727cc2f9b144ea076`
  );

  return res.json();
}
