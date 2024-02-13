import { useLogin } from '../contexts/login-context';
import { FaUserCircle } from 'react-icons/fa';

import { motion } from 'framer-motion';

export default function Login() {
  const { handleLogin } = useLogin();

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-blue-500 text-3xl active:scale-75"
      onClick={handleLogin}
    >
      <FaUserCircle />
    </motion.button>
  );
}
