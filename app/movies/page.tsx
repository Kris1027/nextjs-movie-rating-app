'use client';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../lib/fetchData';
import ColumnDisplay from '../components/column-display';

export default function MoviesPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMovies();
        setData(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <h1>Movies Page </h1>
      <ColumnDisplay data={data} />
    </div>
  );
}
