import Job from "../components/Job";
import {useLoaderData} from "react-router-dom";
import VerifyEvent from "../components/VerifyEvent";


export default function AdminJobPage() {
    const job = useLoaderData();
    return (
        <>
            <div>hello</div>
            <Job job={job} />
            <VerifyEvent job={job} />
        </>
    )
}