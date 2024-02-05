import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLogin } from '../contexts/login-context';
import { useMobileMenu } from '../contexts/mobile-menu-context';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Logout from './logout';
import Login from './login';
import { IoHome, IoTvSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { BiSolidMoviePlay } from 'react-icons/bi';

type NavigateLink = {
  path: string;
  name: string;
  auth: boolean;
  icon?: JSX.Element;
  onClick?: () => void;
};

export default function NavigationMobile() {
  const path = usePathname();
  const { loggedIn } = useLogin();
  const { handleMobileMenuOpen } = useMobileMenu();

  const navigateLink: NavigateLink[] = [
    {
      path: '/',
      name: 'Home',
      auth: false,
      icon: <IoHome />,
      onClick: () => {
        handleMobileMenuOpen();
      },
    },
    {
      path: '/rated',
      name: 'Rated',
      auth: true,
      icon: <FaStar />,
      onClick: () => {
        handleMobileMenuOpen();
      },
    },
    {
      path: '/movies',
      name: 'Movies',
      auth: false,
      icon: <BiSolidMoviePlay />,
      onClick: () => {
        handleMobileMenuOpen();
      },
    },
    {
      path: '/tvshows',
      name: 'TV Shows',
      auth: false,
      icon: <IoTvSharp />,
      onClick: () => {
        handleMobileMenuOpen();
      },
    },
  ];

  return (
    <nav className="bg-secondary absolute w-full h-full bottom-0 left-0 z-50">
      <ul className="flex flex-col gap-20 items-center p-3 text-7xl">
        <ul className="flex items-center justify-between text-3xl w-full text-blue-500">
          <li>{loggedIn ? <Logout /> : <Login />}</li>
          <li>
            <IoMdCloseCircleOutline
              onClick={handleMobileMenuOpen}
              className="cursor-pointer"
            />
          </li>
        </ul>
        {navigateLink.map((link) => {
          if (link.auth && !loggedIn) {
            return null;
          }
          return (
            <li
              key={link.path}
              className="px-2 border-b-4 border-b-transparent hover:border-blue-500 transition-all duration-300 ease-in-out"
            >
              <Link
                href={link.path}
                className={`${
                  path === link.path
                    ? 'text-blue-500'
                    : 'text-gray-500 hover:text-blue-500'
                } flex items-center`}
                onClick={link.onClick}
              >
                {link.icon && link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
