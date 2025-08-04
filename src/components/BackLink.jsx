import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function BackLink(props) {
    // this is breadcum

    const {pathname} = useLocation();

    const pathNames = pathname.split('/').filter((x)=>x);

    console.log(pathNames);

    console.log(props?.eventDiscricption);



    let breadcumPath = "";

    
    return (
        <section>
            <div className="container m-auto py-6 px-6 ml-2 ">
               

                {pathNames.length>0 && <Link   className="text-indigo-500 hover:text-indigo-600 items-center" to="/">Home</Link>}
                {/* this is for to avoid showing on home page */}

                {pathNames.map((path, index) => {
                    breadcumPath += `/${path}`;
                    const isLast = index === pathNames.length - 1;

                    return isLast ? (
                        <span key={breadcumPath} className="text-gray-700 font-medium inline-flex items-center">
                        {/*  later will add the descricption */}
                        </span>
                    ) : (
                        <span key={breadcumPath} className="inline-flex items-center">
                            <span className="mx-2 text-gray-400">/</span>
                            <Link to={breadcumPath} className="text-indigo-500 hover:text-indigo-700 font-medium transition-all duration-200">
                                {path}
                            </Link>
                        </span>
                    );
                })}



            </div>
        </section>
    );
}