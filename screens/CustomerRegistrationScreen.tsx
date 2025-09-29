
import React, { useState } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from '../components/Icons.tsx';

interface CustomerRegistrationScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
}

const CustomerRegistrationScreen: React.FC<CustomerRegistrationScreenProps> = ({ onNavigate }) => {
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!agreedToTerms) {
            alert("You must agree to the Terms & Conditions.");
            return;
        }
        // Navigate to OTP verification screen
        onNavigate('otpVerification');
    };

    return (
        <div className="min-h-screen bg-[#0a2a66] font-sans flex flex-col items-center justify-center p-4 relative">
            <header className="absolute top-0 left-0 w-full flex items-center p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('customerLogin')}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to customer login"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
            </header>

            <main className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 z-10">
                <div className="text-center">
                    <h1 className="text-3xl font-poppins font-bold text-gray-900">Customer Registration</h1>
                    <p className="text-gray-600 mt-1">Create your XTASS account</p>
                </div>
                
                {/* Progress Indicator */}
                <div className="w-full">
                    <p className="text-sm font-medium text-gray-600 text-center">Step 1 of 3: Account Details</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#0a2a66] h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm">+233</span>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                placeholder="55 123 4567"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="block w-full pl-14 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-gray-400">(Optional)</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                        />
                    </div>

                    <div className="relative">
                        <label htmlFor="password-reg" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            id="password-reg"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm leading-5">
                            {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                        </button>
                    </div>

                    <div className="relative">
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                            id="confirm-password"
                            name="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm leading-5">
                            {showConfirmPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                        </button>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                checked={agreedToTerms}
                                onChange={(e) => setAgreedToTerms(e.target.checked)}
                                className="focus:ring-[#0a2a66] h-4 w-4 text-[#0a2a66] border-gray-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-700">
                                I agree to the <a href="#" className="text-[#0a2a66] hover:underline">Terms & Conditions</a>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a2a66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:scale-100"
                        disabled={!agreedToTerms}
                    >
                        Create Account
                    </button>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button type="button" onClick={() => onNavigate('customerLogin')} className="font-medium text-[#0a2a66] hover:underline">
                            Login
                        </button>
                    </p>
                </form>
            </main>
        </div>
    );
};

export default CustomerRegistrationScreen;
