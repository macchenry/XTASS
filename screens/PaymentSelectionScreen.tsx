
import React, { useState } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
import { ArrowLeftIcon, ShieldCheckIcon, CreditCardIcon, CashIcon, MtnIcon, VodafoneIcon, AirtelTigoIcon } from '../components/Icons';
import { shuttleData } from '../data/shuttleData';

interface PaymentSelectionScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

type PaymentMethod = 'mtn' | 'vodafone' | 'airteltigo' | 'card' | 'cash' | null;

const PaymentSelectionScreen: React.FC<PaymentSelectionScreenProps> = ({ onNavigate, shuttleId }) => {
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>(null);
    const shuttle = shuttleData.find(s => s.id === shuttleId) || shuttleData[0];
    const { price } = shuttle;

    const tax = price * 0.1;
    const total = price + tax;

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('realTimeTripTracking', shuttle.id)} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Complete Your Payment</h1>
                </div>
                <button onClick={() => onNavigate('serviceSelectionDashboard')} className="w-9" aria-label="Go to dashboard">
                    <XtassLogo className="h-8" color="#0A2A66" />
                </button>
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-6 pb-24">
                {/* Trip Summary */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Trip Summary</h2>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-500">Distance</p>
                            <p className="font-semibold text-gray-800">12.5 km</p>
                        </div>
                         <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-semibold text-gray-800">28 minutes</p>
                        </div>
                    </div>
                </div>

                {/* Cost Breakdown */}
                <div className="bg-white p-4 rounded-xl shadow">
                     <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Cost Breakdown</h2>
                     <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between"><span>Base Fare</span><span>GH₵{price.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>Taxes &amp; Fees</span><span>GH₵{tax.toFixed(2)}</span></div>
                        <div className="flex justify-between border-t pt-2 mt-2 font-bold text-gray-900 text-lg">
                            <span>Total</span>
                            <span>GH₵{total.toFixed(2)}</span>
                        </div>
                     </div>
                </div>

                {/* Payment Method Selection */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Select Payment Method</h2>
                    <div className="space-y-3">
                        {/* Mobile Money */}
                        <div className="border rounded-lg p-3">
                            <p className="font-semibold text-sm mb-2">Mobile Money</p>
                            <div className="grid grid-cols-3 gap-2">
                                <PaymentButton icon={<MtnIcon className="w-8 h-8"/>} selected={selectedPayment === 'mtn'} onClick={() => setSelectedPayment('mtn')} />
                                <PaymentButton icon={<VodafoneIcon className="w-8 h-8"/>} selected={selectedPayment === 'vodafone'} onClick={() => setSelectedPayment('vodafone')} />
                                <PaymentButton icon={<AirtelTigoIcon className="w-12 h-8"/>} selected={selectedPayment === 'airteltigo'} onClick={() => setSelectedPayment('airteltigo')} />
                            </div>
                        </div>
                        {/* Other Methods */}
                         <div className="grid grid-cols-2 gap-3">
                            <PaymentButton label="Credit/Debit Card" icon={<CreditCardIcon className="w-6 h-6 text-gray-600"/>} selected={selectedPayment === 'card'} onClick={() => setSelectedPayment('card')} wide />
                            <PaymentButton label="Cash" icon={<CashIcon className="w-6 h-6 text-gray-600"/>} selected={selectedPayment === 'cash'} onClick={() => setSelectedPayment('cash')} wide />
                        </div>
                    </div>
                </div>
            </main>

             {/* Bottom Action Bar */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-20">
                <button 
                    onClick={() => onNavigate('securePaymentProcessing', shuttle.id)}
                    disabled={!selectedPayment}
                    className="w-full bg-[#0A2A66] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#082250] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                    Proceed to Payment (GH₵{total.toFixed(2)})
                </button>
            </footer>
        </div>
    );
};

const PaymentButton: React.FC<{
    icon: React.ReactNode;
    label?: string;
    selected: boolean;
    onClick: () => void;
    wide?: boolean;
}> = ({ icon, label, selected, onClick, wide }) => {
    const baseClasses = "border rounded-lg p-2 flex flex-col items-center justify-center space-y-1 h-16 transition-colors duration-200 cursor-pointer";
    const selectedClasses = "border-[#0A2A66] bg-blue-50 ring-2 ring-[#0A2A66]";
    const unselectedClasses = "border-gray-200 bg-gray-50 hover:bg-gray-100";

    return (
        <button onClick={onClick} className={`${baseClasses} ${selected ? selectedClasses : unselectedClasses} ${wide ? 'flex-row space-x-2 space-y-0' : ''}`}>
            {icon}
            {label && <span className="text-xs font-medium text-gray-700">{label}</span>}
        </button>
    )
}

export default PaymentSelectionScreen;