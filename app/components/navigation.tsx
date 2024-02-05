import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import Login from './login';
import Logout from './logout';

export default function Navigation() {
  const path = usePathname();
  const { loggedIn } = useLogin();

  return (
    <nav className="hidden md:block">
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
        <li>{!loggedIn ? <Login /> : <Logout />}</li>
      </ul>
    </nav>
  );
}
