export default function TechnologyIcon({ icon, className = '' }) {
  const sharedProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  };

  const iconMap = {
    react: (
      <svg {...sharedProps} className={className}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 8.5c1.6-1.6 4.1-2.2 6.4-1.6 1.9.5 3.4 2 4 3.8" />
        <path d="M15.5 15.5c-1.6 1.6-4.1 2.2-6.4 1.6-1.9-.5-3.4-2-4-3.8" />
        <path d="M6 12h12" />
      </svg>
    ),
    nextjs: (
      <svg {...sharedProps} className={className}>
        <path d="M13 5 5 19h4l8-14h-4Z" />
        <path d="M19 19V9" />
        <path d="M19 19h-3" />
      </svg>
    ),
    typescript: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h4" />
        <path d="M8 12h8" />
        <path d="M8 16h4" />
      </svg>
    ),
    node: (
      <svg {...sharedProps} className={className}>
        <path d="M12 4 5 8v8l7 4 7-4V8l-7-4Z" />
        <path d="M12 8v8" />
        <path d="M8 10v4" />
        <path d="M16 10v4" />
      </svg>
    ),
    python: (
      <svg {...sharedProps} className={className}>
        <path d="M9 4h6c1.7 0 3 1.3 3 3v2H9a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6c1.7 0 3-1.3 3-3V8.5" />
        <path d="M15 20H9c-1.7 0-3-1.3-3-3v-2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H9c-1.7 0-3 1.3-3 3v7.5" />
      </svg>
    ),
    fastapi: (
      <svg {...sharedProps} className={className}>
        <path d="M12 4v16" />
        <path d="m7 7 5-3 5 3" />
        <path d="m7 17 5 3 5-3" />
      </svg>
    ),
    tensorflow: (
      <svg {...sharedProps} className={className}>
        <path d="M8 5 4 7v10l4 2 4-2V7L8 5Z" />
        <path d="M16 5l4 2v10l-4 2-4-2V7l4-2Z" />
        <path d="M12 5v14" />
      </svg>
    ),
    pytorch: (
      <svg {...sharedProps} className={className}>
        <path d="M8 5c2.5 2.5 2.5 6.5 0 9" />
        <path d="M16 5c-2.5 2.5-2.5 6.5 0 9" />
        <path d="M12 7c1.3 1.3 1.3 3.7 0 5" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
    postgresql: (
      <svg {...sharedProps} className={className}>
        <path d="M8 5h8" />
        <path d="M8 19h8" />
        <path d="M8 5c0-1 1-2 2-2h4c1 0 2 1 2 2v14c0 1-1 2-2 2h-4c-1 0-2-1-2-2V5Z" />
        <path d="M10 8h4" />
        <path d="M10 12h4" />
        <path d="M10 16h4" />
      </svg>
    ),
    mongodb: (
      <svg {...sharedProps} className={className}>
        <path d="M12 4c2 2 3 4 3 7 0 2.2-1 4.1-3 5.5-2-1.4-3-3.3-3-5.5 0-3 1-5 3-7Z" />
        <path d="M12 4v16" />
      </svg>
    ),
    redis: (
      <svg {...sharedProps} className={className}>
        <path d="M7 7c0-1.7 2.2-3 5-3s5 1.3 5 3-2.2 3-5 3-5-1.3-5-3Z" />
        <path d="M7 7v10c0 1.7 2.2 3 5 3s5-1.3 5-3V7" />
        <path d="M7 12c0 1.7 2.2 3 5 3s5-1.3 5-3" />
      </svg>
    ),
    docker: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 10h2" />
        <path d="M8 14h2" />
        <path d="M12 10h2" />
        <path d="M12 14h2" />
        <path d="M16 10h2" />
      </svg>
    ),
    kubernetes: (
      <svg {...sharedProps} className={className}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M8 10l4 2 4-2" />
        <path d="M8 14l4-2 4 2" />
      </svg>
    ),
    aws: (
      <svg {...sharedProps} className={className}>
        <path d="M7 8h10" />
        <path d="M7 16h10" />
        <path d="M9 8v8" />
        <path d="M15 8v8" />
      </svg>
    ),
    azure: (
      <svg {...sharedProps} className={className}>
        <path d="m6 17 4.5-8 2.3 4.5L8.5 17H6Z" />
        <path d="m10.5 9 3-5h4.5l-6.5 13H8.5" />
      </svg>
    ),
    gcp: (
      <svg {...sharedProps} className={className}>
        <path d="M9 8a4 4 0 0 0 0 8" />
        <path d="M15 8a4 4 0 0 1 0 8" />
        <path d="M7 12h10" />
      </svg>
    ),
    default: (
      <svg {...sharedProps} className={className}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  };

  return iconMap[icon] || iconMap.default;
}
