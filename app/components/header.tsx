'use client';
import Logo from './logo';
import Navigation from './navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import NavigationMobile from './navigation-mobile';
import { useMobileMenu } from '../contexts/mobile-menu-context';

export default function Header() {
  const { isMenuOpen, handleMobileMenuOpen } = useMobileMenu();

  return (
    <header className="flex justify-between bg-secondary h-[150px] items-center p-6 max-w-[1280px] mx-auto">
      <Logo />
      <div onClick={handleMobileMenuOpen} className="sm:hidden">
        {isMenuOpen ? (
          <IoMdCloseCircleOutline size={30} />
        ) : (
          <RxHamburgerMenu size={30} />
        )}
      </div>
      {isMenuOpen ? <NavigationMobile /> : <Navigation />}
    </header>
  );
}
