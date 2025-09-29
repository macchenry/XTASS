// Fix: Provide mock data for passenger profiles.
// Fix: Added .ts extension to import path.
import { Passenger } from '../types.ts';

export const passengerData: Passenger[] = [
    {
        id: 1,
        name: 'Adjoa Mensah',
        ageCategory: 'Adult',
        specialNeeds: ['Prefers front seat'],
        luggage: 1,
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Kofi Mensah Jr.',
        ageCategory: 'Child',
        specialNeeds: ['Child seat required'],
        luggage: 1,
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Baby Ama',
        ageCategory: 'Infant',
        specialNeeds: ['Infant carrier'],
        luggage: 2,
        photo: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=100&h=100&auto=format&fit=crop',
    },
];
