'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import clsx from 'clsx';
import { useMediaQuery } from './utils/useMediaQuery';
import Login from './login';
import Logout from './logout';

import { IoHome } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { IoTvSharp } from 'react-icons/io5';

import { motion } from 'framer-motion';

type NavigateLink = {
  path: string;
  name: string;
  auth: boolean;
  icon?: JSX.Element;
};

export default function Navigation() {
  const path = usePathname();
  const { loggedIn } = useLogin();

  const matches = useMediaQuery('(min-width: 768px)');

  const navigateLink: NavigateLink[] = [
    { path: '/', name: 'Home', auth: false, icon: <IoHome /> },
    { path: '/search', name: 'Search', auth: false },
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
    <>
      {matches && (
        <nav className="w-full">
          <ul className="lg:text-2xl text-lg flex justify-around items-center">
            {navigateLink.map((link) => {
              if (link.auth && !loggedIn) {
                return null;
              }
              return (
                <motion.li
                  initial={{ x: '-100vw', scale: 0, opacity: 0 }}
                  animate={{ x: 0, scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  key={link.path}
                  className="px-2"
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
                </motion.li>
              );
            })}
            <li>{loggedIn ? <Logout /> : <Login />}</li>
          </ul>
        </nav>
      )}
    </>
  );
}
