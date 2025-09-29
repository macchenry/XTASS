import React, { useState } from 'react';
// Fix: Removed .ts extension from import path.
import { Screen } from '../types';
// Fix: Removed .tsx extension from import path.
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, UploadIcon } from '../components/Icons';
import { XtassLogo } from '../components/XtassLogo';

interface DriverRegistrationScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DriverRegistrationScreen: React.FC<DriverRegistrationScreenProps> = ({ onNavigate }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                            <input id="password" type={showPassword ? 'text' : 'password'} required className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center">
                                {showPassword ? <EyeOffIcon className="h-5 w-5 text-gray-500" /> : <EyeIcon className="h-5 w-5 text-gray-500" />}
                            </button>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                             <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#0A2A66] hover:text-[#082250] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0A2A66]">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    {/* Professional Details */}
                     <fieldset className="space-y-4">
                        <legend className="text-lg font-semibold font-poppins text-gray-800 border-b pb-2">Professional Details</legend>
                        <div>
                            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Years of Driving Experience</label>
                            <input id="experience" type="number" required min="1" className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                         <div>
                            <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-1">Languages Spoken</label>
                            <input id="languages" type="text" required placeholder="e.g. English, Twi, Ga" className="block w-full px-3 py-2 border border-gray-300 rounded-md sm:text-sm" />
                        </div>
                    </fieldset>
                    
                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2A66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250]"
                    >
                        Continue to Documents
                    </button>
                </form>
            </main>
        </div>
    );
};

export default DriverRegistrationScreen;