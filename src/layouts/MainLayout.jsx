import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import BackLink from "../components/BackLink";
const MainLayout = () => {
    return (
        <div className="relative min-h-screen flex flex-col max-w-full overflow-hidden ">
            <Navbar />
            <div className="flex-grow">
            <BackLink />

                <Outlet />
            </div>
            < Footer />
            <ToastContainer />
        </div>
    )
}

export default MainLayout;