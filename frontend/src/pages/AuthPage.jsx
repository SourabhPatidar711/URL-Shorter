import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {isLogin ? (
        <LoginForm onToggle={toggleForm} />
      ) : (
        <RegisterForm onToggle={toggleForm} />
      )}
    </div>
  );
}
