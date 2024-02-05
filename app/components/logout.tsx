import { useLogin } from '../contexts/login-context';

export default function Logout() {
  const { handleLogout } = useLogin();

  return (
    <button
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 active:scale-75"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
