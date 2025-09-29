
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
import ServiceHistoryScreen from './screens/ServiceHistoryScreen';
import TripHistoryDetailScreen from './screens/TripHistoryDetailScreen';


const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
    const [selectedShuttleId, setSelectedShuttleId] = useState<number | null>(null);
    const [selectedHistoryId, setSelectedHistoryId] = useState<number | null>(null);


    const handleNavigate = (screen: Screen, id?: number) => {
        setCurrentScreen(screen);
        if (screen === 'shuttleDriverProfile' || 
            screen === 'bookingConfirmation' || 
            screen === 'realTimeTripTracking' || 
            screen === 'paymentSelection' || 
            screen === 'securePaymentProcessing' || 
            screen === 'serviceRating') {
            if (id !== undefined) setSelectedShuttleId(id);
        } else if (screen === 'tripHistoryDetail') {
            if (id !== undefined) setSelectedHistoryId(id);
        } else {
            // Reset IDs when navigating to screens that don't need them
            if (screen !== 'compatibleShuttles') {
                setSelectedShuttleId(null);
            }
            if(screen !== 'serviceHistory') {
                setSelectedHistoryId(null);
            }
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
            case 'passwordRecovery':
                return <PasswordRecoveryScreen onNavigate={handleNavigate} />;
            case 'otpVerification':
                return <OtpVerificationScreen onNavigate={handleNavigate} />;
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
                return <TripHistoryDetailScreen onNavigate={handleNavigate} tripId={selectedHistoryId} />;
            default:
                return <WelcomeScreen onNavigate={handleNavigate} />;
        }
    };

    return (
        <div>
            {renderScreen()}
        </div>
    );
};

export default App;
