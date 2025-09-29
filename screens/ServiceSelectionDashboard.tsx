import React from 'react';
// Fix: Remove .ts and .tsx extensions from import paths to resolve module not found errors.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
import { ArrowRightIcon, CalendarIcon, UserCircleIcon, ClockIcon, ChevronRightIcon } from '../components/Icons';

interface ServiceSelectionDashboardProps {
    onNavigate: (screen: Screen, id?: number) => void;
}

const ServiceSelectionDashboard: React.FC<ServiceSelectionDashboardProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-[#0A2A66] p-4 flex justify-between items-center text-white sticky top-0 z-20 shadow-lg">
                <XtassLogo className="h-8" />
                <button onClick={() => onNavigate('accountProfile')} aria-label="Account Profile">
                    <UserCircleIcon className="w-8 h-8" />
                </button>
            </header>
            
            <main className="p-4 md:p-6 space-y-6">
                <div className="text-left">
                    <h1 className="text-3xl font-poppins font-bold text-gray-800">Hello, Customer!</h1>
                    <p className="text-gray-600 mt-1">Where would you like to go today?</p>
                </div>
                
                {/* Main Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ServiceCard
                        title="Instant Pickup"
                        description="Find a shuttle near you for an immediate ride."
                        icon={<ArrowRightIcon className="w-8 h-8 text-white" />}
                        onClick={() => onNavigate('tripDetailsInput')}
                        className="from-orange-500 to-amber-500"
                    />
                    <ServiceCard
                        title="Schedule a Trip"
                        description="Plan your shuttle ride for a future date and time."
                        icon={<CalendarIcon className="w-8 h-8 text-white" />}
                        onClick={() => onNavigate('schedulePlanning')}
                        className="from-blue-600 to-indigo-600"
                    />
                </div>
                
                {/* Quick Access / History */}
                <div className="bg-white p-4 rounded-xl shadow">
                     <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Trip History</h2>
                     <div className="space-y-3">
                        <HistoryItem
                            pickup="Kotoka Int. Airport (T1)"
                            destination="Accra Mall"
                            date="Oct 25, 203"
                            onClick={() => onNavigate('tripHistoryDetail', 1)}
                        />
                        <HistoryItem
                            pickup="East Legon, A&C Mall"
                            destination="University of Ghana"
                            date="Oct 22, 2023"
                            onClick={() => onNavigate('tripHistoryDetail', 2)}
                        />
                     </div>
                     <button 
                        onClick={() => onNavigate('serviceHistory')}
                        className="w-full text-center mt-4 py-2 px-4 border border-gray-300 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        View All History
                     </button>
                </div>
            </main>
        </div>
    );
};

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
    className: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, onClick, className }) => (
    <button onClick={onClick} className={`bg-gradient-to-br ${className} text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between h-48 transform hover:scale-105 transition-transform duration-300`}>
        <div className="text-left">
            <h2 className="text-2xl font-poppins font-bold">{title}</h2>
            <p className="mt-1 text-sm opacity-90">{description}</p>
        </div>
        <div className="self-end">
            {icon}
        </div>
    </button>
);

interface HistoryItemProps {
    pickup: string;
    destination: string;
    date: string;
    onClick: () => void;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ pickup, destination, date, onClick }) => (
    <button onClick={onClick} className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center">
        <div>
            <p className="font-semibold text-gray-800">{pickup} to {destination}</p>
            <p className="text-sm text-gray-500">{date}</p>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </button>
);

export default ServiceSelectionDashboard;