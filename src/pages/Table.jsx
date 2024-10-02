import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";

const Table = () => {

    const eventId = window.location.pathname.split('/').pop()
    console.log(eventId)

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            const response = await fetch(`/service/getRegistrations/${eventId}`)
            const data = await response.json();
            console.log(data)
            setData(data)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return <Spinner />
    }

    if(data.length == 0){
        return <h1 className="text-center text-3xl mt-10">No Registrations Yet</h1>
    }

    //if data doesn't contains additionaldetails field
    if(!data.additionalDetails){
        return <h1 className="text-center text-3xl mt-10">No Additional Details Found</h1>
    }


    // Extract keys for the first registration to create the header
    const keys = data.length > 0 ? Object.keys(data[0].additionalDetails) : [];
    return (
        <>
            {/* tailwind */}

            <div className="relative overflow-x-auto min-h-screen">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                        <tr>
                            {keys.map((key) => (
                                <th key={key} scope="col" className="px-6 py-3" >{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data._id} className="bg-white border-b" >
                                {keys.map((key) => (
                                    <td className="px-6 py-4" key={key}>{data.additionalDetails[key]}</td>
                                ))}
                            </tr>
                        ))}
                        {/* <tr className="bg-white border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr> */}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Table;