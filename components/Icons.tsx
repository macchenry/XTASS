import React from 'react';

type IconProps = {
    className?: string;
};

// A generic icon component to reduce boilerplate
const Icon: React.FC<IconProps & { path: string }> = ({ className, path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

export const CustomerIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
export const DriverIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M12 11c1.657 0 3-2.239 3-5s-1.343-5-3-5-3 2.239-3 5 1.343 5 3 5zm-3.978 2h7.956c1.111 0 2.022.901 2.022 2.016v.984h-12v-.984c0-1.115.911-2.016 2.022-2.016z" />;
export const AdminIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M12 15c-3.866 0-7 1.79-7 4v1h14v-1c0-2.21-3.134-4-7-4zm0-10c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z" />;
export const ArrowLeftIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M10 19l-7-7m0 0l7-7m-7 7h18" />;
export const EyeIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M15 12a3 3 0 11-6 0 3 3 0 016 0zM21 12c-1.5 4-4.5 7-9 7s-7.5-3-9-7c1.5-4 4.5-7 9-7s7.5 3 9 7z" />;
export const EyeOffIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m0 0l-2.14 2.14" />;
export const GoogleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.655-3.373-11.303-7.952l-6.571,4.819C9.656,39.663,16.318,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.012,35.197,44,30.022,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);
export const PhoneIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
export const WhatsAppIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
);
export const UsersIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.28-.37-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.28.37-1.857m0 0a5.002 5.002 0 019.26 0M12 14a5 5 0 110-10 5 5 0 010 10z" />;
export const MapPinIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM12 12a2 2 0 100-4 2 2 0 000 4z" />;
export const ArrowRightIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M14 5l7 7m0 0l-7 7m7-7H3" />;
export const StarIcon: React.FC<IconProps & { filled?: boolean }> = ({ className, filled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill={filled ? 'currentColor' : 'none'} stroke="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);
export const ChevronLeftIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M15 19l-7-7 7-7" />;
export const ChevronRightIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9 5l7 7-7 7" />;
export const CheckBadgeIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const UserCircleIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0012 16a5.986 5.986 0 004.546-2.084A5 5 0 0012 11z" />;
export const FuelIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M3.25 10.75v10.5c0 .138.112.25.25.25h4.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-2.5v-3.5h2.5a.25.25 0 00.25-.25v-3.5H3.5a.25.25 0 00-.25.25zM11.5 6h1.25a.25.25 0 01.25.25v14.5a.25.25 0 01-.25.25h-1.5a.25.25 0 01-.25-.25V6.25a.25.25 0 01.25-.25zM12.25 3.25a.75.75 0 000 1.5h.5V6h-1.25a.25.25 0 01-.25-.25V3.5a.25.25 0 01.25-.25h.75z" />;
export const LanguagesIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M3 5h12M9 3v2m0 4v2m0 4v2m4-10v2m0 4v2m4-10v2m0 4v2M3 21h18M3 17h18M3 13h18M3 9h18" />;
export const CheckCircleIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const ShieldCheckIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.611-2.923a.5.5 0 01.536 0L14.75 21a12.02 12.02 0 005.618-11.417z" />;
export const CreditCardIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />;
export const CashIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M14.121 15.121A3 3 0 0112 16a3 3 0 01-2.121-.879M17 12a5 5 0 11-10 0 5 5 0 0110 0zM7 10a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2H7z" />;
export const MtnIcon: React.FC<IconProps> = ({ className }) => <div className={className + " flex items-center justify-center font-bold"}>MTN</div>;
export const VodafoneIcon: React.FC<IconProps> = ({ className }) => <div className={className + " flex items-center justify-center font-bold"}>Voda</div>;
export const AirtelTigoIcon: React.FC<IconProps> = ({ className }) => <div className={className + " flex items-center justify-center font-bold"}>A/T</div>;
export const SmileIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const MehIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9.5 14h5M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const FrownIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M9 14a4 4 0 106 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const SparklesIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L13 12l-1.293-1.293a1 1 0 010-1.414L14 7m5 5l2.293 2.293a1 1 0 010 1.414L19 18l-1.293-1.293a1 1 0 010-1.414L20 13m-3-3l2.293 2.293a1 1 0 010 1.414L17 14l-1.293-1.293a1 1 0 010-1.414L18 9m-9 5l2.293 2.293a1 1 0 010 1.414L9 18l-1.293-1.293a1 1 0 010-1.414L10 13" />;
export const CalendarIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />;
export const ClockIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />;
export const BriefcaseIcon: React.FC<IconProps> = (props) => <Icon {...props} path="M6 6a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2V6zM4 9a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2v-6a2 2 0 00-2-2H4z" />;
