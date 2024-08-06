export default function convertTo24HourFormat(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (modifier === 'PM' && hours !== '12') {
        hours = parseInt(hours, 10) + 12;
    } else if (modifier === 'AM' && hours === '12') {
        hours = '00';
    }
    return `${hours}:${minutes}`;
}