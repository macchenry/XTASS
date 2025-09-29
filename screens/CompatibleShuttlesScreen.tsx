

import React from 'react';
// Fix: Remove .ts and .tsx extensions from import paths.
import { Screen } from '../types';
import { ArrowLeftIcon, MapPinIcon, StarIcon } from '../components/Icons';
import { shuttleData } from '../data/shuttleData';

interface CompatibleShuttlesScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
}

const CompatibleShuttlesScreen: React.FC<CompatibleShuttlesScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
             <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('tripDetailsInput')}
                    className="flex items-center space-x-2 text-gray-600 bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors duration-300"
                    aria-label="Go back to trip details"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <div className="flex-grow text-center">
                     <h1 className="text-xl font-poppins font-bold text-gray-800">Available Shuttles</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>
            
            <main className="flex-grow p-4 md:p-6 space-y-4">
                 {shuttleData.map(shuttle => (
                    <div key={shuttle.id} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:shadow-xl transition-shadow duration-300">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:w-48" src={shuttle.image} alt={shuttle.name} />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <div>
                                    <div className="uppercase tracking-wide text-sm text-[#0A2A66] font-semibold">{shuttle.name}</div>
                                    <div className="flex items-center mt-1 text-gray-500">
                                        <MapPinIcon className="w-4 h-4 mr-1" />
                                        <span>{shuttle.location} - <span className="font-medium text-gray-700">{shuttle.distance}</span></span>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <StarIcon className="w-5 h-5 text-yellow-400" filled />
                                        <span className="ml-1 text-gray-800 font-bold">{shuttle.rating}</span>
                                        <span className="ml-2 text-gray-500 text-sm">({shuttle.reviews} reviews)</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-gray-800">
                                        <span className="text-xl font-bold">GH₵{shuttle.price}</span>
                                        <span className="text-sm text-gray-500"> /trip</span>
                                    </p>
                                    <button
                                        onClick={() => onNavigate('shuttleDriverProfile', shuttle.id)}
                                        className="px-4 py-2 bg-[#0A2A66] text-white text-sm font-medium rounded-md hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2A66] transition-colors"
                                    >
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default CompatibleShuttlesScreen;