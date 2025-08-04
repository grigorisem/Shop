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
          <div className="newgoods">
          <div className="text-2xl font-semibold mb-4 px-6">Новые поступления</div>
          <div className="flex flex-wrap w-full">
            {bigCards.map((item, index) => (
              <div
                key={`big-${index}`}
                className="relative w-full md:w-1/2 h-[800px] overflow-hidden"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-10">
            {smallCards.map((item, index) => (
              <div
                key={`small-${index}`}
                className="max-w-[400px] w-full max-h-[500px] h-full mx-auto bg-gray-50 rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        </>
    )
}