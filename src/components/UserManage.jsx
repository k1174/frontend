import AddToCal from "./AddToCal";
import RegisterForm from "./RegisterForm";

export default function UserManage({ job }) {

    return (
        <>
            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
                <h3 className="text-xl font-bold mb-6">Register Event</h3>
                <RegisterForm job={job} />
                <AddToCal job={job} />
            </div>
        </>
    )
}