const TimeDisplay = ({ jobDate }) => {
    const eventDate = new Date(jobDate)
    const date = new Date(eventDate.getTime() - (5 * 60 * 60 * 1000) - (30 * 60 * 1000));

    //formate the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Set to true if you want 12-hour format
    };

    const formattedTime = date.toLocaleTimeString('en-US', timeOptions);

    return (
        <>
            {formattedTime}
        </>
    )
}

export default TimeDisplay;