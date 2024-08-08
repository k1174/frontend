import { toast } from "react-toastify";

const DownloadEmailsButton = ({job}) => {

    const downloadEmails = async () => {
        const eventId = job._id;
        const response = await fetch(`/service/getUsers/${eventId}`);
        if(!response.ok){
            console.error('Failed to download emails');
            toast.error('Failed to download emails');
            return;
        }

        const emails = await response.json();

        const csv = [
        `Emails : ${job.name}`, // Header
            ...emails
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'emails.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return <button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={downloadEmails}>Download Emails</button>;
};

export default DownloadEmailsButton;