export default async function getJobs(jobId) {

    try {
        const url = `/api/${jobId}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        if (result.length === 0) {
            throw new Error('No jobs found'); 
        }
        return result
    } catch (error) {
        console.error('Error in getJobs:', error)
        throw error;
    }
}