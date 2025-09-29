// Fix: Implemented the main App component to handle screen navigation.
import React, { useState } from 'react';
import { Screen } from './types.ts';
import WelcomeScreen from './screens/WelcomeScreen.tsx';
import CustomerLoginScreen from './screens/CustomerLoginScreen.tsx';
import DriverLoginScreen from './screens/DriverLoginScreen.tsx';
import AdminLoginScreen from './screens/AdminLoginScreen.tsx';
import CustomerRegistrationScreen from './screens/CustomerRegistrationScreen.tsx';
import OtpVerificationScreen from './screens/OtpVerificationScreen.tsx';
import PasswordRecoveryScreen from './screens/PasswordRecoveryScreen.tsx';
import ServiceSelectionDashboard from './screens/ServiceSelectionDashboard.tsx';
import TripDetailsInputScreen from './screens/TripDetailsInputScreen.tsx';
import SchedulePlanningScreen from './screens/SchedulePlanningScreen.tsx';
import CompatibleShuttlesScreen from './screens/CompatibleShuttlesScreen.tsx';

const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

    const handleNavigate = (screen: Screen) => {
        setCurrentScreen(screen);
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
            default:
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
