import { productsData} from "../data/ProductsData";
import { Header } from '../components/Header'
import { NavbarRegistration } from '../components/NavbarRegistration'
import { Navbar } from '../components/Navbar'
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const product = productsData.find((p) => p.id === productId);

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
            src={product.image}
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
}