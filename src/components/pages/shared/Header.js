import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaListAlt } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="navbar bg-orange-200 rounded-md z-10">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-2xl font-bold text-gray-900">
                            Europea
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="flex-none  hidden sm:block">
                            <ul className="menu menu-horizontal p-0 text-cyan-900 font-medium">
                                <li className="mx-2">
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/startbooking"}>Start Booking</NavLink>
                                </li>

                                {user?.email ?
                                    <>
                                        <li className="mx-2">
                                            <NavLink to={"/profile"}>{user.displayName}</NavLink>
                                        </li>
                                        <li className="mx-2">
                                            <Link>
                                                <button onClick={handleLogOut}>
                                                    Logout
                                                </button>
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="mx-2">
                                            <NavLink to={"/login"}>Login</NavLink>
                                        </li>
                                        <li className="mx-2">
                                            <NavLink to={"/signup"}>Sign Up</NavLink>
                                        </li>
                                    </>
                                }

                            </ul>
                        </div>
                        <div className="dropdown dropdown-end sm:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="text-cyan-800">
                                    <FaListAlt></FaListAlt>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li className="mx-2">
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className="mx-2">
                                    <NavLink to={"/startbooking"}>Start Booking</NavLink>
                                </li>
                                {user?.email ?
                                    <>
                                        <li className="mx-2">
                                            <NavLink to={"/profile"}>{user.displayName}</NavLink>
                                        </li>
                                        <li className="mx-2">
                                            <Link>
                                                <button onClick={handleLogOut}>
                                                    Logout
                                                </button>
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="mx-2">
                                            <NavLink to={"/login"}>Login</NavLink>
                                        </li>
                                        <li className="mx-2">
                                            <NavLink to={"/signup"}>Sign Up</NavLink>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;