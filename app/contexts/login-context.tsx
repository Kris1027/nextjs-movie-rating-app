import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from 'react';
import { GetSessionId } from '../lib/auth';

type LoginContextType = {
  data: null | { [key: string]: any };
  loggedIn: boolean;
  handleLogin: (e: React.SyntheticEvent) => Promise<void>;
  handleLogout: () => void;
};

export const LoginContext = createContext<LoginContextType | undefined>(
  undefined
);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<null | { [key: string]: any }>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn =
      typeof window !== 'undefined' &&
      localStorage.getItem('guest_session_id') !== null;
    setLoggedIn(loggedIn);
  }, []);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await GetSessionId();
    setLoggedIn(true);

    localStorage.setItem('guest_session_id', response.guest_session_id);
    setData(response);
  };

  const handleLogout = () => {
    localStorage.removeItem('guest_session_id');
    setLoggedIn(false);
  };

  return (
    <LoginContext.Provider
      value={{ data, loggedIn, handleLogin, handleLogout }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error('useLogin must be used within a LoginProvider');
  }
  return context;
};
