import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="font-semibold rounded-md bg-quinary text-primary p-2">
        Movie Rating App
      </h1>
    </Link>
  );
}
