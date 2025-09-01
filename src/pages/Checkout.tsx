import { useCart } from "../context/CartContext";
import { NavbarRegistration } from "../components/NavbarRegistration";
import { Header } from "../components/Header";

export const Checkout = () => {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Чек создан! Сумма: " + total + "$");
    clearCart();
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
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:underline"
                    >
                      Удалить
                    </button>
                  </div>
                </div>
                <p className="text-lg font-bold">
                  {item.price * item.quantity}$
                </p>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <p className="text-xl font-bold">Итого:</p>
              <p className="text-2xl font-bold text-green-600">{total}$</p>
            </div>

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
