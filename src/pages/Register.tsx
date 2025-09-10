// src/pages/Register.tsx
import { useState } from "react";
import { register, login } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login: saveLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const data = await register(name, email, password);
      // сервер теперь возвращает токен + user
      if (data.access_token) {
        saveLogin(data.access_token, data.user?.name ?? name);
        navigate("/");
        return;
      }
      // на всякий случай: если сервер не вернул, пробуем логин
      const loginRes = await login(name, password);
      saveLogin(loginRes.access_token, name);
      navigate("/");
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Ошибка регистрации");
    }
  };

  return (
    /* твой UI */
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Регистрация</h2>
        <input type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <button onClick={handleSubmit} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Зарегистрироваться</button>
      </div>
    </div>
  );
}
