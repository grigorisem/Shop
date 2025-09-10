import { API_URL, getToken } from "./auth";

export const getOrders = async () => {
  const res = await fetch(`${API_URL}/orders/me`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) throw new Error("Ошибка при получении заказов");
  return res.json();
};

export const getOrderById = async (id: number) => {
  const res = await fetch(`${API_URL}/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
  if (!res.ok) throw new Error("Ошибка при получении заказа");
  return res.json();
};
