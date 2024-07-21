export default async function getJobs(jobId) {

    try {
        const url = `/api?id=${jobId}`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        if (result.length === 0) {
            throw new Error('No jobs found'); 
        }
        console.log(result[0])
        return result[0]
    } catch (error) {
        console.error('Error in getJobs:', error)
        throw error;
    }
}