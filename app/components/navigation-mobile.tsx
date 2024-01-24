import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationMobile() {
  const path = usePathname();

  return (
    <nav className="bg-quaternary absolute w-full top-12 z-10">
      <ul className="flex flex-col items-center gap-3">
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
        <li>
          <Link className={path === '/auth' ? 'text-red-500' : ''} href="/auth">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}