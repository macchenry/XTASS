// Fix: Implemented types used across the application.
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
    | 'otpVerification'
    | 'passwordRecovery'
    | 'serviceSelectionDashboard'
    | 'tripDetailsInput'
    | 'schedulePlanning'
    | 'compatibleShuttles';
