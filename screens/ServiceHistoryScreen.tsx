
import React from 'react';
import { Screen, TripHistory } from '../types';
import { ArrowLeftIcon, ChevronRightIcon } from '../components/Icons';
import { historyData } from '../data/historyData';

interface ServiceHistoryScreenProps {
    onNavigate: (screen: Screen, tripId?: number) => void;
}

const ServiceHistoryScreen: React.FC<ServiceHistoryScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Service History</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="p-4 md:p-6 space-y-4">
                {historyData.map((trip: TripHistory) => (
                    <div
                        key={trip.id}
                        onClick={() => onNavigate('tripHistoryDetail', trip.id)}
                        className="bg-white p-4 rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
                    >
                        <div className="flex-grow">
                            <p className="font-semibold text-gray-800">{trip.pickup} &rarr; {trip.destination}</p>
                            <p className="text-sm text-gray-500">{new Date(trip.date).toDateString()} - {trip.driverName}</p>
                            <div className="flex items-center mt-2">
                                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                                    trip.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                }`}>
                                    {trip.status}
                                </span>
                                <span className="ml-4 font-bold text-gray-800">GH₵{trip.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <ChevronRightIcon className="w-6 h-6 text-gray-400" />
                    </div>
                ))}
            </main>
        </div>
    );
};

export default ServiceHistoryScreen;
