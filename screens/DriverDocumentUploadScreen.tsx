import React from 'react';
// Fix: Added .ts extension to import path.
import { Screen } from '../types.ts';
// Fix: Added .tsx extension to import path.
import { ArrowLeftIcon, UploadIcon } from '../components/Icons.tsx';

interface DriverDocumentUploadScreenProps {
    onNavigate: (screen: Screen) => void;
}

const DocumentUploadField: React.FC<{ label: string; description: string }> = ({ label, description }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                    <label htmlFor={`file-upload-${label}`} className="relative cursor-pointer bg-white rounded-md font-medium text-[#0A2A66] hover:text-[#082250] focus-within:outline-none">
                        <span>Upload a file</span>
                        <input id={`file-upload-${label}`} name={`file-upload-${label}`} type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
    </div>
);


const DriverDocumentUploadScreen: React.FC<DriverDocumentUploadScreenProps> = ({ onNavigate }) => {
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNavigate('driverApplicationReview');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button
                    onClick={() => onNavigate('driverRegistration')}
                    className="p-2 rounded-full hover:bg-gray-100"
                    aria-label="Go back to registration"
                >
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Upload Documents</h1>
                </div>
                <div className="w-9"></div> {/* Spacer */}
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-6">
                 <div className="w-full max-w-lg mx-auto">
                    <p className="text-sm font-medium text-gray-600 text-center">Step 2 of 3: Document Upload</p>
                    <div className="bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-[#0a2a66] h-2 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-lg mx-auto space-y-6">
                    <DocumentUploadField label="Driver's License (Front & Back)" description="PDF, PNG, JPG up to 10MB" />
                    <DocumentUploadField label="Vehicle Registration" description="PDF, PNG, JPG up to 10MB" />
                    <DocumentUploadField label="Proof of Insurance" description="PDF, PNG, JPG up to 10MB" />
                    <DocumentUploadField label="Ghana Card (Front & Back)" description="PDF, PNG, JPG up to 10MB" />

                    <button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0A2A66] hover:bg-[#082250] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#082250]"
                    >
                        Submit for Review
                    </button>
                </form>
            </main>
        </div>
    );
};

export default DriverDocumentUploadScreen;