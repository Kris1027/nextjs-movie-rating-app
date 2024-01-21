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

  return (
    <main className="flex flex-col flex-wrap gap-4 items-center p-4 max-w-[1280px] mx-auto">
      <h1>Welcome!</h1>
      <p>Login by registering as a guest below</p>
      <form onSubmit={handleLogin}>
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
}
