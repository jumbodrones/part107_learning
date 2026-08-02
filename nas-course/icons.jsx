// Reusable icon set — minimal line icons
const Icon = ({ name, size = 24, ...rest }) => {
  const stroke = "currentColor";
  const sw = 1.5;
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke, strokeWidth: sw,
    strokeLinecap: "round", strokeLinejoin: "round",
    ...rest
  };
  switch (name) {
    case "eye":
      return (<svg {...props}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>);
    case "gauge":
      return (<svg {...props}><path d="M12 14l5-5"/><path d="M3.5 17a9 9 0 1117 0"/><circle cx="12" cy="14" r="1.2" fill={stroke}/></svg>);
    case "users":
      return (<svg {...props}><circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15 19c0-2.5 1.5-4 4-4"/></svg>);
    case "sun":
      return (<svg {...props}><circle cx="12" cy="12" r="3.5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"/></svg>);
    case "tower":
      return (<svg {...props}><path d="M12 4v16"/><path d="M8 7l4-3 4 3"/><path d="M7 11l5-2 5 2"/><path d="M9 20h6"/></svg>);
    case "checklist":
      return (<svg {...props}><rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M8 9l1.5 1.5L13 7"/><path d="M8 15l1.5 1.5L13 13"/><path d="M16 10h2M16 16h2"/></svg>);
    case "moon":
      return (<svg {...props}><path d="M21 13a9 9 0 11-10-10 7 7 0 0010 10z"/><circle cx="17" cy="6" r="0.6" fill={stroke}/><circle cx="19" cy="9" r="0.4" fill={stroke}/></svg>);
    case "broadcast":
      return (<svg {...props}><circle cx="12" cy="12" r="2"/><path d="M8.5 8.5a5 5 0 000 7M15.5 8.5a5 5 0 010 7"/><path d="M5.5 5.5a9 9 0 000 13M18.5 5.5a9 9 0 010 13"/></svg>);
    case "arrow-right":
      return (<svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case "arrow-left":
      return (<svg {...props}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>);
    case "check":
      return (<svg {...props}><path d="M5 12l5 5L20 7"/></svg>);
    case "x":
      return (<svg {...props}><path d="M6 6l12 12M18 6L6 18"/></svg>);
    case "lock":
      return (<svg {...props}><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>);
    case "rotate":
      return (<svg {...props}><path d="M3 12a9 9 0 0115-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 01-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>);
    case "globe":
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>);
    case "book":
      return (<svg {...props}><path d="M4 5.5A2 2 0 016 4h5v16H6a2 2 0 01-2-2z"/><path d="M20 5.5A2 2 0 0018 4h-5v16h5a2 2 0 002-2z"/></svg>);
    case "layers":
      return (<svg {...props}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>);
    case "map":
      return (<svg {...props}><path d="M9 4L3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z"/><path d="M9 4v13M15 6.5v13"/></svg>);
    case "ban":
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/></svg>);
    case "pin":
      return (<svg {...props}><path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>);
    case "plane":
      return (<svg {...props}><path d="M21 12l-8 2-3 6-1.5-5.5L3 13l6-1.5L11 3l3 7 7 2z"/></svg>);
    case "check-circle":
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></svg>);
    case "alert":
      return (<svg {...props}><path d="M12 3l9 16H3l9-16z"/><path d="M12 10v4M12 17v.5"/></svg>);
    default: return null;
  }
};

window.Icon = Icon;
