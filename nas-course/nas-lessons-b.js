// Lessons 5–8 — the chart, authorization, Remote ID, and the operating rules.
// Pushed onto window.COURSE.lessons in order. Loaded after nas-lessons-a.js.

window.COURSE.lessons.push(
  // ================================================================ 05
  {
    id: "sectional",
    number: "05",
    title: "Reading the VFR Sectional",
    tagline: "Two ink colors and a grammar of lines",
    minutes: 12,
    icon: "map",
    summary:
      "The symbology of the aeronautical chart every drone app is really reading — colors, line styles, and the number stacks that give a class its ceiling and floor.",
    objectives: [
      "Interpret magenta and blue chart ink and their line styles.",
      "Read a ceiling/floor number stack in hundreds of feet MSL.",
      "Recognize airport, special-use, and Class E transition symbology.",
      "Extract the airspace class and authorization need directly from a chart."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "THE SOURCE OF TRUTH",
        heading: "The friendly apps are translating one document.",
        body:
          "A VFR sectional chart is the primary depiction of airspace for visual flight. The green/red drone apps are convenient overlays, but they are derived products; the chart itself carries more nuance and is authoritative. Learning to read it makes you far harder to surprise, because you're consulting the same source ATC and crewed pilots use. The entire language reduces to two ink colors, a handful of line styles, and numbers in boxes.",
        callout: {
          label: "Two colors, one idea",
          text:
            "Blue ink is associated with airspace tied to the busier/towered airports (Class B and D). Magenta ink marks Class C and Class E. Line STYLE then refines the meaning."
        }
      },
      {
        kind: "sectional",
        eyebrow: "INTERACTIVE · SELECT A SYMBOL",
        heading: "Decode a live chart.",
        body:
          "This is a slice of sectional around a mid-size airport. Select each highlighted symbol to read what its ring, line, or number is telling you."
      },
      {
        kind: "table",
        eyebrow: "THE LINE GRAMMAR",
        heading: "Color × style = airspace class.",
        body: "The same color means different things depending on whether the line is solid, dashed, or a soft faded band (a 'vignette').",
        columns: ["Symbol", "Class", "Meaning for a drone"],
        rows: [
          ["Solid blue ring", "Class B", "Clearance/authorization required; busiest hubs"],
          ["Dashed blue box", "Class D", "Towered airport; authorization required to the surface"],
          ["Solid magenta ring", "Class C", "Radar-served; authorization required"],
          ["Dashed magenta line", "Surface Class E", "Controlled to the ground; authorization required"],
          ["Faded magenta band", "Class E floor 700 ft AGL", "Class G below 700 ft AGL — usually free for you"],
          ["Faded blue band", "Class E floor 1,200 ft AGL", "Class G below 1,200 ft AGL"]
        ]
      },
      {
        kind: "options",
        eyebrow: "THE NUMBERS IN THE BOXES",
        heading: "Reading a ceiling-over-floor stack.",
        items: [
          {
            tag: "100 / SFC",
            title: "Ceiling over floor, ×100 ft MSL",
            desc: "The top number is the ceiling, the bottom the floor, both in hundreds of feet MSL. '100/SFC' = surface up to 10,000 ft MSL."
          },
          {
            tag: "42 / 12",
            title: "A shelf with air beneath it",
            desc: "'42/12' = 4,200 ft MSL ceiling over a 1,200 ft MSL floor. The airspace is a shelf; below 1,200 ft MSL lies uncontrolled air."
          },
          {
            tag: "SFC",
            title: "Down to the surface",
            desc: "'SFC' as the floor means the airspace touches the ground — this is where authorization is always required to fly."
          }
        ]
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "Beyond the rings: symbols that also bound your flight.",
        body:
          "A thorough chart read looks past airspace ink. Blue or magenta flags, hatched borders, and shaded corridors carry real constraints for low flight, and obstacle symbols with their MSL/AGL heights tell you what's in your airspace physically, not just legally.",
        points: [
          "Blue hatched borders → special-use airspace (Prohibited P-, Restricted R-, MOAs, Alert areas).",
          "Obstacle symbols annotate top height in MSL with AGL in parentheses — read both.",
          "Military Training Routes (VR/IR lines) mark corridors of fast, low crewed traffic.",
          "Airport data blocks give field elevation — the number you need to convert MSL floors to AGL."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "A solid magenta ring around an airport with the stack '41/SFC' tells you…",
        choices: [
          { text: "Class C from the surface to 4,100 ft MSL — authorization required.", correct: true, why: "Correct. Solid magenta = Class C; SFC floor reaches the ground; 41 = 4,100 ft MSL ceiling. Controlled — you need authorization." },
          { text: "Class G up to 4,100 ft — no permission needed.", correct: false, why: "Solid magenta is controlled Class C, not Class G, and SFC means it reaches the ground." },
          { text: "A restricted military area.", correct: false, why: "Special-use airspace uses blue hatched borders, not a solid magenta ring." }
        ]
      },
      {
        kind: "check",
        prompt: "You see a soft, faded magenta band along the edge of an area. What does it mark?",
        choices: [
          { text: "The lateral limit where Class E lowers to a 700 ft AGL floor.", correct: true, why: "Correct. The faded magenta vignette marks the Class E 700 ft AGL floor; below it is Class G." },
          { text: "Surface Class E.", correct: false, why: "Surface Class E is a sharp DASHED magenta line, not a faded band." },
          { text: "A prohibited area.", correct: false, why: "Prohibited areas are blue hatched with a 'P-' designator, not a magenta vignette." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "Your park sits inside a dashed magenta line, and a nearby box reads 'SFC' as the floor. Field elevation is 300 ft MSL. You want to fly at 300 ft AGL.",
        question: "What's the correct read and action?",
        choices: [
          { text: "Dashed magenta = surface Class E: controlled to the ground, so you need authorization before flying.", correct: true, why: "Correct. A dashed magenta boundary is surface Class E — controlled at all altitudes down to the ground. Obtain authorization (LAANC/DroneZone)." },
          { text: "Dashed lines are advisory, so fly freely.", correct: false, why: "A dashed magenta line is a real controlled boundary — surface Class E — never advisory." },
          { text: "Magenta means uncontrolled; go ahead.", correct: false, why: "Magenta marks Class C and E, both controlled. Color gives class, not permission." }
        ]
      }
    ],
    terms: [
      { term: "VFR sectional chart", def: "The authoritative visual aeronautical chart depicting airspace, airports, terrain, and obstacles for flight under visual rules." },
      { term: "Vignette", def: "A soft faded color band on a sectional marking where a Class E floor steps down (magenta = 700 ft AGL, blue = 1,200 ft AGL)." },
      { term: "Ceiling/floor stack", def: "A boxed pair of numbers giving an airspace's ceiling over its floor in hundreds of feet MSL (e.g., 42/12 = 4,200 over 1,200 MSL)." },
      { term: "SFC", def: "'Surface' — an airspace floor notation meaning the class reaches the ground; authorization is always required there." },
      { term: "Special-use airspace", def: "Prohibited, Restricted, Warning, MOA, and Alert areas, drawn with blue hatched borders on the chart." }
    ],
    references: [
      { label: "VFR chart symbology", cite: "FAA Aeronautical Chart Users' Guide" },
      { label: "Chart supplement & airport data", cite: "FAA Chart Supplement U.S." }
    ]
  },

  // ================================================================ 06
  {
    id: "laanc",
    number: "06",
    title: "Authorization: LAANC & DroneZone",
    tagline: "Turning controlled airspace into a yes",
    minutes: 9,
    icon: "tower",
    summary:
      "How the FAA grants near-instant access to controlled airspace through published grid ceilings — and what to do when you need more than the grid allows.",
    objectives: [
      "Explain the UAS Facility Map grid and what its ceilings mean.",
      "Describe the LAANC auto-approval path and its limits.",
      "Identify when 'further coordination' or DroneZone is required.",
      "Select the correct authorization path for a given situation."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "PERMISSION, NOT PROHIBITION",
        heading: "Controlled airspace is open to you — after authorization.",
        body:
          "Living near a towered or radar-served airport does not ground you. It means you must obtain authorization before flight and accept an altitude ceiling the FAA has pre-computed for that exact location. For most sites, that authorization is automatic and near-instant through the Low Altitude Authorization and Notification Capability (LAANC). Both § 44809 and part 107 operators use it; you simply select the correct rule set in the app.",
        callout: {
          label: "The pre-computed map",
          text:
            "The FAA publishes UAS Facility Maps (UASFM): a grid over each controlled airport showing the maximum altitude a drone can be auto-approved to, cell by cell — often 0, 50, 100, 200, or 400 ft."
        }
      },
      {
        kind: "definition",
        eyebrow: "WHAT LAANC IS",
        heading: "A data bridge, not a person on the radio.",
        term: "LAANC — Low Altitude Authorization and Notification Capability",
        statement:
          "LAANC is an automated system in which FAA-approved UAS Service Suppliers (USS) connect drone apps to airspace data, granting or denying authorization in near real time based on the published UAS Facility Map ceilings and current airspace status.",
        cite: "FAA LAANC Concept of Operations",
        body:
          "You draw your operating area, choose an altitude at or below the grid ceiling, and receive an authorization — typically within seconds — valid for the window you request during the facility's operating hours."
      },
      {
        kind: "table",
        eyebrow: "THREE PATHS",
        heading: "Match the path to the ask.",
        columns: ["Path", "Use when", "Speed"],
        rows: [
          ["LAANC auto-approval", "At/below the grid ceiling, LAANC-served airport", "Seconds"],
          ["LAANC further coordination", "Above the grid ceiling but still workable", "Hours–days (human review)"],
          ["FAA DroneZone", "Airport not on LAANC, or special request", "Days–weeks"],
          ["FRIA", "Fixed club/education site; skip per-flight auth & RID", "Set up once"]
        ]
      },
      {
        kind: "concept",
        eyebrow: "WHEN THE GRID SAYS ZERO",
        heading: "A 0 ft ceiling means no automatic yes — not 'never.'",
        body:
          "Some grid cells — often directly under approach and departure paths — show a ceiling of 0 ft. LAANC will not auto-approve any altitude there. That is not an outright ban: you may submit a further-coordination request that a human reviews, but approval is discretionary and slow, and for many hobby flights the practical answer is to choose a different site. Never interpret a 0 ft cell as 'fly at your own risk.'",
        callout: {
          label: "Common misread",
          text:
            "A grid ceiling is a hard authorization limit, not a suggestion. Requesting or flying above it — or in a 0 ft cell without coordination — is operating in controlled airspace without authorization."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "What authorization is, and isn't.",
        body:
          "A LAANC authorization addresses one thing: your entry into that controlled airspace up to a stated altitude and time. It does not relieve you of any other requirement, and it does not exist for uncontrolled airspace.",
        points: [
          "Authorization ≠ waiver. It grants airspace access; it does not waive VLOS, night, or over-people rules.",
          "It's altitude- and time-bounded — fly the profile you were approved for.",
          "There is no LAANC 'authorization' for Class G; none is needed there.",
          "TFRs and special-use restrictions still apply on top of any authorization."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "The UASFM grid over your site shows a 100 ft ceiling and you request 100 ft via a LAANC app. What happens?",
        choices: [
          { text: "Auto-approved, typically within seconds.", correct: true, why: "Correct. At or below the grid ceiling, LAANC approves automatically and near-instantly." },
          { text: "Rejected — LAANC never approves controlled airspace.", correct: false, why: "LAANC exists specifically to approve controlled-airspace access up to the grid ceiling." },
          { text: "Held several days for human review.", correct: false, why: "Human review is only for further-coordination requests above the ceiling; at/below is instant." }
        ]
      },
      {
        kind: "check",
        prompt: "Does a LAANC authorization to fly at 200 ft in Class D also permit you to fly beyond visual line of sight there?",
        choices: [
          { text: "Yes — authorization covers everything.", correct: false, why: "Authorization only grants airspace entry to a stated altitude/time. It does not waive VLOS or any other rule." },
          { text: "No — VLOS and all other operating rules still apply; authorization only grants airspace access.", correct: true, why: "Correct. LAANC is airspace access, not a waiver. VLOS, altitude, night, and over-people rules are untouched." },
          { text: "Only if you also register the drone again.", correct: false, why: "Registration is unrelated; the point is that authorization doesn't waive operating rules." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "Your backyard is in Class D. The UASFM shows a 50 ft ceiling for your cell, but you want 200 ft for a landscape shot.",
        question: "What are your real options?",
        choices: [
          { text: "Fly at 200 ft anyway — the ceiling is advisory.", correct: false, why: "The ceiling is a hard limit; exceeding it is unauthorized operation in controlled airspace." },
          { text: "Accept the 50 ft auto-approval now, or submit a further-coordination request for more altitude and wait for review.", correct: true, why: "Correct. You may fly at 50 ft immediately, or seek higher altitude through further coordination and await a decision." },
          { text: "Switch to the part 107 rule set to bypass the ceiling.", correct: false, why: "The grid ceiling applies regardless of rule set; switching does not remove it." }
        ]
      }
    ],
    terms: [
      { term: "LAANC", def: "Low Altitude Authorization and Notification Capability — the automated system granting near-real-time controlled-airspace authorization via approved service suppliers." },
      { term: "UAS Facility Map (UASFM)", def: "A published grid over a controlled airport showing the maximum altitude a drone can be auto-approved to in each cell." },
      { term: "Further coordination", def: "A LAANC request above the grid ceiling that a human reviews and may approve or deny — not instantaneous." },
      { term: "FAA DroneZone", def: "The FAA web portal for registration and for authorizations not handled by LAANC." },
      { term: "UAS Service Supplier (USS)", def: "An FAA-approved company whose app brokers LAANC authorizations between operators and FAA airspace data." }
    ],
    references: [
      { label: "Operation in controlled airspace", cite: "14 CFR § 107.41" },
      { label: "LAANC", cite: "FAA LAANC Concept of Operations" },
      { label: "Authorizations & registration portal", cite: "FAA DroneZone" }
    ]
  },

  // ================================================================ 07
  {
    id: "remoteid",
    number: "07",
    title: "Remote Identification",
    tagline: "The digital license plate",
    minutes: 9,
    icon: "broadcast",
    summary:
      "Part 89's requirement that most drones broadcast who and where they are — the three ways to comply, what is transmitted, and why it exists.",
    objectives: [
      "Explain the purpose of Remote ID and what data it broadcasts.",
      "Distinguish the three compliance routes under part 89.",
      "Identify which operations are exempt or must use a FRIA.",
      "Relate Remote ID to registration and to enforcement."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "WHY IT EXISTS",
        heading: "Accountability is the price of an open low-altitude sky.",
        body:
          "Remote Identification (14 CFR part 89) lets the public and authorities identify a drone in flight and locate its control station, much as a license plate identifies a car. It is the security backbone that makes broader, routine drone access to the airspace politically and operationally viable: without a way to distinguish a lawful operator from a careless or hostile one, expanding drone operations would be untenable.",
        callout: {
          label: "Applies to both regimes",
          text:
            "Remote ID is required whether you fly under § 44809 or part 107. Registration and Remote ID are related but distinct obligations."
        }
      },
      {
        kind: "options",
        eyebrow: "WHAT'S BROADCAST",
        heading: "The message a compliant drone transmits.",
        items: [
          { tag: "ID", title: "A unique identifier", desc: "The aircraft's serial number or a session ID that ties back to the registration record." },
          { tag: "Position", title: "Aircraft location & altitude", desc: "The drone's latitude, longitude, and geometric altitude, updated in real time." },
          { tag: "Control", title: "Control-station location", desc: "The take-off or control-station latitude/longitude — where the operator is." },
          { tag: "Time", title: "Velocity & timestamp", desc: "Velocity and a time mark, so the broadcast track is coherent." }
        ]
      },
      {
        kind: "table",
        eyebrow: "THREE WAYS TO COMPLY",
        heading: "Pick exactly one route per flight.",
        columns: ["Route", "How", "Citation"],
        rows: [
          ["Standard Remote ID", "Fly a drone that broadcasts RID natively from takeoff to shutdown.", "§ 89.110"],
          ["Broadcast module", "Attach an FAA-accepted module to a non-RID drone; fly within VLOS.", "§ 89.115"],
          ["FRIA", "Operate within an FAA-Recognized Identification Area; no broadcast required.", "§ 89.120"]
        ],
        note: "There is no 'file a flight plan' route. Only these three satisfy the rule."
      },
      {
        kind: "concept",
        eyebrow: "EDGES & EXEMPTIONS",
        heading: "When Remote ID doesn't apply — narrowly.",
        body:
          "Aircraft that need not register (recreational aircraft at or below 0.55 lb) are generally not required to broadcast Remote ID. Everyone else either flies a standard-RID aircraft, adds a broadcast module, or confines the operation to a FRIA — recognized fixed sites, typically club or educational fields. The compliance timeline matured in stages: manufacturers had to build RID into new drones by late 2022, and operators had to be flying in compliance by the operational deadline in early 2024, after which the FAA began enforcing.",
        callout: {
          label: "Practical read",
          text:
            "If your registered drone predates Remote ID and has no built-in broadcast, you need a broadcast module or a FRIA — not just to 'turn something on.'"
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "Remote ID and the road to BVLOS.",
        body:
          "Remote ID is a prerequisite for the operations Lesson 10 previews. Detect-and-avoid, traffic management (UTM), and routine beyond-line-of-sight flight all assume every aircraft is electronically conspicuous. Note the asymmetry: small UAS are largely prohibited from ADS-B Out (§ 107.36) to avoid flooding crewed-aviation surveillance, so Remote ID — a separate, drone-specific broadcast — is how drones become visible to each other and to the public without overwhelming that system.",
        points: [
          "Remote ID ≠ ADS-B. Different systems, different audiences.",
          "Small UAS generally must NOT transmit ADS-B Out (§ 107.36).",
          "Electronic conspicuity is the foundation the proposed part 108 framework builds on."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Which is NOT a valid way to meet the Remote ID requirement?",
        choices: [
          { text: "Fly a standard Remote ID drone.", correct: false, why: "This is route one (§ 89.110) — valid." },
          { text: "Attach an FAA-accepted broadcast module.", correct: false, why: "This is route two (§ 89.115) — valid." },
          { text: "File a flight plan with ATC before each flight.", correct: true, why: "Correct — this is NOT a Remote ID route. The three routes are standard RID, a broadcast module, or a FRIA." }
        ]
      },
      {
        kind: "check",
        prompt: "Under part 107, may you satisfy 'electronic conspicuity' by equipping your small UAS with ADS-B Out?",
        choices: [
          { text: "Yes — ADS-B Out is encouraged for drones.", correct: false, why: "The opposite: § 107.36 prohibits ADS-B Out on small UAS unless otherwise authorized, to protect crewed-aviation surveillance." },
          { text: "No — ADS-B Out is generally prohibited on small UAS; Remote ID is the drone-specific broadcast.", correct: true, why: "Correct. Remote ID and ADS-B are distinct; small UAS generally must not use ADS-B Out (§ 107.36)." },
          { text: "Only in Class G.", correct: false, why: "The ADS-B Out prohibition isn't lifted by being in Class G." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "You own a registered 900 g drone from 2020 with no built-in Remote ID. Your usual park is not a FRIA.",
        question: "What must you do before flying there legally?",
        choices: [
          { text: "Nothing — older drones are grandfathered.", correct: false, why: "There is no blanket grandfather. A registered drone above 250 g must meet Remote ID one of the three ways." },
          { text: "Attach an FAA-accepted Remote ID broadcast module (or operate at a FRIA instead).", correct: true, why: "Correct. Without built-in RID, you need a broadcast module, or you must confine the operation to a FRIA." },
          { text: "Re-register the drone to activate Remote ID.", correct: false, why: "Registration doesn't create a broadcast capability; the aircraft still needs a module or a FRIA." }
        ]
      }
    ],
    terms: [
      { term: "Remote ID (part 89)", def: "The requirement that most drones broadcast identity, position, control-station location, velocity, and time in flight." },
      { term: "Standard Remote ID drone", def: "An aircraft that broadcasts Remote ID natively from takeoff to shutdown (§ 89.110)." },
      { term: "Broadcast module", def: "An FAA-accepted add-on that gives a non-RID drone broadcast capability; requires visual line of sight (§ 89.115)." },
      { term: "FRIA", def: "FAA-Recognized Identification Area — a fixed site where drones may operate without broadcasting Remote ID (§ 89.120)." },
      { term: "ADS-B Out", def: "A crewed-aviation surveillance broadcast; generally prohibited on small UAS under § 107.36 to avoid saturating the system." }
    ],
    references: [
      { label: "Remote Identification of UA", cite: "14 CFR part 89" },
      { label: "ADS-B Out prohibition", cite: "14 CFR § 107.36" },
      { label: "Registration & marking", cite: "14 CFR part 48; § 107.13" }
    ]
  },

  // ================================================================ 08
  {
    id: "operating",
    number: "08",
    title: "Operating Rules & Right-of-Way",
    tagline: "The limits that hold in every class",
    minutes: 12,
    icon: "eye",
    summary:
      "Part 107 Subpart B and its recreational analogues: visual line of sight, yielding to crewed aircraft, speed and visibility limits, night operations, and operations over people.",
    objectives: [
      "State the core operating limitations and their citations.",
      "Explain the visual-line-of-sight duty and the visual observer's role.",
      "Apply right-of-way rules to a converging-traffic encounter.",
      "Distinguish the four operations-over-people categories."
    ],
    screens: [
      {
        kind: "stats",
        eyebrow: "THE CONSTANTS",
        heading: "These don't change with the airspace.",
        stats: [
          { value: "400", unit: "ft AGL", label: "Max altitude (uncontrolled / structure exception)" },
          { value: "100", unit: "mph", label: "Max groundspeed (87 kt) — § 107.51(a)" },
          { value: "3", unit: "sm vis", label: "Min flight visibility from control station" },
          { value: "3", unit: "sm light", label: "Anti-collision light range for night" }
        ]
      },
      {
        kind: "concept",
        eyebrow: "SEE AND BE SEEN",
        heading: "Keep it in sight, and always give way.",
        body:
          "The remote pilot in command must keep the aircraft within unaided visual line of sight — corrective lenses aside, not through goggles or a screen (§ 107.31). A visual observer may assist and extend awareness but never replaces the remote PIC's duty to see and avoid (§ 107.33). Above all, a small UAS must yield the right of way to all crewed aircraft and must never operate so as to create a collision hazard (§ 107.37). In any encounter, the burden to avoid is entirely yours — you are the small, agile, unmanned party.",
        callout: {
          label: "First-person view",
          text:
            "Flying by FPV goggles is permitted only if a visual observer maintains VLOS of the aircraft. FPV alone does not satisfy § 107.31."
        }
      },
      {
        kind: "table",
        eyebrow: "OPERATIONS OVER PEOPLE",
        heading: "The four categories (2021 rule, Subpart D).",
        body:
          "Sustained flight over people who are not participating and not under cover is restricted by aircraft category, keyed to injury risk. Operations over moving vehicles are similarly constrained.",
        columns: ["Category", "Qualifying aircraft", "Basis"],
        rows: [
          ["Category 1", "≤ 0.55 lb, no lacerating exposed parts", "Weight + no injury-causing parts"],
          ["Category 2", "Injury ≤ Cat-2 threshold; no lacerations", "ASTM means-of-compliance testing"],
          ["Category 3", "Injury ≤ Cat-3 threshold", "Limited over-people; not over open-air assemblies"],
          ["Category 4", "Holds an airworthiness certificate", "Maintained per airworthiness rules"]
        ],
        note: "Recreational flyers should treat sustained flight over uninvolved people as off-limits absent a qualifying aircraft."
      },
      {
        kind: "concept",
        eyebrow: "AFTER DARK",
        heading: "Night flight is allowed — with lighting and preparation.",
        body:
          "Since the 2021 rule, both regimes permit night operations provided the aircraft displays anti-collision lighting visible for at least 3 statute miles, flashing at a rate sufficient to avoid a collision (§ 107.29). Stock navigation LEDs usually fall short; a dedicated strobe is the standard fix. Part 107 pilots whose currency predates the rule must have completed the updated training. Every other limit — 400 ft, VLOS, visibility, cloud clearance, airspace authorization — continues to apply in the dark.",
        callout: {
          label: "Don't forget",
          text:
            "Maintaining VLOS at night means still being able to determine the aircraft's attitude and position — a lit strobe helps you as much as it helps others."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "The full Subpart B checklist, with citations.",
        body:
          "Beyond the headline rules, Subpart B carries a set of limits worth committing to memory — several are among the sections you may seek to waive (Lesson 10).",
        points: [
          "§ 107.23 — no careless or reckless operation; no dropping objects to create a hazard.",
          "§ 107.25 — no operation from a moving vehicle except over sparsely populated areas.",
          "§ 107.35 — one person may not operate more than one aircraft at a time.",
          "§ 107.36 — no ADS-B Out unless otherwise authorized.",
          "§ 107.49 — preflight: assess airspace, weather, the site, and the aircraft's condition.",
          "§ 107.51 — 400 ft AGL, 100 mph, 3 sm visibility, 500 ft below / 2,000 ft horizontal from clouds."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Mid-flight at 350 ft, you hear a low medical helicopter approaching. What is required of you?",
        choices: [
          { text: "Hold position and let the helicopter maneuver around you.", correct: false, why: "The duty to avoid is always yours (§ 107.37). Crewed aircraft have the right of way." },
          { text: "Descend and maneuver clear immediately so the helicopter has an unobstructed path.", correct: true, why: "Correct. Yield to crewed aircraft and never create a collision hazard — descend and clear the area at once." },
          { text: "Climb above 400 ft to get over it.", correct: false, why: "Never climb toward crewed traffic, and never exceed the altitude limit. Descend and give way." }
        ]
      },
      {
        kind: "check",
        prompt: "You want to fly by FPV goggles. Under part 107, when is that permitted?",
        choices: [
          { text: "Any time — FPV satisfies the see-and-avoid rule.", correct: false, why: "FPV alone does not satisfy VLOS (§ 107.31); it is not unaided sight of the aircraft." },
          { text: "Only if a visual observer maintains unaided visual line of sight of the aircraft.", correct: true, why: "Correct. A visual observer must keep the aircraft in VLOS while you fly by FPV (§§ 107.31, 107.33)." },
          { text: "Only below 100 ft.", correct: false, why: "Altitude doesn't cure the VLOS issue; a visual observer is what's required." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "You plan a sunset shot ending ~20 minutes after dark. Your drone has stock red/green nav LEDs but no dedicated strobe.",
        question: "Are you cleared to fly this shot?",
        choices: [
          { text: "Yes — the navigation LEDs count as anti-collision lighting.", correct: false, why: "Stock nav LEDs typically aren't visible for the required 3 statute miles — that's exactly what a strobe provides." },
          { text: "Not until you add anti-collision lighting visible for 3 statute miles (§ 107.29).", correct: true, why: "Correct. Night flight requires a 3-sm anti-collision light; add a strobe before flying after dark." },
          { text: "Yes, if you land within 30 minutes of sunset.", correct: false, why: "There's no 30-minute grace period; the lighting requirement governs civil twilight and night operations." }
        ]
      }
    ],
    terms: [
      { term: "Remote pilot in command (remote PIC)", def: "The person directly responsible for and the final authority over a part 107 operation." },
      { term: "Visual line of sight (VLOS)", def: "The requirement (§ 107.31) that the remote PIC keep the aircraft in unaided sight throughout the flight." },
      { term: "Visual observer (VO)", def: "A person who assists the remote PIC in seeing and avoiding; supplements but cannot replace the PIC's VLOS duty (§ 107.33)." },
      { term: "Right of way", def: "The rule (§ 107.37, cf. § 91.113) that a small UAS yields to all crewed aircraft and never creates a collision hazard." },
      { term: "Operations over people", def: "Subpart D framework (Categories 1–4, § 107.39) governing sustained flight over uninvolved people and moving vehicles." },
      { term: "Anti-collision lighting", def: "Lighting visible for at least 3 statute miles, required for night operations (§ 107.29)." }
    ],
    references: [
      { label: "Operating rules (Subpart B)", cite: "14 CFR §§ 107.23–107.51" },
      { label: "Operations over people (Subpart D)", cite: "14 CFR §§ 107.100–107.145" },
      { label: "Right-of-way (general)", cite: "14 CFR § 91.113" }
    ]
  }
);
