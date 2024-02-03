import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="w-72 h-32 md:w-96 md:h-40 relative" href="/">
      <Image src="/logo.png" alt="logo" fill />
    </Link>
  );
}
