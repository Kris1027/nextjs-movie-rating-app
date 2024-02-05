import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={400} height={160} />
    </Link>
  );
}
