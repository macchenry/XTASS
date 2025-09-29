import React, { useState } from 'react';
// Fix: Added .ts extension to import path.
import { Screen } from './types.ts';

// Import all screens
// Fix: Added .tsx extension to import paths.
import WelcomeScreen from './screens/WelcomeScreen.tsx';
import CustomerLoginScreen from './screens/CustomerLoginScreen.tsx';
import DriverLoginScreen from './screens/DriverLoginScreen.tsx';
import AdminLoginScreen from './screens/AdminLoginScreen.tsx';
import CustomerRegistrationScreen from './screens/CustomerRegistrationScreen.tsx';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen.tsx';
import DriverPasswordRecoveryScreen from './screens/DriverPasswordRecoveryScreen.tsx';
import AdminPasswordRecoveryScreen from './screens/AdminPasswordRecoveryScreen.tsx';
import OtpVerificationScreen from './screens/OtpVerificationScreen.tsx';
import ServiceSelectionDashboard from './screens/ServiceSelectionDashboard.tsx';
import TripDetailsInputScreen from './screens/TripDetailsInputScreen.tsx';
import SchedulePlanningScreen from './screens/SchedulePlanningScreen.tsx';
import CompatibleShuttlesScreen from './screens/CompatibleShuttlesScreen.tsx';
import ShuttleDriverProfileScreen from './screens/ShuttleDriverProfileScreen.tsx';
import BookingConfirmationScreen from './screens/BookingConfirmationScreen.tsx';
import RealTimeTripTrackingScreen from './screens/RealTimeTripTrackingScreen.tsx';
import PaymentSelectionScreen from './screens/PaymentSelectionScreen.tsx';
import SecurePaymentProcessingScreen from './screens/SecurePaymentProcessingScreen.tsx';
import ServiceRatingScreen from './screens/ServiceRatingScreen.tsx';
import AccountProfileScreen from './screens/AccountProfileScreen.tsx';
import ServiceHistoryScreen from './screens/ServiceHistoryScreen.tsx';
import TripHistoryDetailScreen from './screens/TripHistoryDetailScreen.tsx';
import SavedPassengersScreen from './screens/SavedPassengersScreen.tsx';
import EmergencyContactsScreen from './screens/EmergencyContactsScreen.tsx';
import DriverRegistrationScreen from './screens/DriverRegistrationScreen.tsx';
import DriverDocumentUploadScreen from './screens/DriverDocumentUploadScreen.tsx';
import DriverApplicationReviewScreen from './screens/DriverApplicationReviewScreen.tsx';
import DriverDashboardScreen from './screens/DriverDashboardScreen.tsx';
import TripRequestScreen from './screens/TripRequestScreen.tsx';
import TripManagementScreen from './screens/TripManagementScreen.tsx';
import TripCompletionScreen from './screens/TripCompletionScreen.tsx';
import DriverEarningsScreen from './screens/DriverEarningsScreen.tsx';
import AdminDashboardScreen from './screens/AdminDashboardScreen.tsx';
import AdminDriverManagementScreen from './screens/AdminDriverManagementScreen.tsx';
import AdminLiveOperationsScreen from './screens/AdminLiveOperationsScreen.tsx';
import AdminSystemConfigScreen from './screens/AdminSystemConfigScreen.tsx';

const App: React.FC = () => {
    const [screen, setScreen] = useState<Screen>('welcome');
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleNavigate = (newScreen: Screen, id?: number) => {
        setScreen(newScreen);
        if (id !== undefined) {
            setActiveId(id);
        } else {
            // Reset ID if not passed to avoid carrying over old shuttle/trip IDs
            // setActiveId(null); // Keep activeId for back navigation scenarios
        }
    };

    const renderScreen = () => {
        switch (screen) {
            case 'welcome': return <WelcomeScreen onNavigate={handleNavigate} />;
            case 'customerLogin': return <CustomerLoginScreen onNavigate={handleNavigate} />;
            case 'driverLogin': return <DriverLoginScreen onNavigate={handleNavigate} />;
            case 'adminLogin': return <AdminLoginScreen onNavigate={handleNavigate} />;
            case 'customerRegistration': return <CustomerRegistrationScreen onNavigate={handleNavigate} />;
            case 'passwordRecovery': return <PasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'driverPasswordRecovery': return <DriverPasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'adminPasswordRecovery': return <AdminPasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'otpVerification': return <OtpVerificationScreen onNavigate={handleNavigate} />;
            case 'serviceSelectionDashboard': return <ServiceSelectionDashboard onNavigate={handleNavigate} />;
            case 'tripDetailsInput': return <TripDetailsInputScreen onNavigate={handleNavigate} />;
            case 'schedulePlanning': return <SchedulePlanningScreen onNavigate={handleNavigate} />;
            case 'compatibleShuttles': return <CompatibleShuttlesScreen onNavigate={handleNavigate} />;
            case 'shuttleDriverProfile': return <ShuttleDriverProfileScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'bookingConfirmation': return <BookingConfirmationScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'realTimeTripTracking': return <RealTimeTripTrackingScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'paymentSelection': return <PaymentSelectionScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'securePaymentProcessing': return <SecurePaymentProcessingScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'serviceRating': return <ServiceRatingScreen onNavigate={handleNavigate} shuttleId={activeId} />;
            case 'accountProfile': return <AccountProfileScreen onNavigate={handleNavigate} />;
            case 'serviceHistory': return <ServiceHistoryScreen onNavigate={handleNavigate} />;
            case 'tripHistoryDetail': return <TripHistoryDetailScreen onNavigate={handleNavigate} tripId={activeId} />;
            case 'savedPassengers': return <SavedPassengersScreen onNavigate={handleNavigate} />;
            case 'emergencyContacts': return <EmergencyContactsScreen onNavigate={handleNavigate} />;
            case 'driverRegistration': return <DriverRegistrationScreen onNavigate={handleNavigate} />;
            case 'driverDocumentUpload': return <DriverDocumentUploadScreen onNavigate={handleNavigate} />;
            case 'driverApplicationReview': return <DriverApplicationReviewScreen onNavigate={handleNavigate} />;
            case 'driverDashboard': return <DriverDashboardScreen onNavigate={handleNavigate} />;
            case 'tripRequest': return <TripRequestScreen onNavigate={handleNavigate} />;
            case 'tripManagement': return <TripManagementScreen onNavigate={handleNavigate} />;
            case 'tripCompletion': return <TripCompletionScreen onNavigate={handleNavigate} />;
            case 'driverEarnings': return <DriverEarningsScreen onNavigate={handleNavigate} />;
            case 'adminDashboard': return <AdminDashboardScreen onNavigate={handleNavigate} />;
            case 'adminDriverManagement': return <AdminDriverManagementScreen onNavigate={handleNavigate} />;
            case 'adminLiveOperations': return <AdminLiveOperationsScreen onNavigate={handleNavigate} />;
            case 'adminSystemConfig': return <AdminSystemConfigScreen onNavigate={handleNavigate} />;
            default:
                // const exhaustiveCheck: never = screen; // This will cause a compile error if a case is missing.
                return <WelcomeScreen onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="App">
            {renderScreen()}
        </div>
    );
};

export default App;
