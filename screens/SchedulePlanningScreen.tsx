import React, { useState } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths to resolve module not found errors.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
// Fix: Remove .ts and .tsx extensions from import paths to resolve module not found errors.
import { ArrowLeftIcon, CalendarIcon, ClockIcon, UsersIcon, BriefcaseIcon, MapPinIcon, ArrowRightIcon, CheckCircleIcon } from '../components/Icons';

interface SchedulePlanningScreenProps {
    onNavigate: (screen: Screen) => void;
}

const SchedulePlanningScreen: React.FC<SchedulePlanningScreenProps> = ({ onNavigate }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [passengers, setPassengers] = useState(1);
    const [luggage, setLuggage] = useState(0);
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [specialRequests, setSpecialRequests] = useState({
        childSeat: false,
        wheelchair: false,
    });

    const handleRequestChange = (request: keyof typeof specialRequests) => {
        setSpecialRequests(prev => ({ ...prev, [request]: !prev[request] }));
    };
    
    const handleFindShuttles = (e: React.FormEvent) => {
        e.preventDefault();
        onNavigate('compatibleShuttles');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="flex items-center space-x-2 text-gray-600 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Go back to dashboard"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div className="flex-grow text-center absolute left-1/2 -translate-x-1/2">
                     <h1 className="text-xl font-poppins font-bold text-gray-800">Schedule a Trip</h1>
                </div>
                <button onClick={() => onNavigate('serviceSelectionDashboard')} aria-label="Go to dashboard">
                    <XtassLogo className="h-8" color="#0A2A66" />
                </button>
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-6">
                {/* Progress Indicator */}
                <div className="w-full text-center">
                    <p className="text-sm font-medium text-gray-600">Step 1 of 2: Trip Details</p>
                    <div className="bg-gray-200 rounded-full h-1.5 mt-1 mx-auto max-w-xs">
                        <div className="bg-[#0a2a66] h-1.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                </div>

                <form onSubmit={handleFindShuttles} className="bg-white p-6 rounded-xl shadow space-y-6">
                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <div className="relative">
                                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input id="date" type="date" value={date} onChange={e => setDate(e.target.value)} required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md sm:text-sm appearance-none" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                            <div className="relative">
                                <ClockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md sm:text-sm appearance-none" />
                            </div>
                        </div>
                    </div>

                    {/* Passengers and Luggage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="passengers-sch" className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
                            <div className="relative">
                                <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <select id="passengers-sch" value={passengers} onChange={e => setPassengers(Number(e.target.value))} className="block w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-md sm:text-sm appearance-none">
                                    {[...Array(15).keys()].map(n => <option key={n+1} value={n+1}>{n+1}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="luggage" className="block text-sm font-medium text-gray-700 mb-1">Luggage</label>
                            <div className="relative">
                                <BriefcaseIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                <select id="luggage" value={luggage} onChange={e => setLuggage(Number(e.target.value))} className="block w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded-md sm:text-sm appearance-none">
                                    {[...Array(11).keys()].map(n => <option key={n} value={n}>{n}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    {/* Locations */}
                    <div>
                        <label htmlFor="pickup-sch" className="block text-sm font-medium text-gray-700 mb-1">Pickup Location</label>
                        <div className="relative">
                            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input id="pickup-sch" type="text" placeholder="e.g. Your Hotel or Address" value={pickup} onChange={e => setPickup(e.target.value)} required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="destination-sch" className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                        <div className="relative">
                            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input id="destination-sch" type="text" placeholder="e.g. Kotoka Int. Airport" value={destination} onChange={e => setDestination(e.target.value)} required className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                    </div>

                    {/* Special Requirements */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requirements</label>
                        <div className="space-y-2">
                             <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" checked={specialRequests.childSeat} onChange={() => handleRequestChange('childSeat')} className="h-4 w-4 text-[#0a2a66] border-gray-300 rounded focus:ring-[#0a2a66]" />
                                <span className="text-gray-700">Child Seat Needed</span>
                            </label>
                             <label className="flex items-center space-x-3 cursor-pointer">
                                <input type="checkbox" checked={specialRequests.wheelchair} onChange={() => handleRequestChange('wheelchair')} className="h-4 w-4 text-[#0a2a66] border-gray-300 rounded focus:ring-[#0a2a66]" />
                                <span className="text-gray-700">Wheelchair Accessible</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r-lg flex items-center space-x-3 text-sm">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <p className="text-green-800">
                            Great! We have shuttles available that match your requirements.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0A2A66] to-orange-500 hover:from-blue-800 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Find Available Shuttles</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                </form>
            </main>
        </div>
    );
};

export default SchedulePlanningScreen;