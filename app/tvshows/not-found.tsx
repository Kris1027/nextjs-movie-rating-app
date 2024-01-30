import Link from 'next/link';
import { TbError404Off } from 'react-icons/tb';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center p-4 max-w-[1280px] mx-auto text-center text-3xl gap-2">
      <TbError404Off className="text-9xl text-red-500" />
      <h2 className="text-6xl text-red-500">Not Found</h2>
      <p className="text-secondary">Could not find tv show!</p>
      <Link
        className="bg-secondary rounded-lg p-2 hover:text-green-500 uppercase flex flex-col items-center"
        href="/"
      >
        <FaHome />
        Return Home
      </Link>
    </main>
  );
}
