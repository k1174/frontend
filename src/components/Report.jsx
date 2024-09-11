import { toast } from "react-toastify";

const DownloadReportButton = ({ job }) => {
    const downloadReport = async () => {
        const eventId = job._id;
        const response = await fetch(`/service/getReport/${eventId}`);
        if (!response.ok) {
            console.error('Failed to download report');
            toast.error('Failed to download report');
            return;
        }

        const report = await response.json();

        const csv = [
            `Report : ${job.name}`, // Header
            ...report
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={downloadReport}>Download Report</button>;
}

export default DownloadReportButton;