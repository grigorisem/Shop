import { useState } from "react";
import { login as loginApi } from "../services/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await loginApi(email, password);
    if (data.access_token) {
      login(data.access_token);
      navigate("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="border p-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border p-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2">Войти</button>
    </form>
  );
};
