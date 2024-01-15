export async function login() {
  const res = await fetch(
    'https://api.themoviedb.org/3/authentication/guest_session/new',
    {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjY3MDc5NDdjZjBlY2E3MjdjYzJmOWIxNDRlYTA3NiIsInN1YiI6IjY1YTMzYmE4Mzk1NDlhMDEyMzEwOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LThBmf24unbrDofarCQGJkY6dCo0koTiga_iiqdgyqM',
      },
    }
  );

  return res.json();
}
