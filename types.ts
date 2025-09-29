
export type Screen =
    | 'welcome'
    | 'customerLogin'
    | 'driverLogin'
    | 'adminLogin'
    | 'customerRegistration'
    | 'otpVerification'
    | 'passwordRecovery'
    | 'serviceSelectionDashboard'
    | 'tripDetailsInput'
    | 'schedulePlanning'
    | 'compatibleShuttles'
    | 'shuttleDriverProfile'
    | 'bookingConfirmation'
    | 'realTimeTripTracking'
    | 'paymentSelection'
    | 'securePaymentProcessing'
    | 'serviceRating'
    | 'serviceHistory'
    | 'tripHistoryDetail'
    | 'accountProfile'
    | 'savedPassengers'
    | 'emergencyContacts';

export enum Role {
    Customer = 'Customer',
    Driver = 'Driver',
    Admin = 'Admin',
}

export interface TripHistory {
    id: number;
    date: string;
    pickup: string;
    destination: string;
    driverName: string;
    vehicle: string;
    price: number;
    status: 'Completed' | 'Canceled';
}

export interface Passenger {
    id: number;
    name: string;
    ageCategory: 'Adult' | 'Child' | 'Infant';
    specialNeeds: string[];
    luggage: number;
    photo?: string;
}

export interface EmergencyContact {
    id: number;
    name: string;
    relationship: string;
    phone: string;
    notifications: {
        tripStart: boolean;
        emergency: boolean;
        tripComplete: boolean;
        delayedArrival: boolean;
    };
}