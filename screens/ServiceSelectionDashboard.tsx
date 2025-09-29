
import React from 'react';
// Fix: Add .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { 
    ZapIcon, 
    CalendarClockIcon, 
    HomeIcon, 
    HistoryIcon, 
    UserCircleIcon, 
    PhoneIcon, 
    WhatsAppIcon 
} from '../components/Icons.tsx';

interface ServiceSelectionDashboardProps {
    onNavigate: (screen: Screen) => void;
}

const ServiceSelectionDashboard: React.FC<ServiceSelectionDashboardProps> = ({ onNavigate }) => {
    const userName = "Kwame"; // Placeholder for user's name

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col pb-28">
            {/* Header */}
            <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('welcome')} aria-label="Go to welcome screen">
                    <XtassLogo className="h-8" color="#0A2A66" />
                </button>
                <div className="flex items-center space-x-3">
                    <span className="text-gray-700 font-medium hidden sm:inline">Welcome, {userName}!</span>
                    <UserCircleIcon className="w-8 h-8 text-gray-400" />
                </div>
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-8">
                {/* Service Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <button
                        onClick={() => onNavigate('tripDetailsInput')}
                        className="bg-gradient-to-br from-blue-600 to-[#0A2A66] text-white rounded-xl shadow-lg p-6 text-left flex flex-col justify-between h-48 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        <ZapIcon className="w-12 h-12 text-yellow-300" />
                        <div>
                            <h2 className="text-2xl font-poppins font-bold">Instant Pickup</h2>
                            <p className="text-blue-100">Immediate airport transfer</p>
                        </div>
                    </button>
                    <button
                        onClick={() => onNavigate('schedulePlanning')}
                        className="bg-gradient-to-br from-gray-700 to-gray-900 text-white rounded-xl shadow-lg p-6 text-left flex flex-col justify-between h-48 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        <CalendarClockIcon className="w-12 h-12 text-teal-300" />
                        <div>
                            <h2 className="text-2xl font-poppins font-bold">Scheduled Ride</h2>
                            <p className="text-gray-300">Pre-booked shuttle service</p>
                        </div>
                    </button>
                </div>

                {/* Quick Stats */}
                <div>
                    <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-2xl font-bold text-[#0A2A66]">12</p>
                            <p className="text-sm text-gray-500">Recent Trips</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-2xl font-bold text-[#0A2A66]">3h 45m</p>
                            <p className="text-sm text-gray-500">Time Saved</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <p className="text-2xl font-bold text-[#0A2A66]">4.8 ★</p>
                            <p className="text-sm text-gray-500">My Rating</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Floating Action Buttons */}
            <div className="fixed bottom-24 right-4 space-y-3 z-30">
                 <a href="https://wa.me/233559369950" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors" aria-label="Contact support on WhatsApp">
                    <WhatsAppIcon className="w-8 h-8"/>
                </a>
                <a href="tel:+233559369950" className="bg-red-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors" aria-label="Call emergency support">
                    <PhoneIcon className="w-7 h-7"/>
                </a>
            </div>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t-md p-2 flex justify-around z-20">
                <button className="flex flex-col items-center justify-center w-full text-[#0A2A66] py-1 rounded-md">
                    <HomeIcon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">Home</span>
                </button>
                <button className="flex flex-col items-center justify-center w-full text-gray-500 hover:text-[#0A2A66] py-1 rounded-md">
                    <HistoryIcon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">History</span>
                </button>
                <button className="flex flex-col items-center justify-center w-full text-gray-500 hover:text-[#0A2A66] py-1 rounded-md">
                    <UserCircleIcon className="w-6 h-6 mb-1" />
                    <span className="text-xs font-medium">Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default ServiceSelectionDashboard;