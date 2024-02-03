import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="w-96 h-96 relative">
      <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" />
    </Link>
  );
}
