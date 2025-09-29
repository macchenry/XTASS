
// Fix: Remove .ts extension from import path for TripHistory type.
import { TripHistory } from '../types';

export const historyData: TripHistory[] = [
    {
        id: 1,
        date: '2023-10-25',
        pickup: 'Kotoka Int. Airport (T1)',
        destination: 'Accra Mall',
        driverName: 'John Doe',
        vehicle: 'Toyota Hiace',
        price: 45.00,
        status: 'Completed',
    },
    {
        id: 2,
        date: '2023-10-22',
        pickup: 'East Legon, A&C Mall',
        destination: 'University of Ghana',
        driverName: 'Jane Smith',
        vehicle: 'Mercedes-Benz Sprinter',
        price: 60.00,
        status: 'Completed',
    },
    {
        id: 3,
        date: '2023-10-20',
        pickup: 'Osu, Oxford Street',
        destination: 'Labadi Beach',
        driverName: 'Kwesi Mensah',
        vehicle: 'Ford Transit',
        price: 50.00,
        status: 'Canceled',
    },
    {
        id: 4,
        date: '2023-10-18',
        pickup: 'Kotoka Int. Airport (T3)',
        destination: 'Movenpick Ambassador Hotel',
        driverName: 'Jane Smith',
        vehicle: 'Mercedes-Benz Sprinter',
        price: 75.00,
        status: 'Completed',
    },
];