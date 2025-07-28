import { Children } from "react";
import type { ReactNode } from "react";

interface GoodsProps {
  children: ReactNode;
}
export const Goods = ({children}: GoodsProps ) => {
    const goodsArray = Children.toArray(children);
    const bigCards = goodsArray.slice(0, 2);
    const smallCards = goodsArray.slice(2);
    return (
        <>
          <div className="newgoods px-6">
          <div className="text-2xl font-semibold mb-4">Новые поступления</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {bigCards.map((item, index) => (
              <div
                key={`big-${index}`}
                className="w-full h-[500px] bg-gray-100 rounded-xl overflow-hidden"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smallCards.map((item, index) => (
              <div
                key={`small-${index}`}
                className="max-w-[300px] w-full h-[420px] mx-auto bg-gray-50 rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        </>
    )
}