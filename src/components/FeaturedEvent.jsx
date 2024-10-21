import { CalendarDays, Clock, MapPin } from "lucide-react"

const FeaturedEvent = () => {
    return (
        <section className="w-full py-8 md:py-16 lg:py-20 md:px-36 mt-24 md:mt-0">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6 text-gray-900">
                    Featured Event
                </h2>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-[500px] md:px-12">
                    {/* Left Side: Event Details */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                TechExpo 2024: Shaping the Future of Technology
                            </h3>
                            <p className="text-gray-600 mb-3">
                                Join industry leaders and innovators at the premier tech conference of the year.
                                Explore cutting-edge technology, network with experts, and attend insightful sessions that will shape the future.
                            </p>
                            <p className="text-gray-600 mb-3">
                                This year, we will focus on topics such as artificial intelligence, cybersecurity, and the Internet of Things.
                                Don&apos;t miss the opportunity to be part of this transformative event!
                            </p>

                        </div>

                        <div className="px-4 py-3 bg-gray-50">
                            <div className="flex  justify-between text-sm text-gray-500 mb-3">
                                <div className="flex items-center space-x-2">
                                    <CalendarDays className="h-4 w-4" />
                                    <span>October 5-7, 2024</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>ABC Convention Center</span>
                                </div>
                                <div className="flex items-center space-x-2 font-bold text-red-500">
                                    <Clock className="h-4 w-4" />
                                    <span>Registration ends in 10 days!</span>
                                </div>
                            </div>
                            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ">
                                Register Now
                            </button>
                        </div>
                    </div>
                    {/* Right Side: Event Image */}
                    <div className="flex justify-center items-center md:w-1/2   ">
                        <div className="w-auto flex justify-center h-3/4 ">

                            <img
                                alt="TechCon 2024"
                                className="object-cover rounded-lg h-full w-auto transition-transform duration-300 ease-in-out"
                                style={{ maxHeight: '100%', maxWidth: '100%' }}
                                src="https://technical.events.paruluniversity.ac.in/assets/img/intro-carousel/te82.JPG"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedEvent;