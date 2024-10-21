// Desc: Confirm Account Page
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../../components/Spinner";

const ConfirmAccount = () => {
    const { token } = useParams();
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const response = await fetch('/auth/confirmaccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token })
            })
            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.error || 'Confirm Account failed';
                setLoading(false);
                throw new Error(errorMessage);
            }
            console.log("Confirm Account Successful");
            toast.success("Confirm Account Successful");
            setLoading(false);
            Navigate('/login');
        }
        catch (error) {
            console.error('Confirm Account Failed:', error.message);
            // Optionally, display the error message to the user
            alert('Confirm Account Failed: ' + error.message);
        }
        setLoading(false);
    }

    return (
        <>
            {loading &&
                <Spinner />
            }
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Confirm Account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Confirm Account
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}

export default ConfirmAccount;