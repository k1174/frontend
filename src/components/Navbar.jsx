import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../assets/images/image.png';
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    const { isAuthenticated, isAdmin } = useAuth();
    const linkClass = ({ isActive }) =>
        `text-white hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 transition ${isActive ? 'bg-gray-900' : ''}`;

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-600 shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex items-center">
                            {/* Logo */}
                            <a href="/" className="flex items-center space-x-2">
                                <img src={logo} className="h-10 w-auto" alt="Events" />
                                <span className="hidden md:block text-white text-2xl font-bold">Events</span>
                            </a>
                        </div>

                        <div className="flex items-center space-x-2 ">
                            <NavLink to="/" className={linkClass}>
                                Home
                            </NavLink>

                            {/* Dropdown */}
                            <div ref={dropdownRef} className={`relative `}>
                                <button
                                    onClick={toggleDropdown}
                                    className={`  ${linkClass} flex items-center  text-white`}
                                >
                                    <span>Events</span>
                                    <IoMdArrowDropdown className="h-5 w-5" />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute left-2  mt-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-2 space-y-1">
                                            {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                Explore Events
                                            </li> */}
                                             <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={()=>setIsDropdownOpen(!isDropdownOpen)} to="/past" >
                                                    Past Event
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={()=>setIsDropdownOpen(!isDropdownOpen)} to="/eventspage" >
                                                 Upcoming Event
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={()=>setIsDropdownOpen(!isDropdownOpen)} to="/addjob" >
                                                 Add Event
                                                </Link>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {isAuthenticated ? (
                                <>
                                    <NavLink to="/profile" className={linkClass}>
                                        Profile
                                    </NavLink>
                                    {isAdmin && (
                                        <NavLink to="/admin" className={linkClass}>
                                            Admin
                                        </NavLink>
                                    )}
                                </>
                            ) : (
                                <NavLink to="/login" className={linkClass}>
                                    Login
                                </NavLink>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
