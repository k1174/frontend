import JobListings from "../components/JobListings";

export default function AdminPage(){
    return (
        <>
        <div>hello</div>
        <JobListings isHome={false} isAdmin={true}/>
        </>
    )
}