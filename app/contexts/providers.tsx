'use client';
import { LoginProvider } from './login-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LoginProvider>{children}</LoginProvider>;
}
