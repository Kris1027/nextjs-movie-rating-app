'use client';
import { LoginProvider } from './login-context';
import { MobileMenuProvider } from './mobile-menu-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <LoginProvider>{children}</LoginProvider>
    </MobileMenuProvider>
  );
}
