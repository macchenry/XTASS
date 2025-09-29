
import React, { useState } from 'react';
// Fix: Add .ts and .tsx extensions to import paths.
import { Role, Screen } from '../types.ts';
import { CustomerIcon, DriverIcon, AdminIcon } from '../components/Icons.tsx';

interface RoleButtonProps {
    role: Role;
    label: string;
    icon: React.ReactNode;
    selectedRole: Role;
    onClick: (role: Role) => void;
}

const RoleButton: React.FC<RoleButtonProps> = ({ role, label, icon, selectedRole, onClick }) => {
    const isSelected = role === selectedRole;
    const baseClasses = "flex flex-col items-center justify-center space-y-2 p-4 w-full rounded-lg border transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    const selectedClasses = "bg-[#0A2A66] text-white shadow-lg scale-105 border-[#0A2A66]";
    const unselectedClasses = "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:shadow-md";

    return (
        <button
            type="button"
            onClick={() => onClick(role)}
            className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
            aria-pressed={isSelected}
        >
            {icon}
            <span className="font-medium text-sm">{label}</span>
        </button>
    );
};

interface WelcomeScreenProps {
    onNavigate: (screen: Screen) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNavigate }) => {
    const [selectedRole, setSelectedRole] = useState<Role>(Role.Customer);
    const [email, setEmail] = useState<string>('demo@xtass.com');
    const [password, setPassword] = useState<string>('••••••••');
    
    const handleRoleClick = (role: Role) => {
        setSelectedRole(role);
        if (role === Role.Customer) {
            onNavigate('customerLogin');
        } else if (role === Role.Driver) {
            onNavigate('driverLogin');
        } else if (role === Role.Admin) {
            onNavigate('adminLogin');
        }
    };

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedRole === Role.Customer) {
            onNavigate('customerLogin');
        } else if (selectedRole === Role.Driver) {
            onNavigate('driverLogin');
        } else if (selectedRole === Role.Admin) {
            onNavigate('adminLogin');
        }
    };

    const signInButtonText = `Sign in as ${selectedRole}`;

    return (
        <div className="min-h-screen bg-[#0A2A66] font-sans flex flex-col items-center justify-center p-4 selection:bg-orange-200">
            <header className="absolute top-0 left-0 w-full p-6 sm:p-8">
               {/* Logo removed as per user request */}
            </header>
            
            <main className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 sm:space-y-8 mt-16 sm:mt-24">
                <div className="text-center">
                    <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-gray-900">Welcome to XTASS</h1>
                    <p className="text-gray-500 mt-1">Professional Shuttle Services</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-6">
                    <div className="space-y-4">
                        <div className="text-center">
                            <h2 className="text-lg sm:text-xl font-poppins font-semibold text-gray-800">Choose Your Role</h2>
                            <p className="text-gray-500 text-sm mt-1">Select how you want to access XTASS</p>
                        </div>
                        <div className="grid grid-cols-3 gap-3 sm:gap-4">
                            <RoleButton role={Role.Customer} label="Customer" icon={<CustomerIcon className="w-7 h-7" />} selectedRole={selectedRole} onClick={handleRoleClick} />
                            <RoleButton role={Role.Driver} label="Driver" icon={<DriverIcon className="w-7 h-7" />} selectedRole={selectedRole} onClick={handleRoleClick} />
                            <RoleButton role={Role.Admin} label="Admin" icon={<AdminIcon className="w-7 h-7" />} selectedRole={selectedRole} onClick={handleRoleClick} />
                        </div>
                    </div>

                    <div className="space-y-4">
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                             <input
                                id="password"
                                name="password"
                                type='password'
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0A2A66] to-orange-500 hover:from-blue-800 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 transform hover:scale-105"
                        >
                            {signInButtonText}
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Demo Mode - Use any email/password to login
                    </p>
                </form>
            </main>
        </div>
    );
};

export default WelcomeScreen;