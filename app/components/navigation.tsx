import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/auth">Login</Link>
        </li>
        <li>
          <Link href="/rated">Rated</Link>
        </li>
      </ul>
    </nav>
  );
}
