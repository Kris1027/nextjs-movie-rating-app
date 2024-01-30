'use client';
import Logo from './logo';
import Navigation from './navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';
import NavigationMobile from './navigation-mobile';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between bg-secondary h-[150px] items-center p-6 max-w-[1280px] mx-auto relative">
      <Logo />
      <div onClick={handleClick} className="sm:hidden">
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
