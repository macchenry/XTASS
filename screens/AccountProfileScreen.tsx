import React from 'react';
// Fix: Removed .ts extension from import path.
import { Screen } from '../types';
// Fix: Removed .tsx extension from import path.
import { ArrowLeftIcon, ChevronRightIcon, UserCircleIcon, ClockIcon, UsersIcon, ShieldCheckIcon, PowerIcon } from '../components/Icons';

interface AccountProfileScreenProps {
    onNavigate: (screen: Screen) => void;
}

const AccountProfileScreen: React.FC<AccountProfileScreenProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="p-2 rounded-full hover:bg-gray-100"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">My Account</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="p-4 md:p-6 space-y-6">
                {/* User Info */}
                <div className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow">
                    <UserCircleIcon className="w-20 h-20 text-gray-300" />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Customer Name</h2>
                        <p className="text-gray-600">demo@xtass.com</p>
                        <p className="text-sm text-gray-500">+233 55 123 4567</p>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <MenuItem icon={<ClockIcon />} label="Trip History" onClick={() => onNavigate('serviceHistory')} />
                    <MenuItem icon={<UsersIcon />} label="Saved Passengers" onClick={() => onNavigate('savedPassengers')} />
                    <MenuItem icon={<ShieldCheckIcon />} label="Emergency Contacts" onClick={() => onNavigate('emergencyContacts')} />
                </div>
                
                <div className="bg-white rounded-xl shadow overflow-hidden">
                     <MenuItem icon={<PowerIcon />} label="Logout" onClick={() => onNavigate('welcome')} isDestructive={true} />
                </div>
            </main>
        </div>
    );
};

interface MenuItemProps {
    // Fix: Updated icon prop type to be more specific for cloneElement, resolving a TypeScript error.
    icon: React.ReactElement<{ className?: string }>;
    label: string;
    onClick: () => void;
    isDestructive?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick, isDestructive }) => (
    <button onClick={onClick} className="w-full flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors">
        <div className="flex items-center space-x-4">
            <div className={isDestructive ? 'text-red-500' : 'text-gray-500'}>
                {React.cloneElement(icon, { className: 'w-6 h-6' })}
            </div>
            <span className={`font-semibold ${isDestructive ? 'text-red-600' : 'text-gray-800'}`}>{label}</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </button>
);

export default AccountProfileScreen;