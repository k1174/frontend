import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
const MainLayout = () => {
    return(
        
        <div className="relative min-h-screen flex flex-col ">

        <Navbar />
        <div className="flex-grow">
        <Outlet />

        </div>
        < Footer />

        <ToastContainer />
        </div>
    )
}

export default MainLayout;