'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/button';
import { GetSessionId } from '../lib/auth';

export default function AuthPage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await GetSessionId();

    localStorage.setItem('guest_session_id', response.guest_session_id);
    setData(response);
    router.push('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('guest_session_id');
  };

  const isLoggedIn =
    typeof window !== 'undefined' &&
    localStorage.getItem('guest_session_id') !== null;

  return (
    <main className="flex flex-col flex-wrap gap-4 items-center p-4 max-w-[1280px] mx-auto">
      {isLoggedIn ? (
        <form onSubmit={handleLogout}>
          <Button type="submit">Logout</Button>
        </form>
      ) : (
        <>
          <h1>Welcome!</h1>
          <p>Login by registering as a guest below</p>
          <form onSubmit={handleLogin}>
            <Button type="submit">Login</Button>
          </form>
        </>
      )}
    </main>
  );
}
