// Lessons 1–4 — foundations: the NAS & rulebook, the two regimes, altitude/position, airspace classes.
// Pushed onto window.COURSE.lessons in order. Loaded after nas-data.js.

window.COURSE.lessons.push(
  // ================================================================ 01
  {
    id: "nas",
    number: "01",
    title: "The System & the Rulebook",
    tagline: "Where drones sit in federal airspace law",
    minutes: 8,
    icon: "globe",
    summary:
      "What the National Airspace System is, the statute that makes airspace federal, and how the CFR parts that govern drones fit together.",
    objectives: [
      "Define the National Airspace System and the FAA's authority over it.",
      "Trace the legal hierarchy from statute (U.S. Code) to regulation (CFR) to guidance.",
      "Name the CFR parts that govern civil small unmanned aircraft.",
      "Distinguish controlled from uncontrolled airspace at a conceptual level."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "THE BIG IDEA",
        heading: "A drone is an aircraft, and the sky it enters is federal.",
        body:
          "The National Airspace System (NAS) is the shared network of airspace, air-navigation facilities, airports, and rules that the FAA administers across the United States, from the surface upward. There is no separate 'drone airspace.' A 249-gram quadcopter at 200 feet occupies the same regulated system as an air-ambulance helicopter or an airliner on approach — and answers, in principle, to the same map.",
        callout: {
          label: "Why it matters",
          text:
            "Because airspace is federal, the ground you launch from tells you almost nothing about whether you may fly. Ownership of the land is not ownership of the air above it."
        }
      },
      {
        kind: "definition",
        eyebrow: "THE ROOT OF THE AUTHORITY",
        heading: "Sovereignty over the airspace is a federal power.",
        term: "49 U.S.C. § 40103 — Sovereignty and use of airspace",
        statement:
          "The United States Government has exclusive sovereignty of the airspace of the United States, and a citizen has a public right of transit through the navigable airspace. Congress charges the FAA Administrator with developing plans and policy for its use and with regulating it to ensure safety and efficiency.",
        cite: "49 U.S.C. § 40103(a)–(b)",
        body:
          "Every drone rule in this course is ultimately an exercise of this statute. It is why local 'drone bans' cannot regulate the airspace itself (though they may regulate land use, privacy, or takeoff/landing on the ground), and why the operative rules are national."
      },
      {
        kind: "table",
        eyebrow: "THE LEGAL HIERARCHY",
        heading: "From statute to the rule you actually follow.",
        body:
          "U.S. aviation law descends through three layers. Knowing which layer a requirement lives in tells you how binding it is and where to verify it.",
        columns: ["Layer", "Example", "Force"],
        rows: [
          ["Statute (U.S. Code)", "49 U.S.C. § 40103; § 44809", "Enacted by Congress — the source authority"],
          ["Regulation (14 CFR)", "Parts 107, 89, 48, 91", "Issued by the FAA; legally binding"],
          ["Guidance", "AC 107-2A; Chart Users' Guide", "Explains and recommends; not itself law"]
        ],
        note: "Verify regulations against the electronic CFR (ecfr.gov); guidance can lag rule changes."
      },
      {
        kind: "options",
        eyebrow: "THE PARTS THAT GOVERN YOU",
        heading: "Four regulations do most of the work.",
        items: [
          {
            tag: "Part 107",
            title: "Small Unmanned Aircraft Systems",
            desc: "The core operating rule for civil drones under 55 lb flown for any non-recreational purpose. Certification, operating limits, airspace, waivers. (14 CFR part 107.)"
          },
          {
            tag: "§ 44809",
            title: "The recreational exception",
            desc: "A statutory carve-out letting hobbyists fly under a shorter list of conditions instead of part 107. Lives in the U.S. Code, not the CFR. (49 U.S.C. § 44809.)"
          },
          {
            tag: "Part 89",
            title: "Remote Identification",
            desc: "Requires most drones to broadcast identity and location — a 'digital license plate.' Applies to both regimes. (14 CFR part 89.)"
          },
          {
            tag: "Part 48",
            title: "Registration",
            desc: "Registration of small unmanned aircraft over 0.55 lb, and marking of the registration number. (14 CFR part 48.)"
          }
        ]
      },
      {
        kind: "concept",
        eyebrow: "THE FIRST FORK",
        heading: "Every parcel of airspace is either controlled or uncontrolled.",
        body:
          "In controlled airspace, an air traffic control service is provided to aircraft; entry by a drone therefore requires prior authorization. In uncontrolled airspace (Class G) no separation service is provided, and no authorization is required to launch — though altitude limits, see-and-avoid duties, and no-fly restrictions still apply. Most recreational flying happens in Class G, but its boundaries are invisible from the ground. Lessons 4 and 5 teach you to see them.",
        callout: {
          label: "Precise language",
          text:
            "'Uncontrolled' describes the absence of an ATC separation service — never the absence of rules. The distinction is about who, if anyone, is actively managing traffic."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "Why 'navigable airspace' matters for low flight.",
        body:
          "Courts have long treated the airspace as navigable where aircraft actually operate, and the FAA asserts authority over the airspace used by UAS down to the surface. This is why there is no clean 'my-backyard-below-X-feet' zone exempt from federal rules — the FAA's operating rules reach the low altitudes where drones fly, even as questions of privacy, trespass, and nuisance remain matters of state and local law.",
        points: [
          "Federal: airspace, operating rules, certification, Remote ID, registration.",
          "State/local: privacy, trespass, harassment, and where you may stand or launch on the ground.",
          "The two layers coexist — complying with one does not excuse the other."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt:
          "A neighbor insists that because they own their land, they control the airspace over it and can bar your drone outright. From a federal-airspace standpoint, are they correct?",
        choices: [
          { text: "Yes — landowners control the airspace above their property.", correct: false, why: "Sovereignty over the airspace is federal (49 U.S.C. § 40103). Land ownership does not confer control of the navigable airspace above it." },
          { text: "No — the airspace is federal; they may have privacy or land-use claims, but not control of the airspace.", correct: true, why: "Correct. The airspace is federal. State/local law may address privacy or where you launch, but the airspace itself is regulated nationally." },
          { text: "Only above 400 ft is the airspace federal.", correct: false, why: "Federal authority is not bounded at 400 ft; the FAA's operating rules reach the low altitudes drones use." }
        ]
      },
      {
        kind: "check",
        prompt: "Where does the recreational exception (§ 44809) live in the legal hierarchy?",
        choices: [
          { text: "It is a section of 14 CFR part 107.", correct: false, why: "It is not in the CFR. § 44809 is a statute in the U.S. Code — the recreational exception exists above the part 107 regulation." },
          { text: "It is a statute in the U.S. Code (Title 49), separate from part 107.", correct: true, why: "Correct. § 44809 is federal statute; part 107 is regulation. They are parallel regimes, not nested." },
          { text: "It is FAA guidance, so it is advisory only.", correct: false, why: "It is binding statute enacted by Congress, not advisory guidance." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "You read online that a city passed an ordinance 'banning all drone flights below 200 feet citywide.' You want to fly a registered drone recreationally in Class G there.",
        question: "How should you treat that ordinance?",
        choices: [
          { text: "It voids federal rules — the city now controls that airspace.", correct: false, why: "A municipality cannot regulate the navigable airspace; that power is federal. It cannot lawfully 'ban' flight in the airspace itself." },
          { text: "The airspace remains federally governed, but the city may lawfully restrict where you launch/land or address privacy — check both.", correct: true, why: "Correct. Federal law governs the airspace; local law may still reach land use and privacy. Comply with both layers." },
          { text: "Ignore it entirely — only the FAA matters.", correct: false, why: "Local land-use and privacy rules can carry real penalties even though they can't regulate the airspace. Don't ignore them." }
        ]
      }
    ],
    terms: [
      { term: "National Airspace System (NAS)", def: "The shared network of airspace, navigation aids, airports, and rules the FAA administers across the U.S., from the surface upward." },
      { term: "Navigable airspace", def: "Airspace at and above the minimum altitudes of flight, including airspace needed for safe takeoff and landing; the FAA asserts UAS authority down to the surface." },
      { term: "Controlled airspace", def: "Airspace (Classes A–E) within which an ATC separation service is provided; UAS entry requires authorization." },
      { term: "Uncontrolled airspace", def: "Class G airspace, where no ATC separation service is provided and no authorization is required to operate." },
      { term: "14 CFR", def: "Title 14 of the Code of Federal Regulations ('Aeronautics and Space') — where FAA regulations, including parts 107, 89, 48, and 91, are codified." }
    ],
    references: [
      { label: "Sovereignty and use of airspace", cite: "49 U.S.C. § 40103" },
      { label: "Small Unmanned Aircraft Systems", cite: "14 CFR part 107" },
      { label: "Advisory Circular — Small UAS", cite: "FAA AC 107-2A" }
    ]
  },

  // ================================================================ 02
  {
    id: "regimes",
    number: "02",
    title: "Two Pathways: § 44809 vs Part 107",
    tagline: "Recreational or certificated — which governs you",
    minutes: 10,
    icon: "book",
    summary:
      "The purpose test that sorts every civil flight into the recreational exception or part 107, and what each demands of the operator.",
    objectives: [
      "Apply the 'purpose' test that selects between § 44809 and part 107.",
      "State the statutory conditions of the recreational exception.",
      "Describe part 107 remote-pilot certification and its recurrency.",
      "Compare the two regimes across credential, registration, and airspace access."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "THE DECIDING QUESTION",
        heading: "Purpose, not equipment, chooses your regime.",
        body:
          "The same drone flown in the same field falls under different law depending on why you fly. If the operation is strictly for personal enjoyment, you may elect the Exception for Limited Recreational Operations (49 U.S.C. § 44809). The moment there is any other purpose — compensation, furthering a business, research, public-safety, or instruction for hire — the flight is governed by 14 CFR part 107 and requires a Remote Pilot Certificate.",
        callout: {
          label: "The bright line",
          text:
            "Recreational = personal enjoyment only. Getting paid, bartering, or advancing a business (even a free favor that promotes one) puts you under part 107 — including 'just this once.'"
        }
      },
      {
        kind: "checklist",
        eyebrow: "THE STATUTE, ITEMIZED",
        heading: "The § 44809 conditions — meet every one, every flight.",
        body:
          "These paraphrase the statutory conditions of the recreational exception. Failing any single one forfeits the exception and exposes the flight to part 107 requirements.",
        items: [
          "Fly strictly for recreational purposes.",
          "Operate in accordance with, or within the programming of, an FAA-recognized community-based organization's safety guidelines.",
          "Keep the aircraft within the visual line of sight of the operator or a co-located visual observer.",
          "Give way to and do not interfere with any manned aircraft.",
          "In controlled airspace, obtain prior authorization (e.g., via LAANC) and comply with its conditions.",
          "In uncontrolled (Class G) airspace, fly at or below 400 ft AGL.",
          "Pass an aeronautical safety test (TRUST) and carry proof; register and mark the aircraft as required.",
          "Have Remote ID as required by part 89, and never operate carelessly or recklessly."
        ]
      },
      {
        kind: "concept",
        eyebrow: "THE OTHER PATH",
        heading: "Part 107 asks more of the operator, and grants more in return.",
        body:
          "Under part 107, the person manipulating the controls must hold, or be directly supervised by someone who holds, a Remote Pilot Certificate. Eligibility (§ 107.61) requires being at least 16, able to read/speak/understand English, in a fit condition to operate safely, and passing an initial aeronautical knowledge test at an FAA-approved center after TSA vetting. Currency is maintained by completing recurrent training every 24 calendar months (§ 107.65). In exchange, part 107 offers structured access to waivers, operations over people, and controlled-airspace authorizations.",
        callout: {
          label: "Currency",
          text:
            "The certificate does not expire, but the privilege to exercise it lapses without recurrent training completed within the preceding 24 calendar months."
        }
      },
      {
        kind: "table",
        eyebrow: "SIDE BY SIDE",
        heading: "How the two regimes compare.",
        columns: ["Dimension", "§ 44809 (recreational)", "Part 107"],
        rows: [
          ["Permitted purpose", "Personal enjoyment only", "Any purpose, incl. commercial"],
          ["Operator credential", "TRUST completion certificate", "Remote Pilot Certificate"],
          ["Knowledge check", "TRUST (cannot fail; teaches)", "Proctored aeronautical knowledge test"],
          ["Recurrency", "None specified", "Recurrent training every 24 cal. months"],
          ["Registration", "Once, covers all your aircraft (>250 g)", "Each aircraft registered (>250 g)"],
          ["Max weight", "< 55 lb", "< 55 lb"],
          ["Controlled airspace", "LAANC / authorization required", "LAANC / authorization required"],
          ["Waivers available", "No (fly within the conditions)", "Yes (Certificate of Waiver, § 107.200)"]
        ]
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "The gray zone: when 'fun' becomes 'furthering a business.'",
        body:
          "The FAA reads 'recreational' narrowly. Posting drone footage to a monetized channel, shooting your own listing as a realtor, gathering data for a class you teach for pay, or flying to demonstrate a product can each cross into a non-recreational purpose even when no cash changes hands for the flight itself. When purpose is ambiguous, the conservative and defensible choice is to operate under part 107.",
        points: [
          "Compensation is sufficient but not necessary to lose the exception.",
          "'In furtherance of a business' captures unpaid but business-advancing flights.",
          "Incidental, genuinely personal footage you happen to share is generally still recreational — intent and context govern."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Which single factor most reliably determines whether § 44809 or part 107 applies?",
        choices: [
          { text: "The weight of the aircraft.", correct: false, why: "Weight affects registration, not which regime applies. Both regimes cover aircraft under 55 lb." },
          { text: "The purpose of the flight.", correct: true, why: "Correct. Purpose is the deciding test: strictly recreational may use § 44809; any other purpose requires part 107." },
          { text: "Whether the flight is in controlled airspace.", correct: false, why: "Controlled airspace requires authorization under both regimes; it doesn't choose between them." }
        ]
      },
      {
        kind: "check",
        prompt: "A part 107 remote pilot passed the initial knowledge test three years ago and has flown regularly but completed no training since. May they legally operate today?",
        choices: [
          { text: "Yes — the certificate never expires.", correct: false, why: "The certificate doesn't expire, but exercising its privileges requires recurrent training within the preceding 24 calendar months (§ 107.65)." },
          { text: "No — recurrent training must have been completed within the preceding 24 calendar months.", correct: true, why: "Correct. Currency lapsed; recurrent training is required every 24 calendar months to keep exercising the privileges." },
          { text: "Yes, if the aircraft is under 250 g.", correct: false, why: "Aircraft weight does not affect the pilot-currency requirement under part 107." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "You normally fly your park for fun under § 44809. A local café offers you a free coffee subscription to post aerial promos of their patio to your social feed.",
        question: "What regime now governs those flights, and what do you need?",
        choices: [
          { text: "Still § 44809 — no money changed hands.", correct: false, why: "The purpose now furthers a business and involves compensation (the subscription). That removes the recreational exception." },
          { text: "Part 107 — the flight furthers a business and is compensated, so a Remote Pilot Certificate is required.", correct: true, why: "Correct. Business-advancing, compensated flight is a part 107 operation requiring certification." },
          { text: "Neither — promotional flights are unregulated.", correct: false, why: "No such exemption exists; commercial promotion falls squarely under part 107." }
        ]
      }
    ],
    terms: [
      { term: "Exception for Limited Recreational Operations", def: "The § 44809 regime permitting flight strictly for personal enjoyment under eight statutory conditions, in lieu of part 107." },
      { term: "Remote Pilot Certificate", def: "The airman certificate (part 107) authorizing non-recreational small-UAS operation; requires passing a knowledge test and recurrent training every 24 months." },
      { term: "TRUST", def: "The Recreational UAS Safety Test — a free, self-teaching test all § 44809 flyers must pass; proof carried during flight." },
      { term: "Community-based organization (CBO)", def: "An FAA-recognized membership organization whose safety guidelines recreational flyers operate within." },
      { term: "Certificate of Waiver", def: "An FAA authorization (§ 107.200) permitting deviation from certain part 107 sections when safety is shown; unavailable under § 44809." }
    ],
    references: [
      { label: "Recreational exception", cite: "49 U.S.C. § 44809" },
      { label: "Applicability & pilot certification", cite: "14 CFR §§ 107.12, 107.61, 107.65" },
      { label: "TRUST", cite: "FAA — The Recreational UAS Safety Test" }
    ]
  },

  // ================================================================ 03
  {
    id: "altitude",
    number: "03",
    title: "Altitude & Position: MSL vs AGL",
    tagline: "The two rulers that don't agree",
    minutes: 8,
    icon: "gauge",
    summary:
      "Why airspace is charted in feet above sea level but your limit is measured above the ground — and how to reconcile them at a real site.",
    objectives: [
      "Define MSL and AGL and explain why both are used.",
      "State the part 107 altitude limit and its structure exception.",
      "Convert between a charted MSL floor and a local AGL height.",
      "Diagnose whether a given altitude places you in controlled or uncontrolled airspace."
    ],
    screens: [
      {
        kind: "definition",
        eyebrow: "TWO REFERENCE DATUMS",
        heading: "The same point in the sky has two altitudes.",
        term: "MSL vs AGL",
        statement:
          "Mean Sea Level (MSL) altitude is measured from the average level of the sea — a fixed, global datum. Above Ground Level (AGL) altitude is measured from the terrain directly beneath the aircraft — a datum that rises and falls with the land.",
        cite: "FAA Pilot's Handbook of Aeronautical Knowledge",
        body:
          "A drone hovering at one spot has a single MSL altitude but its AGL height changes if it flies over a hill. Charts and ATC speak MSL because it is unambiguous nationwide; drone limits are written AGL because what matters near the ground is clearance from the terrain and obstacles."
      },
      {
        kind: "concept",
        eyebrow: "YOUR CEILING",
        heading: "400 feet above the ground — with one deliberate exception.",
        body:
          "Part 107 limits a small unmanned aircraft to 400 ft AGL, unless it is within a 400-foot radius of a structure, in which case it may fly up to 400 ft above that structure's uppermost limit (§ 107.51(b)). This exception exists so towers, wind turbines, and tall buildings can be inspected close-in. The recreational exception likewise caps uncontrolled-airspace flight at 400 ft AGL. In controlled airspace, your ceiling is instead the altitude your authorization grants — often far below 400 ft.",
        callout: {
          label: "Careful",
          text:
            "The structure exception is not a license to climb anywhere near a tall building. You must stay within 400 ft laterally of the structure AND within 400 ft above its top."
        }
      },
      {
        kind: "concept",
        eyebrow: "RECONCILING THE RULERS",
        heading: "Reading a chart floor at your actual site.",
        body:
          "Suppose the sectional shows Class E beginning at 700 ft AGL over your field — that floor is already in AGL, so anything you fly at or below 400 ft AGL is comfortably beneath it, in Class G. But when a floor is given in MSL (say a shelf at '4,000 MSL'), you must subtract your field's ground elevation to see it in AGL. If your ground elevation is 1,200 ft MSL, that 4,000 MSL shelf sits 2,800 ft above you — irrelevant to a 400 ft flight. The habit: get every relevant number into the same datum before you judge it.",
        callout: {
          label: "Worked example",
          text:
            "Field elevation 1,200 ft MSL; charted Class C shelf floor 4,000 ft MSL. Shelf floor AGL = 4,000 − 1,200 = 2,800 ft AGL. Your 400 ft AGL flight is well below it."
        }
      },
      {
        kind: "table",
        eyebrow: "QUICK CONVERSIONS",
        heading: "MSL ⇄ AGL at three sites.",
        body: "AGL height = MSL altitude − ground elevation (MSL). The same 400 ft AGL flight is a different MSL number at every site.",
        columns: ["Ground elev. (MSL)", "You at 400 ft AGL", "A 2,700 MSL charted floor, in AGL"],
        rows: [
          ["50 ft (coastal)", "450 ft MSL", "2,650 ft AGL"],
          ["1,200 ft (piedmont)", "1,600 ft MSL", "1,500 ft AGL"],
          ["5,280 ft (Denver)", "5,680 ft MSL", "Below you — floor is under the surface here"]
        ],
        note: "The last row shows why datum matters: a low MSL floor can sit at or below high terrain."
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "How your drone even knows its height.",
        body:
          "Consumer drones estimate height above the takeoff point using a barometric altimeter (pressure) fused with GPS and, close in, downward vision or ultrasonic sensors. This is height above the launch point, not true AGL over distant terrain and not MSL. Flying toward rising ground can silently erode your real terrain clearance even as the app shows a steady number.",
        points: [
          "App 'height' ≈ height above the takeoff point, not AGL over the terrain ahead.",
          "Barometric drift and GPS error mean the displayed number is an estimate.",
          "Over rising terrain, maintain a mental margin — the ground can come up to meet you."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Your field elevation is 900 ft MSL. A charted Class E floor over you reads 1,600 ft MSL. In AGL, how high is that floor, and can you fly at 400 ft AGL beneath it?",
        choices: [
          { text: "700 ft AGL — yes, 400 ft AGL is beneath it (Class G below).", correct: true, why: "Correct. 1,600 − 900 = 700 ft AGL. At 400 ft AGL you're below the Class E floor, in Class G." },
          { text: "1,600 ft AGL — no, you'd be above it.", correct: false, why: "You forgot to subtract ground elevation. 1,600 MSL − 900 MSL = 700 ft AGL." },
          { text: "You can't tell without ATC.", correct: false, why: "You can compute it directly: charted MSL floor minus field elevation gives the AGL floor." }
        ]
      },
      {
        kind: "check",
        prompt: "When may a part 107 operation exceed 400 ft AGL?",
        choices: [
          { text: "Never.", correct: false, why: "There is a structure exception — flight above 400 ft AGL is allowed close to a structure under specific limits." },
          { text: "Within 400 ft of a structure, up to 400 ft above that structure's top.", correct: true, why: "Correct. § 107.51(b) permits this for close-in inspection of tall structures." },
          { text: "Any time visibility exceeds 3 miles.", correct: false, why: "Visibility is a separate requirement and does not lift the altitude limit." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "You launch from a valley and fly level 'at 350 ft' toward a ridge that rises 300 ft above your launch point. Your app still reads 350 ft.",
        question: "What is the real risk here?",
        choices: [
          { text: "None — 350 ft is under 400 ft, so you're fine.", correct: false, why: "The app shows height above takeoff, not AGL over the ridge. Your true clearance above the rising ground is shrinking." },
          { text: "Your true terrain clearance is only ~50 ft as the ground rises — a controlled-flight-into-terrain risk.", correct: true, why: "Correct. 350 ft above launch minus 300 ft of terrain rise ≈ 50 ft AGL over the ridge. Datum confusion becomes a real hazard." },
          { text: "You've exceeded 400 ft AGL.", correct: false, why: "You haven't exceeded the ceiling; the hazard is loss of terrain clearance, not the altitude limit." }
        ]
      }
    ],
    terms: [
      { term: "MSL (Mean Sea Level)", def: "Altitude measured from the average sea surface — a fixed datum used for charts and ATC." },
      { term: "AGL (Above Ground Level)", def: "Height measured from the terrain directly below the aircraft; the datum for drone altitude limits." },
      { term: "Field/ground elevation", def: "The terrain's height in MSL at a given point; subtract it from a charted MSL figure to get AGL." },
      { term: "Structure exception", def: "§ 107.51(b) allowance to fly above 400 ft AGL when within 400 ft of a structure and no more than 400 ft above its top." },
      { term: "Barometric altimeter", def: "A pressure-based height sensor; on drones it estimates height above the launch point, not true AGL or MSL." }
    ],
    references: [
      { label: "Operating limitations (altitude, visibility)", cite: "14 CFR § 107.51" },
      { label: "Altitude & datums", cite: "FAA Pilot's Handbook of Aeronautical Knowledge, ch. 7" }
    ]
  },

  // ================================================================ 04
  {
    id: "classes",
    number: "04",
    title: "Airspace Classes A–G",
    tagline: "The invisible architecture overhead",
    minutes: 12,
    icon: "layers",
    summary:
      "The six classes of U.S. airspace with their real dimensions, who controls them, and which demand authorization before a drone may enter.",
    objectives: [
      "Describe the lateral and vertical dimensions of Classes A–G.",
      "Identify, for each class, whether UAS authorization is required.",
      "Explain the 'inverted wedding cake' geometry of Class B and C.",
      "Relate the classes to the see-and-avoid environment a drone shares."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "THE ALPHABET OF THE SKY",
        heading: "Six lettered classes, from the busiest to the open.",
        body:
          "U.S. airspace is divided into classes A through G (there is no F in the U.S.). The earlier the letter, generally the busier and more tightly controlled the airspace. As a small-UAS operator you will spend nearly all your time in Class G and the lower reaches of Class E, but you must recognize the controlled classes the instant a chart shows them, because entering any of them with a drone requires authorization.",
        callout: {
          label: "The one that's free",
          text:
            "Only Class G requires no ATC authorization for a drone. Classes B, C, D, and surface-based E all require it. Class A is moot — it starts at 18,000 ft MSL."
        }
      },
      {
        kind: "airspace-explorer",
        eyebrow: "INTERACTIVE · SELECT A LAYER",
        heading: "Explore the structure.",
        body:
          "Switch between the cross-section ('inverted wedding cake'), the stacked-layer list, and a top-down plan view. Select any layer to see who controls it, its dimensions, and whether you may fly there."
      },
      {
        kind: "table",
        eyebrow: "DIMENSIONS AT A GLANCE",
        heading: "What each class actually looks like.",
        body:
          "Typical figures — individual airspace is tailored and charted precisely. 'Above airport elevation' means the ceiling is referenced to the field, though charted in MSL.",
        columns: ["Class", "Typical extent", "Control / entry", "UAS auth?"],
        rows: [
          ["A", "18,000 ft MSL → FL600", "IFR only; ATC clearance", "N/A (out of reach)"],
          ["B", "Surface → ~10,000 ft MSL; tiered rings", "Busiest hubs; ATC clearance", "Yes"],
          ["C", "Surface → ~4,000 ft above field; 5 & 10 NM rings", "Radar service; two-way comms", "Yes"],
          ["D", "Surface → ~2,500 ft above field; ~4 NM", "Towered airport", "Yes"],
          ["E", "Controlled airspace not A–D; floor SFC / 700 / 1,200 AGL", "Controlled, no dedicated tower zone", "Only where it meets the surface"],
          ["G", "Surface → base of overlying E", "Uncontrolled", "No"]
        ]
      },
      {
        kind: "concept",
        eyebrow: "THE WEDDING-CAKE GEOMETRY",
        heading: "Why Class B and C look like upside-down cakes.",
        body:
          "Class B and Class C aren't cylinders — they're stacked shelves that widen with altitude, like an inverted wedding cake. Near the primary airport the controlled airspace reaches the surface; farther out, only the higher shelves are controlled, leaving uncontrolled air beneath them. This is deliberate: it protects arriving and departing traffic where it descends toward the runway while freeing the low airspace farther out. For a drone, it means your authorization requirement can depend on exactly which shelf you're under and how high you intend to go.",
        callout: {
          label: "Consequence",
          text:
            "You can be inside the lateral ring of a Class C on the chart yet beneath a shelf that starts at 1,200 ft — in Class G below it. Read the floor, not just the ring."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "Where the crewed traffic actually is.",
        body:
          "The classes exist to separate crewed aircraft, and knowing their habits sharpens your see-and-avoid. Near Class D and C surface areas, expect traffic in the pattern at 600–1,500 ft AGL and on final approach descending through your altitudes. Helicopters, agricultural aircraft, and medical flights routinely operate low and outside any towered airspace — precisely where drones fly. Class E to the surface exists to protect instrument approaches in poor weather, when you shouldn't be flying anyway.",
        points: [
          "Traffic patterns: typically 600–1,500 ft AGL near towered fields.",
          "Low crewed traffic (helicopters, ag, EMS) can appear anywhere, including Class G.",
          "Surface Class E flags an instrument approach corridor — treat it with respect."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Which class of airspace requires NO ATC authorization for a small UAS?",
        choices: [
          { text: "Class C", correct: false, why: "Class C is controlled; a drone needs authorization to operate there." },
          { text: "Class G", correct: true, why: "Correct. Class G is uncontrolled — no authorization required (though altitude and other limits still apply)." },
          { text: "Surface Class E", correct: false, why: "Class E that reaches the surface is controlled; authorization is required." }
        ]
      },
      {
        kind: "check",
        prompt: "Class C airspace is best described geometrically as…",
        choices: [
          { text: "A single cylinder from the surface up.", correct: false, why: "It's tiered, not a single cylinder — an inner surface core plus a wider shelf above." },
          { text: "An inverted wedding cake: a surface core plus a wider shelf whose floor is above the ground.", correct: true, why: "Correct. Typically a 5 NM surface core and a 10 NM shelf from ~1,200 to ~4,000 ft above the field." },
          { text: "Airspace that starts at 18,000 ft.", correct: false, why: "That's Class A. Class C surrounds mid-size radar-served airports from the surface." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "Your site is under the outer shelf of a Class C. The chart shows that shelf's floor at 1,700 ft MSL; your field elevation is 500 ft MSL. You intend to fly at 350 ft AGL.",
        question: "Do you need Class C authorization to fly at 350 ft here?",
        choices: [
          { text: "Yes — you're inside the Class C ring on the chart.", correct: false, why: "Being under the shelf laterally isn't the same as being in it. The shelf floor is 1,700 − 500 = 1,200 ft AGL; below it is Class G." },
          { text: "No — the shelf floor is 1,200 ft AGL, so at 350 ft you're in Class G beneath it.", correct: true, why: "Correct. 1,700 MSL − 500 MSL = 1,200 ft AGL floor. At 350 ft AGL you're under the shelf, in uncontrolled airspace." },
          { text: "Only if the drone is over 250 g.", correct: false, why: "Authorization depends on the airspace, not the aircraft's weight." }
        ]
      }
    ],
    terms: [
      { term: "Class A", def: "18,000 ft MSL to FL600; instrument flight only; beyond small-UAS reach." },
      { term: "Class B", def: "Airspace around the busiest airports, surface to ~10,000 ft MSL, tiered like an inverted wedding cake; ATC clearance required." },
      { term: "Class C", def: "Radar-served mid-size airports; surface core (~5 NM) plus a shelf (~10 NM) from ~1,200 to ~4,000 ft above the field." },
      { term: "Class D", def: "Airspace around a towered airport, surface to ~2,500 ft above the field, roughly 4 NM radius." },
      { term: "Class E", def: "Controlled airspace that is not A–D; floors at the surface, 700 ft AGL, or 1,200 ft AGL. UAS authorization needed only where it meets the surface." },
      { term: "Class G", def: "Uncontrolled airspace from the surface up to the base of overlying Class E; no authorization required." }
    ],
    references: [
      { label: "Airspace designations & classes", cite: "14 CFR part 71" },
      { label: "Airspace overview", cite: "FAA Aeronautical Information Manual, ch. 3" },
      { label: "UAS in controlled airspace", cite: "14 CFR § 107.41; 49 U.S.C. § 44809(a)(4)" }
    ]
  }
);
