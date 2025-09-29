
// Fix: Implement the SecurePaymentProcessingScreen component.
import React, { useState, useEffect } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths.
import { Screen } from '../types';
import { ShieldCheckIcon, CheckCircleIcon, ArrowLeftIcon } from '../components/Icons';
import { XtassLogo } from '../components/XtassLogo';
import { shuttleData } from '../data/shuttleData';

interface SecurePaymentProcessingScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

const SecurePaymentProcessingScreen: React.FC<SecurePaymentProcessingScreenProps> = ({ onNavigate, shuttleId }) => {
    const [status, setStatus] = useState<'processing' | 'success' | 'failed'>('processing');

    const shuttle = shuttleData.find(s => s.id === shuttleId) || shuttleData[0];
    const { price } = shuttle;
    const total = price + (price * 0.1);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Simulate a successful payment
            setStatus('success');
        }, 3000); // 3-second processing time

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (status === 'success') {
            const redirectTimer = setTimeout(() => {
                onNavigate('serviceRating', shuttle.id);
            }, 2000); // 2-second delay before redirecting

            return () => clearTimeout(redirectTimer);
        }
    }, [status, onNavigate, shuttle.id]);


    const renderContent = () => {
        switch (status) {
            case 'processing':
                return (
                    <>
                        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-[#0A2A66]"></div>
                        <h1 className="text-3xl font-poppins font-bold text-gray-900 mt-6">Processing Payment</h1>
                        <p className="text-gray-600">Please wait, your transaction is being securely processed.</p>
                        <p className="font-bold text-2xl text-gray-800 mt-4">GH₵{total.toFixed(2)}</p>
                    </>
                );
            case 'success':
                return (
                    <>
                        <CheckCircleIcon className="w-24 h-24 text-green-500" />
                        <h1 className="text-3xl font-poppins font-bold text-gray-900 mt-6">Payment Successful!</h1>
                        <p className="text-gray-600">Thank you for riding with XTASS. Redirecting you shortly...</p>
                        <p className="font-bold text-2xl text-green-600 mt-4">GH₵{total.toFixed(2)}</p>
                    </>
                );
            case 'failed':
                 return (
                    <>
                        {/* You can use a specific failure icon here */}
                        <h1 className="text-3xl font-poppins font-bold text-red-600 mt-6">Payment Failed</h1>
                        <p className="text-gray-600">There was an issue with your payment. Please try again.</p>
                        <button 
                            onClick={() => onNavigate('paymentSelection', shuttle.id)}
                            className="mt-6 w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
                        >
                            Try Again
                        </button>
                    </>
                );
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col items-center justify-center p-4">
            <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('paymentSelection', shuttle.id)}
                    className="flex items-center space-x-2 text-gray-600 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition-colors"
                    aria-label="Go back to payment selection"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <XtassLogo className="h-8" color="#0A2A66" />
            </header>

            <main className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-4 flex flex-col items-center text-center">
                {renderContent()}
            </main>

            <footer className="absolute bottom-6 flex items-center space-x-2 text-sm text-gray-500">
                <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                <span>Secure Payment via Paystack</span>
            </footer>
        </div>
    );
};

export default SecurePaymentProcessingScreen;