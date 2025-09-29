// Fix: Created the content for the AdminLiveOperationsScreen.tsx file.
import React from 'react';
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import {
    LayoutDashboardIcon, UsersIcon, MapIcon, CogIcon, ChartBarIcon, BanknotesIcon, LogOutIcon,
    ArrowLeftIcon, TruckIcon, SearchIcon
} from '../components/Icons.tsx';

interface AdminLiveOperationsScreenProps {
    onNavigate: (screen: Screen) => void;
}

const activeDrivers = [
    { id: 101, name: 'John Doe', status: 'On Trip', location: 'Spintex Road', destination: 'Accra Mall' },
    { id: 102, name: 'Jane Smith', status: 'Idle', location: 'East Legon', destination: '-' },
    { id: 103, name: 'Kwesi Mensah', status: 'On Trip', location: 'Dzorwulu', destination: 'Airport' },
    { id: 104, name: 'Adwoa Williams', status: 'Idle', location: 'Cantonments', destination: '-' },
];

const AdminLiveOperationsScreen: React.FC<AdminLiveOperationsScreenProps> = ({ onNavigate }) => {
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
                    <NavItem icon={<MapIcon className="w-5 h-5" />} label="Live Operations" active onClick={() => onNavigate('adminLiveOperations')} />
                    <NavItem icon={<ChartBarIcon className="w-5 h-5" />} label="Reports & Analytics" onClick={() => {}} />
                    <NavItem icon={<BanknotesIcon className="w-5 h-5" />} label="Financials" onClick={() => {}} />
                    <NavItem icon={<CogIcon className="w-5 h-5" />} label="System Config" onClick={() => onNavigate('adminSystemConfig')} />
                </nav>
                <div className="p-2 border-t border-blue-800">
                    <NavItem icon={<LogOutIcon className="w-5 h-5" />} label="Logout" onClick={() => onNavigate('adminLogin')} />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center flex-shrink-0">
                    <h1 className="text-2xl font-poppins font-bold text-gray-800">Live Operations</h1>
                    <button onClick={() => onNavigate('adminDashboard')} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Dashboard
                    </button>
                </header>

                <main className="flex-grow flex overflow-hidden">
                    {/* Map Area */}
                    <div className="flex-1 bg-gray-300 flex items-center justify-center">
                        <p className="text-gray-500 text-xl font-semibold">Live Map Placeholder</p>
                    </div>

                    {/* Driver List Panel */}
                    <div className="w-96 bg-white border-l flex flex-col">
                        <div className="p-4 border-b">
                            <h2 className="text-lg font-semibold text-gray-800">Active Drivers (28)</h2>
                            <div className="relative mt-2">
                                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input type="text" placeholder="Search by name or location..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm" />
                            </div>
                        </div>
                        <div className="flex-grow overflow-y-auto">
                            {activeDrivers.map(driver => (
                                <div key={driver.id} className="p-4 border-b hover:bg-gray-50 cursor-pointer">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-gray-900">{driver.name}</p>
                                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${driver.status === 'On Trip' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                            {driver.status}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-500 mt-1 flex items-center">
                                        <MapIcon className="w-4 h-4 mr-2" />
                                        <span>{driver.location}</span>
                                    </div>
                                    {driver.status === 'On Trip' && (
                                        <div className="text-sm text-gray-500 mt-1 flex items-center">
                                            <TruckIcon className="w-4 h-4 mr-2" />
                                            <span>To: {driver.destination}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean; onClick: () => void; }> = ({ icon, label, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${active ? 'bg-blue-700' : 'hover:bg-blue-800/50'}`}>
        {icon}
        <span>{label}</span>
    </button>
);


export default AdminLiveOperationsScreen;
