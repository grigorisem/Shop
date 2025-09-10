import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getOrderById } from "../api/orders";

export const OrderDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!id) return;
        const data = await getOrderById(Number(id));
        setOrder(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) return <p className="p-8">Загрузка...</p>;
  if (!order) return <p className="p-8">Заказ не найден</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Заказ #{order.id}</h1>
      <p className="mb-4">Сумма: {order.total}$</p>
      <ul className="space-y-2">
        {order.items.map((item: any) => (
          <li key={item.id} className="border p-2 rounded">
            {item.product.title} × {item.quantity} — {item.price}$
          </li>
        ))}
      </ul>
      <Link to="/orders" className="block mt-6 text-blue-500 hover:underline">
        ← Вернуться к заказам
      </Link>
    </div>
  );
};
