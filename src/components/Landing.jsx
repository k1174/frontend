import { Users, ShieldCheck, UserPlus, ChevronRight } from "lucide-react"

export default function Landing() {
    return (
        <div className="flex flex-col ">
            <main className="flex-1">
                <section className="w-full pb-16    md:px-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-900">Comprehensive Solutions for Event Professionals</h2>
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                            {[
                                {
                                    title: "Event Organizers",
                                    icon: Users,
                                    features: [
                                        "Advanced event creation tools",
                                        "Customizable registration workflows",
                                        "Integrated marketing solutions",
                                        "Real-time analytics dashboard"
                                    ]
                                },
                                {
                                    title: "Event Administrators",
                                    icon: ShieldCheck,
                                    features: [
                                        "Granular access control",
                                        "Comprehensive financial tracking",
                                        "Vendor and sponsor management",
                                        "Advanced reporting capabilities"
                                    ]
                                },
                                {
                                    title: "Attendees",
                                    icon: UserPlus,
                                    features: [
                                        "Streamlined registration process",
                                        "Personalized event schedules",
                                        "Networking opportunities",
                                        "Mobile check-in and e-tickets"
                                    ]
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                    <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{solution.title}</h3>
                                    <ul className="space-y-2">
                                        {solution.features.map((feature, i) => (
                                            <li key={i} className="flex items-center">
                                                <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}