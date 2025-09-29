
import React from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { historyData } from '../data/historyData.ts';
import { ArrowLeftIcon, MapPinIcon, UserCircleIcon, CreditCardIcon } from '../components/Icons.tsx';

interface TripHistoryDetailScreenProps {
    onNavigate: (screen: Screen) => void;
    tripId: number | null;
}

const TripHistoryDetailScreen: React.FC<TripHistoryDetailScreenProps> = ({ onNavigate, tripId }) => {
    const trip = historyData.find(t => t.id === tripId);

    if (!trip) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">Trip Not Found</h2>
                <p className="text-gray-600 mt-2">Could not find details for this trip.</p>
                <button 
                    onClick={() => onNavigate('serviceHistory')}
                    className="mt-6 px-6 py-2 bg-[#0A2A66] text-white font-semibold rounded-lg hover:bg-[#082250] transition-colors"
                >
                    Back to History
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('serviceHistory')}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Trip Details</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="p-4 md:p-6 space-y-6">
                 {/* Map Placeholder */}
                <div className="h-48 bg-gray-300 rounded-xl shadow flex items-center justify-center">
                    <p className="text-gray-500">Map of Trip Route</p>
                </div>

                {/* Trip Info */}
                <div className="bg-white p-4 rounded-xl shadow space-y-4">
                    <div className="flex items-start space-x-3">
                        <MapPinIcon className="w-5 h-5 text-green-500 mt-1" />
                        <div>
                            <p className="text-sm text-gray-500">Pickup</p>
                            <p className="font-semibold text-gray-800">{trip.pickup}</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-3">
                        <MapPinIcon className="w-5 h-5 text-red-500 mt-1" />
                        <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-semibold text-gray-800">{trip.destination}</p>
                        </div>
                    </div>
                </div>

                {/* Driver & Vehicle */}
                <div className="bg-white p-4 rounded-xl shadow space-y-3">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-10 h-10 text-gray-400" />
                        <div>
                            <p className="font-semibold text-gray-800">{trip.driverName}</p>
                            <p className="text-sm text-gray-500">{trip.vehicle}</p>
                        </div>
                    </div>
                </div>

                {/* Receipt */}
                 <div className="bg-white p-4 rounded-xl shadow">
                     <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Receipt</h2>
                     <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between"><span>Base Fare</span><span>GH₵{trip.price.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Taxes &amp; Fees</span><span>GH₵{(trip.price * 0.1).toFixed(2)}</span></div>
                        <div className="flex justify-between border-t pt-2 mt-2 font-bold text-gray-900 text-base">
                            <span>Total Paid</span>
                            <span>GH₵{(trip.price * 1.1).toFixed(2)}</span>
                        </div>
                     </div>
                     <div className="flex items-center space-x-2 text-sm text-gray-500 mt-4 border-t pt-2">
                        <CreditCardIcon className="w-5 h-5"/>
                        <span>Paid with Mobile Money</span>
                     </div>
                </div>

                 <div className="flex space-x-3">
                    <button className="w-full text-center py-3 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100">
                        Get Help
                    </button>
                     <button className="w-full text-center py-3 px-4 border border-transparent bg-[#0A2A66] text-white rounded-lg font-semibold hover:bg-[#082250]">
                        Book Again
                    </button>
                 </div>
            </main>
        </div>
    );
};

export default TripHistoryDetailScreen;
