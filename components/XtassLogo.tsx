
import React from 'react';

export const XtassLogo: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        viewBox="0 0 200 50" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <text 
            fontFamily="Poppins, sans-serif" 
            fontSize="40" 
            fontWeight="700" 
            fill="white"
            x="0"
            y="35"
        >
            <tspan>X</tspan>
            <tspan dx="5">TASS</tspan>
        </text>
        <path 
            d="M 8 20 Q 20 22 30 15 L 35 12 Q 25 15 15 18 Z" 
            fill="url(#roadGradient)"
        />
    </svg>
);
