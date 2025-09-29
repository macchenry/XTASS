import React from 'react';
// Fix: Removed .ts extension from import path.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
// Fix: Removed .tsx extension from import path.
import { ClockIcon } from '../components/Icons';

interface DriverApplicationReviewScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverApplicationReviewScreen: React.FC<DriverApplicationReviewScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-[#0A2A66] font-sans flex flex-col items-center justify-center p-4">
            <header className="absolute top-0 left-0 w-full flex items-center justify-center p-4 sm:p-6 z-20">
                <XtassLogo className="h-10" />
            </header>
            
            <main className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 text-center">
                <ClockIcon className="w-20 h-20 text-[#0A2A66] mx-auto animate-pulse" />
                <h1 className="text-3xl font-poppins font-bold text-gray-900">Application Submitted</h1>
                <p className="text-gray-600">
                    Thank you for submitting your application. Your documents are now under review. 
                    This process typically takes 3-5 business days.
                </p>
                <p className="text-gray-600">
                    We will notify you via email and SMS once the review is complete.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-left text-sm">
                    <p className="font-semibold text-blue-800">What's next?</p>
                    <p className="text-blue-700 mt-1">
                        Once approved, you'll gain full access to the driver dashboard and can start accepting trips.
                    </p>
                </div>

                <button
                    onClick={() => onNavigate('welcome')}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2A66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300"
                >
                    Back to Home
                </button>
            </main>
        </div>
    );
};

export default DriverApplicationReviewScreen;