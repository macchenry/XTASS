import React, { useState } from 'react';
import WelcomeScreen from './screens/WelcomeScreen';
import CustomerLoginScreen from './screens/CustomerLoginScreen';
import DriverLoginScreen from './screens/DriverLoginScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import { Screen } from './types';


const App: React.FC = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

    const navigate = (screen: Screen) => {
        setCurrentScreen(screen);
    };

    switch (currentScreen) {
        case 'customerLogin':
            return <CustomerLoginScreen onNavigate={navigate} />;
        case 'driverLogin':
            return <DriverLoginScreen onNavigate={navigate} />;
        case 'adminLogin':
            return <AdminLoginScreen onNavigate={navigate} />;
        case 'welcome':
        default:
            return <WelcomeScreen onNavigate={navigate} />;
    }
};

export default App;