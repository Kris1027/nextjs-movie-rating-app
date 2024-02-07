import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../public/logo.png';

export default function Logo() {
  return (
    <Link className="relative w-96 md:w-[30rem]" href="/">
      <Image src={LogoImg} alt="logo" />
    </Link>
  );
}
