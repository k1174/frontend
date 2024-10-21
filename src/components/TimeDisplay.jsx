import { Clock } from "lucide-react";
const TimeDisplay = ({ jobDate }) => {
    const eventDate = new Date(jobDate)
    //formate the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true, // Set to true if you want 12-hour format
    };

    const formattedTime = eventDate.toLocaleTimeString('en-US', timeOptions);

    return (
        <>
            <div className="flex items-center gap-1">
                <Clock size={20} strokeWidth={1} />
                {formattedTime}
            </div>
        </>
    )
}

export default TimeDisplay;