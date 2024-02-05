import { useLogin } from '../contexts/login-context';
import { ImExit } from 'react-icons/im';

export default function Logout() {
  const { handleLogout } = useLogin();

  return (
    <button className="text-3xl active:scale-75" onClick={handleLogout}>
      <ImExit />
    </button>
  );
}
