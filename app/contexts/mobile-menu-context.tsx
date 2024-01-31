import { ReactNode, createContext, useContext, useState } from 'react';

type MobileMenuContextType = {
  isMenuOpen: boolean;
  handleMobileMenuOpen: () => void;
};

const MobileMenuContext = createContext<MobileMenuContextType>({
  isMenuOpen: false,
  handleMobileMenuOpen: () => {},
});

export const MobileMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, handleMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => {
  const context = useContext(MobileMenuContext);
  if (context === undefined) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  }
  return context;
};
