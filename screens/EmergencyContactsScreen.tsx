
import React, { useState } from 'react';
// Fix: Added .ts and .tsx extensions to import paths.
import { Screen, EmergencyContact } from '../types.ts';
import { emergencyContactsData as initialContacts } from '../data/emergencyContactsData.ts';
import { ArrowLeftIcon, UserPlusIcon, EllipsisVerticalIcon, PencilIcon, TrashIcon, BellIcon } from '../components/Icons.tsx';

interface EmergencyContactsScreenProps {
    onNavigate: (screen: Screen) => void;
}

const EmergencyContactsScreen: React.FC<EmergencyContactsScreenProps> = ({ onNavigate }) => {
    const [contacts, setContacts] = useState(initialContacts);
    const [modalOpen, setModalOpen] = useState(false);
    const [contactToDelete, setContactToDelete] = useState<EmergencyContact | null>(null);

    const handleDeleteClick = (contact: EmergencyContact) => {
        setContactToDelete(contact);
        setModalOpen(true);
    };

    const confirmDelete = () => {
        if (contactToDelete) {
            setContacts(contacts.filter(c => c.id !== contactToDelete.id));
            setModalOpen(false);
            setContactToDelete(null);
        }
    };
    
    const handleToggle = (contactId: number, notification: keyof EmergencyContact['notifications']) => {
        setContacts(contacts.map(c => 
            c.id === contactId
            ? { ...c, notifications: { ...c.notifications, [notification]: !c.notifications[notification] } }
            : c
        ));
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <header className="bg-white shadow-sm p-4 flex items-center sticky top-0 z-20">
                <button onClick={() => onNavigate('accountProfile')} className="p-2 rounded-full hover:bg-gray-100">
                    <ArrowLeftIcon className="w-5 h-5 text-gray-700" />
                </button>
                <div className="flex-grow text-center">
                    <h1 className="text-xl font-poppins font-bold text-gray-800">Emergency Contacts</h1>
                </div>
                <button className="p-2 rounded-full hover:bg-gray-100" aria-label="Add Contact">
                    <UserPlusIcon className="w-6 h-6 text-gray-700" />
                </button>
            </header>

            <main className="p-4 md:p-6 space-y-4">
                {contacts.map(contact => (
                    <ContactCard 
                        key={contact.id} 
                        contact={contact} 
                        onDeleteClick={handleDeleteClick}
                        onToggle={handleToggle}
                    />
                ))}
            </main>

            {modalOpen && contactToDelete && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold text-gray-900">Delete Contact?</h2>
                        <p className="mt-2 text-gray-600">
                            Are you sure you want to remove <span className="font-semibold">{contactToDelete.name}</span> from your emergency contacts?
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

const ContactCard: React.FC<{ 
    contact: EmergencyContact; 
    onDeleteClick: (c: EmergencyContact) => void;
    onToggle: (contactId: number, notification: keyof EmergencyContact['notifications']) => void;
}> = ({ contact, onDeleteClick, onToggle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex items-start justify-between">
                <div>
                    <p className="font-bold text-lg text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.relationship} &bull; {contact.phone}</p>
                </div>
                <div className="relative">
                    <button onClick={() => setMenuOpen(!menuOpen)} onBlur={() => setTimeout(() => setMenuOpen(false), 200)} className="p-2 rounded-full hover:bg-gray-100">
                        <EllipsisVerticalIcon className="w-5 h-5 text-gray-500" />
                    </button>
                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border">
                            <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                                <PencilIcon className="w-4 h-4" /> <span>Edit Contact</span>
                            </button>
                             <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                                <BellIcon className="w-4 h-4" /> <span>Test Notification</span>
                            </button>
                            <button onClick={() => onDeleteClick(contact)} className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                                <TrashIcon className="w-4 h-4" /> <span>Delete Contact</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 border-t pt-4 space-y-3">
                <p className="text-sm font-semibold text-gray-700">Notification Settings</p>
                <Toggle label="Trip Start" enabled={contact.notifications.tripStart} onToggle={() => onToggle(contact.id, 'tripStart')} />
                <Toggle label="Emergency Alerts" enabled={contact.notifications.emergency} onToggle={() => onToggle(contact.id, 'emergency')} />
                <Toggle label="Trip Completion" enabled={contact.notifications.tripComplete} onToggle={() => onToggle(contact.id, 'tripComplete')} />
                <Toggle label="Delayed Arrival" enabled={contact.notifications.delayedArrival} onToggle={() => onToggle(contact.id, 'delayedArrival')} />
            </div>
        </div>
    );
};

const Toggle: React.FC<{label: string, enabled: boolean, onToggle: () => void}> = ({ label, enabled, onToggle }) => (
    <div className="flex items-center justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <button
            onClick={onToggle}
            className={`${enabled ? 'bg-[#0A2A66]' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
        >
            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
        </button>
    </div>
);

export default EmergencyContactsScreen;
