import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import Login from './login';
import Logout from './logout';

import { IoHome } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { IoTvSharp } from 'react-icons/io5';

type NavigateLink = {
  path: string;
  name: string;
  auth: boolean;
  icon?: JSX.Element;
};

export default function Navigation() {
  const path = usePathname();
  const { loggedIn } = useLogin();

  const navigateLink: NavigateLink[] = [
    { path: '/', name: 'Home', auth: false, icon: <IoHome /> },
    { path: '/rated', name: 'Rated', auth: true, icon: <FaStar /> },
    {
      path: '/movies',
      name: 'Movies',
      auth: false,
      icon: <BiSolidMoviePlay />,
    },
    { path: '/tvshows', name: 'TV Shows', auth: false, icon: <IoTvSharp /> },
  ];

  return (
    <nav className="hidden md:block w-full">
      <ul className="flex justify-end gap-4 text-2xl items-center">
        {navigateLink.map((link) => {
          if (link.auth && !loggedIn) {
            return null;
          }
          return (
            <li
              key={link.path}
              className="px-2 border-b-2 border-b-transparent hover:border-b-2 hover:border-blue-500 transition-all duration-300 ease-in-out"
            >
              <Link
                href={link.path}
                className={clsx(
                  `${
                    path === link.path
                      ? 'text-blue-500'
                      : 'text-gray-500 hover:text-blue-500'
                  }`,
                  'flex items-center'
                )}
              >
                {link.icon && link.icon}
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
