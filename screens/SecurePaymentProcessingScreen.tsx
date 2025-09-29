// Fix: Implement the SecurePaymentProcessingScreen component.
import React, { useState, useEffect } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { ShieldCheckIcon, CheckCircleIcon, ArrowLeftIcon } from '../components/Icons.tsx';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { shuttleData } from '../data/shuttleData.ts';

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
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (status === 'success') {
            const redirectTimer = setTimeout(() => {
                onNavigate('serviceRating', shuttle.id);
            }, 2000);
            return () => clearTimeout(redirectTimer);
        }
    }, [status, onNavigate, shuttle.id]);

    const renderContent = () => {
        switch (status) {
            case 'success':
                return (
                    <>
                        <CheckCircleIcon className="w-20 h-20 text-green-500 mx-auto" />
                        <h1 className="text-2xl font-poppins font-bold text-gray-900 mt-4">Payment Successful!</h1>
                        <p className="text-gray-600 mt-2">Thank you! A receipt has been sent. You will be redirected shortly.</p>
                    </>
                );
            case 'failed':
                return (
                    <>
                        {/* Using ShieldCheckIcon for failed state, as no XCircleIcon was imported */}
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                           <ShieldCheckIcon className="w-10 h-10 text-red-500" />
                        </div>
                        <h1 className="text-2xl font-poppins font-bold text-gray-900 mt-4">Payment Failed</h1>
                        <p className="text-gray-600 mt-2">Could not process payment. Please try again.</p>
                        <button
                            onClick={() => onNavigate('paymentSelection', shuttle.id)}
                            className="mt-6 w-full py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                        >
                            Try Again
                        </button>
                    </>
                );
            case 'processing':
            default:
                return (
                    <>
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#0A2A66] mx-auto"></div>
                        <h1 className="text-2xl font-poppins font-bold text-gray-900 mt-6">Processing Payment</h1>
                        <p className="text-gray-600 mt-2">Please wait, we're securely processing your payment of <span className="font-bold">GH₵{total.toFixed(2)}</span>.</p>
                        <p className="text-sm text-gray-500 mt-4 flex items-center justify-center space-x-2">
                            <ShieldCheckIcon className="w-4 h-4 text-green-600" />
                            <span>Secure SSL Connection</span>
                        </p>
                    </>
                );
        }
    };

    return (
        <div className="min-h-screen bg-[#0A2A66] font-sans flex flex-col items-center justify-center p-4">
             <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('paymentSelection', shuttle.id)}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to payment selection"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <XtassLogo className="h-8" />
            </header>
            <main className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-6 text-center">
                {renderContent()}
            </main>
        </div>
    );
};

export default SecurePaymentProcessingScreen;
