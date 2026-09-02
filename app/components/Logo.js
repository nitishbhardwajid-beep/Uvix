"use client";
import React from 'react';

export default function Logo({ size = 'compact', variant = 'default' }) {
  // size: 'compact' | 'large'
  // variant: 'default' | 'boxed' (dark background)
  const width = size === 'large' ? 520 : 160;
  const height = size === 'large' ? 160 : 48;

  return (
    <svg
      className={`logo-svg logo-${size} ${variant === 'boxed' ? 'logo-boxed' : ''}`}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Uvix Technologies"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="uvixGrad" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#1EA1FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>

      {/* Optional dark background box for boxed variant */}
      {variant === 'boxed' ? (
        <rect x="0" y="0" width="100%" height="100%" rx="8" fill="#071428" />
      ) : null}

      {/* UVIX wordmark */}
      <g transform={size === 'large' ? 'translate(20,40)' : 'translate(0,8)'}>
        <text
          x="0"
          y={size === 'large' ? 48 : 28}
          fontFamily="Oxanium, Montserrat, sans-serif"
          fontWeight="800"
          fontSize={size === 'large' ? 72 : 28}
          fill="url(#uvixGrad)"
          letterSpacing={size === 'large' ? '-6' : '-1'}
        >
          UVIX
        </text>

        <text
          x="0"
          y={size === 'large' ? 100 : 44}
          fontFamily="Space Grotesk, Montserrat, sans-serif"
          fontWeight="700"
          fontSize={size === 'large' ? 18 : 10}
          fill={variant === 'boxed' ? '#BBD2ED' : 'var(--slate)'}
          letterSpacing={size === 'large' ? '14' : '6'}
        >
          TECHNOLOGIES
        </text>

        {size === 'large' ? (
          <g transform="translate(0,118)">
            <line x1="0" x2="220" y1="4" y2="4" stroke="#1EA1FF" strokeWidth="3" strokeLinecap="round" />
            <text x="240" y="10" fontFamily="Montserrat, Poppins, sans-serif" fontSize="16" fill={variant === 'boxed' ? '#BBD2ED' : 'var(--slate)'}>
              Ideas to Innovation
            </text>
          </g>
        ) : null}
      </g>
    </svg>
  );
}
