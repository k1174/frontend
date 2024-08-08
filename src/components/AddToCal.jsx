import AddToCalFun from "../methods/AddToCalFun";

export default function AddToCal({ job }) {
    const handleClick = async () => {
        AddToCalFun(job)
    }
    return (
        <section>
            <div className="container text-center">
                <button
                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    onClick={handleClick}
                >
                    Add to Calender
                </button>
            </div>
        </section>
    );
}