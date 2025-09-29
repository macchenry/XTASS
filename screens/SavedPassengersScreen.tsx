// Fix: Implement the SavedPassengersScreen component.
import React, { useState } from 'react';
import { Screen, Passenger } from '../types';
import { passengerData as initialPassengerData } from '../data/passengerData';
import { ArrowLeftIcon, PlusIcon, UserCircleIcon, EllipsisVerticalIcon, PencilIcon, TrashIcon } from '../components/Icons';

interface SavedPassengersScreenProps {
    onNavigate: (screen: Screen) => void;
}

const SavedPassengersScreen: React.FC<SavedPassengersScreenProps> = ({ onNavigate }) => {
    const [passengers, setPassengers] = useState(initialPassengerData);
    const [modalOpen, setModalOpen] = useState(false);
    const [passengerToDelete, setPassengerToDelete] = useState<Passenger | null>(null);

    const handleDeleteClick = (passenger: Passenger) => {
        setPassengerToDelete(passenger);
        setModalOpen(true);
    };

    const confirmDelete = () => {
        if (passengerToDelete) {
            setPassengers(passengers.filter(p => p.id !== passengerToDelete.id));
            setModalOpen(false);
            setPassengerToDelete(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('accountProfile')} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Saved Passengers</h1>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Add Passenger">
                    <PlusIcon className="w-6 h-6 text-gray-700" />
                </button>
            </header>

            <main className="p-4 md:p-6 space-y-4">
                {passengers.map(passenger => (
                    <PassengerCard key={passenger.id} passenger={passenger} onDeleteClick={handleDeleteClick} />
                ))}
            </main>

            {modalOpen && passengerToDelete && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold text-gray-900">Delete Passenger?</h2>
                        <p className="mt-2 text-gray-600">
                            Are you sure you want to delete <span className="font-semibold">{passengerToDelete.name}</span>? This action cannot be undone.
                        </p>
                        <div className="mt-6 flex justify-center space-x-3">
                            <button onClick={() => setModalOpen(false)} className="w-full py-2 px-4 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100">
                                Cancel
                            </button>
                            <button onClick={confirmDelete} className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700">
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const PassengerCard: React.FC<{ passenger: Passenger; onDeleteClick: (p: Passenger) => void; }> = ({ passenger, onDeleteClick }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {passenger.photo ? (
                    <img src={passenger.photo} alt={passenger.name} className="w-14 h-14 rounded-full object-cover" />
                ) : (
                    <UserCircleIcon className="w-14 h-14 text-gray-300" />
                )}
                <div>
                    <p className="font-bold text-gray-800">{passenger.name}</p>
                    <p className="text-sm text-gray-500">{passenger.ageCategory}</p>
                    {passenger.specialNeeds.length > 0 && 
                        <p className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full inline-block mt-1">
                            {passenger.specialNeeds[0]}
                        </p>
                    }
                </div>
            </div>
            <div className="relative">
                <button onClick={() => setMenuOpen(!menuOpen)} onBlur={() => setTimeout(() => setMenuOpen(false), 200)} className="p-2 rounded-full hover:bg-gray-100">
                    <EllipsisVerticalIcon className="w-5 h-5 text-gray-500" />
                </button>
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10 border">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                            <PencilIcon className="w-4 h-4" /> <span>Edit</span>
                        </button>
                        <button onClick={() => onDeleteClick(passenger)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                            <TrashIcon className="w-4 h-4" /> <span>Delete</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedPassengersScreen;
