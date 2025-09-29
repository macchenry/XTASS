
import React, { useState } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths.
import { Screen } from '../types';
import { XtassLogo } from '../components/XtassLogo';
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
        alert('Thank you for your feedback!');
        onNavigate('serviceSelectionDashboard');
    };

    if (!shuttle) {
         return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4 text-center">
                <h2 className="text-xl font-bold text-gray-800">Error: No Trip Found</h2>
                <button 
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="mt-6 px-6 py-2 bg-[#0A2A66] text-white font-semibold rounded-lg hover:bg-[#082250] transition-colors"
                >
                    Go to Dashboard
                </button>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
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

            <main className="p-4 md:p-6 space-y-6 pb-24">
                <div className="bg-white p-4 rounded-xl shadow text-center">
                    <h2 className="text-2xl font-poppins font-semibold text-gray-900">Thank you for riding with us!</h2>
                    <p className="text-gray-600">Your feedback helps us improve.</p>
                </div>

                {/* Driver Info Card */}
                <div className="bg-white p-4 rounded-xl shadow flex items-center space-x-4">
                    <UserCircleIcon className="w-16 h-16 text-gray-300 flex-shrink-0" />
                    <div>
                        <p className="font-semibold text-gray-600">Your driver was</p>
                        <p className="font-bold text-xl text-gray-900">{shuttle.driver.name}</p>
                        <p className="text-sm text-gray-500">{shuttle.name}</p>
                    </div>
                </div>

                {/* Rating Section */}
                <div className="bg-white p-4 rounded-xl shadow space-y-4">
                    <p className="font-semibold text-center text-gray-800">How was your experience?</p>
                    
                    {/* Star Rating */}
                    {/* Fix: Wrap StarIcon in a button to handle events, as the component itself does not accept event handler props. */}
                    <div className="flex justify-center" onMouseLeave={() => setHoverRating(0)}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className="focus:outline-none"
                                onClick={() => setRating(star)}
                                onMouseEnter={() => setHoverRating(star)}
                            >
                                <StarIcon
                                    className={`w-10 h-10 cursor-pointer ${ (hoverRating || rating) >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                                    filled={(hoverRating || rating) >= star}
                                />
                            </button>
                        ))}
                    </div>

                    {/* Sentiment Icons */}
                    <div className="flex justify-center space-x-6 pt-2">
                        <SentimentButton icon={<SmileIcon />} label="Good" selected={sentiment === 'happy'} onClick={() => setSentiment('happy')} />
                        <SentimentButton icon={<MehIcon />} label="Neutral" selected={sentiment === 'neutral'} onClick={() => setSentiment('neutral')} />
                        <SentimentButton icon={<FrownIcon />} label="Bad" selected={sentiment === 'sad'} onClick={() => setSentiment('sad')} />
                    </div>

                    {/* Feedback Tags */}
                    <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">What went well?</p>
                        <div className="flex flex-wrap gap-2">
                            {feedbackTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-3 py-1.5 text-sm rounded-full border ${selectedTags.includes(tag) ? 'bg-[#0A2A66] text-white border-[#0A2A66]' : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Compliment */}
                    <button className="w-full flex items-center justify-center space-x-2 py-2 border-2 border-dashed rounded-lg text-gray-600 hover:border-[#0A2A66] hover:text-[#0A2A66] transition-colors">
                        <SparklesIcon className="w-5 h-5"/>
                        <span>Give a compliment to {shuttle.driver.name.split(' ')[0]}</span>
                    </button>

                    {/* Comment Box */}
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Leave additional comments..."
                        rows={3}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A2A66] focus:border-transparent transition"
                    />
                </div>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex items-center space-x-3 z-20">
                <button 
                    onClick={() => onNavigate('serviceSelectionDashboard')}
                    className="w-1/3 py-3 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
                >
                    Skip
                </button>
                <button 
                    onClick={handleSubmit}
                    className="w-2/3 py-3 px-4 bg-[#0A2A66] text-white font-bold rounded-lg hover:bg-[#082250] transition-colors"
                >
                    Submit Feedback
                </button>
            </footer>
        </div>
    );
};

// Fix: Changed icon prop from React.ReactNode to React.ReactElement to fix cloneElement type error.
const SentimentButton: React.FC<{
    // Fix: Specify that the icon element accepts a className prop to resolve cloneElement type error.
    icon: React.ReactElement<{ className?: string }>;
    label: string;
    selected: boolean;
    onClick: () => void;
}> = ({ icon, label, selected, onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col items-center space-y-1 group">
            <div className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-200 ${selected ? 'bg-[#0A2A66] text-white scale-110' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'}`}>
                {React.cloneElement(icon, { className: 'w-8 h-8' })}
            </div>
            <span className={`text-xs font-medium ${selected ? 'text-[#0A2A66]' : 'text-gray-500'}`}>{label}</span>
        </button>
    );
}

export default ServiceRatingScreen;
