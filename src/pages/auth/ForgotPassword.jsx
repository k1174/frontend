import { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner";

const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [confirm, setConfirm] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('/auth/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Sending reset link failed');
            }
            setLoading(false);
            console.log("Reset link sent successfully");
            toast.success("Please check your email for reset link");
            setConfirm(true);
        } catch (error) {
            setLoading(false);
            console.error('Sending reset link failed:', error.message);
            toast.error(`Sending reset link failed: ${error.message}`);
        }
    };


    return (
        <>
            {loading &&
                <Spinner />
            }
            {confirm ?
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Check your email for reset link
                        </h2>
                    </div>
                </div>
                :
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Forgot your password?
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        pattern="/^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i"
                                        className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                                    />
                                </div>
                            </div>


                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Send Reset Link
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}
        </>
    )
}

export default ForgotPassword