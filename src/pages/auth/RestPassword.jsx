import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const RestPassword = () => {
    const navigate = useNavigate();
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const {token} = useParams();
    console.log(token)
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newPassword !== confirmNewPassword){
            alert("Passwords do not match");
            return;
        }

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            data.token = token;
            console.log('Submitting data:', data);
            const response = await fetch('/auth/resetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                const errorMessage = errorData.error || 'Reset Password failed';
                throw new Error(errorMessage);
            }

            console.log("Password Reset Successful");
            toast.success("Password Reset Successful");
            navigate('/login');
        }
        catch (error) {
            console.error('Password Reset Failed:', error.message);
            toast.error('Password Reset Failed: ' + error.message);
        }
    };
    

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Reset Your Password
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        
                        {/* new password */}
                        <div>
                            <div className="">
                                <label htmlFor="newpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    New Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={e => setNewPassword(e.target.value)}
                                    id="newpassword"
                                    name="newpassword"
                                    type="newpassword"
                                    required
                                    autoComplete="current-password"
                                    placeholder="  New Password"
                                    minLength="8"
                                    className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                                />
                            </div>
                        </div>

                        {/* confirm new password */}
                        <div>
                            <div className="">
                                <label htmlFor="confirmnewpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm New Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={e => setConfirmNewPassword(e.target.value)}
                                    id="confirmnewpassword"
                                    name="confirmnewpassword"
                                    type="confirmnewpassword"
                                    required
                                    autoComplete="current-password"
                                    placeholder="  Confirm New Password"
                                    minLength="8"
                                    className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/Register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default RestPassword;