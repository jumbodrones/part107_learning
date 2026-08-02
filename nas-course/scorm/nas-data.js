// Drones in the National Airspace System — course metadata, glossary scaffold, and final exam.
// Lessons are pushed onto COURSE.lessons by nas-lessons-a/b/c.js (loaded after this file).
//
// This is a rigorous, self-study treatment for undergraduate and graduate students. It covers
// BOTH regulatory regimes for civil small unmanned aircraft: the Exception for Limited
// Recreational Operations (49 U.S.C. § 44809) and the small-UAS rule (14 CFR part 107), plus
// Remote ID (14 CFR part 89), registration (14 CFR part 48), airspace structure and charting,
// and the emerging beyond-visual-line-of-sight framework (proposed 14 CFR part 108).
//
// Regulatory citations are current as of mid-2026. Rules change; verify against the eCFR
// (ecfr.gov) and FAA guidance before operating. Nothing here is legal advice.
//
// Primary sources drawn on throughout:
//   - 49 U.S.C. § 40103 (sovereignty and use of airspace); § 44809 (recreational exception)
//   - 14 CFR part 107 (small unmanned aircraft systems); part 89 (Remote ID);
//     part 48 (registration); part 91 (general operating and flight rules)
//   - FAA Advisory Circular AC 107-2A (small UAS)
//   - FAA Aeronautical Chart Users' Guide (VFR sectional symbology)
//   - FAA UAS Data Delivery System / UAS Facility Maps; LAANC Concept of Operations
//   - Operation of Small Unmanned Aircraft Over People (final rule, 2021)
//   - Notice of Proposed Rulemaking, "Normalizing UAS BVLOS Operations" (proposed part 108, 2025)

// Maps a citation string to a stable public statute/regulation URL (Cornell LII), where the
// pattern is unambiguous. Returns null for guidance documents with no reliable canonical URL —
// those render as plain text rather than risk a dead or wrong link.
window.citeToUrl = function (cite) {
  if (!cite) return null;
  let m = cite.match(/(\d+)\s*U\.S\.C\.\s*§{1,2}\s*(\d+[A-Za-z]*)/);
  if (m) return `https://www.law.cornell.edu/uscode/text/${m[1]}/${m[2]}`;
  m = cite.match(/(\d+)\s*CFR\s*§{1,2}\s*(\d+\.\d+)/i);
  if (m) return `https://www.law.cornell.edu/cfr/text/${m[1]}/${m[2]}`;
  m = cite.match(/(\d+)\s*CFR\s+(\d+\.\d+)/i);
  if (m) return `https://www.law.cornell.edu/cfr/text/${m[1]}/${m[2]}`;
  m = cite.match(/(\d+)\s*CFR\s*part\s*(\d+)/i);
  if (m) return `https://www.law.cornell.edu/cfr/text/${m[1]}/part-${m[2]}`;
  return null;
};

window.COURSE = {
  title: "Drones in the National Airspace System",
  subtitle:
    "A rigorous self-study course on where civil unmanned aircraft fit in U.S. airspace — the law, the airspace, the charts, and the decision to fly.",
  estimatedMinutes: 95,
  passingScore: 0.8,
  updatedNote:
    "Covers 49 U.S.C. § 44809 and 14 CFR parts 107, 89, and 48. Citations current to mid-2026; verify against the eCFR before operating.",
  courseObjectives: [
    "Locate small-UAS operations within the FAA's statutory and regulatory hierarchy.",
    "Distinguish the recreational (§ 44809) and Part 107 regimes and determine which applies.",
    "Read U.S. airspace structure from a VFR sectional chart and decide when authorization is required.",
    "Apply the operating limitations, Remote ID, and right-of-way rules to concrete scenarios.",
    "Execute a systematic preflight go/no-go decision."
  ],

  lessons: [],   // populated by nas-lessons-a/b/c.js

  // Final assessment. Each item carries a worked explanation and the controlling citation.
  finalExam: [
    {
      q: "The FAA's authority to regulate the airspace a recreational drone flies in derives most directly from…",
      choices: [
        "State aviation statutes",
        "49 U.S.C. § 40103, which vests the U.S. with sovereignty over its navigable airspace",
        "14 CFR part 107 alone",
        "Local ordinances where the drone takes off"
      ],
      correct: 1,
      why: "Federal sovereignty over the airspace (49 U.S.C. § 40103) is the root authority; the CFR parts implement it. Airspace is federal regardless of who owns the ground below.",
      cite: "49 U.S.C. § 40103"
    },
    {
      q: "A photographer is paid to shoot real-estate footage by drone. Which framework governs the flight?",
      choices: [
        "The recreational exception, § 44809",
        "14 CFR part 107 (a remote pilot certificate is required)",
        "No framework — it is a one-time job",
        "14 CFR part 91 for general aviation"
      ],
      correct: 1,
      why: "Any non-recreational purpose — including compensation or furthering a business — removes the operation from § 44809 and places it under part 107, which requires a Remote Pilot Certificate.",
      cite: "14 CFR § 107.12; 49 U.S.C. § 44809(a)"
    },
    {
      q: "Airspace floors and ceilings printed on a VFR sectional chart are expressed in…",
      choices: [
        "Feet above ground level (AGL)",
        "Feet mean sea level (MSL), except where noted as AGL",
        "Meters MSL",
        "Flight levels only"
      ],
      correct: 1,
      why: "Charted class boundaries are MSL unless explicitly annotated 'AGL' (as some Class E floors are). The recreational/Part 107 400 ft limit, by contrast, is AGL — the two references must be reconciled at each site.",
      cite: "FAA Aeronautical Chart Users' Guide"
    },
    {
      q: "Under part 107, the maximum altitude for a small unmanned aircraft is…",
      choices: [
        "400 ft AGL, with no exceptions",
        "400 ft AGL, or higher if within a 400 ft radius of a structure and no more than 400 ft above that structure's top",
        "500 ft AGL",
        "The base of the overlying Class E"
      ],
      correct: 1,
      why: "§ 107.51(b) caps altitude at 400 ft AGL, but permits flight above that when within 400 ft laterally of a structure, provided the aircraft stays within 400 ft of the structure's uppermost limit — enabling tower and building inspection.",
      cite: "14 CFR § 107.51(b)"
    },
    {
      q: "Class A airspace begins at…",
      choices: ["10,000 ft MSL", "14,500 ft MSL", "18,000 ft MSL (FL180)", "the surface at major hubs"],
      correct: 2,
      why: "Class A is 18,000 ft MSL up to FL600, is IFR-only, and is irrelevant to small UAS, which are capped far below it.",
      cite: "14 CFR § 71.33"
    },
    {
      q: "A solid magenta ring encircling an airport on a sectional most likely denotes…",
      choices: ["Class B", "Class C", "Class D", "a MOA"],
      correct: 1,
      why: "Solid magenta = Class C. Class D is a dashed blue box; Class B is solid blue; MOAs use a magenta hatched border. Color and line style together encode the class.",
      cite: "FAA Aeronautical Chart Users' Guide"
    },
    {
      q: "A dashed magenta boundary around a small airport indicates…",
      choices: [
        "Class E that begins at 700 ft AGL",
        "Class E that extends down to the surface — controlled to the ground",
        "uncontrolled Class G",
        "a temporary flight restriction"
      ],
      correct: 1,
      why: "A dashed magenta line marks surface Class E tied to an airport with an instrument approach — controlled to the ground, so authorization is required to fly there.",
      cite: "FAA Aeronautical Chart Users' Guide"
    },
    {
      q: "The soft magenta 'vignette' (faded band) on a sectional marks the lateral limit where Class E lowers to…",
      choices: ["the surface", "700 ft AGL", "1,200 ft AGL", "18,000 ft MSL"],
      correct: 1,
      why: "The faded magenta edge shows where the Class E floor steps down to 700 ft AGL; a faded blue edge marks the 1,200 ft AGL step. Below those floors the airspace is Class G.",
      cite: "FAA Aeronautical Chart Users' Guide"
    },
    {
      q: "LAANC provides…",
      choices: [
        "a recreational pilot license",
        "near-real-time authorization to operate in controlled airspace up to a published grid ceiling",
        "weather briefings",
        "drone registration"
      ],
      correct: 1,
      why: "The Low Altitude Authorization and Notification Capability links approved UAS Service Suppliers to ATC data, auto-approving requests at or below the UAS Facility Map ceiling. It serves both § 44809 and part 107 operators.",
      cite: "FAA LAANC Concept of Operations"
    },
    {
      q: "A UAS Facility Map grid square shows a ceiling of 100 ft. A LAANC request for 100 ft will normally be…",
      choices: [
        "auto-approved within seconds",
        "denied — controlled airspace is closed to drones",
        "held for multi-day human review",
        "converted to a part 107 waiver"
      ],
      correct: 0,
      why: "Requests at or below the grid ceiling are approved automatically and near-instantly. Only requests ABOVE the ceiling require 'further coordination' and human review.",
      cite: "FAA UAS Facility Maps; LAANC CONOPS"
    },
    {
      q: "FAA registration is required for a small unmanned aircraft when its takeoff weight is…",
      choices: [
        "any weight, always",
        "more than 0.55 lb (250 g)",
        "more than 1 lb",
        "more than 55 lb"
      ],
      correct: 1,
      why: "Registration under part 48 is required above 0.55 lb (250 g). Recreational flyers may register once and cover all their aircraft; part 107 operators register each aircraft. Sub-250 g aircraft flown recreationally are exempt from registration only — all other rules still apply.",
      cite: "14 CFR part 48; 49 U.S.C. § 44809(a)(7)"
    },
    {
      q: "Which is NOT one of the three ways to satisfy the Remote ID requirement?",
      choices: [
        "Operate a standard Remote ID drone that broadcasts natively",
        "Attach a Remote ID broadcast module",
        "File a flight plan with ATC before each flight",
        "Operate at an FAA-Recognized Identification Area (FRIA)"
      ],
      correct: 2,
      why: "Part 89 recognizes three compliance routes: standard RID, a broadcast module, or flying within a FRIA. Filing a flight plan is not among them.",
      cite: "14 CFR §§ 89.105, 89.110, 89.115"
    },
    {
      q: "To fly at night, a small unmanned aircraft must display anti-collision lighting visible for at least…",
      choices: ["1 statute mile", "2 statute miles", "3 statute miles", "5 statute miles"],
      correct: 2,
      why: "Both regimes require anti-collision lighting visible for at least 3 statute miles, flashing at a rate sufficient to avoid a collision. Stock navigation LEDs usually don't meet this; a dedicated strobe does.",
      cite: "14 CFR § 107.29(b); 49 U.S.C. § 44809(a)(5)"
    },
    {
      q: "Part 107 sets a minimum flight visibility from the control station of…",
      choices: ["1 statute mile", "3 statute miles", "5 statute miles", "no minimum"],
      correct: 1,
      why: "§ 107.51(c) requires at least 3 statute miles visibility from the control station. This mirrors basic VFR minimums and supports see-and-avoid.",
      cite: "14 CFR § 107.51(c)"
    },
    {
      q: "Part 107 minimum distance from clouds is…",
      choices: [
        "clear of clouds at any distance",
        "500 ft below and 2,000 ft horizontally from clouds",
        "1,000 ft below and 1 mile horizontally",
        "no cloud clearance is required"
      ],
      correct: 1,
      why: "§ 107.51(d) requires staying 500 ft below and 2,000 ft horizontally from clouds — keeping the aircraft clear of where crewed traffic may emerge from cloud.",
      cite: "14 CFR § 107.51(d)"
    },
    {
      q: "When a small UAS and a crewed helicopter converge, right-of-way rules require that…",
      choices: [
        "the more maneuverable aircraft yields",
        "the UAS yields and must not create a collision hazard — always",
        "whoever saw the other first continues",
        "both hold position"
      ],
      correct: 1,
      why: "§ 107.37 (echoing § 91.113) requires the UAS to give way to all crewed aircraft and never to operate so as to create a collision hazard. The burden to avoid is always on the drone.",
      cite: "14 CFR § 107.37"
    },
    {
      q: "Under part 107, equipping a small UAS with ADS-B Out is…",
      choices: [
        "required in all controlled airspace",
        "prohibited unless otherwise authorized by the FAA",
        "recommended for all night flights",
        "required above 200 ft"
      ],
      correct: 1,
      why: "§ 107.36 prohibits ADS-B Out on small UAS unless otherwise authorized, to avoid saturating the surveillance system that crewed aircraft rely on.",
      cite: "14 CFR § 107.36"
    },
    {
      q: "Operations over people 'Category 1' under the 2021 rule applies to aircraft that…",
      choices: [
        "weigh under 55 lb",
        "weigh 0.55 lb (250 g) or less and have no exposed rotating parts that could lacerate skin",
        "carry an airworthiness certificate",
        "hold a waiver"
      ],
      correct: 1,
      why: "Category 1 (Subpart D / § 107.39) covers aircraft ≤ 0.55 lb with no lacerating exposed parts and no FAA-identified safety defect, permitting sustained flight over people without a waiver. Categories 2–4 rely on injury-severity means of compliance.",
      cite: "14 CFR part 107 subpart D; § 107.39"
    },
    {
      q: "A 40,000-seat stadium has a game beginning in 30 minutes; your launch site is 2 NM away in Class G. You…",
      choices: [
        "may fly — Class G needs no authorization",
        "may not fly — the stadium TFR bars flight within 3 NM from 1 hour before to 1 hour after",
        "may fly below 100 ft",
        "may fly with LAANC approval"
      ],
      correct: 1,
      why: "The standing stadium TFR (FDC NOTAM under § 91.145) prohibits UAS within 3 NM of stadiums seating 30,000+ from one hour before to one hour after the event, at all altitudes. It overrides airspace class, and LAANC does not open it.",
      cite: "14 CFR § 91.145; FDC NOTAM 4/3621"
    },
    {
      q: "The National Park Service prohibition on drones in national parks is best characterized as…",
      choices: [
        "an airspace restriction you can request access to",
        "a land-use rule barring launching, landing, or operating from park lands",
        "waived below 400 ft",
        "the same as a TFR"
      ],
      correct: 1,
      why: "The NPS rule (36 CFR 1.5 policy) governs use of park LAND — launching, landing, or operating — not the airspace. Clear airspace overhead does not lift it.",
      cite: "NPS Policy Memorandum 14-05 (36 CFR 1.5)"
    },
    {
      q: "The visual-line-of-sight requirement (§ 107.31) may be…",
      choices: [
        "never set aside",
        "waived through a Certificate of Waiver if the FAA finds the operation can be conducted safely",
        "ignored if a visual observer is present",
        "replaced by first-person-view goggles"
      ],
      correct: 1,
      why: "VLOS is among the sections waivable under § 107.200/205 via a Certificate of Waiver. A visual observer supplements but does not replace the remote PIC's see-and-avoid duty; FPV alone does not satisfy VLOS.",
      cite: "14 CFR §§ 107.31, 107.200, 107.205"
    },
    {
      q: "As of mid-2026, the proposed 14 CFR part 108 (routine BVLOS) is best described as…",
      choices: [
        "a final, effective rule",
        "a proposed rule (NPRM stage) that had not yet taken effect",
        "an FAA advisory circular",
        "a repealed proposal"
      ],
      correct: 1,
      why: "Part 108 reached the Notice of Proposed Rulemaking stage (2025) with the comment period extending into early 2026; it was not yet a final, effective rule. Until it is, BVLOS still requires a part 107 waiver.",
      cite: "NPRM, Normalizing UAS BVLOS Operations (2025)"
    },
    {
      q: "TRUST (The Recreational UAS Safety Test) is required for…",
      choices: [
        "only drones over 0.55 lb",
        "only controlled-airspace flights",
        "every recreational flyer, regardless of aircraft weight",
        "part 107 pilots instead of the knowledge test"
      ],
      correct: 2,
      why: "TRUST is mandatory for all § 44809 recreational operations at any aircraft weight; the completion certificate must be available during flight. Part 107 pilots instead pass the aeronautical knowledge test.",
      cite: "49 U.S.C. § 44809(a)(7)"
    },
    {
      q: "Class E airspace with a charted floor of 700 ft AGL means that, at 350 ft AGL, you are operating in…",
      choices: [
        "Class E — authorization required",
        "Class G (uncontrolled) beneath the Class E floor",
        "Class A",
        "a prohibited area"
      ],
      correct: 1,
      why: "Where Class E begins at 700 ft AGL, the airspace below it is Class G. At 350 ft you are in uncontrolled airspace and need no ATC authorization — though all operating limits still apply.",
      cite: "14 CFR § 71.71; FAA Chart Users' Guide"
    }
  ]
};
