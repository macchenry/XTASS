
// Fix: Implemented the OtpVerificationScreen component.
import React, { useState, useRef, useEffect } from 'react';
// Fix: Add .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { ArrowLeftIcon } from '../components/Icons.tsx';

interface OtpVerificationScreenProps {
    onNavigate: (screen: Screen) => void;
}

const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({ onNavigate }) => {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const [timer, setTimer] = useState(60);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus next input
            if (value !== "" && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        console.log('Verifying OTP:', enteredOtp);
        // Add OTP verification logic here
        alert('Account verified successfully!');
        onNavigate('serviceSelectionDashboard');
    };
    
    const handleResendCode = () => {
        console.log("Resending OTP code...");
        setTimer(60);
        setOtp(Array(6).fill(''));
        inputRefs.current[0]?.focus();
    };

    return (
        <div className="min-h-screen bg-[#0a2a66] font-sans flex flex-col items-center justify-center p-4 relative">
            <header className="absolute top-0 left-0 w-full flex items-center p-4 sm:p-6 z-20">
                <button
                    onClick={() => onNavigate('customerRegistration')}
                    className="flex items-center space-x-2 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
                    aria-label="Go back to registration"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                </button>
            </header>

            <main className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-8 space-y-6 z-10 text-center">
                <h1 className="text-3xl font-poppins font-bold text-gray-900">OTP Verification</h1>
                <p className="text-gray-600">
                    Enter the 6-digit code sent to your phone number.
                </p>

                 {/* Progress Indicator */}
                 <div className="w-full">
                    <p className="text-sm font-medium text-gray-600 text-center">Step 2 of 3: Verification</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#0a2a66] h-2 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                </div>

                <form onSubmit={handleVerify} className="space-y-8">
                    <div className="flex justify-center gap-2">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                // Fix: Corrected ref callback to prevent implicit return, resolving TypeScript error.
                                ref={(el) => { inputRefs.current[index] = el; }}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="w-12 h-14 text-center text-2xl font-semibold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a2a66] focus:border-transparent"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0a2a66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250] transition-all duration-300"
                    >
                        Verify & Continue
                    </button>
                </form>

                <div className="text-sm text-gray-600">
                    Didn't receive code?{' '}
                    {timer > 0 ? (
                        <span>Resend in {timer}s</span>
                    ) : (
                        <button onClick={handleResendCode} className="font-medium text-[#0a2a66] hover:underline">
                            Resend Code
                        </button>
                    )}
                </div>
            </main>
        </div>
    );
};

export default OtpVerificationScreen;