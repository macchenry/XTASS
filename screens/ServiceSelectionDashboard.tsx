import React from 'react';
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon, UserCircleIcon } from '../components/Icons';

interface ServiceSelectionDashboardProps {
    onNavigate: (screen: Screen) => void;
}

const ServiceSelectionDashboard: React.FC<ServiceSelectionDashboardProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-20">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => onNavigate('customerLogin')}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Go back to login"
                    >
                        <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                    </button>
                    <XtassLogo className="h-8" color="#0A2A66" />
                </div>
                <button className="flex items-center space-x-2 text-gray-700">
                    <UserCircleIcon className="w-8 h-8 text-gray-400" />
                    <span className="font-semibold">Ama T.</span>
                </button>
            </header>

            <main className="p-4 md:p-6 space-y-6">
                <div className="text-left">
                    <h1 className="text-3xl font-poppins font-bold text-gray-800">Hello, Ama!</h1>
                    <p className="text-gray-600 mt-1">Where would you like to go today?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Instant Pickup Card */}
                    <div
                        onClick={() => onNavigate('tripDetailsInput')}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-poppins font-semibold text-gray-900">Instant Pickup</h2>
                            <p className="text-gray-500 text-sm mt-1">Find a shuttle right now</p>
                        </div>
                        <div className="bg-[#0A2A66] p-3 rounded-full">
                            <ArrowRightIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    
                    {/* Schedule a Trip Card */}
                    <div
                        onClick={() => onNavigate('schedulePlanning')}
                        className="bg-white p-6 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-poppins font-semibold text-gray-900">Schedule a Trip</h2>
                            <p className="text-gray-500 text-sm mt-1">Plan a ride for later</p>
                        </div>
                         <div className="bg-orange-500 p-3 rounded-full">
                            <CalendarIcon className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

                {/* Service History */}
                 <div
                    onClick={() => onNavigate('serviceHistory')}
                    className="bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex items-center space-x-4"
                >
                    <ClockIcon className="w-8 h-8 text-gray-500" />
                    <div>
                        <h3 className="font-semibold text-gray-800">Service History</h3>
                        <p className="text-sm text-gray-500">View your past trips and bookings</p>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ServiceSelectionDashboard;