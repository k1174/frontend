import { useAuth } from "../../context/AuthContext";
import JobListings from "../components/JobListings";

const Past = () => {
    const {isAdmin} = useAuth
    return(
        <JobListings isHome={false} isAdmin={isAdmin}/>
    );
}

export default Past;