import { NavLink } from 'react-router-dom';
import logo from '../assets/images/image.png'
import { useAuth } from '../../context/AuthContext';

function Navbar() {

    const { isAuthenticated, isAdmin } = useAuth();
    const linkClass = ({ isActive }) => `text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${isActive ? "bg-black" : ""}`

    return (
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
                            <a className="flex flex-shrink-0 items-center mr-4" href="/">
                                <img
                                    className="h-10 w-auto"
                                    src={logo}
                                    alt="Events"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >Events</span
                                >
                            </a>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                    <NavLink
                                        to="/"
                                        className={linkClass}
                                    >Home</NavLink
                                    >
                                    <NavLink
                                        to="/eventsPage"
                                        className={linkClass}
                                    >Events</NavLink
                                    >
                                    <NavLink
                                        to="/addjob"
                                        className={linkClass}
                                    >Add Events</NavLink
                                    >

                                    {isAuthenticated ? (
                                        <>
                                            <NavLink
                                                to="/profile"
                                                className={linkClass}
                                            >Profile</NavLink
                                            >
                                            {isAdmin && (
                                                <NavLink
                                                    to="/admin"
                                                    className={linkClass}
                                                >Admin</NavLink
                                                >
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            
                                            <NavLink
                                                to="/login"
                                                className={linkClass}
                                            >Login</NavLink
                                            >
                                        </>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;