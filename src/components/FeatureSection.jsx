import { Calendar, Users, Bell, CheckCircle } from "lucide-react"

const FeatureSection = () => {
    return (
        <>
            {/* Feature section */}
            <div className="pb-12 pt-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Everything you need to manage university events
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Our platform provides a comprehensive suite of tools to make event planning and management a breeze.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <Calendar className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Easy Scheduling</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Quickly schedule events with our intuitive calendar interface. Avoid conflicts and optimize venue usage.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Attendee Management</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Keep track of RSVPs, send reminders, and manage attendee lists with ease.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <Bell className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Notifications</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Automated notifications keep everyone informed about event updates and reminders.
                                </dd>
                            </div>

                            <div className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <CheckCircle className="h-6 w-6" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Event Approval</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Streamline the event approval process with customizable workflows for different departments.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeatureSection;