import { Navbar } from './Navbar'
export const Header = () => {
        return (
            <>
                <div className="header">
                    <div className="header-inner">
                        <div className="logo">
                            logo
                        </div>
                        <nav className="navbar">
                            <Navbar />
                        </nav>
                        <div className='search'></div>
                    </div>
                </div>
            </>
    )
}