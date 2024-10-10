import { useState } from 'react';
import { Link } from "react-router-dom";
const DateRangeSelector = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');

    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`/api/range?startDate=${startDate}&endDate=${endDate}`);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            setEvents(data);
        }
        catch (err) {
            console.error('Error fetching events:', err);
            setError('Error fetching events.');
        }
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <div className=''>

                    <div id="date-range-picker" className="flex items-center mx-auto max-w-md mb-4 mt-6">
                        <div className="relative">
                            <label className='flex' htmlFor="startDate" id="startDate" name="startDate">
                                <span >
                                    Start Date
                                </span>
                                <input id="startDate" name="startDate" type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    required
                                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5" />
                            </label>
                        </div>
                        <span className="mx-4 text-gray-500">to</span>
                        <div className="relative">
                            <label className='flex' htmlFor="endDate" id="endDate" name="endDate">
                                <span className='mr-2'>
                                    End Date
                                </span>
                                <input id="endDate  " name="endDate" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    required
                                />
                            </label>
                        </div>
                    </div>
                    <button type="submit" className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full  focus:outline-none focus:shadow-outline mt-4 block  mx-auto max-w-md mb-4'
                    >submit</button>
                </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <div id="events" className='p-4 md:p-8 lg:p-12'>
                {events.length > 0 ? (
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-center">Index</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Event Name</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Event Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map((event, index) => (
                                <tr key={event.id}>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <Link
                                            to={event.status === 'pending' ? `/admin/${event._id}` : `/eventspage/${event._id}`}
                                            className={event.status === 'pending' ? 'text-red-500' : 'text-blue-600'}
                                        >
                                            {event.name}
                                        </Link>
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        {new Date(event.date).toLocaleDateString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No events found for the selected range.</p>
                )}
            </div>
        </>

    )
}

export default DateRangeSelector;