import AddToCalFun from "../methods/AddToCalFun";

export default function AddToCal({job}) {
    const handleClick = async () => {
        AddToCalFun(job)
    }
    return (
        <section>
                <div className="container text-center">
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={handleClick}
                    >
                        Add to Calender
                    </button>
                </div>
            </section>
    );
}