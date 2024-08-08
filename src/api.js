async function getJobs(jobId) {

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

async function getUserProfile(token) {
    try{
        const response = await fetch('/auth/profile', {
            headers: {'Authorization': `Bearer ${token}`},
            });
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        return result
    } catch (error) {
        console.error('Error in getUserProfile:', error)
        throw error;
    }
}

export {
    getJobs,
    getUserProfile
}