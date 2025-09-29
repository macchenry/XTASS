import React, { useState } from 'react';
import { Screen } from '../types.ts';
import { ArrowLeftIcon, EyeIcon, EyeOffIcon } from '../components/Icons.tsx';

interface DriverPasswordRecoveryScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverPasswordRecoveryScreen: React.FC<DriverPasswordRecoveryScreenProps> = ({ onNavigate }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isCodeSent, setIsCodeSent] = useState(false);

    const handleSendCode = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Sending reset code to driver:', emailOrPhone);
        setIsCodeSent(true);
    };

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log('Resetting driver password with OTP:', otp.join(''));
        alert('Password has been reset successfully!');
        onNavigate('driverLogin');
    };
    
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < 5) {
                const nextInput = e.target.nextElementSibling as HTMLInputElement;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#0a2a66] font-sans flex flex-col items-center justify-center p-4 relative">
            <header className="absolute top-0 left-0 w-full flex items-center p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('driverLogin')}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to driver login"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
            </header>

            <main className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-6 z-10">
                <div className="text-center">
                    <h1 className="text-3xl font-poppins font-bold text-gray-900">Driver Password Recovery</h1>
                    <p className="text-gray-600 mt-1">
                        {isCodeSent ? 'Enter code and new password.' : 'Enter your details to reset.'}
                    </p>
                </div>

                {!isCodeSent ? (
                    <form onSubmit={handleSendCode} className="space-y-6">
                        <div>
                            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700 mb-1">
                                Email or Phone
                            </label>
                            <input
                                id="emailOrPhone"
                                name="emailOrPhone"
                                type="text"
                                required
                                placeholder="e.g. +233 55... or name@mail.com"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a2a66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300"
                        >
                            Send Reset Code
                        </button>
                    </form>
                ) : (
                    <form onSubmit={handleResetPassword} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                                6-Digit OTP Code
                            </label>
                            <div className="flex justify-center gap-2">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(e, index)}
                                        className="w-10 h-12 text-center text-2xl font-semibold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a2a66] focus:border-transparent"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                            <input id="new-password" type={showNewPassword ? 'text' : 'password'} required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm" />
                            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm">
                                {showNewPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                        
                        <div className="relative">
                            <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                            <input id="confirm-new-password" type={showConfirmPassword ? 'text' : 'password'} required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#0a2a66] focus:border-[#0a2a66] sm:text-sm" />
                            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm">
                                {showConfirmPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a2a66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300 pt-4"
                        >
                            Reset Password
                        </button>
                    </form>
                )}
                 <p className="text-center text-sm text-gray-600">
                    Remember your password?{' '}
                    <button type="button" onClick={() => onNavigate('driverLogin')} className="font-medium text-[#0a2a66] hover:underline">
                        Back to Login
                    </button>
                </p>
            </main>
        </div>
    );
};

export default DriverPasswordRecoveryScreen;