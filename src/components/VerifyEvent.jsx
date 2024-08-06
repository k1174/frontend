import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
export default function VerifyEvent({ job }) {
    const navigate = useNavigate();
    const handleClick = async () => {
        job.status = "approved"
        console.log(job._id)
        const url = `/api${job._id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(job)
        })
        if (!response.ok) {
            console.error("Event Not Updated");
            toast.error("Event Edit Failed")
            return navigate(`/admin/${job._id}`);
        }
        toast.success("Event Edited Successfully")
        console.log("Event Updated Successfully");
        console.log("Verify Event", job);
        navigate(`/admin`);
    }
    return (
        <section>
            <div className="container text-center">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={handleClick}
                >
                    Verify Event
                </button>
            </div>
        </section>
    )
}