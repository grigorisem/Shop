import { Link } from "react-router-dom"
import { logout } from "../api/auth"
import { AuthProvider, useAuth } from "../context/AuthContext";

export const NavbarRegistration = () => {
 const { userName, logout } = useAuth();
 return (
    <div className="navbar-registration w-full bg-white h-[30px]">
        <div className="navbar-registration-inner w-[calc(100%-10px)] bg-gray-50 h-[30px]">
            <div className="register flex justify-end gap-5 text-center h-[30px] content-center items-center">
                <a href="/">Contacts us</a>
                <div className="border h-[15px] border-r border-solid border-r-black self-center"></div>
                <a href="/">Join us</a>
                {userName ? (
                    <button
                        onClick={logout}
                        className="h-[20px] w-full max-w-[80px] bg-red-500 text-white rounded hover:bg-red-600 text-center text-[15px]"
                        >
                        Выйти
                    </button>
                ) : (
                    <>
                        <div className="border h-[15px] border-r border-solid border-r-black self-center"></div>
                            <Link
                                to={'/login'}
                            >
                                Log In
                            </Link>
                            <div className="border h-[15px] border-r border-solid border-r-black self-center"></div>
                            <Link
                                to={'/register'}
                            >
                                Sign Up
                            </Link>
                        <div className="border h-[15px] border-r border-solid border-r-black self-center"></div>
                    </>
                )}
            </div>
        </div>
    </div>
 )
}