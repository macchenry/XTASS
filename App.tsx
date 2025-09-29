import React, { useState } from 'react';
// Fix: Remove .ts and .tsx extensions from import paths to resolve module not found errors.
import { Screen } from './types';
import WelcomeScreen from './screens/WelcomeScreen';
import CustomerLoginScreen from './screens/CustomerLoginScreen';
import DriverLoginScreen from './screens/DriverLoginScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import CustomerRegistrationScreen from './screens/CustomerRegistrationScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';
import ServiceSelectionDashboard from './screens/ServiceSelectionDashboard';
import TripDetailsInputScreen from './screens/TripDetailsInputScreen';
import SchedulePlanningScreen from './screens/SchedulePlanningScreen';
import CompatibleShuttlesScreen from './screens/CompatibleShuttlesScreen';
import ShuttleDriverProfileScreen from './screens/ShuttleDriverProfileScreen';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen';
import RealTimeTripTrackingScreen from './screens/RealTimeTripTrackingScreen';
import PaymentSelectionScreen from './screens/PaymentSelectionScreen';
import SecurePaymentProcessingScreen from './screens/SecurePaymentProcessingScreen';
import ServiceRatingScreen from './screens/ServiceRatingScreen';
import ServiceHistoryScreen from './screens/ServiceHistoryScreen';
import TripHistoryDetailScreen from './screens/TripHistoryDetailScreen';
import AccountProfileScreen from './screens/AccountProfileScreen';
import SavedPassengersScreen from './screens/SavedPassengersScreen';
// Fix: Remove .ts and .tsx extensions from import paths to resolve module not found errors.
import EmergencyContactsScreen from './screens/EmergencyContactsScreen';

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
    const [selectedShuttleId, setSelectedShuttleId] = useState<number | null>(null);
    const [selectedTripId, setSelectedTripId] = useState<number | null>(null);

    const handleNavigate = (screen: Screen, id?: number) => {
        setCurrentScreen(screen);
        if (screen === 'shuttleDriverProfile' || screen === 'bookingConfirmation' || screen === 'realTimeTripTracking' || screen === 'paymentSelection' || screen === 'securePaymentProcessing' || screen === 'serviceRating') {
            setSelectedShuttleId(id ?? null);
        }
        if (screen === 'tripHistoryDetail') {
            setSelectedTripId(id ?? null);
        }
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'welcome':
                return <WelcomeScreen onNavigate={handleNavigate} />;
            case 'customerLogin':
                return <CustomerLoginScreen onNavigate={handleNavigate} />;
            case 'driverLogin':
                return <DriverLoginScreen onNavigate={handleNavigate} />;
            case 'adminLogin':
                return <AdminLoginScreen onNavigate={handleNavigate} />;
            case 'customerRegistration':
                return <CustomerRegistrationScreen onNavigate={handleNavigate} />;
            case 'otpVerification':
                return <OtpVerificationScreen onNavigate={handleNavigate} />;
            case 'passwordRecovery':
                return <PasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'serviceSelectionDashboard':
                 return <ServiceSelectionDashboard onNavigate={handleNavigate} />;
            case 'tripDetailsInput':
                 return <TripDetailsInputScreen onNavigate={handleNavigate} />;
            case 'schedulePlanning':
                 return <SchedulePlanningScreen onNavigate={handleNavigate} />;
            case 'compatibleShuttles':
                 return <CompatibleShuttlesScreen onNavigate={handleNavigate} />;
            case 'shuttleDriverProfile':
                 return <ShuttleDriverProfileScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'bookingConfirmation':
                return <BookingConfirmationScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'realTimeTripTracking':
                return <RealTimeTripTrackingScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'paymentSelection':
                return <PaymentSelectionScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'securePaymentProcessing':
                return <SecurePaymentProcessingScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'serviceRating':
                return <ServiceRatingScreen onNavigate={handleNavigate} shuttleId={selectedShuttleId} />;
            case 'serviceHistory':
                return <ServiceHistoryScreen onNavigate={handleNavigate} />;
            case 'tripHistoryDetail':
                return <TripHistoryDetailScreen onNavigate={handleNavigate} tripId={selectedTripId} />;
            case 'accountProfile':
                return <AccountProfileScreen onNavigate={handleNavigate} />;
            case 'savedPassengers':
                return <SavedPassengersScreen onNavigate={handleNavigate} />;
            case 'emergencyContacts':
                return <EmergencyContactsScreen onNavigate={handleNavigate} />;
            default:
                return <WelcomeScreen onNavigate={handleNavigate} />;
        }
    };

    return <>{renderScreen()}</>;
};

export default App;