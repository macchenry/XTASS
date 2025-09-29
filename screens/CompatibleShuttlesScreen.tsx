// Fix: Implemented the CompatibleShuttlesScreen component.
import React from 'react';
import { Screen } from '../types.ts';
import { ArrowLeftIcon } from '../components/Icons.tsx';

interface CompatibleShuttlesScreenProps {
    onNavigate: (screen: Screen) => void;
}

const CompatibleShuttlesScreen: React.FC<CompatibleShuttlesScreenProps> = ({ onNavigate }) => {
    // Mock data for shuttles
    const shuttles = [
        { id: 1, name: 'Toyota Hiace', driver: 'John Doe', rating: 4.8, eta: 5, price: 'GHS 50.00', seats: 1, image: '/toyota-hiace.png' },
        { id: 2, name: 'Ford Transit', driver: 'Jane Smith', rating: 4.9, eta: 8, price: 'GHS 55.00', seats: 2, image: '/ford-transit.png' },
        { id: 3, name: 'Mercedes Sprinter', driver: 'Kofi Annan', rating: 4.7, eta: 10, price: 'GHS 60.00', seats: 1, image: '/mercedes-sprinter.png' },
    ];

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
                     <h1 className="text-xl font-poppins font-bold text-gray-800">Compatible Shuttles (3)</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-4">
                <p className="text-sm text-gray-600">Showing available shuttles for <strong>1 passenger</strong> from <strong>Kotoka Int. Airport (T1)</strong> to <strong>Accra Mall</strong>.</p>
                {shuttles.map((shuttle) => (
                    <div key={shuttle.id} className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 transition-transform transform hover:scale-105 hover:shadow-lg">
                        {/* As I cannot add images, I'll use a placeholder div */}
                        <div className="w-24 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                           <span className="text-xs text-gray-500">Vehicle</span>
                        </div>
                        <div className="flex-grow">
                            <h2 className="font-bold text-lg text-gray-800">{shuttle.name}</h2>
                            <p className="text-sm text-gray-500">Driver: {shuttle.driver} ({shuttle.rating} ★)</p>
                             <p className="text-sm text-gray-500">ETA: {shuttle.eta} mins</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg text-[#0A2A66]">{shuttle.price}</p>
                             <button className="mt-1 px-4 py-1 bg-[#0a2a66] text-white text-sm rounded-full hover:bg-[#082250] transition-colors">
                                Select
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default CompatibleShuttlesScreen;
