import { useState, useEffect, Children } from "react";
import type { ReactNode } from "react";

interface GoodsProps {
  children: ReactNode;
}
export const Goods = ({children}: GoodsProps ) => {
    const goodsArray = Children.toArray(children);
    return (
        <>
        </>
    )
}