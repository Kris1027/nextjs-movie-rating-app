import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';

export default function NavigationMobile() {
  const path = usePathname();
  const { loggedIn, handleLogin, handleLogout } = useLogin();

  return (
    <nav className="bg-quaternary absolute w-full top-12 z-10">
      <ul className="flex gap-3 justify-center">
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
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 active:scale-75"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 active:scale-75"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}
