import React from 'react';
import { Screen } from '../types';
import { ArrowLeftIcon, ChevronRightIcon } from '../components/Icons';

interface DriverEarningsScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverEarningsScreen: React.FC<DriverEarningsScreenProps> = ({ onNavigate }) => {
    const todayEarnings = 85.50;
    const weeklyEarnings = 450.75;
    const recentTransactions = [
        { id: 1, type: 'Trip', amount: 36.00, date: 'Oct 26, 2:15 PM', status: 'Completed' },
        { id: 2, type: 'Trip', amount: 49.50, date: 'Oct 26, 11:30 AM', status: 'Completed' },
        { id: 3, type: 'Cash Out', amount: -200.00, date: 'Oct 25, 9:00 AM', status: 'Processed' },
        { id: 4, type: 'Trip', amount: 25.00, date: 'Oct 24, 6:45 PM', status: 'Completed' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('driverDashboard')}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Go back to dashboard"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">My Earnings</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="p-4 md:p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <p className="text-sm text-gray-500">Today's Earnings</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">GH₵{todayEarnings.toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow text-center">
                        <p className="text-sm text-gray-500">This Week</p>
                        <p className="text-3xl font-bold text-gray-900 mt-1">GH₵{weeklyEarnings.toFixed(2)}</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-lg font-poppins font-semibold text-gray-800">Recent Transactions</h2>
                        <button className="text-sm font-semibold text-[#0A2A66] hover:underline">View All</button>
                    </div>
                    <div className="space-y-3">
                        {recentTransactions.map(tx => (
                            <div key={tx.id} className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
                                <div>
                                    <p className="font-semibold text-gray-800">{tx.type}</p>
                                    <p className="text-xs text-gray-500">{tx.date}</p>
                                </div>
                                <p className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {tx.amount > 0 ? `+GH₵${tx.amount.toFixed(2)}` : `-GH₵${Math.abs(tx.amount).toFixed(2)}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <button className="w-full flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
                        <span className="font-semibold text-gray-800">Payment Methods</span>
                        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
                
                <button
                    className="w-full text-center py-3 px-4 border border-transparent bg-[#0A2A66] text-white rounded-lg font-semibold hover:bg-[#082250] transition-colors"
                >
                    Cash Out GH₵{weeklyEarnings.toFixed(2)}
                </button>
            </main>
        </div>
    );
};

export default DriverEarningsScreen;
