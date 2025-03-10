const Footer = () => {
    return (

        
        <footer className="bg-white rounded-lg shadow m-4 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between  ">
                <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="" className="hover:underline">Events™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3  text-sm font-medium text-gray-500  sm:mt-0">
                    {/* <li>
                        <a href="/" className="hover:text-blue-500 hover:underline me-4 md:me-6">Home</a>
                    </li> */}
                    <li>
                        <a href="/#" className="hover:text-blue-500 hover:underline me-4 md:me-6">About Us</a>
                    </li>
                    <li>
                        <a href="/#" className="hover:text-blue-500 hover:underline me-4 md:me-6">Contact Us</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/it.at.pu/" className="hover:text-blue-500 hover:underline">IT@Insta</a>
                    </li>
                </ul>
            </div>
        </footer>
        // </div>

    );
}

export default Footer;
