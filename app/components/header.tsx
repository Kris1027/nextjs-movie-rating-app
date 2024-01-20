import Logo from './logo';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className="flex justify-between bg-secondary h-10 items-center p-6 max-w-[1280px] mx-auto">
      <Logo />
      <Navigation />
    </header>
  );
}
