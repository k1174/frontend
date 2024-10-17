import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import logo from '../assets/images/image.png';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
    const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const eventDropdownRef = useRef(null);
    const userDropdownRef = useRef(null);
    const navigate = useNavigate();
    const { isAuthenticated, isAdmin } = useAuth();

    const toggleEventDropdown = () => {
        setIsEventDropdownOpen((prev) => !prev);
        setIsUserDropdownOpen(false); // Close user dropdown if open
    };

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen((prev) => !prev);
        setIsEventDropdownOpen(false); // Close event dropdown if open
    };

    const handleClickOutside = (event) => {
        if (eventDropdownRef.current && !eventDropdownRef.current.contains(event.target)) {
            setIsEventDropdownOpen(false);
        }
        if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
            setIsUserDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error during logout: ', error);
            toast.error('Error logging out, please try again.');
        }
    };


    const linkClass = ({ isActive }) =>
        `text-white hover:bg-gray-800 hover:text-white rounded-md px-4 py-2 transition ${isActive ? 'bg-gray-900' : ''}`;

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

                            {/* Dropdown for Events */}
                            <div ref={eventDropdownRef} className={`relative`}>
                                <button
                                    onClick={toggleEventDropdown}
                                    className={`${linkClass} flex items-center text-white`}
                                >
                                    <span>Events</span>
                                    <IoMdArrowDropdown className="h-5 w-5" />
                                </button>

                                {isEventDropdownOpen && (
                                    <div className="absolute left-2 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                        <ul className="py-2 space-y-1">
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={() => setIsEventDropdownOpen(false)} to="/past">
                                                    Past Event
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={() => setIsEventDropdownOpen(false)} to="/eventspage">
                                                    Upcoming Event
                                                </Link>
                                            </li>
                                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                <Link onClick={() => setIsEventDropdownOpen(false)} to="/addjob">
                                                    Add Event
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {isAuthenticated ? (
                                <div className="relative" ref={userDropdownRef}>
                                    {/* Circular user profile icon */}
                                    <button
                                        onClick={toggleUserDropdown}
                                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-indigo-700">
                                        <FaUserCircle className="h-6 w-6" />
                                    </button>

                                    {isUserDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                            <ul className="py-2">
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    <Link onClick={() => setIsUserDropdownOpen(false)} to="/profile">
                                                        Profile
                                                    </Link>
                                                </li>
                                                {isAdmin && (
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                        <Link onClick={() => setIsUserDropdownOpen(false)} to="/admin">
                                                            Admin Panel
                                                        </Link>
                                                    </li>
                                                )}
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    <Link onClick={() => setIsUserDropdownOpen(false)} to="/reset-password">
                                                        Reset Password
                                                    </Link>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                                    <button onClick={handleLogout}>
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Uncomment this to add a login link if user is not authenticated
                                // <NavLink to="/login" className={linkClass}>
                                //     Login
                                // </NavLink>
                                ""
                            )}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </nav>
        </>
    );
}
// fix the two time toast notfication
