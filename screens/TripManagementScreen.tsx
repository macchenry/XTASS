
import React, { useState } from 'react';
import { Screen } from '../types';
import { MapPinIcon, PhoneIcon, UserCircleIcon, WhatsAppIcon, CheckCircleIcon, PlayIcon } from '../components/Icons';

interface TripManagementScreenProps {
    onNavigate: (screen: Screen) => void;
}

type TripStatus = 'heading_to_pickup' | 'arrived_at_pickup' | 'trip_in_progress';

const TripManagementScreen: React.FC<TripManagementScreenProps> = ({ onNavigate }) => {
    const [status, setStatus] = useState<TripStatus>('heading_to_pickup');

    const handleStatusUpdate = () => {
        if (status === 'heading_to_pickup') {
            setStatus('arrived_at_pickup');
        } else if (status === 'arrived_at_pickup') {
            setStatus('trip_in_progress');
        } else if (status === 'trip_in_progress') {
            onNavigate('tripCompletion');
        }
    };

    const getStatusText = () => {
        switch (status) {
            case 'heading_to_pickup': return 'Heading to Pickup';
            case 'arrived_at_pickup': return 'Arrived at Pickup';
            case 'trip_in_progress': return 'Trip in Progress';
        }
    };

    const getButtonText = () => {
        switch (status) {
            case 'heading_to_pickup': return 'I Have Arrived';
            case 'arrived_at_pickup': return 'Start Trip';
            case 'trip_in_progress': return 'Complete Trip';
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
            <div className="flex-grow bg-gray-300 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1578589320348-927653299440?q=80&w=1974&auto=format&fit=crop" 
                    alt="Map showing route" 
                    className="w-full h-full object-cover"
                />
                 <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg text-sm">
                    <p className="font-bold text-lg">{getStatusText()}</p>
                    <p className="text-gray-600 mt-1">Next: {status === 'heading_to_pickup' ? 'Pick up Customer' : 'Drop off at Accra Mall'}</p>
                 </div>
            </div>
            
            <div className="bg-white p-4 shadow-lg border-t border-gray-200 space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-12 h-12 text-gray-400"/>
                        <div>
                            <h2 className="font-bold text-lg text-gray-800">Customer Name</h2>
                            <p className="text-gray-500 text-sm">Waiting at pickup location</p>
                        </div>
                    </div>
                     <div className="flex items-center space-x-2">
                        <a href="tel:+233551234567" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            <PhoneIcon className="w-5 h-5 text-gray-700"/>
                        </a>
                        <a href="https://wa.me/233551234567" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                            <WhatsAppIcon className="w-5 h-5 text-green-600"/>
                        </a>
                    </div>
                </div>
                
                <div className="text-sm space-y-2 border-t pt-4">
                    <p className="flex items-center font-semibold"><MapPinIcon className="w-4 h-4 mr-2 text-green-500"/>Kotoka Int. Airport (Pickup)</p>
                    <p className="flex items-center font-semibold"><MapPinIcon className="w-4 h-4 mr-2 text-red-500"/>Accra Mall (Destination)</p>
                </div>

                <button 
                    onClick={handleStatusUpdate}
                    className="w-full text-center py-4 px-4 border border-transparent bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors flex items-center justify-center gap-x-2"
                >
                    {status === 'trip_in_progress' ? <CheckCircleIcon className="w-6 h-6"/> : (status === 'arrived_at_pickup' ? <PlayIcon className="w-6 h-6"/> : <CheckCircleIcon className="w-6 h-6"/>)}
                    <span>{getButtonText()}</span>
                </button>
            </div>
        </div>
    );
};
export default TripManagementScreen;
