export default function AddToCalFun(job){
    const eventTitle = job.name;
    const eventDescription = job.description;
    const eventStartDate = job.date.split('T')[0]; // Extract date part
    let eventTime = job.time;
    const eventEndDate = job.date.split('T')[0];
    const eventLocation = job.location;

    // Helper function to convert 12-hour time format to 24-hour time format
    function convertTo24HourFormat(time12h) {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (modifier === 'PM' && hours !== '12') {
            hours = parseInt(hours, 10) + 12;
        } else if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
        return `${hours}:${minutes}`;
    }

    // Helper function to format date to Google Calendar format
    function convertDateTime(date, time) {
        const time24h = convertTo24HourFormat(time);
        const dateTimeString = `${date}T${time24h}:00`;
        const dateTime = new Date(dateTimeString);
        if (isNaN(dateTime.getTime())) {
            console.error(`Invalid date-time: ${dateTimeString}`);
            return null;
        }
        const year = dateTime.getUTCFullYear();
        const month = `${dateTime.getUTCMonth() + 1}`.padStart(2, '0');
        const day = `${dateTime.getUTCDate()}`.padStart(2, '0');
        const hours = `${dateTime.getUTCHours()}`.padStart(2, '0');
        const minutes = `${dateTime.getUTCMinutes()}`.padStart(2, '0');
        const seconds = `${dateTime.getUTCSeconds()}`.padStart(2, '0');

        return `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
    }

    const eventStartTime = convertDateTime(eventStartDate, eventTime);
    const eventEndTime = convertDateTime(eventEndDate, eventTime);

    if (!eventStartTime || !eventEndTime) {
        console.error("Invalid start or end time");
        return;
    }

    console.log(eventStartTime);
    console.log(eventEndTime);

    // Construct Google Calendar URL
    const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStartTime}/${eventEndTime}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&trp=false`;
    window.open(googleCalendarURL, '_blank');
}