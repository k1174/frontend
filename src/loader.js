import { getJobs } from "./api";
export async function loader({ params }) {

    const jobs = await getJobs(params.jobId);
    if (!jobs) {
        throw new Response("", {
            status: 404,
            statusText: "Not Found",
        })
    }
    return jobs;
}