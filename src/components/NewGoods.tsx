import { Children } from "react";
import type { ReactNode } from "react";

interface NewGoods {
    children: ReactNode;
}

export const NewGoods = ({children}:NewGoods) => {
    const newGoodsArray = Children.toArray(children)
    return (
        <>
            <div className="newgoods">
                 <div className="m-[10px]">Новые поступления</div>
                <div className="grid grid-cols-1 gap-[10px] justify-items-center">
                    {
                        newGoodsArray.map((newgood, index) => (
                            <div className="max-w-[400px] max-h-[500px] w-full h-full" key={index}>
                                {newgood}
                            </div>
                        )

                        ) 
                    }
                </div>
            </div>
        </>
    )
}