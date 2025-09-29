
import React, { useState } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
// Fix: Remove .ts and .tsx extensions from import paths.
import { ArrowLeftIcon, StarIcon, SmileIcon, MehIcon, FrownIcon, SparklesIcon, UserCircleIcon } from '../components/Icons';
import { shuttleData } from '../data/shuttleData';

interface ServiceRatingScreenProps {
    onNavigate: (screen: Screen, shuttleId?: number) => void;
    shuttleId: number | null;
}

const feedbackTags = ['Clean Vehicle', 'Polite Driver', 'On Time', 'Comfortable Ride', 'Good Music', 'Safe Driving'];

type Sentiment = 'happy' | 'neutral' | 'sad' | null;

const ServiceRatingScreen: React.FC<ServiceRatingScreenProps> = ({ onNavigate, shuttleId }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [sentiment, setSentiment] = useState<Sentiment>(null);

    const shuttle = shuttleData.find(s => s.id === shuttleId) || shuttleData[0];

    const handleTagClick = (tag: string) => {
        setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handleSubmit = () => {
        console.log({ rating, sentiment, selectedTags, feedback });
        alert('Thank you for your feedback!');
        onNavigate('serviceSelectionDashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('securePaymentProcessing', shuttle.id)} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Rate Your Trip</h1>
                </div>
                <button onClick={() => onNavigate('serviceSelectionDashboard')} className="w-9" aria-label="Go to dashboard">
                    <XtassLogo className="h-8" color="#0A2A66" />
                </button>
            </header>

            <main className="flex-grow p-4 md:p-6 space-y-6 pb-24">
                <div className="bg-white p-4 rounded-xl shadow text-center">
                    <h2 className="text-2xl font-poppins font-semibold text-gray-800">Thank you for riding!</h2>
                    <p className="text-gray-600 mt-1">Your feedback helps us improve.</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <div className="flex items-center space-x-3">
                        <UserCircleIcon className="w-12 h-12 text-gray-300" />
                        <div>
                            <p className="font-bold text-gray-800">{shuttle.driver.name}</p>
                            <p className="text-sm text-gray-500">{shuttle.name}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-xl shadow text-center">
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-4">How was your trip?</h3>
                    <div className="flex justify-center space-x-4 mb-4">
                        <SentimentButton icon={<SmileIcon />} label="Good" selected={sentiment === 'happy'} onClick={() => setSentiment('happy')} />
                        <SentimentButton icon={<MehIcon />} label="Okay" selected={sentiment === 'neutral'} onClick={() => setSentiment('neutral')} />
                        <SentimentButton icon={<FrownIcon />} label="Bad" selected={sentiment === 'sad'} onClick={() => setSentiment('sad')} />
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                <StarIcon
                                    className={`w-10 h-10 transition-colors ${
                                        (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                    }`}
                                    filled={(hoverRating || rating) >= star}
                                />
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-poppins font-semibold text-gray-800 mb-3">Tell us more</h3>
                    <div className="flex flex-wrap gap-2">
                        {feedbackTags.map(tag => (
                             <button 
                                key={tag} 
                                onClick={() => handleTagClick(tag)}
                                className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                                    selectedTags.includes(tag) 
                                    ? 'bg-[#0A2A66] text-white border-[#0A2A66]' 
                                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <textarea 
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Add your comments here..."
                        rows={4}
                        className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A2A66] focus:border-transparent"
                    />
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex space-x-2 z-20">
                 <button onClick={() => onNavigate('serviceSelectionDashboard')} className="w-1/3 text-center py-3 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100">
                    Skip
                </button>
                <button onClick={handleSubmit} className="w-2/3 text-center py-3 px-4 border border-transparent bg-[#0A2A66] text-white rounded-lg font-semibold hover:bg-[#082250]">
                    Submit Feedback
                </button>
            </footer>
        </div>
    );
};

const SentimentButton: React.FC<{
    // Fix: Updated icon prop type to be more specific for cloneElement, resolving a TypeScript error.
    icon: React.ReactElement<{ className?: string }>;
    label: string;
    selected: boolean;
    onClick: () => void;
}> = ({ icon, label, selected, onClick }) => {
    const selectedClasses = {
        happy: 'bg-green-100 text-green-700 border-green-300',
        neutral: 'bg-yellow-100 text-yellow-700 border-yellow-300',
        sad: 'bg-red-100 text-red-700 border-red-300'
    };

    const sentimentKey = label.toLowerCase() as keyof typeof selectedClasses;

    return (
        <button onClick={onClick} className={`p-2 border rounded-lg flex flex-col items-center space-y-1 w-20 transition-colors ${selected ? selectedClasses[sentimentKey] : 'bg-gray-100 border-gray-200 hover:bg-gray-200'}`}>
            {React.cloneElement(icon, { className: 'w-8 h-8' })}
            <span className="text-xs font-medium">{label}</span>
        </button>
    )
}

export default ServiceRatingScreen;