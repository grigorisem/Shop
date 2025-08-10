import { useState } from "react";
import { productsData } from "../data/ProductsData";
import { Link } from "react-router-dom";
import { Header } from '../components/Header';
import { NavbarRegistration } from '../components/NavbarRegistration';

export const Catalog = () => {
  const [selectedType, setSelectedType] = useState<string>("Все");
  const [selectedYear, setSelectedYear] = useState<string>("Все");

  const uniqueTypes = Array.from(new Set(productsData.map((item) => item.type)));
  const uniqueYears = Array.from(new Set(productsData.map((item) => item.year)));

  const filteredGoods = productsData.filter((item) => {
    const typeMatches = selectedType === "Все" || item.type === selectedType;
    const yearMatches = selectedYear === "Все" || String(item.year) === selectedYear;
    return typeMatches && yearMatches;
  });

  return (
    <>
      <NavbarRegistration />
      <Header />
      <div className="flex">
        <aside className="w-1/5 pr-6 pl-6 pt-6">
          <h2 className="text-xl font-semibold mb-4">Типы</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <button
                onClick={() => setSelectedType("Все")}
                className={`text-left px-4 py-2 rounded ${
                  selectedType === "Все" ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
              >
                Все типы
              </button>
            </li>
            {uniqueTypes.map((type) => (
              <li key={type}>
                <button
                  onClick={() => setSelectedType(type)}
                  className={`text-left px-4 py-2 rounded ${
                    selectedType === type ? "bg-blue-500 text-white" : "bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="w-4/5">
          <h1 className="text-3xl font-bold m-6">Каталог товаров</h1>

          <div className="m-6">
            <select
              className="border px-4 py-2 rounded"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="Все">Все года</option>
              {uniqueYears.map((year) => (
                <option key={year} value={String(year)}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 m-5">
            {filteredGoods.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {item.type}, {item.year}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {filteredGoods.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              Нет товаров по выбранным фильтрам.
            </p>
          )}
        </main>
      </div>
    </>
  );
};
