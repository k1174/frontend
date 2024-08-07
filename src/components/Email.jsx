const DownloadEmailsButton = () => {
    const downloadEmails = async () => {
        const response = await fetch('/api/emails');
        const emails = await response.json();
        const csv = emails.map(email => email.email).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'emails.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return <button onClick={downloadEmails}>Download Emails</button>;
};

export default DownloadEmailsButton;