'use client';
import Logo from './logo';
import Navigation from './navigation';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between bg-secondary h-10 items-center p-6 max-w-[1280px] mx-auto">
      <Logo />
      <div onClick={handleClick}>
        {isMenuOpen ? (
          <RxHamburgerMenu className="sm:hidden" size={30} />
        ) : (
          <IoMdCloseCircleOutline className="sm:hidden" size={30} />
        )}
      </div>
      <div className="hidden sm:block">
        <Navigation />
      </div>
    </header>
  );
}
