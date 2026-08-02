// Interactive Airspace Explorer — the key screen, in three switchable directions:
//   "section"  = upside-down wedding-cake cross-section (side profile)
//   "layers"   = stacked altitude strata (modern ed-tech bands)
//   "map"      = top-down rings, the way a sectional chart shows them
const { useState: useStateAX } = React;

const AX_CLASSES = {
  A: {
    code: "A", name: "Class A", tone: "navy",
    range: "18,000 ft – 60,000 ft MSL",
    who: "High-altitude airliners and jets on instrument flight plans.",
    drone: "You will never reach it. Irrelevant to drone flying.",
    auth: "na", authText: "Out of reach"
  },
  B: {
    code: "B", name: "Class B", tone: "navy",
    range: "Surface up to ~10,000 ft — tiered like an upside-down cake",
    who: "The nation's busiest hub airports (O'Hare, LAX, Atlanta).",
    drone: "Authorization required before you fly, at any altitude.",
    auth: "req", authText: "Authorization required"
  },
  C: {
    code: "C", name: "Class C", tone: "magenta",
    range: "Surface up to ~4,000 ft — two tiers",
    who: "Mid-size airports busy enough to have radar service.",
    drone: "Authorization required — usually instant via LAANC.",
    auth: "req", authText: "Authorization required"
  },
  D: {
    code: "D", name: "Class D", tone: "navy",
    range: "Surface up to ~2,500 ft",
    who: "Smaller airports with an operating control tower.",
    drone: "Authorization required — usually instant via LAANC.",
    auth: "req", authText: "Authorization required"
  },
  E: {
    code: "E", name: "Class E", tone: "magenta",
    range: "Starts at 700 or 1,200 ft AGL — or the surface near some airports",
    who: "Controlled transition airspace connecting the others.",
    drone: "Authorization needed only where Class E meets the surface.",
    auth: "some", authText: "Sometimes"
  },
  G: {
    code: "G", name: "Class G", tone: "green",
    range: "The surface up to the Class E floor above it",
    who: "No one — it is uncontrolled airspace.",
    drone: "No authorization needed. This is home for recreational flying.",
    auth: "free", authText: "No authorization needed"
  }
};

const AX_ORDER = ["A", "B", "C", "D", "E", "G"];

// piecewise altitude(ft MSL) -> y in the 0..480 cross-section viewBox
const AX_STOPS = [
  [0, 440], [400, 402], [700, 384], [1200, 360],
  [2500, 330], [4000, 302], [10000, 232], [18000, 150], [60000, 48]
];
function axY(ft) {
  const s = AX_STOPS;
  for (let i = 0; i < s.length - 1; i++) {
    const [a0, y0] = s[i], [a1, y1] = s[i + 1];
    if (ft <= a1) return y0 + (y1 - y0) * ((ft - a0) / (a1 - a0));
  }
  return s[s.length - 1][1];
}

// Light-theme FAA chart palette using the Tufts Drone Program extended colors
// (kept sparing and only for this real chart meaning).
const AX_FILL = {
  navy: "rgba(62,142,222,0.14)", magenta: "rgba(170,0,97,0.12)",
  green: "rgba(26,85,50,0.10)", earth: "#E5DED4"
};
const AX_STROKE = { navy: "#3E8EDE", magenta: "#AA0061", green: "#1A5532" };

// ---- shared detail panel ----------------------------------------------
const AxDetail = ({ code }) => {
  const c = AX_CLASSES[code];
  const badgeClass = c.auth === "free" ? "no" : c.auth === "req" ? "yes" : "some";
  return (
    <div className="ax-detail">
      <div className={`ax-detail-code tone-${c.tone}`}>{c.code}</div>
      <div className="ax-detail-body">
        <div className="ax-detail-name">{c.name}</div>
        <div className="ax-detail-range">{c.range}</div>
        <div className="ax-detail-row"><span className="k">Controlled by</span><span className="v">{c.who}</span></div>
        <div className="ax-detail-row"><span className="k">For your drone</span><span className="v">{c.drone}</span></div>
        <div className={`ax-auth ${badgeClass}`}>{c.authText}</div>
      </div>
    </div>
  );
};

const AxRegion = ({ tone, sel, onSel, code, children, dashed }) => (
  <g
    className={`ax-region ${sel === code ? "is-sel" : ""} ${sel && sel !== code ? "is-dim" : ""}`}
    onClick={() => onSel(code)}
    style={{ cursor: "pointer" }}
  >
    <g style={{ pointerEvents: "none" }}>{children}</g>
  </g>
);

// ---- VIEW 1 : cross-section wedding cake -------------------------------
const AxSection = ({ sel, onSel }) => {
  const G = 440;
  const rect = (x, w, ftTop, ftBot, tone) => (
    <rect x={x} y={axY(ftTop)} width={w} height={axY(ftBot) - axY(ftTop)}
      fill={AX_FILL[tone]} stroke={AX_STROKE[tone]} strokeWidth="1.5" />
  );
  return (
    <svg viewBox="0 0 800 480" className="ax-svg" preserveAspectRatio="xMidYMid meet">
      {/* altitude gridlines */}
      {[[400, "400 ft — your ceiling"], [1200, "1,200 ft"], [10000, "10,000 ft"], [18000, "18,000 ft"]].map(([ft, lbl]) => (
        <g key={ft}>
          <line x1="60" y1={axY(ft)} x2="800" y2={axY(ft)} stroke="rgba(61,46,37,0.14)" strokeWidth="1" strokeDasharray={ft === 400 ? "5 4" : "2 5"} />
          <text x="56" y={axY(ft) + 3} textAnchor="end" className="ax-axis">{lbl}</text>
        </g>
      ))}

      {/* Class A band */}
      <AxRegion code="A" sel={sel} onSel={onSel}>
        <rect x="60" y={axY(60000)} width="740" height={axY(18000) - axY(60000)} fill={AX_FILL.navy} stroke={AX_STROKE.navy} strokeWidth="1.5" />
        <text x="430" y={axY(30000)} textAnchor="middle" className="ax-band-label">CLASS A · 18,000 ft and up</text>
      </AxRegion>

      {/* Class E slab (behind cakes) */}
      <AxRegion code="E" sel={sel} onSel={onSel}>
        <rect x="60" y={axY(18000)} width="740" height={axY(1200) - axY(18000)} fill={AX_FILL.magenta} stroke="none" />
        <line x1="60" y1={axY(1200)} x2="800" y2={axY(1200)} stroke={AX_STROKE.magenta} strokeWidth="1.5" strokeDasharray="7 5" />
        <text x="770" y={axY(6000)} textAnchor="end" className="ax-band-label" fill={AX_STROKE.magenta}>CLASS E · controlled transition</text>
      </AxRegion>

      {/* Class G low band */}
      <AxRegion code="G" sel={sel} onSel={onSel}>
        <rect x="60" y={axY(1200)} width="740" height={G - axY(1200)} fill={AX_FILL.green} stroke="none" />
        <text x="335" y={G - 12} textAnchor="middle" className="ax-band-label" fill={AX_STROKE.green}>CLASS G · uncontrolled</text>
      </AxRegion>

      {/* Class B wedding cake (left) */}
      <AxRegion code="B" sel={sel} onSel={onSel}>
        {rect(90, 160, 5000, G, "navy")}
        {rect(115, 110, 3000, G, "navy")}
        {rect(145, 50, 10000, G, "navy")}
        {rect(145, 50, 10000, 5000, "navy")}
        <text x="170" y={axY(10000) - 8} textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.navy}>B</text>
      </AxRegion>

      {/* Class C (middle) */}
      <AxRegion code="C" sel={sel} onSel={onSel}>
        {rect(388, 90, 1200, G, "magenta")}
        {rect(410, 46, 4000, G, "magenta")}
        <text x="433" y={axY(4000) - 8} textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.magenta}>C</text>
      </AxRegion>

      {/* Class D (right) */}
      <AxRegion code="D" sel={sel} onSel={onSel}>
        {rect(595, 60, 2500, G, "navy")}
        <text x="625" y={axY(2500) - 8} textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.navy}>D</text>
      </AxRegion>

      {/* ground */}
      <rect x="60" y={G} width="740" height="40" fill={AX_FILL.earth} />
      {[170, 433, 625].map((x, i) => (
        <path key={i} d={`M${x - 7} ${G} l7 -12 7 12 z`} fill="#63493A" opacity="0.55" />
      ))}

      {/* drone at 400 ft */}
      <g transform={`translate(300 ${axY(400)})`}>
        <circle r="4" fill="#AA0061" />
        <line x1="-11" y1="0" x2="11" y2="0" stroke="#3D2E25" strokeWidth="1.6" />
        <circle cx="-11" cy="0" r="2.2" fill="#3D2E25" />
        <circle cx="11" cy="0" r="2.2" fill="#3D2E25" />
      </g>
    </svg>
  );
};

// ---- VIEW 2 : stacked strata -------------------------------------------
const AxLayers = ({ sel, onSel }) => {
  const rows = [
    { code: "A", h: 34, label: "18,000  ft →" },
    { code: "E", h: 58, label: "700 / 1,200 ft →" },
    { code: "B", h: 40, label: "controlled" },
    { code: "C", h: 40, label: "controlled" },
    { code: "D", h: 40, label: "controlled" },
    { code: "G", h: 78, label: "surface" }
  ];
  return (
    <div className="ax-layers">
      {rows.map((r) => {
        const c = AX_CLASSES[r.code];
        const active = sel === r.code;
        return (
          <button
            key={r.code}
            className={`ax-layer tone-${c.tone} ${active ? "is-sel" : ""}`}
            style={{ minHeight: r.h }}
            onClick={() => onSel(r.code)}
          >
            <span className="ax-layer-code">{c.code}</span>
            <span className="ax-layer-name">{c.name}</span>
            <span className="ax-layer-alt">{r.label}</span>
            <span className={`ax-layer-dot ${c.auth === "free" ? "free" : c.auth === "req" ? "req" : "some"}`}></span>
          </button>
        );
      })}
      <div className="ax-layers-foot">
        <span className="ax-legend"><i className="dot free"></i>No authorization</span>
        <span className="ax-legend"><i className="dot req"></i>Authorization required</span>
        <span className="ax-legend"><i className="dot some"></i>Sometimes</span>
      </div>
    </div>
  );
};

// ---- VIEW 3 : top-down rings -------------------------------------------
const AxMap = ({ sel, onSel }) => {
  const ring = (cx, cy, r, tone, dash) => (
    <circle cx={cx} cy={cy} r={r} fill={AX_FILL[tone]} stroke={AX_STROKE[tone]}
      strokeWidth="2" strokeDasharray={dash || "none"} />
  );
  const star = (cx, cy, tone) => <circle cx={cx} cy={cy} r="4" fill={AX_STROKE[tone]} />;
  return (
    <svg viewBox="0 0 800 480" className="ax-svg" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="800" height="480" fill={AX_FILL.green} />
      <text x="24" y="452" className="ax-band-label" fill={AX_STROKE.green}>Everything uncontrolled here is CLASS G</text>

      {/* Class B nested rings */}
      <AxRegion code="B" sel={sel} onSel={onSel}>
        {ring(215, 250, 130, "navy")}
        {ring(215, 250, 88, "navy")}
        {ring(215, 250, 48, "navy")}
        {star(215, 250, "navy")}
        <text x="215" y="135" textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.navy}>B</text>
      </AxRegion>

      {/* Class C two rings */}
      <AxRegion code="C" sel={sel} onSel={onSel}>
        {ring(545, 165, 78, "magenta")}
        {ring(545, 165, 44, "magenta")}
        {star(545, 165, "magenta")}
        <text x="545" y="72" textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.magenta}>C</text>
      </AxRegion>

      {/* Class D dashed */}
      <AxRegion code="D" sel={sel} onSel={onSel}>
        {ring(600, 375, 58, "navy", "8 5")}
        {star(600, 375, "navy")}
        <text x="600" y="379" textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.navy}>D</text>
      </AxRegion>

      {/* surface Class E dashed magenta */}
      <AxRegion code="E" sel={sel} onSel={onSel}>
        {ring(360, 400, 46, "magenta", "5 5")}
        <text x="360" y="404" textAnchor="middle" className="ax-cake-label" fill={AX_STROKE.magenta} style={{ fontSize: 22 }}>E</text>
      </AxRegion>

      <text x="776" y="452" textAnchor="end" className="ax-axis">Solid blue = B/D · magenta = C/E · dashed = surface</text>
    </svg>
  );
};

const AX_VIEWS = [
  { id: "section", label: "Cross-section" },
  { id: "layers", label: "Stacked layers" },
  { id: "map", label: "Top-down map" }
];

const AirspaceExplorer = ({ screen, initialView }) => {
  const [view, setView] = useStateAX(initialView || "section");
  const [sel, setSel] = useStateAX("G");
  return (
    <div className="screen">
      <div className="screen-eyebrow">{screen.eyebrow}</div>
      <h2>{screen.heading}</h2>
      {screen.body && <div className="screen-body">{screen.body}</div>}

      <div className="ax-toolbar">
        <span className="ax-toolbar-label">View</span>
        <div className="ax-seg">
          {AX_VIEWS.map((v) => (
            <button key={v.id} className={`ax-seg-btn ${view === v.id ? "active" : ""}`} onClick={() => setView(v.id)}>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="ax-stage">
        <div className="ax-canvas">
          {view === "section" && <AxSection sel={sel} onSel={setSel} />}
          {view === "layers" && <AxLayers sel={sel} onSel={setSel} />}
          {view === "map" && <AxMap sel={sel} onSel={setSel} />}
        </div>
        <AxDetail code={sel} />
      </div>
    </div>
  );
};

window.AirspaceExplorer = AirspaceExplorer;
