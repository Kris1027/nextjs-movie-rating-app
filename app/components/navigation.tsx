'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GetSessionId } from '../lib/auth';

export default function Navigation() {
  const path = usePathname();
  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn =
      typeof window !== 'undefined' &&
      localStorage.getItem('guest_session_id') !== null;
    setLoggedIn(loggedIn);
  }, []);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await GetSessionId();
    setLoggedIn(true);

    localStorage.setItem('guest_session_id', response.guest_session_id);
    setData(response);
  };

  const handleLogout = () => {
    localStorage.removeItem('guest_session_id');
    setLoggedIn(false);
  };

  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-3">
        <li>
          <Link className={path === '/' ? 'text-red-500' : ''} href="/">
            Home
          </Link>
        </li>
        {loggedIn && (
          <li>
            <Link
              className={path === '/rated' ? 'text-red-500' : ''}
              href="/rated"
            >
              Rated
            </Link>
          </li>
        )}
        <li>
          <Link
            className={path === '/movies' ? 'text-red-500' : ''}
            href="/movies"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            className={path === '/tvshows' ? 'text-red-500' : ''}
            href="/tvshows"
          >
            TV Shows
          </Link>
        </li>
        <li>
          {!loggedIn ? (
            <button onClick={handleLogin}>login</button>
          ) : (
            <button onClick={handleLogout}>logout</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
