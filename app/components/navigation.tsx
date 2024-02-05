import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import Login from './login';
import Logout from './logout';

type NavigateLink = {
  path: string;
  name: string;
  auth: boolean;
};

export default function Navigation() {
  const path = usePathname();
  const { loggedIn } = useLogin();

  const navigateLink: NavigateLink[] = [
    { path: '/', name: 'Home', auth: false },
    { path: '/rated', name: 'Rated', auth: true },
    { path: '/movies', name: 'Movies', auth: false },
    { path: '/tvshows', name: 'TV Shows', auth: false },
  ];

  return (
    <nav className="hidden md:block">
      <ul className="flex gap-3 justify-center">
        {navigateLink.map((link) => {
          if (link.auth && !loggedIn) {
            return null;
          }

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`${
                  path === link.path ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <li>{loggedIn ? <Logout /> : <Login />}</li>
      </ul>
    </nav>
  );
}
