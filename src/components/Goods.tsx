import { Children } from "react";
import type { ReactNode } from "react";

interface GoodsProps {
  children: ReactNode;
}
export const Goods = ({children}: GoodsProps ) => {
    const goodsArray = Children.toArray(children);
    return (
        <>
          <div className="grid grid-cols-3 gap-[10px] justify-items-center">
              {goodsArray.map((good, index) => (
                <div className="card max-w-[400px] max-h-[500px] w-full h-full" key={index}>
                    {good}
                </div>
                )
              )
            }
          </div>
        </>
    )
}