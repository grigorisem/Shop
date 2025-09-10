import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { NavbarRegistration } from "../components/NavbarRegistration";
import { Header } from "../components/Header";

export const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const { token } = useAuth();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 👈 важно
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) throw new Error("Ошибка при создании заказа");

      const data = await response.json();
      alert(`Чек создан! Сумма: ${data.total}$ (ID заказа: ${data.id})`);
      clearCart();
    } catch (error) {
      console.error(error);
      alert("Ошибка при оформлении заказа");
    }
  };

  return (
    <>
      <NavbarRegistration />
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Корзина пуста</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.title} x {item.quantity}</span>
                <span>{item.price * item.quantity}$</span>
              </div>
            ))}
            <p className="text-xl font-bold mt-4">Итого: {total}$</p>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
            >
              Оплатить
            </button>
          </div>
        )}
      </div>
    </>
  );
};
