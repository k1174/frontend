import { CalendarDays, Clock, MapPin, Users, ShieldCheck, UserPlus, Calendar, Settings, BarChart, ChevronRight } from "lucide-react"
// import img from "next/img"
import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Landing() {

  const handleGetStarted = (e) => {
    window.scrollTo({
      top: 500, // Scroll to 100 pixels down
      behavior: 'smooth' // Smooth scroll
    })
  }


  // State to hold the fetched data
  const pastEvents = [
    {
      _id: { $oid: "66e3e94b155bfbaacd4d471f" },
      userId: { $oid: "66e3e5cd155bfbaacd4d4714" },
      name: "Engineer's Day",
      location: "CV Raman Building, 109",
      description: "Explore Engineer's day events\n",
      details: "# Poster Making Competition\n🎨 Brush & Brilliance – Poster Making Contest\nBrush up on your creativity! 🎨✨\n\nThis Engineering Day, it’s time to express innovation through art.\n\nRegistration link: https://linktr.ee/Itpu_events\n\n⏰ Time: 10:00 AM onwards\n📍 Venue: L109, C.V. Raman Building\n🗓 Date: 14th September 2024\n\nBring your best ideas, and let your art do the talking! 🎨\n#BrushAndBrilliance\n\n<img src=\"https://i.ibb.co/xX0QMT8/image.png\" width=\"500\" height=\"600\">\n\n<hr>\n\n# CodeChef 2.0 - Coding Competition\n\n💻CodeChef 2.0 – Coding Competition\nReady to code your way to the top, enjoy our CODECHEF competition and prove your skills. 💻⚡\n\nRegistration link: https://linktr.ee/Itpu_events\n\n⏰ Time: 10:00 AM onwards\n📍 Venue: L109, C.V. Raman Building\n🗓 Date: 14th September 2024\n\nAre you the next CODECHEF? Let’s find out!\n\n<img src=\"https://i.ibb.co/vkCp3sG/459312617-3848477355430713-1188571699767181278-n.jpg\" width=\"500\" height=\"600\">\n\n<hr>\n\n\n# Ideathon Challenge - Innovate & Dominate!\n\n🚀 Ideathon Challenge – Innovate & Dominate!\nBring your ideas to life with our IDEATHON\n\nRegistration link: https://linktr.ee/Itpu_events\n\n⏰ Time: 12:30 PM onwards\n📍 Venue: L109, C.V. Raman Building\n🗓 Date: 14th September 2024\n\nReady to make an impact? Let's turn ideas into reality! 💥\n\n<img src=\"https://i.ibb.co/0D1JVn2/image.png\" alt=\"image\" border=\"0\" width=\"500\" height=\"600\">\n\n<hr>",
      type: "Educational",
      department: "IT",
      date: { $date: "2024-09-14T04:30:00.000Z" },
      time: "10:00",
      price: 0,
      organiserName: "Himani Parmar, Assistance Professor",
      organiserEmail: "Himani.parmar270199@paruluniversity.ac.in",
      organiserDepartment: "IT Department",
      status: "approved",
      createdAt: { $date: "2024-09-13T07:27:07.077Z" },
      __v: 0,
    },
    {
      _id: { $oid: "66e3e94b155bfbaacd4d471g" },
      userId: { $oid: "66e3e5cd155bfbaacd4d4715" },
      name: "Tech Fest 2024",
      location: "Main Auditorium",
      description: "Join us for a day of technology and innovation!",
      details: "# Keynote Speaker: Jane Doe\nLearn from industry experts about the latest in tech.\n\n⏰ Time: 9:00 AM - 5:00 PM\n📍 Venue: Main Auditorium\n🗓 Date: 15th October 2024\n\n<img src=\"https://res.cloudinary.com/dnnmo7ewk/image/upload/v1728057600/images/xwlx5oejyjxlahnvak1w.jpg\" width=\"500\" height=\"600\">\n\n<hr>",
      type: "Conference",
      department: "Engineering",
      date: { $date: "2024-10-15T04:30:00.000Z" },
      time: "09:00",
      price: 20,
      organiserName: "John Smith, Event Coordinator",
      organiserEmail: "john.smith@example.com",
      organiserDepartment: "Engineering Department",
      status: "approved",
      createdAt: { $date: "2024-10-14T07:27:07.077Z" },
      __v: 0,
    },
    {
      _id: { $oid: "66e3e94b155bfbaacd4d471h" },
      userId: { $oid: "66e3e5cd155bfbaacd4d4716" },
      name: "Coding Bootcamp",
      location: "Room 202",
      description: "A weekend bootcamp to improve your coding skills!",
      details: "# Learn from the Best\nHands-on sessions with experienced developers.\n\n⏰ Time: 10:00 AM - 4:00 PM\n📍 Venue: Room 202\n🗓 Date: 22nd October 2024\n\n<img src=\"https://res.cloudinary.com/dzdt11nsx/image/upload/v1728322096/WhatsApp_Image_2024-10-04_at_17.14.12_aa2937c7_ewqurt.jpg\" width=\"500\" height=\"600\">\n\n<hr>",
      type: "Workshop",
      department: "Computer Science",
      date: { $date: "2024-10-22T04:30:00.000Z" },
      time: "10:00",
      price: 15,
      organiserName: "Emily White, Workshop Leader",
      organiserEmail: "emily.white@example.com",
      organiserDepartment: "Computer Science Department",
      status: "approved",
      createdAt: { $date: "2024-10-21T07:27:07.077Z" },
      __v: 0,
    },
  ];

  // useEffect(() => {
  //   // Function to fetch data from the API
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get('https://eventscheduling.vercel.app/api/past'); // Replace with your API endpoint
  //       if(response){
  //         setPastEvents(response.data); // Assuming the response data is an array of objects
  //         console.log(response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchEvents(); // Call the fetch function
  // }, []); // Empty dependency array means this effect runs once after the initial render




  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">

        <section className="w-full h-[600px] py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container mx-auto px-4 md:px-36">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex-1 text-center md:text-left space-y-6 md:-translate-y-24 md:translate-x-20">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
                  Event Management Simplified
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Streamline your event planning process with our comprehensive platform. From creation to execution, we've got you covered.
                </p>
                <div className="space-x-4 mt-4 space-y-4">
                  <button onClick={handleGetStarted} className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
                    Get Started!
                  </button>
                  <button className="px-8 py-3 text-blue-600 bg-white border border-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
                    <a href='/addjob'  >  Schedule Event</a>


                  </button>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center md:-translate-y-24">
                <img
                  src="https://img.freepik.com/free-vector/online-booking-services-abstract-concept-illustration_335657-3908.jpg?t=st=1729282787~exp=1729286387~hmac=df0e9872ed39a3a0f07afd925b10e4000aeff2a52646ac1d85bc7411e7c531f3&w=740" // Replace with your image URL
                  alt="Event Management"
                  className="w-full max-w-md h-auto " // Adjusted size and styling
                />
              </div>
            </div>
          </div>
        </section>



        <section className="w-full py-8 md:py-16 lg:py-20 md:px-36 mt-24 md:mt-0">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-6 text-gray-900">
              Featured Event
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row h-[500px] px-12">
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
                    Don't miss the opportunity to be part of this transformative event!
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



        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 px-4 md:px-36">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl -translate-y-12 mb-8 text-center text-gray-900">Streamlined Event Management Process</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {[
                { title: "Create", description: "Set up your event with our intuitive interface" },
                { title: "Manage", description: "Handle registrations, invitations, and RSVPs effortlessly" },
                { title: "Execute", description: "Ensure smooth check-ins and engage attendees" }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 md:px-36">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="flex items-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-gray-900">
              Past Events
              <a
                href="/eventspage"
                className="ml-2 flex items-center text-black-500 hover:text-blue-600 transition-colors"
              >
                <FaArrowRight className="h-12 w-12" /> {/* Adjust the icon size as needed */}
              </a>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, i) => {
                // Calculate days ago
                const eventDate = new Date(event.date.$date);
                const daysAgo = Math.floor((Date.now() - eventDate) / (1000 * 60 * 60 * 24));

                return (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    style={{ height: '400px' }} // Set a fixed height for the card
                  >
                    <div className="p-6 flex flex-col h-full">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{event.name}</h3>
                      <div className="aspect-video relative mb-4" style={{ height: '200px' }}>
                        <img
                          alt={event.name}
                          className="object-cover rounded-lg w-full h-full"
                          src={
                            event.details.match(/<img src="(.*?)"/)[1] || 'https://res.cloudinary.com/dzdt11nsx/image/upload/v1728322526/cs1_pc5eza.jpg'
                          } // Extract the first image from the details
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <CalendarDays className="h-4 w-4" />
                          <span > <span className="underline underline-offset-2">Completed</span> {`${daysAgo} days ago`}</span> {/* Display days ago */}
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50">
                      <button className="w-full px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-gray-50 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 md:px-20">
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

        <section className="w-full py-12 md:py-24 lg:py-32 md:px-36">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Elevate Your Events with Cutting-Edge Technology
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Our platform offers state-of-the-art tools for event creation, management, and analysis. Designed to meet the needs of modern event professionals.
                </p>
                <ul className="grid gap-3 py-4">
                  {[
                    { icon: Calendar, text: "Intelligent event planning and scheduling" },
                    { icon: Settings, text: "Customizable workflows and automation" },
                    { icon: Users, text: "Advanced attendee management and engagement tools" },
                    { icon: BarChart, text: "Comprehensive analytics and ROI tracking" }
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
                    Request a Demo
                  </button>
                  <button className="px-8 py-3 text-blue-600 bg-white border border-blue-600 hover:bg-gray-50 rounded-md font-medium transition-colors">
                    Explore Features
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center h-full">
                <img
                  alt="Event Management Dashboard"
                  className="rounded-xl object-cover object-center w-full h-auto lg:w-[600px] lg:h-[400px]" // Adjust the size here
                  src='https://res.cloudinary.com/dzdt11nsx/image/upload/v1729281241/event_schedular_snkc5p.png'
                />
              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}



