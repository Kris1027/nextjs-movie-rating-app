'use client';
import { LoginProvider } from './login-context';
import { MobileMenuProvider } from './mobile-menu-context';
import { ModalProvider } from './modal-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MobileMenuProvider>
      <LoginProvider>
        <ModalProvider>{children}</ModalProvider>
      </LoginProvider>
    </MobileMenuProvider>
  );
}
