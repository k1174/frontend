import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const addAction = async ({ request }) => {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const url = '/api/addevent';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
    })
    if (!response.ok) {

        // throw new Error('Failed to add job');
        console.error('Failed to add job');
        toast.error("Event creation Failed")
        return redirect(`/eventsPage/`);
    }
    toast.success("Event Added Successfully")
    console.log("Event added successfully");
    // return redirect('/');
    return redirect(`/eventsPage/`);

}

export default addAction;