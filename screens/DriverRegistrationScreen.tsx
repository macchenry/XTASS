import React, { useState } from 'react';
// Fix: Added .ts extension to import path.
import { Screen } from '../types.ts';
// Fix: Added .tsx extension to import paths.
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, UploadIcon } from '../components/Icons.tsx';
import { XtassLogo } from '../components/XtassLogo.tsx';

interface DriverRegistrationScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverRegistrationScreen: React.FC<DriverRegistrationScreenProps> = ({ onNavigate }) => {
    // Fix: Add state for password fields and their visibility
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fix: Add password confirmation logic
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        onNavigate('driverDocumentUpload');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('driverLogin')}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Go back to login"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center absolute left-1/2 -translate-x-1/2">
                    <XtassLogo className="h-8" color="#0A2A66" />
                </div>
                <div></div>
            </header>
            
            <main className="flex-grow p-4 md:p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-poppins font-bold text-gray-800">Driver Registration</h1>
                    <p className="text-gray-600 mt-1">Join our professional team of drivers.</p>
                </div>

                {/* Progress Indicator */}
                <div className="w-full max-w-lg mx-auto">
                    <p className="text-sm font-medium text-gray-600 text-center">Step 1 of 3: Your Information</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#0a2a66] h-2 rounded-full" style={{ width: '33%' }}></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto space-y-6">
                    {/* Personal Information */}
                    <fieldset className="space-y-4">
                        <legend className="text-lg font-semibold font-poppins text-gray-800 border-b pb-2">Personal Information</legend>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Legal Name</label>
                            <input id="fullName" type="text" required className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                             <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm">+233</span>
                                <input id="phone" type="tel" required placeholder="55 123 4567" className="block w-full pl-14 pr-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-gray-400">(Optional)</span></label>
                            <input id="email" type="email" className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                         <div className="relative">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input id="password" type={showPassword ? 'text' : 'password'} required className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" value={password} onChange={e => setPassword(e.target.value)} />
                             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm">
                                {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                        <div className="relative">
                            <label htmlFor="confirm-password-driver" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                            <input id="confirm-password-driver" type={showConfirmPassword ? 'text' : 'password'} required className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                             <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-sm">
                                {showConfirmPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                    </fieldset>

                     {/* Vehicle Information */}
                    <fieldset className="space-y-4">
                         <legend className="text-lg font-semibold font-poppins text-gray-800 border-b pb-2">Vehicle Information</legend>
                         <div>
                            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                            <select id="vehicleType" required className="block w-full px-3 py-2 border bg-white border-gray-300 rounded-md sm:text-sm">
                                <option>Toyota Hiace</option>
                                <option>Mercedes-Benz Sprinter</option>
                                <option>Ford Transit</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="licensePlate" className="block text-sm font-medium text-gray-700 mb-1">License Plate Number</label>
                            <input id="licensePlate" type="text" required placeholder="e.g. GW 1234-20" className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#0A2A66] to-orange-500 hover:from-blue-800 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300"
                    >
                        <span>Next: Upload Documents</span>
                        <UploadIcon className="w-5 h-5" />
                    </button>
                </form>
            </main>
        </div>
    );
};

// Fix: Add default export to resolve module import error.
export default DriverRegistrationScreen;