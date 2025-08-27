import { Children } from "react";
import type { ReactNode } from "react";

interface GoodsProps {
  children: ReactNode;
}
export const Goods = ({ children }: GoodsProps) => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Новые поступления</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Children.toArray(children).map((item, index) => (
          <div
            key={`goods-${index}`}
            className="w-full h-[400px] bg-gray-50 rounded-lg overflow-hidden"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};