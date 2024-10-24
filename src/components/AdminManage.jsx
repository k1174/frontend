import { Form } from "react-router-dom";
import AddImages from "./AddImages";
import AddBrochure from "./AddBrochure";
import AddActivityReport from "./AddActivityReport";
import { useEffect, useState } from "react";
import PopupModal from "./PopupModal";
export default function AdminManage() {

    const [showPopupModal, setShowPopupModal] = useState(false);

    useEffect(() => {

        if (showPopupModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [showPopupModal])



    return (
        <>
            {/* <!-- Manage --> */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-6 ">
                <h3 className="text-xl font-bold mb-6">Manage Event</h3>
                <Form action="edit">
                    <button
                        className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block" >
                        Edit
                    </button>
                </Form>

                <Form method="post" action="delete"
                    onSubmit={(event) => {
                        if (!confirm("Please confirm you want to delete this record.")) {
                            event.preventDefault();
                        }
                    }}
                >

                    <button type="submit"
                        className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block  "
                    >
                        Delete
                    </button>
                </Form>
                <hr className="my-3" />
                <button onClick={() => { setShowPopupModal(true) }} className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
                    Manage Event Report
                </button>
                {showPopupModal && <PopupModal onClose={() => setShowPopupModal(false)} />
                }
                <AddBrochure />
                <AddImages />
                <AddActivityReport />

            </div>
        </>
    )
}