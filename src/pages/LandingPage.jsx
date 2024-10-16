import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/image.png';
import { Calendar, MapPin, User } from "lucide-react";
import axios from "axios";
import moment from 'moment';
import { HiClock } from 'react-icons/hi';

export default function LandingPage() {
    const [pastEvent, setPastEvent] = useState([]);
    const [upcomingEvent, setUpcomingEvent] = useState([]);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        axios.get('http://localhost:3000/api/past')
            .then((res) => {
                setPastEvent(res.data.slice(0, 6));
            }).catch((e) => {
                console.log("error" + e);
            });

        axios.get('http://localhost:3000/api')
            .then((res) => {
                setUpcomingEvent(res.data.slice(0, 6));
            }).catch((e) => {
                console.log("error" + e);
            });

        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                setScrollDirection("down");
            } else if (window.scrollY < lastScrollY) {
                setScrollDirection("up");
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const getTimeUntilEvent = (eventDate) => {
        const now = moment();
        const eventMoment = moment(eventDate);
        const duration = moment.duration(eventMoment.diff(now));

        const days = Math.floor(duration.asDays());
        const hours = Math.floor(duration.asHours()) % 24;

        return `${days} days ${hours} hours left`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header with sticky behavior */}
            <header
                className={`px-12 lg:px-6 h-14 flex items-center fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-16" : "translate-y-0"}`}
            >
                <Link className="px-24 flex items-center justify-center" to="/">
                    <img className="h-10 w-auto" src={logo} alt="Events" />
                    <span className="hidden md:block text-2xl font-bold ml-2 text-indigo-600">Event Schedular</span>
                </Link>
                <nav className="ml-auto px-24 flex gap-4 sm:gap-6">
                    <Link className="text-md font-medium text-gray-700 hover:text-indigo-600" to="/">Home</Link>
                    <Link className="text-md font-medium text-gray-700 hover:text-indigo-600" to="/eventPage">Events</Link>
                    <Link className="text-md font-medium text-gray-700 hover:text-indigo-600" to="/addjob">Add Event</Link>
                    <Link className="text-md font-medium text-gray-700 hover:text-indigo-600" to="/login">Login</Link>
                </nav>
            </header>

            {/* Main content */}
            <main className="flex-1 mt-14">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl md:text-6xl">Welcome to Event Schedular</h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg">
                                    Discover, register, and create exciting events. Join our community of event enthusiasts and organizers.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">Explore Events</button>
                                <button className="px-4 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition">Add Your Event</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}

                <section className="w-full px-12 py-12 md:py-24 lg:py-32 bg-white">
    <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl mb-8">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvent.map((event) => (
                <div key={event.id} className="group relative border rounded-lg shadow-lg p-4 bg-white">
                    {/* Countdown Timer with Clock Icon at Top Right */}
                    <div className="absolute top-4 right-4 flex items-center bg-gray-800 text-white text-sm px-3 py-1 rounded-lg">
                        <HiClock className="w-4 h-4 mr-1" />
                        <span>{getTimeUntilEvent(event.date)}</span>
                    </div>
                    <Link to="/events">
                        {/* Category */}
                        <span className="block text-sm text-gray-500 mb-2">{event.category}</span>
                        {/* Event Title */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                        {/* Event Description */}
                        <p className="text-gray-600 mb-4">{event.description}</p>
                        {/* Price */}
                        <span className="block font-semibold text-gray-700">Price: {event.price}</span>
                        {/* Event Date */}
                        <span className="block text-gray-500 mt-1">
                            {moment(event.date).format('MM/DD/YYYY HH:mm')}
                        </span>
                        {/* Event Location */}
                        <span className="block text-gray-500 mt-1">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {event.location}
                        </span>
                    </Link>

                    {/* Read More Button */}
                    <div className="mt-4 text-right">
                        <Link to={`/events/${event.id}`} className="inline-block px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-500 transition">
                            Read More
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-10 text-center">
            <button className="px-4 py-2 border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-100 transition">
                View All Upcoming Events
            </button>
        </div>
    </div>
</section>





                {/* Past Events Section */}
                <section className="w-full px-12 py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl mb-8"><span className="underline underline-offset-8">Past</span> Events</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {pastEvent.map((event) => (
                                <div key={event.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                                    <Link to="/past-events">
                                        <img
                                            src={event.images && event.images.length > 0 ? event.images[0] : ''}
                                            alt="Past Event"
                                            className="w-full opacity-80 object-cover transition-transform hover:scale-105 aspect-video"
                                            width={400}
                                            height={300}
                                        />
                                        <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:opacity-75" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                                            <div className="flex items-center text-white text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span>{moment(event.date).format('D MMM, YYYY, hA')}</span>
                                            </div>
                                            <div className="flex items-center text-white text-sm mt-1">
                                                <User className="w-4 h-4 mr-2" />
                                                <span>Attendees</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-md px-12 text-gray-500 dark:text-gray-400">
                    © 2024 Event Schedular. All rights reserved.
                </p>
                <nav className="sm:ml-auto px-12 flex gap-4 sm:gap-6">
                    <Link className="text-md hover:underline underline-offset-4" href="#">
                        Past Events
                    </Link>
                    <Link className="text-md hover:underline underline-offset-4" href="#">
                        Admin Pannel
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
