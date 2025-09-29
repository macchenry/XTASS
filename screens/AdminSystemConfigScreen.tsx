import React from 'react';
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { LayoutDashboardIcon, UsersIcon, MapIcon, CogIcon, ChartBarIcon, BanknotesIcon, LogOutIcon, ArrowLeftIcon } from '../components/Icons.tsx';

interface AdminSystemConfigScreenProps {
    onNavigate: (screen: Screen) => void;
}

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void; }> = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${active ? 'bg-blue-700' : 'hover:bg-blue-800/50'}`}>
        {icon}
        <span>{label}</span>
    </button>
);

const AdminSystemConfigScreen: React.FC<AdminSystemConfigScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0A2A66] text-white flex-shrink-0 flex flex-col">
                <div className="p-4 border-b border-blue-800">
                    <XtassLogo className="h-10" />
                </div>
                <nav className="flex-grow p-2 space-y-1">
                    <NavItem icon={<LayoutDashboardIcon className="w-5 h-5" />} label="Dashboard" onClick={() => onNavigate('adminDashboard')} />
                    <NavItem icon={<UsersIcon className="w-5 h-5" />} label="Driver Management" onClick={() => onNavigate('adminDriverManagement')} />
                    <NavItem icon={<MapIcon className="w-5 h-5" />} label="Live Operations" onClick={() => onNavigate('adminLiveOperations')} />
                    <NavItem icon={<ChartBarIcon className="w-5 h-5" />} label="Reports & Analytics" onClick={() => {}} />
                    <NavItem icon={<BanknotesIcon className="w-5 h-5" />} label="Financials" onClick={() => {}} />
                    <NavItem icon={<CogIcon className="w-5 h-5" />} label="System Config" active onClick={() => onNavigate('adminSystemConfig')} />
                </nav>
                <div className="p-2 border-t border-blue-800">
                    <NavItem icon={<LogOutIcon className="w-5 h-5" />} label="Logout" onClick={() => onNavigate('adminLogin')} />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center flex-shrink-0">
                    <h1 className="text-2xl font-poppins font-bold text-gray-800">System Configuration</h1>
                    <button onClick={() => onNavigate('adminDashboard')} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Dashboard
                    </button>
                </header>

                <main className="flex-grow p-6 space-y-6 overflow-y-auto">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-poppins font-semibold text-gray-800 border-b pb-3 mb-4">Pricing Settings</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="base-fare" className="block text-sm font-medium text-gray-700">Base Fare (GH₵)</label>
                                <input type="number" id="base-fare" defaultValue="5.00" className="mt-1 block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="per-km" className="block text-sm font-medium text-gray-700">Price per Kilometer (GH₵)</label>
                                <input type="number" id="per-km" defaultValue="1.50" className="mt-1 block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="commission" className="block text-sm font-medium text-gray-700">Platform Commission (%)</label>
                                <input type="number" id="commission" defaultValue="20" className="mt-1 block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-poppins font-semibold text-gray-800 border-b pb-3 mb-4">Service Area</h2>
                        <p className="text-gray-600">Map integration for defining service boundaries would be here.</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="py-2 px-6 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800">Save Changes</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminSystemConfigScreen;
