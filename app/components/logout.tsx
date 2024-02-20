import { useLogin } from '../contexts/login-context';
import { ImExit } from 'react-icons/im';

import { motion } from 'framer-motion';

export default function Logout() {
  const { handleLogout } = useLogin();

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="text-blue-500 lg:text-3xl text-md"
      onClick={handleLogout}
    >
      <ImExit />
    </motion.button>
  );
}
