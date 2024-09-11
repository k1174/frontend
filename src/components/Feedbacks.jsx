import { useEffect, useState } from 'react';

const Feedbacks = ({ job }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchFeedbacks = async () => {
            const response = await fetch(`/service/getFeedbacks/${job._id}`);
            if (!response.ok) {
                console.error('Failed to fetch feedbacks');
                return;
            }
            const result = await response.json();
            console.log(result)
            setFeedbacks(result);
            setIsLoading(false);
        };
        fetchFeedbacks();
    }, [job._id]);

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {"Feedbacks"}
            </h2>
            {isLoading ? (
                <p>Loading feedbacks...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {feedbacks.length > 0 ? (
                        feedbacks.map((feedback) => (
                            <div key={feedback._id} className="bg-white shadow-lg rounded-lg p-4">
                                <p className="font-semibold text-lg">feedback.name</p>
                                <p className="text-gray-500">feedback.email </p>
                                <p>{feedback.feedback}</p>
                                
                            </div>
                        ))
                    ) : (
                        <p>No feedbacks found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Feedbacks;