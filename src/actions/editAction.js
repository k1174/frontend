import { redirect } from "react-router-dom"
import { toast } from "react-toastify";

export async function action({ request, params }) {
    const formData = await request.formData();
    formData.append('id', params.jobId);

    const updates = Object.fromEntries(formData);
  

    const url = `/api${params.jobId}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates)
    })
    if (!response.ok) {
        console.error("Event Not Updated");
        toast.error("Event Edit Failed")
        return redirect(`/eventsPage/${params.jobId}`);
    }
    toast.success("Event Edited Successfully")
    console.log("Event Updated Successfully");
    // return redirect('/');
    return redirect(`/eventsPage/${params.jobId}`);
}
