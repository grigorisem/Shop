// src/components/NewGoods.tsx
import { type ReactNode } from "react";

interface NewGoodsProps {
  children: ReactNode;
}

export const NewGoods = ({ children }: NewGoodsProps) => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-6">Новинки 2025</h2>
      <div className="h-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </section>
  );
};
