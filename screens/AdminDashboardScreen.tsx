import React from 'react';
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { LayoutDashboardIcon, UsersIcon, MapIcon, CogIcon, ChartBarIcon, BanknotesIcon, LogOutIcon, TruckIcon, StarIcon, TrendingUpIcon, TrendingDownIcon } from '../components/Icons.tsx';

interface AdminDashboardScreenProps {
    onNavigate: (screen: Screen) => void;
}

const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0A2A66] text-white flex flex-col">
                <div className="p-4 border-b border-blue-800">
                    <XtassLogo className="h-10" />
                </div>
                <nav className="flex-grow p-2 space-y-1">
                    <NavItem icon={<LayoutDashboardIcon className="w-5 h-5" />} label="Dashboard" active onClick={() => onNavigate('adminDashboard')} />
                    <NavItem icon={<UsersIcon className="w-5 h-5" />} label="Driver Management" onClick={() => onNavigate('adminDriverManagement')} />
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
                    <h1 className="text-2xl font-poppins font-bold text-gray-800">Admin Dashboard</h1>
                    <div className="text-right">
                        <p className="font-semibold text-gray-700">Admin User</p>
                        <p className="text-sm text-gray-500">Super Administrator</p>
                    </div>
                </header>

                <main className="flex-grow p-6 space-y-6 overflow-y-auto">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <KpiCard title="Active Shuttles" value="28" icon={<TruckIcon />} trend="+2 this week" />
                        <KpiCard title="Trips Today" value="152" icon={<MapIcon />} trend="+5.2%" />
                        <KpiCard title="Revenue (Today)" value="GH₵7,200" icon={<BanknotesIcon />} trend="+8.1%" isPositive />
                        <KpiCard title="Avg. Rating" value="4.85" icon={<StarIcon />} trend="-0.02" isPositive={false} />
                    </div>

                    {/* Driver Management & System Health */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 bg-white p-4 rounded-xl shadow">
                            <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-4">Driver Management</h2>
                            <div className="space-y-3">
                                <InfoRow label="Pending Verifications" value="3" action={() => onNavigate('adminDriverManagement')} />
                                <InfoRow label="Total Active Drivers" value="45" />
                                <InfoRow label="Drivers Online Now" value="28" action={() => onNavigate('adminLiveOperations')} />
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow">
                             <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-4">System Health</h2>
                             <HealthItem label="Server Uptime" value="99.98%" status="ok" />
                             <HealthItem label="API Latency" value="120ms" status="ok" />
                             <HealthItem label="DB Queries" value="95/s" status="warning" />
                        </div>
                    </div>
                     {/* Placeholder for charts */}
                     <div className="bg-white p-4 rounded-xl shadow">
                        <h2 className="text-lg font-poppins font-semibold text-gray-800 mb-2">Service Analytics</h2>
                        <p className="text-gray-500 text-center py-10">Charts and graphs would be displayed here.</p>
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

const KpiCard: React.FC<{ title: string; value: string; icon: React.ReactNode; trend: string; isPositive?: boolean }> = ({ title, value, icon, trend, isPositive }) => (
    <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
            <div className={`flex items-center text-xs mt-2 ${isPositive === undefined ? 'text-gray-500' : (isPositive ? 'text-green-600' : 'text-red-600')}`}>
                {isPositive !== undefined && (isPositive ? <TrendingUpIcon className="w-4 h-4 mr-1"/> : <TrendingDownIcon className="w-4 h-4 mr-1"/>)}
                <span>{trend}</span>
            </div>
        </div>
        <div className="bg-[#0A2A66]/10 p-3 rounded-full text-[#0A2A66]">
            {icon}
        </div>
    </div>
);

const InfoRow: React.FC<{ label: string, value: string | number, action?: () => void }> = ({ label, value, action }) => (
    <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50">
        <p className="text-gray-600">{label}</p>
        <div className="flex items-center space-x-2">
            <p className="font-bold text-gray-800 text-lg">{value}</p>
            {action && <button onClick={action} className="text-sm text-blue-600 hover:underline">View</button>}
        </div>
    </div>
);

const HealthItem: React.FC<{label: string, value: string, status: 'ok' | 'warning' | 'error'}> = ({ label, value, status}) => {
    const statusColor = status === 'ok' ? 'bg-green-500' : status === 'warning' ? 'bg-yellow-500' : 'bg-red-500';
    return (
        <div className="flex justify-between items-center text-sm py-1.5">
            <div className="flex items-center">
                <span className={`w-2 h-2 rounded-full mr-2 ${statusColor}`}></span>
                <p className="text-gray-600">{label}</p>
            </div>
            <p className="font-semibold text-gray-800">{value}</p>
        </div>
    );
}

export default AdminDashboardScreen;