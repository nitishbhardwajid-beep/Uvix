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
    angular: (
      <svg {...sharedProps} className={className}>
        <path d="M12 4 4 7l1.5 10 6.5 3 6.5-3L20 7 12 4Z" />
        <path d="m7.5 16 4.5-10 4.5 10" />
        <path d="m8.5 14 3.5-7 3.5 7" />
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
    huggingface: (
      <svg {...sharedProps} className={className}>
        <path d="M7 6h10" />
        <path d="M7 12h10" />
        <path d="M7 18h10" />
        <circle cx="9" cy="12" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
      </svg>
    ),
    openai: (
      <svg {...sharedProps} className={className}>
        <path d="M12 4 8 6l4 2 4-2-4-2Z" />
        <path d="M8 6v12l4 2 4-2V6" />
        <path d="M8 10v4" />
        <path d="M16 10v4" />
      </svg>
    ),
    langchain: (
      <svg {...sharedProps} className={className}>
        <path d="M6 7h12" />
        <path d="M6 17h12" />
        <path d="M9 7v10" />
        <path d="M15 7v10" />
      </svg>
    ),
    llamaindex: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
    ),
    scikitlearn: (
      <svg {...sharedProps} className={className}>
        <path d="M7 6h10" />
        <path d="M7 18h10" />
        <path d="M10 6v12" />
        <path d="M14 6v12" />
      </svg>
    ),
    mlflow: (
      <svg {...sharedProps} className={className}>
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8" />
        <path d="M10 9l2 3 2-3" />
      </svg>
    ),
    onnx: (
      <svg {...sharedProps} className={className}>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 16h8" />
      </svg>
    ),
    vector: (
      <svg {...sharedProps} className={className}>
        <path d="M7 8h10" />
        <path d="M7 16h10" />
        <path d="M10 8v8" />
        <path d="M14 8v8" />
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
    oracle: (
      <svg {...sharedProps} className={className}>
        <ellipse cx="12" cy="12" rx="6" ry="8" />
        <path d="M8 10c0-2.2 1.8-4 4-4h.5c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4v-4Z" />
      </svg>
    ),
    git: (
      <svg {...sharedProps} className={className}>
        <circle cx="12" cy="12" r="7" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    sqlserver: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
    html: (
      <svg {...sharedProps} className={className}>
        <path d="M5 4l1.5 14 6.5 2 6.5-2L19 4H5Z" />
        <path d="M8 8h8" />
        <path d="M7.5 12h9" />
      </svg>
    ),
    css: (
      <svg {...sharedProps} className={className}>
        <path d="M5 4l1.5 14 6.5 2 6.5-2L19 4H5Z" />
        <path d="M8 8h8" />
        <path d="M9 12h6" />
        <path d="M8.5 16h7" />
      </svg>
    ),
    javascript: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 8h3" />
        <path d="M8 16h3" />
        <path d="M13 8h3" />
        <path d="M13 16h3" />
      </svg>
    ),
    dotnet: (
      <svg {...sharedProps} className={className}>
        <path d="M6 8h12" />
        <path d="M6 16h12" />
        <path d="M8 8v8" />
        <path d="M16 8v8" />
      </svg>
    ),
    aspnet: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
      </svg>
    ),
    api: (
      <svg {...sharedProps} className={className}>
        <rect x="4" y="5" width="16" height="14" rx="2" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
        <path d="M15 14l2-2-2-2" />
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
