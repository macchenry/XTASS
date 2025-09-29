import React, { useState } from 'react';
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import {
    LayoutDashboardIcon, UsersIcon, MapIcon, CogIcon, ChartBarIcon, BanknotesIcon, LogOutIcon,
    ArrowLeftIcon, SearchIcon, UserMinusIcon, TrashIcon,
    ClipboardDocumentCheckIcon, XCircleIcon
} from '../components/Icons.tsx';

interface AdminDriverManagementScreenProps {
    onNavigate: (screen: Screen) => void;
}

const pendingDrivers = [
    { id: 1, name: 'Kofi Adjei', date: '2023-10-26', status: 'Pending Docs' },
    { id: 2, name: 'Ama Serwaa', date: '2023-10-25', status: 'Ready for Review' },
    { id: 3, name: 'Yaw Boakye', date: '2023-10-25', status: 'Ready for Review' },
];

const activeDrivers = [
    { id: 101, name: 'John Doe', station: 'Airport Hills', status: 'Active', rating: 4.8 },
    { id: 102, name: 'Jane Smith', station: 'East Legon', status: 'Active', rating: 4.9 },
    { id: 103, name: 'Kwesi Mensah', station: 'Dzorwulu', status: 'Suspended', rating: 4.7 },
];

type Tab = 'verification' | 'active';

const AdminDriverManagementScreen: React.FC<AdminDriverManagementScreenProps> = ({ onNavigate }) => {
    const [activeTab, setActiveTab] = useState<Tab>('verification');

    return (
        <div className="min-h-screen bg-gray-100 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0A2A66] text-white flex-shrink-0 flex flex-col">
                <div className="p-4 border-b border-blue-800">
                    <XtassLogo className="h-10" />
                </div>
                <nav className="flex-grow p-2 space-y-1">
                    <NavItem icon={<LayoutDashboardIcon className="w-5 h-5" />} label="Dashboard" onClick={() => onNavigate('adminDashboard')} />
                    <NavItem icon={<UsersIcon className="w-5 h-5" />} label="Driver Management" active onClick={() => onNavigate('adminDriverManagement')} />
                    <NavItem icon={<MapIcon className="w-5 h-5" />} label="Live Operations" onClick={() => onNavigate('adminLiveOperations')} />
                    <NavItem icon={<ChartBarIcon className="w-5 h-5" />} label="Reports & Analytics" onClick={() => {}} />
                    <NavItem icon={<BanknotesIcon className="w-5 h-5" />} label="Financials" onClick={() => {}} />
                    <NavItem icon={<CogIcon className="w-5 h-5" />} label="System Config" onClick={() => onNavigate('adminSystemConfig')} />
                </nav>
                <div className="p-2 border-t border-blue-800">
                    <NavItem icon={<LogOutIcon className="w-5 h-5" />} label="Logout" onClick={() => onNavigate('adminLogin')} />
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-poppins font-bold text-gray-800">Driver Management</h1>
                    <button onClick={() => onNavigate('adminDashboard')} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Dashboard
                    </button>
                </header>

                <main className="flex-grow p-6 space-y-6 overflow-y-auto">
                    {/* Tabs */}
                    <div className="border-b border-gray-200">
                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                            <TabButton name="Verification Queue" isActive={activeTab === 'verification'} onClick={() => setActiveTab('verification')} count={pendingDrivers.length} />
                            <TabButton name="Active Drivers" isActive={activeTab === 'active'} onClick={() => setActiveTab('active')} count={activeDrivers.length} />
                        </nav>
                    </div>

                    {/* Content based on tab */}
                    {activeTab === 'verification' && <VerificationQueue />}
                    {activeTab === 'active' && <ActiveDrivers />}
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

const TabButton: React.FC<{ name: string; isActive: boolean; onClick: () => void; count: number }> = ({ name, isActive, onClick, count }) => (
    <button
        onClick={onClick}
        className={`${
            isActive ? 'border-blue-600 text-blue-700' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
        } whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm`}
    >
        {name}
        <span className={`${isActive ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-900'} hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block`}>
            {count}
        </span>
    </button>
);

const VerificationQueue = () => (
    <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-4">Pending Applications</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {pendingDrivers.map(driver => (
                        <tr key={driver.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{driver.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    {driver.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                <button className="text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded-md text-xs font-semibold flex-shrink-0 inline-flex items-center gap-1">
                                    <ClipboardDocumentCheckIcon className="w-4 h-4" /> Approve
                                </button>
                                <button className="text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-xs font-semibold flex-shrink-0 inline-flex items-center gap-1">
                                    <XCircleIcon className="w-4 h-4" /> Reject
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const ActiveDrivers = () => (
     <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-poppins font-semibold text-gray-800">Active Driver Roster</h2>
            <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input type="text" placeholder="Search drivers..." className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm" />
            </div>
        </div>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                     <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Station</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {activeDrivers.map(driver => (
                        <tr key={driver.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{driver.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.station}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{driver.rating.toFixed(1)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                               <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${driver.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                    {driver.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                               <ActionButton icon={<UserMinusIcon className="w-4 h-4"/>} label="Suspend" />
                               <ActionButton icon={<TrashIcon className="w-4 h-4"/>} label="Deactivate" className="text-red-600 hover:bg-red-100" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

// Fix: Added a semicolon to prevent potential parsing issues.
const ActionButton: React.FC<{ icon: React.ReactNode; label: string; className?: string }> = ({ icon, label, className }) => (
    <button className={`p-2 rounded-md hover:bg-gray-200 transition-colors ${className || 'text-gray-600'}`} title={label}>
        {icon}
    </button>
);

export default AdminDriverManagementScreen;
