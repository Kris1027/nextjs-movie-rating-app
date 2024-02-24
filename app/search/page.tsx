'use client';
import Image from 'next/image';
import { fetchSearch } from '../lib/search';
import { useState } from 'react';
import Link from 'next/link';

type SearchResults = {
  id: number;
  title: string;
  poster_path: string;
};

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = await fetchSearch(query).then((data) => {
      setSearchResults(data.results);

      setQuery('');
    });
  }

  return (
    <main className="flex flex-col items-center">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="flex flex-wrap justify-center gap-1 p-1">
        {searchResults.map((result: SearchResults) => (
          <Link
            key={result.id}
            className="w-[400px] h-[550px]"
            href={`/movies/${result.id}`}
          >
            <div className="p-2 absolute w-full z-10 opacity-0 hover:opacity-100 h-full bg-secondary bg-opacity-60 flex flex-col items-start">
              <h1 className="font-bold text-3xl p-1 w-full flex justify-between text-start">
                {result.title}
              </h1>
            </div>
            {result.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                alt={`${result.title} poster`}
                width={400}
                height={550}
              />
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
