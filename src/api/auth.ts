export const API_URL = "http://localhost:3000";

// Сохранение токена
export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

// Получение токена
export const getToken = () => {
  return localStorage.getItem("token");
};

// Удаление токена
export const logout = () => {
  localStorage.removeItem("token");
};

// Регистрация
export const register = async (name: string, email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });
  return res.json();
};

// Логин
export const login = async (name: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  });
  return res.json();
};
