import AddToCal from "./AddToCal";
import { useAuth } from "../../context/AuthContext";

export default function UserManage({ job }) {
    const { isAuthenticated, user } = useAuth();

    const handelRegister = async () => {
        if(!isAuthenticated){
            alert('Please login to register for the event')
        }
        else{
            // Add the user to the event
            const response = await fetch(`/service/registerEvent`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user._id, eventId: job._id })  // Add the user id and event id
            })

            if(response.ok){
                const data = await response.json();
                alert(data.message);
                
            }else if(response.status === 400){
                const data = await response.json();
                alert(data.message);
            }else if(response.status === 500){
                const data = await response.json(); 
                alert('An error occured, please try again later');
                throw new Error(data.error);
            } 
            else  {
                
                throw new Error('Unexpected error occurred');
            }
        }
    }

    return (
        <>
            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
                <h3 className="text-xl font-bold mb-6">Register Event</h3>
                <button onClick={handelRegister}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                    Register
                </button>

                <AddToCal job={job} />
            </div>
        </>
    )
}