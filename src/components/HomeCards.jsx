import Card from "./Card";
const HomeCards = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Card title="For Developers" description="Browse our React jobs and start your career today"
                            buttonText="Browse Jobs" buttonLink={"/jobs.html"} backgroundColor={"bg-gray-100"}
                            buttonColor={"bg-black"} hoverColor={"hover:bg-gray-700"}
                        />

                        <Card title="For Employers" description="List your job to find the perfect developer for the role"
                            buttonText="Add Job" buttonLink={"/add-job.html"} backgroundColor={"bg-indigo-100"}
                            buttonColor={"bg-indigo-500"} hoverColor={"hover:bg-indigo-600"}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCards;