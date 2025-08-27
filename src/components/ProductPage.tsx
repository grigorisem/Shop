import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../api/products";
import { NavbarRegistration } from "../components/NavbarRegistration";
import { Header } from "../components/Header";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    getProducts().then((products) => {
      const found = products.find((p: any) => p.id === Number(id));
      setProduct(found ?? null);
    });
  }, [id]);

  if (!product) {
    return <div className="p-8 text-center text-gray-500">Товар не найден</div>;
  }

  return (
    <>
      <NavbarRegistration />
      <Header />
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full md:w-1/2 h-[400px] object-cover rounded-lg shadow"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-2">Тип: {product.type}</p>
            <p className="text-gray-700 text-lg mb-2">Год: {product.year}</p>
            <p className="text-gray-700 text-lg mb-2">Цвет: {product.color}</p>
            <p className="text-2xl font-semibold text-green-600 mt-4">
              {product.price}$
            </p>
            <button className="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
