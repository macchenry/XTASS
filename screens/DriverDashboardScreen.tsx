import React, { useState } from 'react';
// Fix: Added .ts extension to import path.
import { Screen } from '../types.ts';
// Fix: Added .tsx extension to import paths.
import { ClockIcon, PowerIcon, StarIcon, UserCircleIcon, ChevronRightIcon } from '../components/Icons.tsx';
import { XtassLogo } from '../components/XtassLogo.tsx';

interface DriverDashboardScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverDashboardScreen: React.FC<DriverDashboardScreenProps> = ({ onNavigate }) => {
    const [isOnline, setIsOnline] = useState(false);

    // Simulate receiving a trip request
    const simulateTripRequest = () => {
        onNavigate('tripRequest');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
                <XtassLogo className="h-8" color="#0A2A66" />
                <div className="flex items-center space-x-4">
                    <span className={`text-sm font-semibold ${isOnline ? 'text-green-600' : 'text-gray-500'}`}>
                        {isOnline ? 'Online' : 'Offline'}
                    </span>
                    <button
                        onClick={() => setIsOnline(!isOnline)}
                        className={`${isOnline ? 'bg-green-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
                    >
                        <span className={`${isOnline ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
                    </button>
                </div>
            </header>

            <main className="p-4 md:p-6 space-y-6">
                <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
                    <UserCircleIcon className="w-16 h-16 text-gray-300" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Welcome, John</h1>
                        <div className="flex items-center text-sm text-gray-600">
                            <StarIcon className="w-4 h-4 text-yellow-400" filled />
                            <span className="ml-1 font-semibold">4.8</span>
                            <span className="ml-2">Toyota Hiace - GW 1234-20</span>
                        </div>
                    </div>
                </div>

                {isOnline ? (
                    <div className="text-center bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold text-gray-800">You are online</h2>
                        <p className="text-gray-600 mt-2">Waiting for trip requests...</p>
                        <div className="mt-4 animate-pulse text-gray-400">
                            <ClockIcon className="w-12 h-12 mx-auto" />
                        </div>
                        <button onClick={simulateTripRequest} className="mt-4 text-sm text-blue-600 hover:underline">
                            (Simulate Incoming Request)
                        </button>
                    </div>
                ) : (
                    <div className="text-center bg-white p-6 rounded-xl shadow">
                        <h2 className="text-xl font-semibold text-gray-800">You are offline</h2>
                        <p className="text-gray-600 mt-2">Go online to start receiving trip requests.</p>
                        <PowerIcon className="w-12 h-12 mx-auto mt-4 text-gray-300" />
                    </div>
                )}
                
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <button onClick={() => onNavigate('driverEarnings')} className="w-full flex items-center justify-between p-4 border-b hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="text-gray-500"><ClockIcon className="w-6 h-6" /></div>
                            <span className="font-semibold text-gray-800">Earnings</span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </button>
                     <button onClick={() => onNavigate('welcome')} className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                            <div className="text-red-500"><PowerIcon className="w-6 h-6" /></div>
                            <span className="font-semibold text-red-600">Logout</span>
                        </div>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

            </main>
        </div>
    );
};

export default DriverDashboardScreen;