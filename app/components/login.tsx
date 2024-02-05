import { useLogin } from '../contexts/login-context';
import { FaUserCircle } from 'react-icons/fa';

export default function Login() {
  const { handleLogin } = useLogin();

  return (
    <button className="text-3xl active:scale-75" onClick={handleLogin}>
      <FaUserCircle />
    </button>
  );
}
