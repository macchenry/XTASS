// Fix: Added full content for TripRequestScreen.tsx
import React, { useState, useEffect } from 'react';
import { Screen } from '../types';
import { MapPinIcon, StarIcon, UserCircleIcon, XCircleIcon, CheckCircleIcon } from '../components/Icons';

interface TripRequestScreenProps {
    onNavigate: (screen: Screen) => void;
}

const TripRequestScreen: React.FC<TripRequestScreenProps> = ({ onNavigate }) => {
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft === 0) {
            // Auto-reject or navigate away
            onNavigate('driverDashboard');
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, onNavigate]);

    const handleAccept = () => {
        onNavigate('tripManagement');
    };

    const handleReject = () => {
        onNavigate('driverDashboard');
    };

    const progress = (timeLeft / 30) * 100;

    return (
        <div className="min-h-screen bg-gray-800 font-sans flex flex-col items-center justify-center p-4 text-white">
            <main className="w-full max-w-md bg-[#0A2A66] rounded-2xl shadow-2xl p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-poppins font-bold">New Trip Request</h1>
                    <p className="text-blue-200 mt-1">Accept within {timeLeft} seconds</p>
                </div>

                <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#1E40AF"
                            strokeWidth="2"
                        />
                        <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#38BDF8"
                            strokeWidth="2"
                            strokeDasharray={`${progress}, 100`}
                            strokeLinecap="round"
                            transform="rotate(-90 18 18)"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold">{timeLeft}</div>
                </div>

                <div className="bg-blue-900/50 p-4 rounded-lg space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-blue-300">Est. Fare</p>
                            <p className="text-2xl font-bold">GH₵45.00</p>
                        </div>
                        <div>
                            <p className="text-sm text-blue-300">Duration</p>
                            <p className="text-2xl font-bold">15 min</p>
                        </div>
                    </div>
                     <div className="text-sm space-y-2">
                        <p className="flex items-center"><MapPinIcon className="w-4 h-4 mr-2 text-green-400"/>Kotoka Int. Airport</p>
                        <p className="flex items-center"><MapPinIcon className="w-4 h-4 mr-2 text-red-400"/>Accra Mall</p>
                    </div>
                </div>

                <div className="bg-blue-900/50 p-4 rounded-lg flex items-center space-x-3">
                    <UserCircleIcon className="w-12 h-12 text-gray-300"/>
                    <div>
                        <p className="font-bold">Customer Name</p>
                        <div className="flex items-center text-sm">
                            <StarIcon className="w-4 h-4 text-yellow-400" filled />
                            <span className="ml-1">4.9 Rating</span>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <button onClick={handleReject} className="w-full flex items-center justify-center gap-x-2 py-4 rounded-lg bg-red-600 hover:bg-red-700 transition-colors">
                        <XCircleIcon className="w-6 h-6" />
                        <span className="font-bold text-lg">Reject</span>
                    </button>
                     <button onClick={handleAccept} className="w-full flex items-center justify-center gap-x-2 py-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors">
                        <CheckCircleIcon className="w-6 h-6" />
                        <span className="font-bold text-lg">Accept</span>
                    </button>
                </div>
            </main>
        </div>
    );
};

export default TripRequestScreen;
