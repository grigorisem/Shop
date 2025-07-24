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
                <div className="w-[calc(100%-500px)] pl-[10px]">
                    <div className="grid grid-cols-4 gap-[5px] m-auto" >
                    {
                        newGoodsArray.map((newgood, index) => (
                            <div className="max-w-[200px] max-h-[300px] w-full h-full" key={index}>
                                {newgood}
                            </div>
                        )

                        ) 
                    }
                </div>
                </div>
            </div>
        </>
    )
}