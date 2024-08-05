export default function Calender() {
    
    const eventTitle = "Event Name";
    const eventDescription = "Event description";
    const eventStartDate = "20240819T101500Z";
    const eventEndDate = "20240819T174500Z";
    const eventLocation = "seminar hall";
    //construct google calender url
    const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStartDate}/${eventEndDate}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}&trp=false`;
    
    const handleClick = () => {
        window.open(googleCalendarURL, '_blank');
    }


    return (
        <>
            <button onClick={handleClick }>Add To Calender</button>
        </>
    )
}


/*

-> npm i add-to-calendar-button

    <add-to-calendar-button 
        name="Event Name"
        description="Event description"
        startDate="2024-08-19"
        startTime="10:15"
        endTime="17:45"
        timeZone="Asia/Calcutta"
        location="seminar hall"
        organizer="Aaman|aman@gmail.com"
        options="'Apple','Google','iCal','Outlook.com','Yahoo'"
    ></add-to-calendar-button>

*/