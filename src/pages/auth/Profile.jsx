import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../../api';

export default function Profile() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

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
                    setUser(userProfile)
                    setLoading(false)

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

    if (!user) {
        return <div>Unable to fetch user data. Please try again later.</div>;
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
                    <h2>Registered Events</h2>
                    {/* <ul>
                    {user.events.map((event) => (
                        <li key={event.id}>
                        <p>{event.name}</p>
                        <p>{event.date}</p>
                        </li>
                        ))}
                        </ul> */}
                </div>
            </div>
        </>
    )
}