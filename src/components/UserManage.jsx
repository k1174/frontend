import { Form } from "react-router-dom";
import AddToCal from "./AddToCal";
export default function UserManage({ job }) {
    return (
        <>
            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
                <h3 className="text-xl font-bold mb-6">Register Event</h3>
                <Form >
                    <button onClick={() => { alert("You have successfully registered for this event.") }}
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                        Register
                    </button>
                </Form>
                <AddToCal job={job} />
            </div>
        </>
    )
}