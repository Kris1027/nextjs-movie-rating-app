'use client';
import { useState } from 'react';
import { login } from './actions';
import { useRouter } from 'next/navigation';
import Button from '../components/button';

export default function AuthPage() {
  const [data, setData] = useState(null);
  const router = useRouter();

  const handleLogin = async () => {
    const response = await login();
    setData(response);
    localStorage.setItem('guest_session_id', response.guest_session_id);
    router.push('/');
  };

  return (
    <main>
      <h1>Welcome!</h1>
      <p>Login by registering as a guest below</p>
      <Button onClick={handleLogin}>Login</Button>
    </main>
  );
}
