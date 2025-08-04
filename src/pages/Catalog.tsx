import { useState } from "react";
import { productsData} from "../data/productsData";
import { Link } from "react-router-dom";



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
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Каталог товаров</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <select
          className="border px-4 py-2 rounded"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="Все">Все типы</option>
          {uniqueTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          className="border px-4 py-2 rounded"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="Все">Все года</option>
          {uniqueYears.map((year) => (
            <option key={year} value={String(year)}>{year}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGoods.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs w-full mx-auto"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{item.type}, {item.year}</p>
            </div>
          </div>
        ))}
      </div>
      {filteredGoods.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          Нет товаров по выбранным фильтрам.
        </p>
      )}
    </div>
  );
}