
import React, { useState } from 'react';
import { Screen } from './types';

import WelcomeScreen from './screens/WelcomeScreen';
import CustomerLoginScreen from './screens/CustomerLoginScreen';
import DriverLoginScreen from './screens/DriverLoginScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import CustomerRegistrationScreen from './screens/CustomerRegistrationScreen';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
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
import AccountProfileScreen from './screens/AccountProfileScreen';
import ServiceHistoryScreen from './screens/ServiceHistoryScreen';
import TripHistoryDetailScreen from './screens/TripHistoryDetailScreen';
import SavedPassengersScreen from './screens/SavedPassengersScreen';
import EmergencyContactsScreen from './screens/EmergencyContactsScreen';
import DriverDashboardScreen from './screens/DriverDashboardScreen';
import DriverRegistrationScreen from './screens/DriverRegistrationScreen';
import DriverPasswordRecoveryScreen from './screens/DriverPasswordRecoveryScreen';
import DriverDocumentUploadScreen from './screens/DriverDocumentUploadScreen';
import DriverApplicationReviewScreen from './screens/DriverApplicationReviewScreen';
import TripRequestScreen from './screens/TripRequestScreen';
import TripManagementScreen from './screens/TripManagementScreen';
import TripCompletionScreen from './screens/TripCompletionScreen';
import DriverEarningsScreen from './screens/DriverEarningsScreen';

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleNavigate = (screen: Screen, id?: number) => {
        setCurrentScreen(screen);
        setSelectedId(id !== undefined ? id : null);
        window.scrollTo(0, 0);
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 'welcome': return <WelcomeScreen onNavigate={handleNavigate} />;
            case 'customerLogin': return <CustomerLoginScreen onNavigate={handleNavigate} />;
            case 'driverLogin': return <DriverLoginScreen onNavigate={handleNavigate} />;
            case 'adminLogin': return <AdminLoginScreen onNavigate={handleNavigate} />;
            case 'customerRegistration': return <CustomerRegistrationScreen onNavigate={handleNavigate} />;
            case 'passwordRecovery': return <PasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'otpVerification': return <OtpVerificationScreen onNavigate={handleNavigate} />;
            case 'serviceSelectionDashboard': return <ServiceSelectionDashboard onNavigate={handleNavigate} />;
            case 'tripDetailsInput': return <TripDetailsInputScreen onNavigate={handleNavigate} />;
            case 'schedulePlanning': return <SchedulePlanningScreen onNavigate={handleNavigate} />;
            case 'compatibleShuttles': return <CompatibleShuttlesScreen onNavigate={handleNavigate} />;
            case 'shuttleDriverProfile': return <ShuttleDriverProfileScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'bookingConfirmation': return <BookingConfirmationScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'realTimeTripTracking': return <RealTimeTripTrackingScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'paymentSelection': return <PaymentSelectionScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'securePaymentProcessing': return <SecurePaymentProcessingScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'serviceRating': return <ServiceRatingScreen onNavigate={handleNavigate} shuttleId={selectedId} />;
            case 'accountProfile': return <AccountProfileScreen onNavigate={handleNavigate} />;
            case 'serviceHistory': return <ServiceHistoryScreen onNavigate={handleNavigate} />;
            case 'tripHistoryDetail': return <TripHistoryDetailScreen onNavigate={handleNavigate} tripId={selectedId} />;
            case 'savedPassengers': return <SavedPassengersScreen onNavigate={handleNavigate} />;
            case 'emergencyContacts': return <EmergencyContactsScreen onNavigate={handleNavigate} />;
            case 'driverDashboard': return <DriverDashboardScreen onNavigate={handleNavigate} />;
            case 'driverRegistration': return <DriverRegistrationScreen onNavigate={handleNavigate} />;
            case 'driverPasswordRecovery': return <DriverPasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'driverDocumentUpload': return <DriverDocumentUploadScreen onNavigate={handleNavigate} />;
            case 'driverApplicationReview': return <DriverApplicationReviewScreen onNavigate={handleNavigate} />;
            case 'tripRequest': return <TripRequestScreen onNavigate={handleNavigate} />;
            case 'tripManagement': return <TripManagementScreen onNavigate={handleNavigate} />;
            case 'tripCompletion': return <TripCompletionScreen onNavigate={handleNavigate} />;
            case 'driverEarnings': return <DriverEarningsScreen onNavigate={handleNavigate} />;
            default:
                const exhaustiveCheck: never = currentScreen;
                return <WelcomeScreen onNavigate={handleNavigate} />;
        }
    };

    return <div className="App">{renderScreen()}</div>;
};

export default App;
