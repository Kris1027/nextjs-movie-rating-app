export async function RateMovie(movieId: number, rating: number) {
  const res = await fetch(
    `http://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
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
    `http//api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
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
