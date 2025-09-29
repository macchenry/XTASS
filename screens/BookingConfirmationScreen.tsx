
// Fix: Implemented the BookingConfirmationScreen component.
import React from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { ArrowLeftIcon, CheckCircleIcon } from '../components/Icons.tsx';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { shuttleData } from '../data/shuttleData.ts';

interface BookingConfirmationScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

const BookingConfirmationScreen: React.FC<BookingConfirmationScreenProps> = ({ onNavigate, shuttleId }) => {
    const shuttle = shuttleData.find(s => s.id === shuttleId) || shuttleData[0];
    const { name, driver } = shuttle;

    return (
        <div className="min-h-screen bg-[#0A2A66] font-sans flex flex-col items-center justify-center p-4">
            <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('shuttleDriverProfile', shuttle.id)}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to driver profile"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <XtassLogo className="h-8" />
            </header>
            
            <main className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 text-center">
                <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                <h1 className="text-3xl font-poppins font-bold text-gray-900">Booking Confirmed!</h1>
                <p className="text-gray-600">Your shuttle is on its way. You can track its real-time location.</p>
                
                <div className="text-left bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <p><strong>Driver:</strong> {driver.name}</p>
                    <p><strong>Vehicle:</strong> {name}</p>
                    <p><strong>License Plate:</strong> {driver.licensePlate}</p>
                    <p><strong>Pickup:</strong> Kotoka Int. Airport (T1)</p>
                    <p><strong>Destination:</strong> Accra Mall</p>
                    <p><strong>ETA:</strong> 5 minutes</p>
                </div>

                <button
                    onClick={() => onNavigate('realTimeTripTracking', shuttle.id)}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2A66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300 transform hover:scale-105"
                >
                    Track Your Ride
                </button>
            </main>
        </div>
    );
};

export default BookingConfirmationScreen;
