export async function fetchSearch(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?query=${query}&language=en-US`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );
  if (!res.ok) {
    throw new Error('Something went wrong with fetching search results');
  }
  return res.json();
}
