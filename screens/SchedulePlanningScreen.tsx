
import React from 'react';
// Fix: Add .ts extension to import path.
import { Screen } from '../types.ts';

interface SchedulePlanningScreenProps {
    onNavigate: (screen: Screen) => void;
}

const SchedulePlanningScreen: React.FC<SchedulePlanningScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-gray-800">Screen 8: Schedule Planning</h1>
            <p className="text-gray-600 mt-2">This screen is under construction.</p>
            <button
                onClick={() => onNavigate('serviceSelectionDashboard')}
                className="mt-8 px-4 py-2 bg-[#0a2a66] text-white rounded-md hover:bg-[#082250] transition-colors"
            >
                Back to Dashboard
            </button>
        </div>
    );
};

export default SchedulePlanningScreen;