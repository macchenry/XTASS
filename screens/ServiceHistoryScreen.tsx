import React from 'react';
// Fix: Removed .ts extension from import path.
import { Screen } from '../types';
import { historyData } from '../data/historyData';
// Fix: Removed .tsx extension from import path.
import { ArrowLeftIcon, CheckCircleIcon, XCircleIcon } from '../components/Icons';

interface ServiceHistoryScreenProps {
    onNavigate: (screen: Screen, tripId?: number) => void;
}

const ServiceHistoryScreen: React.FC<ServiceHistoryScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('accountProfile')}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Trip History</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="p-4 md:p-6 space-y-4">
                {historyData.map((trip) => (
                    <button 
                        key={trip.id}
                        onClick={() => onNavigate('tripHistoryDetail', trip.id)}
                        className="w-full bg-white p-4 rounded-xl shadow hover:shadow-md transition-shadow text-left flex justify-between items-center"
                    >
                        <div>
                            <p className="font-semibold text-gray-800">{trip.destination}</p>
                            <p className="text-sm text-gray-500">{trip.date} &bull; {trip.driverName}</p>
                            <p className="text-sm text-gray-500">{trip.vehicle}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg text-gray-900">GH₵{trip.price.toFixed(2)}</p>
                            <div className={`flex items-center justify-end space-x-1 text-sm ${trip.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>
                                {trip.status === 'Completed' ? <CheckCircleIcon className="w-4 h-4" /> : <XCircleIcon className="w-4 h-4" />}
                                <span>{trip.status}</span>
                            </div>
                        </div>
                    </button>
                ))}
            </main>
        </div>
    );
};

export default ServiceHistoryScreen;