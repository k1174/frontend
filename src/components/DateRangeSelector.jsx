import { useState } from 'react';
import { Link } from "react-router-dom";
// import * as XLSX from 'xlsx';
import Spinner from './Spinner';

// Function to generate Excel file
// const generateExcel = (events) => {
//     const data = events.map((event, index) => ({
//         Index: index + 1,
//         'Event Name': event.name,
//         'Registrations': event.registrationCount,
//         'Organiser Email': event.organiserEmail,
//         'Event Date': new Date(event.date).toLocaleDateString(),
//         'Event Time': event.time,
//     }));
//     // const worksheet = XLSX.utils.json_to_sheet(data);

//     // const workbook = XLSX.utils.book_new();
//     // XLSX.utils.book_append_sheet(workbook, worksheet, "Events_List");

//     // Create a Blob and use it to download the file
//     // XLSX.writeFile(workbook, "Events_List.xlsx");
// };

const DateRangeSelector = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [events, setEvents] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handelSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const response = await fetch(`/api/range?startDate=${startDate}&endDate=${endDate}`);
            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            setEvents(data);
            setError('');
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            console.error('Error fetching events:', err);
            setError('Error fetching events.');
        }
    }

    return (
        <>
            {loading && <Spinner />}
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
                    <>
                        <button
                            className="bg-blue-700 text-white py-2 px-4 rounded my-4"
                            // onClick={() => generateExcel(events,)}
                        >
                            Download Excel
                        </button>
                        <div className="relative overflow-x-auto">
                            <table className="min-w-full border border-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Index</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Event Name</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Registrations</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Organiser Email</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Event Date</th>
                                        <th className="border border-gray-300 px-4 py-2 text-center">Event Time</th>
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
                                            <td className="border border-gray-300 px-4 py-2 text-center">{event.registrationCount}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">{event.organiserEmail}</td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {new Date(event.date).toLocaleDateString()}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2 text-center">
                                                {event.time}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </>

                ) : (
                    <p>No events found for the selected range.</p>
                )}
            </div>
        </>

    )
}

export default DateRangeSelector;