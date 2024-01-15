import Logo from './logo';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className="flex justify-between">
      <Logo />
      <Navigation />
    </header>
  );
}
