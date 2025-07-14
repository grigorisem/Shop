import type { ReactNode } from "react";

interface SlideProps {
    children: ReactNode
}
export const Slider = ({children}: SlideProps) => {
    
    return (
        <div className="max-w-[1440px] h-[780px] w-full m-auto py-16 px-4 relative">
            <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                {children}
            </div>
        </div>
    )
};
