import { useLogin } from '../contexts/login-context';

export default function Login() {
  const { handleLogin } = useLogin();

  return (
    <button
      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 active:scale-75"
      onClick={handleLogin}
    >
      Login
    </button>
  );
}
