import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-3">
        <li>
          <Link className={path === '/' ? 'text-red-500' : ''} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={path === '/rated' ? 'text-red-500' : ''}
            href="/rated"
          >
            Rated
          </Link>
        </li>
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
      </ul>
    </nav>
  );
}
