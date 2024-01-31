import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import { useMobileMenu } from '../contexts/mobile-menu-context';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export default function NavigationMobile() {
  const path = usePathname();
  const { loggedIn, handleLogin, handleLogout } = useLogin();
  const { handleMobileMenuOpen } = useMobileMenu();

  return (
    <nav className="bg-quaternary absolute w-full h-full bottom-0 left-0 z-50">
      <ul className="flex flex-col gap-20 items-center p-3 text-7xl">
        <li>
          <IoMdCloseCircleOutline
            size={30}
            onClick={handleMobileMenuOpen}
            className="cursor-pointer"
          />
        </li>
        <li>
          <Link
            onClick={handleMobileMenuOpen}
            className={path === '/' ? 'text-red-500' : ''}
            href="/"
          >
            Home
          </Link>
        </li>
        {loggedIn && (
          <li>
            <Link
              onClick={handleMobileMenuOpen}
              className={path === '/rated' ? 'text-red-500' : ''}
              href="/rated"
            >
              Rated
            </Link>
          </li>
        )}
        <li>
          <Link
            onClick={handleMobileMenuOpen}
            className={path === '/movies' ? 'text-red-500' : ''}
            href="/movies"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            onClick={handleMobileMenuOpen}
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
