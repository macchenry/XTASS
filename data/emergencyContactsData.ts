
// Fix: Added .ts extension to import path.
import { EmergencyContact } from '../types.ts';

export const emergencyContactsData: EmergencyContact[] = [
    {
        id: 1,
        name: 'Esi Prah',
        relationship: 'Spouse',
        phone: '+233 24 123 4567',
        notifications: {
            tripStart: true,
            emergency: true,
            tripComplete: true,
            delayedArrival: false,
        }
    },
    {
        id: 2,
        name: 'Kwame Osei',
        relationship: 'Brother',
        phone: '+233 55 987 6543',
        notifications: {
            tripStart: false,
            emergency: true,
            tripComplete: false,
            delayedArrival: true,
        }
    },
    {
        id: 3,
        name: 'Admin Support',
        relationship: 'Work',
        phone: '+233 30 211 2233',
        notifications: {
            tripStart: false,
            emergency: true,
            tripComplete: false,
            delayedArrival: false,
        }
    }
];
