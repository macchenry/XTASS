
// Fix: Implemented the TripDetailsInputScreen component.
import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeftIcon, UsersIcon, MapPinIcon, ArrowRightIcon } from '../components/Icons';

interface TripDetailsInputScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
}

const TripDetailsInputScreen: React.FC<TripDetailsInputScreenProps> = ({ onNavigate }) => {
    const [pickup, setPickup] = useState('Kotoka Int. Airport (T1)');
    const [destination, setDestination] = useState('');
    const [passengers, setPassengers] = useState(1);

    const handleFindShuttle = (e: React.FormEvent) => {
        e.preventDefault();
        if (!destination) {
            alert('Please enter a destination.');
            return;
        }
        onNavigate('compatibleShuttles');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="flex items-center space-x-2 text-gray-600 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Go back to dashboard"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div className="flex-grow text-center">
                     <h1 className="text-xl font-poppins font-bold text-gray-800">Instant Pickup Details</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-6">
                <form onSubmit={handleFindShuttle} className="bg-white p-6 rounded-xl shadow space-y-6">
                    <div>
                        <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                            Pickup Location
                        </label>
                        <div className="relative">
                            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="pickup"
                                type="text"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                            Destination
                        </label>
                         <div className="relative">
                            <MapPinIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                id="destination"
                                type="text"
                                placeholder="e.g. Accra Mall"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                required
                                autoFocus
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                            Passengers
                        </label>
                        <div className="relative">
                             <UsersIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                id="passengers"
                                value={passengers}
                                onChange={(e) => setPassengers(Number(e.target.value))}
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            >
                                {[1, 2, 3, 4, 5, 6].map(num => (
                                    <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0A2A66] to-orange-500 hover:from-blue-800 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
                    >
                        <span>Find Compatible Shuttles</span>
                        <ArrowRightIcon className="w-5 h-5" />
                    </button>
                </form>
            </main>
        </div>
    );
};

export default TripDetailsInputScreen;