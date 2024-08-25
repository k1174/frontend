import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile, getUserRegistrations } from '../../api';
import JobListing from '../../components/JobListing';
import { useAuth } from '../../../context/AuthContext'

export default function Profile() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [registrations, setRegistrations] = useState(null);
    const navigate = useNavigate();
    const { isAdmin } = useAuth();

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUser = async () => {

            if (!token) {
                navigate('/login');
            }
            else {
                // Fetch user profile data if token exists
                try {
                    const userProfile = await getUserProfile(token)
                    const userRegistration = await getUserRegistrations(token)
                    setUser(userProfile)
                    setLoading(false)
                    setRegistrations(userRegistration)
                }
                catch (error) {
                    console.error('Failed to fetch user profile: '.error)
                }
            }
        }

        fetchUser()
    }, [token, navigate])

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }


    return (
        <>
            <div>
                <h1>Profile</h1>
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>

                    {/* List of registered events */}
                    {!isAdmin &&
                        <>
                            <div>

                                <h2>Registered Events</h2>
                                <section className="bg-blue-50 px-4 py-10">
                                    <div className="container-xl lg:container m-auto">
                                        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                                            {"Registered Events"}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {registrations && registrations.length > 0 ? (
                                                registrations.map((event) => (
                                                    <JobListing key={event._id} job={event} />
                                                ))
                                            ) : (
                                                <p>No events found.</p>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div>
                                <section className="bg-blue-50 px-4 py-10">
                                    <div className="container-xl lg:container m-auto">
                                        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                                            {"Created Events"}
                                        </h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {registrations && registrations.length > 0 ? (
                                                registrations.map((event) => (
                                                    <JobListing key={event._id} job={event} />
                                                ))
                                            ) : (
                                                <p>No events found.</p>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </>


                    }


                </div>
            </div>
        </>
    )
}