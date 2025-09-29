
export type Screen =
    | 'welcome'
    | 'customerLogin'
    | 'driverLogin'
    | 'adminLogin'
    | 'customerRegistration'
    | 'passwordRecovery'
    | 'otpVerification'
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
    | 'accountProfile'
    | 'serviceHistory'
    | 'tripHistoryDetail'
    | 'savedPassengers'
    | 'emergencyContacts'
    | 'driverDashboard'
    | 'driverRegistration'
    | 'driverPasswordRecovery'
    | 'driverDocumentUpload'
    | 'driverApplicationReview'
    | 'tripRequest'
    | 'tripManagement'
    | 'tripCompletion'
    | 'driverEarnings';

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
