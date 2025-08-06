import { Navbar } from './Navbar'
import shoppingCart from '../assets/img/shopping-cart.png'
export const Header = () => {
        return (
            <>
                <div className="header">
                    <div className="header-inner">
                        <div className="logo ml-5 h-[56p]">
                            <div className="logo-inner h-[56px] w-[200px]">
                            </div>
                        </div>
                        <nav className="navbar">
                            <Navbar />
                        </nav>
                        <div className="logo ml-5 h-[56p] flex justify-end">
                            <div className="logo-inner h-[56px] w-[200px] flex justify-end">
                                <img src={shoppingCart} alt="shopping-cart" className='w-[30px] h-[26px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}