import React from 'react';
// Fix: Removed .ts extension from import path.
import { Screen } from '../types';
// Fix: Removed .tsx extension from import path.
import { ArrowLeftIcon } from '../components/Icons';

interface DriverEarningsScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverEarningsScreen: React.FC<DriverEarningsScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('driverDashboard')}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">My Earnings</h1>
                </div>
                <div className="w-9"></div>
            </header>
            <main className="p-4 text-center">
                <p>Screen 30: Comprehensive Earnings Dashboard</p>
                <p className="text-gray-500 mt-2">This screen will display a detailed breakdown of the driver's earnings.</p>
            </main>
        </div>
    );
};

export default DriverEarningsScreen;