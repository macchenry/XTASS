
import React, { useState } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen } from '../types.ts';
import { XtassLogo } from '../components/XtassLogo.tsx';
import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, StarIcon, CheckBadgeIcon, UserCircleIcon, MapPinIcon, UsersIcon, FuelIcon, LanguagesIcon, PhoneIcon, WhatsAppIcon } from '../components/Icons.tsx';
import { shuttleData } from '../data/shuttleData.ts';

interface ShuttleDriverProfileScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

const reviews = [
    { name: 'Ama T.', rating: 5, comment: 'Excellent service! The driver was professional and the shuttle was very clean. Highly recommended.' },
    { name: 'Kofi A.', rating: 5, comment: 'On time and very courteous. The ride was smooth and comfortable. Will definitely use again.' },
    { name: 'Adwoa M.', rating: 4, comment: 'Good experience overall. A little bit of traffic but the driver handled it well.' },
];

const ShuttleDriverProfileScreen: React.FC<ShuttleDriverProfileScreenProps> = ({ onNavigate, shuttleId }) => {
    const shuttle = shuttleData.find(s => s.id === shuttleId) || shuttleData[0];
    const { name, images, driver, reviews: reviewCount, rating, location, price } = shuttle;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

    const nextReview = () => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('compatibleShuttles')} className="p-2 rounded-full hover:bg-gray-100"><ArrowLeftIcon className="w-5 h-5 text-gray-700" /></button>
                <div className="flex-grow text-center text-sm text-gray-500">
                    <span onClick={() => onNavigate('serviceSelectionDashboard')} className="cursor-pointer hover:underline">Home</span> &gt; 
                    <span onClick={() => onNavigate('compatibleShuttles')} className="cursor-pointer hover:underline">Shuttles</span> &gt; 
                    <span className="font-semibold text-gray-800"> Profile</span>
                </div>
                <button onClick={() => onNavigate('serviceSelectionDashboard')}><XtassLogo className="h-8" color="#0A2A66" /></button>
            </header>

            <main className="p-4 md:p-6 space-y-6 pb-24">
                {/* Shuttle Image Gallery */}
                <div className="relative w-full h-56 md:h-72 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <img src={images[currentImageIndex]} alt={name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-between p-2">
                        <button onClick={prevImage} className="bg-white/50 p-2 rounded-full hover:bg-white/80 transition"><ChevronLeftIcon className="w-6 h-6 text-gray-800" /></button>
                        <button onClick={nextImage} className="bg-white/50 p-2 rounded-full hover:bg-white/80 transition"><ChevronRightIcon className="w-6 h-6 text-gray-800" /></button>
                    </div>
                </div>

                {/* Shuttle Info */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-2xl font-poppins font-bold text-gray-900">{name}</h2>
                    <div className="flex items-center mt-1 text-green-600 font-semibold">
                        <CheckBadgeIcon className="w-5 h-5 mr-2"/>
                        <p>Perfect fit for your group</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div className="flex items-center"><UsersIcon className="w-5 h-5 mr-2 text-gray-400"/> Up to 14 Passengers</div>
                        <div className="flex items-center"><MapPinIcon className="w-5 h-5 mr-2 text-gray-400"/> Station: {location}</div>
                        <div className="flex items-center"><FuelIcon className="w-5 h-5 mr-2 text-gray-400"/> Air Conditioned</div>
                        <div className="flex items-center"><LanguagesIcon className="w-5 h-5 mr-2 text-gray-400"/> English/Twi Speaking</div>
                    </div>
                </div>

                {/* Driver Profile */}
                <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center space-x-4">
                        <UserCircleIcon className="w-16 h-16 text-gray-300" />
                        <div>
                            <h3 className="text-xl font-poppins font-bold text-gray-900">Driver {driver.name}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                                <StarIcon className="w-4 h-4 text-yellow-400" filled/> <span className="font-semibold text-gray-800 mx-1">{rating}</span> ({reviewCount} trips)
                            </div>
                        </div>
                    </div>
                     <div className="mt-4 text-sm text-gray-600">
                        <p>{driver.bio}</p>
                    </div>
                </div>

                 {/* Customer Reviews Carousel */}
                <div className="bg-white p-4 rounded-xl shadow relative">
                    <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">What Customers Say</h3>
                    <div className="text-center h-28 flex flex-col justify-center items-center">
                        <p className="text-gray-600 italic">"{reviews[currentReviewIndex].comment}"</p>
                        <p className="mt-2 font-semibold text-gray-800">- {reviews[currentReviewIndex].name}</p>
                    </div>
                    <div className="absolute inset-y-0 flex items-center left-2">
                        <button onClick={prevReview} className="p-1 rounded-full hover:bg-gray-100"><ChevronLeftIcon className="w-5 h-5"/></button>
                    </div>
                     <div className="absolute inset-y-0 flex items-center right-2">
                        <button onClick={nextReview} className="p-1 rounded-full hover:bg-gray-100"><ChevronRightIcon className="w-5 h-5"/></button>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-white p-4 rounded-xl shadow">
                     <h3 className="text-lg font-poppins font-semibold text-gray-900 mb-2">Price Breakdown</h3>
                     <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex justify-between"><span>Base Fare</span><span>GH₵{ (price * 0.6).toFixed(2) }</span></div>
                        <div className="flex justify-between"><span>Distance (Est.)</span><span>GH₵{ (price * 0.4).toFixed(2) }</span></div>
                        <div className="flex justify-between border-t pt-2 mt-2 font-bold text-gray-800 text-base"><span>Estimated Total</span><span>GH₵{price.toFixed(2)}</span></div>
                     </div>
                </div>

            </main>

            {/* Bottom Action Bar */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex items-center justify-between space-x-2 z-20">
                <div className="flex space-x-2">
                    <a href="tel:+233559369950" className="p-3 border rounded-lg hover:bg-gray-100"><PhoneIcon className="w-6 h-6 text-gray-600"/></a>
                    <a href="https://wa.me/233559369950" target="_blank" rel="noopener noreferrer" className="p-3 border rounded-lg hover:bg-gray-100"><WhatsAppIcon className="w-6 h-6 text-green-500"/></a>
                </div>
                <button onClick={() => onNavigate('bookingConfirmation', shuttle.id)} className="flex-grow bg-[#0A2A66] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#082250] transition-colors">
                    Book This Shuttle
                </button>
            </footer>
        </div>
    );
};

export default ShuttleDriverProfileScreen;
