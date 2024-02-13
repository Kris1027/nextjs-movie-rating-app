import Image from 'next/image';
import Link from 'next/link';
import LogoImg from '../../public/logo.png';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-96 md:w-[30rem]"
    >
      <Link href="/">
        <Image src={LogoImg} alt="logo" />
      </Link>
    </motion.div>
  );
}
