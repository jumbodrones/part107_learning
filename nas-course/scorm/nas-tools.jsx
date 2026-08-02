// Two interactive tools: SectionalReader (decode chart symbols) and FlyCheck (go / no-go simulator)
const { Button: ButtonNT } = window.TuftsDroneProgramDesignSystem_779650;
const { useState: useStateNT } = React;

// ======================================================================
// SECTIONAL READER
// ======================================================================
const SR_SPOTS = [
  {
    id: 1, x: 232, y: 120,
    title: "Solid magenta ring",
    text: "A solid magenta circle is the boundary of Class C airspace — a mid-size airport busy enough for radar service. You need authorization to fly inside it."
  },
  {
    id: 2, x: 356, y: 214,
    title: "Number box · 41 / SFC",
    text: "The stacked numbers give ceiling over floor in hundreds of feet MSL. 41/SFC means this Class C reaches from the Surface up to 4,100 ft — controlled all the way down."
  },
  {
    id: 3, x: 566, y: 300,
    title: "Dashed blue ring",
    text: "A dashed blue circle marks Class D — a smaller airport with a control tower. Authorization required, usually instant through LAANC."
  },
  {
    id: 4, x: 232, y: 214,
    title: "Magenta airport symbol",
    text: "The airport itself is drawn magenta when it has no control tower, blue when it does. Color-coding runs through the whole chart."
  },
  {
    id: 5, x: 118, y: 372,
    title: "Faded magenta edge",
    text: "A soft magenta vignette marks where Class E controlled airspace begins at 700 ft AGL. Below it you're in Class G — no authorization needed under 400 ft."
  }
];

const SectionalReader = ({ screen }) => {
  const [sel, setSel] = useStateNT(1);
  const active = SR_SPOTS.find((s) => s.id === sel);
  return (
    <div className="screen">
      <div className="screen-eyebrow">{screen.eyebrow}</div>
      <h2>{screen.heading}</h2>
      {screen.body && <div className="screen-body">{screen.body}</div>}

      <div className="sr-stage">
        <div className="sr-chart">
          <svg viewBox="0 0 680 460" preserveAspectRatio="xMidYMid meet">
            {/* faded Class E 700 corner */}
            <path d="M0 460 L0 300 Q120 340 180 460 Z" fill="rgba(170,0,97,0.12)" />
            {/* Class C rings */}
            <circle cx="232" cy="214" r="150" fill="rgba(170,0,97,0.06)" stroke="#AA0061" strokeWidth="2.5" />
            <circle cx="232" cy="214" r="92" fill="rgba(170,0,97,0.06)" stroke="#AA0061" strokeWidth="2.5" />
            {/* Class D dashed */}
            <circle cx="566" cy="300" r="82" fill="rgba(62,142,222,0.06)" stroke="#3E8EDE" strokeWidth="2.5" strokeDasharray="9 6" />
            {/* number box */}
            <g>
              <line x1="330" y1="196" x2="330" y2="232" stroke="#AA0061" strokeWidth="1.4" />
              <text x="338" y="210" className="sr-num">41</text>
              <text x="338" y="228" className="sr-num">SFC</text>
            </g>
            {/* airport symbols */}
            <g>
              <circle cx="232" cy="214" r="7" fill="none" stroke="#AA0061" strokeWidth="2" />
              <path d="M232 203 v-7 M232 232 v-7 M221 214 h-7 M250 214 h-7" stroke="#AA0061" strokeWidth="2" />
            </g>
            <circle cx="566" cy="300" r="6" fill="none" stroke="#3E8EDE" strokeWidth="2" />
            {/* victor-airway hint line */}
            <line x1="60" y1="60" x2="640" y2="90" stroke="rgba(61,46,37,0.16)" strokeWidth="1" />

            {/* hotspots */}
            {SR_SPOTS.map((s) => (
              <g key={s.id} onClick={() => setSel(s.id)} style={{ cursor: "pointer" }} className={`sr-spot ${sel === s.id ? "is-sel" : ""}`}>
                <circle cx={s.x} cy={s.y} r="15" className="sr-spot-halo" />
                <circle cx={s.x} cy={s.y} r="11" className="sr-spot-dot" />
                <text x={s.x} y={s.y + 4} textAnchor="middle" className="sr-spot-num">{s.id}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="sr-side">
          <div className="sr-side-head">Chart symbols · tap to decode</div>
          <div className="sr-list">
            {SR_SPOTS.map((s) => (
            <button key={s.id} className={`sr-item ${sel === s.id ? "is-sel" : ""}`} onClick={() => setSel(s.id)}>
                <span className="sr-item-num">{s.id}</span>
                <span className="sr-item-title">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="sr-readout">
            <div className="sr-readout-title">{active.title}</div>
            <div className="sr-readout-text">{active.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.SectionalReader = SectionalReader;

// ======================================================================
// FLY CHECK — go / no-go simulator
// ======================================================================
const FC_ANSWERS = {
  free: { label: "Fly freely", tone: "green" },
  auth: { label: "Fly with authorization", tone: "amber" },
  no: { label: "Don't fly", tone: "red" }
};

const FC_PLACES = [
  {
    id: "farm", name: "Rural farm field", icon: "globe",
    blurb: "Open countryside, no airport within 20 miles.",
    airspace: "Class G to 14,500 ft", auth: "None needed", tfr: "None active", land: "Private land, owner said yes",
    answer: "free",
    why: "Uncontrolled Class G, no authorization, no restrictions. A textbook go — stay under 400 ft and keep it in sight."
  },
  {
    id: "suburb", name: "Suburban backyard", icon: "layers",
    blurb: "Class E floor sits at 700 ft AGL directly overhead.",
    airspace: "Class G below 700 ft", auth: "None needed", tfr: "None active", land: "Your own yard",
    answer: "free",
    why: "Class E starting at 700 ft leaves Class G beneath it. At recreational altitudes you're uncontrolled — fly freely under 400 ft."
  },
  {
    id: "city", name: "City park downtown", icon: "tower",
    blurb: "Sits inside Class D for a towered airport. LAANC grid: 200 ft.",
    airspace: "Class D (surface)", auth: "LAANC ceiling 200 ft", tfr: "None active", land: "Public park, drones allowed",
    answer: "auth",
    why: "Controlled Class D means authorization first. Request LAANC at or below 200 ft, get the approval, then launch."
  },
  {
    id: "beach", name: "Beach near a small airport", icon: "map",
    blurb: "Just inside surface Class D. LAANC grid: 100 ft.",
    airspace: "Class D (surface)", auth: "LAANC ceiling 100 ft", tfr: "None active", land: "Public beach, no local ban",
    answer: "auth",
    why: "You're in controlled airspace. LAANC will auto-approve up to 100 ft — get it before you fly, and respect the low ceiling."
  },
  {
    id: "park", name: "National park overlook", icon: "ban",
    blurb: "Stunning view, wide-open airspace, no TFRs.",
    airspace: "Class G", auth: "None needed", tfr: "None active", land: "National Park Service land — drones banned",
    answer: "no",
    why: "The airspace is clear, but the Park Service prohibits launching or operating drones on park land. Clear airspace can't override that."
  },
  {
    id: "stadium", name: "Field near a stadium", icon: "alert",
    blurb: "45,000-seat stadium 2 miles away. Kickoff in 20 minutes.",
    airspace: "Class G", auth: "None needed", tfr: "Stadium TFR ACTIVE (3 nm)", land: "Public field",
    answer: "no",
    why: "A stadium TFR bans flight within 3 nm from 1 hour before to 1 hour after the event. You're inside it — no-go, regardless of Class G."
  }
];

const FcRow = ({ k, v, flag }) => (
  <div className={`fc-row ${flag || ""}`}>
    <span className="fc-row-k">{k}</span>
    <span className="fc-row-v">{v}</span>
  </div>
);

const FlyCheck = ({ screen }) => {
  const [placeId, setPlaceId] = useStateNT(null);
  const [pick, setPick] = useStateNT(null);
  const place = FC_PLACES.find((p) => p.id === placeId);

  const choose = (p) => { setPlaceId(p.id); setPick(null); };
  const reset = () => { setPlaceId(null); setPick(null); };

  return (
    <div className="screen">
      <div className="screen-eyebrow">{screen.eyebrow}</div>
      <h2>{screen.heading}</h2>
      {screen.body && <div className="screen-body">{screen.body}</div>}

      {!place && (
        <div className="fc-grid">
          {FC_PLACES.map((p) => (
            <button key={p.id} className="fc-place" onClick={() => choose(p)}>
              <span className="fc-place-icon"><Icon name={p.icon} size={22} /></span>
              <span className="fc-place-name">{p.name}</span>
              <span className="fc-place-blurb">{p.blurb}</span>
              <span className="fc-place-go">Run the check <Icon name="arrow-right" size={14} /></span>
            </button>
          ))}
        </div>
      )}

      {place && (
        <div className="fc-detail">
          <div className="fc-detail-head">
            <div>
              <div className="fc-detail-name">{place.name}</div>
              <div className="fc-detail-blurb">{place.blurb}</div>
            </div>
            <ButtonNT variant="ghost" size="sm" onClick={reset}>← Pick another spot</ButtonNT>
          </div>

          <div className="fc-checkpanel">
            <div className="fc-checkpanel-title">The three-question check</div>
            <FcRow k="1 · What airspace?" v={place.airspace} />
            <FcRow k="2 · Authorization?" v={place.auth} flag={place.auth === "None needed" ? "ok" : "warn"} />
            <FcRow k="3 · Restrictions today?" v={place.tfr} flag={place.tfr === "None active" ? "ok" : "bad"} />
            <FcRow k="+ Land-use rule?" v={place.land} flag={/ban|prohibit/i.test(place.land) ? "bad" : "ok"} />
          </div>

          <div className="fc-decision">
            <div className="fc-decision-q">Your call:</div>
            <div className="fc-decision-btns">
              {Object.entries(FC_ANSWERS).map(([key, a]) => {
                let cls = `fc-dbtn tone-${a.tone}`;
                if (pick) {
                  if (key === place.answer) cls += " correct";
                  else if (key === pick) cls += " wrong";
                  else cls += " dim";
                }
                return (
                  <button key={key} className={cls} disabled={!!pick} onClick={() => !pick && setPick(key)}>
                    {a.label}
                  </button>
                );
              })}
            </div>
          </div>

          {pick && (
            <div className={`fc-feedback ${pick === place.answer ? "correct" : "wrong"}`}>
              <span className="label">{pick === place.answer ? "Correct" : "Not quite"}</span>
              {place.why}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

window.FlyCheck = FlyCheck;
