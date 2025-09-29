
import React from 'react';
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
import { CheckCircleIcon } from '../components/Icons';

interface TripCompletionScreenProps {
    onNavigate: (screen: Screen) => void;
}

const TripCompletionScreen: React.FC<TripCompletionScreenProps> = ({ onNavigate }) => {
    const fare = 45.00;
    const fee = fare * 0.15;
    const earnings = fare - fee;

    return (
        <div className="min-h-screen bg-[#0A2A66] font-sans flex flex-col items-center justify-center p-4">
            <header className="absolute top-0 left-0 w-full flex items-center justify-center p-4 sm:p-6 z-20">
                <XtassLogo className="h-10" />
            </header>
            
            <main className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 text-center">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                <h1 className="text-3xl font-poppins font-bold text-gray-900">Trip Completed!</h1>
                <p className="text-gray-600">You've successfully completed the trip. Your earnings have been updated.</p>
                
                <div className="text-left bg-gray-50 p-4 rounded-lg space-y-3 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Trip Fare:</span>
                        <span className="font-semibold text-gray-800">GH₵{fare.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">XTASS Fee (15%):</span>
                        <span className="font-semibold text-gray-800">- GH₵{fee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
                        <span className="text-gray-800">Your Earnings:</span>
                        <span className="text-green-600">GH₵{earnings.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    onClick={() => onNavigate('driverDashboard')}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2A66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300"
                >
                    Back to Dashboard
                </button>
            </main>
        </div>
    );
};

export default TripCompletionScreen;
