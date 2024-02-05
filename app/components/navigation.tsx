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
    <nav className="hidden md:block w-full">
      <ul className="flex justify-between text-2xl items-center">
        {navigateLink.map((link) => {
          if (link.auth && !loggedIn) {
            return null;
          }
          return (
            <li
              key={link.path}
              className="bg-primary py-2 px-6 rounded-md bg-opacity-25"
            >
              <Link
                href={link.path}
                className={`${
                  path === link.path ? 'text-blue-500' : 'text-gray-500'
                }`}
              >
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
        <li>{loggedIn ? <Logout /> : <Login />}</li>
      </ul>
    </nav>
  );
}
