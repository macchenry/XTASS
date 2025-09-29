
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
    | 'serviceHistory'
    | 'tripHistoryDetail';

export interface Driver {
    name: string;
    experience: string;
    bio: string;
    licensePlate: string;
}

export interface Shuttle {
    id: number;
    name: string;
    location: string;
    distance: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    images: string[];
    driver: Driver;
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
