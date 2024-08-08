import React, { useEffect, useState } from 'react';
const AuthContext = React.createContext();
import { getUserProfile } from '../src/api';

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if(token){
                try{
                    const userProfile = await getUserProfile(token)
                    setUser(userProfile) 
                }
                catch(error){
                    console.error('Failed to fetch user profile: ', error)
                }
            }
            setLoading(false)
        }
        fetchUser()
    }, [])

    const isAuthenticated = !!user
    const isAdmin = user?.role === 'admin'

    return (
        <AuthContext.Provider value={{user, isAuthenticated, isAdmin, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)