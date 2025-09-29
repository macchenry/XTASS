
import React, { useState } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { UserCircleIcon, PhoneIcon, WhatsAppIcon, StarIcon } from '../components/Icons.tsx';
import { shuttleData } from '../data/shuttleData.ts';

interface RealTimeTripTrackingScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

const RealTimeTripTrackingScreen: React.FC<RealTimeTripTrackingScreenProps> = ({ onNavigate, shuttleId }) => {
    const [isCanceling, setIsCanceling] = useState(false);

    // If no shuttle is selected, we can't show this screen.
    if (shuttleId === null) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">Error: No Active Trip</h2>
                <p className="text-gray-600 mt-2">Could not find trip details. Please start a new booking.</p>
                <button 
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="mt-6 px-6 py-2 bg-[#0A2A66] text-white font-semibold rounded-lg hover:bg-[#082250] transition-colors"
                >
                    Go to Dashboard
                </button>
            </div>
        );
    }

    const shuttle = shuttleData.find(s => s.id === shuttleId)!;
    const { name, driver, rating } = shuttle;

    const handleCancel = async () => {
        // 1. Trigger a confirmation modal
        if (window.confirm("Are you sure you want to cancel this trip?")) {
            setIsCanceling(true);
            
            // 2. Simulate backend API call with a delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // 3. On success, show message and redirect
            alert("Your trip has been canceled.");
            onNavigate('shuttleDriverProfile', shuttle.id);

            setIsCanceling(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
            {/* Map Placeholder */}
            <div className="flex-grow bg-gray-300 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1578589320348-927653299440?q=80&w=1974&auto=format&fit=crop" 
                    alt="Map showing shuttle location" 
                    className="w-full h-full object-cover"
                />
                 <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg text-sm">
                    <p className="font-bold">ETA: 3 minutes</p>
                    <p className="text-gray-600">Your driver, {driver.name.split(' ')[0]}, is just around the corner.</p>
                 </div>
            </div>
            
            {/* Bottom Driver Info Panel */}
            <div className="bg-white p-4 shadow-lg border-t border-gray-200 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-12 h-12 text-gray-400"/>
                        <div>
                            <h2 className="font-bold text-lg text-gray-800">{driver.name}</h2>
                            <p className="text-gray-500 text-sm">{name} - {driver.licensePlate}</p>
                            <div className="flex items-center text-sm mt-0.5">
                                <StarIcon className="w-4 h-4 text-yellow-500" filled/>
                                <span className="font-semibold text-gray-800 ml-1">{rating}</span>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-center space-x-2">
                        <a href="tel:+233559369950" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            <PhoneIcon className="w-5 h-5 text-gray-700"/>
                        </a>
                        <a href="https://wa.me/233559369950" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            <WhatsAppIcon className="w-5 h-5 text-green-600"/>
                        </a>
                    </div>
                </div>
                
                <div className="flex space-x-2">
                     <button 
                        onClick={handleCancel}
                        disabled={isCanceling}
                        className="w-full text-center py-3 px-4 border border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition-colors disabled:bg-red-100 disabled:text-red-300 disabled:border-red-300 disabled:cursor-not-allowed"
                    >
                        {isCanceling ? 'Canceling...' : 'Cancel Trip'}
                    </button>
                    <button 
                        onClick={() => onNavigate('paymentSelection', shuttle.id)}
                        className="w-full text-center py-3 px-4 border border-transparent bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                        Trip Complete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RealTimeTripTrackingScreen;
