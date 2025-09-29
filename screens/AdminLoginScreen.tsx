import React, { useState } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from '../components/Icons.tsx';
import { XtassLogo } from '../components/XtassLogo.tsx';

interface AdminLoginScreenProps {
    onNavigate: (screen: Screen) => void;
}

const AdminLoginScreen: React.FC<AdminLoginScreenProps> = ({ onNavigate }) => {
    const [email, setEmail] = useState('admin@xtass.com');
    const [password, setPassword] = useState('••••••••');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Admin login successful! Navigating to dashboard...');
        onNavigate('adminDashboard');
    };

    return (
        <div className="min-h-screen bg-[#0a2a66] font-sans flex flex-col items-center justify-center p-4 relative">
            <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('welcome')}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to welcome screen"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
                <XtassLogo className="h-8" />
            </header>

            <main className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-6 z-10">
                <div className="text-center">
                    <h1 className="text-3xl font-poppins font-bold text-gray-900">Admin Login</h1>
                    <p className="text-gray-600 mt-1">Access the management dashboard.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                        </div>

                        <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm leading-5"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-end text-sm">
                        <button type="button" onClick={() => onNavigate('adminPasswordRecovery')} className="font-medium text-[#0a2a66] hover:text-[#082250]">
                            Forgot Password?
                        </button>
                    </div>

                    <div className="space-y-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a2a66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300 transform hover:scale-105"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default AdminLoginScreen;
