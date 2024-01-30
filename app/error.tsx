'use client';

import { useEffect } from 'react';
import { MdError } from 'react-icons/md';
import { GrPowerReset } from 'react-icons/gr';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center p-4 max-w-[1280px] mx-auto text-center text-3xl gap-2">
      <MdError className="text-9xl text-red-500" />
      <h2 className=" text-red-500">Something went wrong!</h2>
      <button
        className="bg-secondary rounded-lg p-2 hover:text-green-500 uppercase flex flex-col items-center"
        onClick={() => reset()}
      >
        <GrPowerReset />
        Try again
      </button>
    </main>
  );
}
