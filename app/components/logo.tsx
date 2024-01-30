import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className="w-[400px] h-[150px] relative" href="/">
      <Image src="/logo.png" alt="logo" fill />
    </Link>
  );
}
