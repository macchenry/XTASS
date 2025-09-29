export enum Role {
    Customer = 'Customer',
    Driver = 'Driver',
    Admin = 'Admin',
}

export type Screen =
    | 'welcome'
    | 'customerLogin'
    | 'driverLogin'
    | 'adminLogin'
    | 'customerRegistration'
    | 'passwordRecovery'
    | 'driverPasswordRecovery'
    | 'adminPasswordRecovery'
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
    | 'driverRegistration'
    | 'driverDocumentUpload'
    | 'driverApplicationReview'
    | 'driverDashboard'
    | 'tripRequest'
    | 'tripManagement'
    | 'tripCompletion'
    | 'driverEarnings'
    | 'adminDashboard'
    | 'adminDriverManagement'
    | 'adminLiveOperations'
    | 'adminSystemConfig';

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
