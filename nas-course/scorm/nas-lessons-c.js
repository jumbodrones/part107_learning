// Lessons 9–11 — restrictions, the frontier (waivers/BVLOS/part 108), and the capstone decision.
// Pushed onto window.COURSE.lessons in order. Loaded after nas-lessons-b.js.

window.COURSE.lessons.push(
  // ================================================================ 09
  {
    id: "nofly",
    number: "09",
    title: "Restrictions, TFRs & NOTAMs",
    tagline: "Closures no authorization will open",
    minutes: 10,
    icon: "ban",
    summary:
      "The second layer of the map: temporary flight restrictions, special-use airspace, national-security areas, and land-use bans that close a site regardless of its airspace class.",
    objectives: [
      "Distinguish airspace class from access restrictions layered on top of it.",
      "Identify TFR types and the standing stadium and DC restrictions.",
      "Read special-use airspace (P/R/W/MOA/Alert) on the chart.",
      "Incorporate NOTAM and land-use checks into preflight."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "A DIFFERENT KIND OF LIMIT",
        heading: "Some places are closed no matter what the class is.",
        body:
          "Airspace class answers 'do I need authorization?' A separate layer answers 'is this place open at all right now?' A field can sit in wide-open Class G and still be illegal to fly today because of a temporary restriction, a security rule, or a land-use ban. These restrictions are not lifted by LAANC or any authorization — checking for them is its own, non-negotiable preflight step.",
        callout: {
          label: "Timing matters",
          text:
            "Check TFRs and NOTAMs the day of, and again shortly before, flight. Wildfire and VIP-movement TFRs can appear with only hours of notice."
        }
      },
      {
        kind: "categories",
        eyebrow: "TEMPORARY & STANDING CLOSURES",
        heading: "The closures you must screen for.",
        items: [
          { code: "TFR", title: "Temporary Flight Restrictions", desc: "Issued by NOTAM for wildfires, disasters, VIP movement, and major events (§§ 91.137–91.145). They override airspace class and apply at all altitudes within their bounds." },
          { code: "STAD", title: "Stadium restriction", desc: "A standing TFR (FDC NOTAM under § 91.145) bars UAS within 3 NM of stadiums seating 30,000+, from 1 hour before to 1 hour after events." },
          { code: "DC", title: "Washington, DC SFRA", desc: "A 30-NM Special Flight Rules Area rings the capital; drones are effectively banned within the inner 15-NM Flight Restricted Zone — the most restricted airspace in the country." },
          { code: "NSUFR", title: "National-security restrictions", desc: "Standing FAA UAS-specific restrictions (§ 99.7) protect designated military, intelligence, and infrastructure sites — often depicted in FAA apps and NOTAMs." }
        ]
      },
      {
        kind: "table",
        eyebrow: "SPECIAL-USE AIRSPACE",
        heading: "The blue-hatched areas on the chart.",
        body: "Special-use airspace is charted with blue hatched borders and a letter-number designator. Treat all as no-go unless you have positively confirmed otherwise.",
        columns: ["Type", "Designator", "Meaning"],
        rows: [
          ["Prohibited", "P-", "Flight banned entirely (e.g., over sensitive national sites)."],
          ["Restricted", "R-", "Hazardous activity (e.g., artillery); dangerous when 'hot.'"],
          ["Warning", "W-", "Like restricted, but over international waters."],
          ["MOA", "named", "Military Operations Area — high-energy military maneuvering."],
          ["Alert", "A-", "High volume of pilot training or unusual activity."]
        ]
      },
      {
        kind: "concept",
        eyebrow: "LAND, NOT AIRSPACE",
        heading: "Some bans govern the ground you stand on.",
        body:
          "The National Park Service prohibits launching, landing, or operating drones from within nearly all national parks — a land-use rule, not an airspace rule, so clear airspace overhead does not lift it. Many states, municipalities, and agencies impose comparable restrictions on takeoff and landing from their lands. Because these are ground-use rules, they can coexist with perfectly legal airspace and are easy to miss if you only check an airspace app.",
        callout: {
          label: "Bottom line",
          text:
            "If any check surfaces a TFR, a hatched special-use area, a security restriction, or a park/land-use ban over your spot — choose a different site. No authorization overrides these."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "DEEP DIVE · OPTIONAL",
        heading: "What a NOTAM is, and how to read the system.",
        body:
          "A NOTAM (Notice to Air Missions) is the FAA's mechanism for time-critical airspace information. TFRs are distributed as NOTAMs; so are many restrictions relevant to UAS. Screening them is part of the preflight duty to be informed (§ 107.49 for part 107; the 'do not endanger' duty for recreational flyers).",
        points: [
          "FDC NOTAMs carry regulatory restrictions (including TFRs); check the graphic TFR list.",
          "Airspace apps summarize NOTAMs but are derived products — verify against FAA sources for anything ambiguous.",
          "A clean airspace app does not equal a clean NOTAM check — screen both.",
          "Recheck close to launch: the picture changes intraday."
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "It's game day: a 40,000-seat stadium is 2 NM away, kickoff in 30 minutes, and your launch site is in open Class G. May you fly?",
        choices: [
          { text: "Yes — you're in uncontrolled Class G.", correct: false, why: "The stadium TFR (§ 91.145) overrides class: within 3 NM, 1 hour before to 1 hour after, UAS flight is prohibited at all altitudes." },
          { text: "No — the stadium TFR covers 3 NM around the event and you're inside it.", correct: true, why: "Correct. You're within 3 NM during the restricted window. Class G is irrelevant, and LAANC won't open it." },
          { text: "Yes, if you stay under 100 ft.", correct: false, why: "TFRs apply at all altitudes; flying low does not exempt you." }
        ]
      },
      {
        kind: "check",
        prompt: "On the chart you find a blue hatched border labeled 'R-2503.' As a recreational flyer, how should you treat it?",
        choices: [
          { text: "Ignore it — restricted areas only affect the military.", correct: false, why: "Restricted areas can be hazardous to any aircraft when active ('hot'); they are not for you to enter on assumption." },
          { text: "Treat it as no-go unless you've positively confirmed it's cold and entry is permitted.", correct: true, why: "Correct. R- areas involve hazardous activity; default to no-go and verify status before considering entry." },
          { text: "Enter freely below 400 ft.", correct: false, why: "Altitude doesn't exempt you from restricted-area hazards or rules." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "On vacation you hike to an overlook inside a national park. Your airspace app shows wide-open Class G and no TFRs. You want an aerial photo.",
        question: "May you launch from the overlook?",
        choices: [
          { text: "Yes — the airspace is clear and there's no TFR.", correct: false, why: "Airspace being clear is not the issue; the NPS separately bans operating drones from park land." },
          { text: "No — the National Park Service prohibits launching, landing, or operating drones on park land.", correct: true, why: "Correct. This is a land-use rule independent of airspace; clear air overhead does not override it." },
          { text: "Yes, if you launch just outside and fly in.", correct: false, why: "Operating over the park still violates the NPS rule, and it destroys your VLOS besides." }
        ]
      }
    ],
    terms: [
      { term: "TFR (Temporary Flight Restriction)", def: "A NOTAM-issued restriction closing airspace for events, hazards, or security (§§ 91.137–91.145); overrides airspace class." },
      { term: "NOTAM", def: "Notice to Air Missions — the FAA channel for time-critical airspace information, including TFRs." },
      { term: "SFRA / FRZ", def: "The Washington, DC Special Flight Rules Area and inner Flight Restricted Zone; the most restricted airspace in the U.S." },
      { term: "Special-use airspace", def: "Prohibited (P-), Restricted (R-), Warning (W-), MOA, and Alert areas — blue-hatched on the chart." },
      { term: "NPS drone ban", def: "The National Park Service land-use prohibition on launching, landing, or operating drones within national parks." }
    ],
    references: [
      { label: "Temporary flight restrictions", cite: "14 CFR §§ 91.137–91.145" },
      { label: "Security UAS flight restrictions", cite: "14 CFR § 99.7" },
      { label: "Preflight familiarization", cite: "14 CFR § 107.49" }
    ]
  },

  // ================================================================ 10
  {
    id: "waivers",
    number: "10",
    title: "Waivers, BVLOS & Part 108",
    tagline: "The edge of what's routine",
    minutes: 9,
    icon: "broadcast",
    summary:
      "How part 107 operations exceed the standard limits today through Certificates of Waiver, and the proposed part 108 framework that would normalize beyond-line-of-sight flight.",
    objectives: [
      "Explain the Certificate of Waiver mechanism and which sections are waivable.",
      "Describe how BVLOS is authorized under the current rules.",
      "Summarize the structure and status of the proposed part 108.",
      "Situate detect-and-avoid, UTM, and electronic conspicuity in the emerging system."
    ],
    screens: [
      {
        kind: "definition",
        eyebrow: "STRETCHING THE RULES, SAFELY",
        heading: "A waiver is permission to deviate — on a showing of safety.",
        term: "Certificate of Waiver (§ 107.200)",
        statement:
          "The FAA may issue a certificate of waiver authorizing a deviation from certain part 107 operating rules if the applicant demonstrates that the proposed operation can be conducted safely under the terms of the certificate.",
        cite: "14 CFR §§ 107.200, 107.205",
        body:
          "Waivers are a part 107 instrument only — the recreational exception has no analogue. Applications are made through FAA DroneZone and can take weeks to months; the FAA attaches conditions tailored to the risk."
      },
      {
        kind: "table",
        eyebrow: "WHAT CAN BE WAIVED",
        heading: "Common waivable sections (§ 107.205).",
        columns: ["Section", "Rule", "Typical use of a waiver"],
        rows: [
          ["§ 107.31", "Visual line of sight", "Beyond-line-of-sight operations"],
          ["§ 107.35", "One aircraft per operator", "Swarm / one-to-many operations"],
          ["§ 107.37", "Yielding / right of way", "Specialized deconflicted operations"],
          ["§ 107.39", "Operations over people", "Sustained flight over crowds"],
          ["§ 107.51", "Altitude, speed, visibility", "Higher, faster, or lower-visibility ops"]
        ],
        note: "§ 107.29 (night) was formerly a top waiver need; the 2021 rule made compliant night flight routine without one."
      },
      {
        kind: "concept",
        eyebrow: "BVLOS TODAY",
        heading: "Beyond line of sight is possible now — one approval at a time.",
        body:
          "Because § 107.31 requires visual line of sight, any true beyond-visual-line-of-sight (BVLOS) operation currently requires a waiver, granted case-by-case for specific missions, areas, and procedures. This works but does not scale: infrastructure inspection, delivery, and large-area survey each need their own approval, built largely from scratch. The regulatory answer to that friction is a new, dedicated rule.",
        callout: {
          label: "Key distinction",
          text:
            "Part 107 puts the remote pilot at the center of safety via VLOS. BVLOS shifts the safety case onto systems and procedures — a fundamentally different model that a waiver can only approximate."
        }
      },
      {
        kind: "deepdive",
        eyebrow: "THE PROPOSED FRAMEWORK · PART 108",
        heading: "Normalizing routine BVLOS — a rule in progress.",
        body:
          "The FAA has proposed a new 14 CFR part 108 to move BVLOS from one-off waivers to a standardized, performance-based framework. As of mid-2026 it remains a proposed rule: the Notice of Proposed Rulemaking published in 2025 and the comment period ran into early 2026; a final, effective rule had not yet issued. Until it does, BVLOS still runs on part 107 waivers. Study it as the shape of what's coming, not as current law.",
        points: [
          "Two tiers of authorization: 'permitted' (lower-risk, self-certified to standards) and an operational certificate (higher-risk, program oversight).",
          "Risk categories keyed to population density beneath the operation.",
          "Aircraft up to ~1,320 lb, with detect-and-avoid, Remote ID, and continuous tracking.",
          "'Shielded' operations near structures, and integration with UAS traffic management (UTM) service providers.",
          "Proposed right-of-way changes tied to electronic conspicuity (ADS-B or alternatives) — among the most debated provisions."
        ]
      },
      {
        kind: "options",
        eyebrow: "THE ENABLING TECHNOLOGIES",
        heading: "What routine BVLOS assumes.",
        items: [
          { tag: "DAA", title: "Detect and avoid", desc: "Onboard or ground systems that sense and separate from other traffic in place of the pilot's eyes — the technical crux of BVLOS." },
          { tag: "UTM", title: "UAS traffic management", desc: "A layer of third-party services (proposed part 146) coordinating drone traffic, deconfliction, and airspace access at low altitude." },
          { tag: "EC", title: "Electronic conspicuity", desc: "Making aircraft electronically visible to one another — via Remote ID for drones, and ADS-B or alternatives for crewed traffic." }
        ]
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "A commercial operator wants to inspect 12 miles of power line beyond visual range today. What is the lawful path under current rules?",
        choices: [
          { text: "Just fly it — BVLOS is allowed under part 107 by default.", correct: false, why: "§ 107.31 requires VLOS; BVLOS is not permitted by default. It needs authorization." },
          { text: "Obtain a part 107 waiver of § 107.31 (VLOS) for the specific operation.", correct: true, why: "Correct. BVLOS currently requires a Certificate of Waiver of the VLOS rule, granted case-by-case (§§ 107.200/205)." },
          { text: "Wait for part 108 — it's the only legal route.", correct: false, why: "Part 108 isn't final; the available route today is a § 107.31 waiver." }
        ]
      },
      {
        kind: "check",
        prompt: "As of mid-2026, the status of 14 CFR part 108 is best described as…",
        choices: [
          { text: "A final, effective rule governing BVLOS.", correct: false, why: "It had not been finalized; it remained at the proposed-rule stage." },
          { text: "A proposed rule (NPRM) not yet in effect; BVLOS still needs a part 107 waiver.", correct: true, why: "Correct. The NPRM published in 2025 with comments into early 2026; until a final rule issues, waivers remain the path." },
          { text: "An advisory circular with no legal weight.", correct: false, why: "It is a rulemaking (proposed regulation), not an advisory circular." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "A recreational flyer wants to fly beyond line of sight over a sparsely populated area 'since no one's around.'",
        question: "Can they do this under § 44809?",
        choices: [
          { text: "Yes — sparse population makes BVLOS fine recreationally.", correct: false, why: "§ 44809 mandates VLOS and offers no waiver mechanism; population density doesn't change that." },
          { text: "No — the recreational exception requires VLOS and has no waiver path; BVLOS would require operating under part 107 with a waiver.", correct: true, why: "Correct. Recreational operations must maintain VLOS and cannot be waived. BVLOS requires the part 107 waiver route." },
          { text: "Yes, if the drone is under 250 g.", correct: false, why: "Weight is irrelevant to the VLOS requirement; sub-250 g recreational flights still must keep VLOS." }
        ]
      }
    ],
    terms: [
      { term: "Certificate of Waiver", def: "FAA authorization (§ 107.200) to deviate from specified part 107 rules on a demonstration of safety." },
      { term: "BVLOS", def: "Beyond visual line of sight — operations where the aircraft is not kept in unaided sight; currently requires a waiver." },
      { term: "Part 108 (proposed)", def: "A proposed rule to normalize routine BVLOS via performance-based tiers and risk categories; not final as of mid-2026." },
      { term: "Detect and avoid (DAA)", def: "Systems that sense and separate from other traffic in place of the pilot's eyes — central to BVLOS safety." },
      { term: "UTM", def: "UAS Traffic Management — a services layer coordinating low-altitude drone traffic and airspace access." },
      { term: "Electronic conspicuity", def: "Making aircraft electronically detectable to one another (Remote ID for UAS; ADS-B or alternatives for crewed aircraft)." }
    ],
    references: [
      { label: "Waivers", cite: "14 CFR §§ 107.200, 107.205" },
      { label: "Proposed BVLOS rule", cite: "NPRM, Normalizing UAS BVLOS Operations (2025)" },
      { label: "Waiver applications", cite: "FAA DroneZone" }
    ]
  },

  // ================================================================ 11
  {
    id: "flycheck",
    number: "11",
    title: "The Preflight Decision",
    tagline: "Putting the whole course to work",
    minutes: 8,
    icon: "pin",
    summary:
      "A structured aeronautical decision-making routine — and a hands-on tool to practice the go/no-go call on realistic sites.",
    objectives: [
      "Execute a systematic preflight assessment in a fixed order.",
      "Integrate airspace, authorization, restrictions, environment, and equipment into one decision.",
      "Apply risk-management judgment beyond the binary legal test.",
      "Reach a defensible go/no-go call and document the basis."
    ],
    screens: [
      {
        kind: "concept",
        eyebrow: "FROM RULES TO A ROUTINE",
        heading: "Every flight resolves to the same ordered questions.",
        body:
          "You now hold the pieces; the skill is assembling them the same way every time so nothing is skipped under time pressure. Aeronautical decision-making is deliberately systematic: you work a fixed sequence, and any single 'no-go' answer stops the launch until it's resolved. The legal test — class, authorization, restrictions — is necessary but not sufficient; a lawful flight can still be a bad idea in 25-knot gusts near a school at dusk.",
        callout: {
          label: "Discipline over instinct",
          text:
            "The value of a checklist is that it works when you're rushed, distracted, or excited about the shot. Run it every time — especially when you're sure you don't need to."
        }
      },
      {
        kind: "checklist",
        eyebrow: "THE PREFLIGHT SEQUENCE",
        heading: "Work it in order, every launch.",
        body:
          "A practical synthesis of §§ 107.49 (preflight familiarization) and the recreational conditions, plus sound risk management. Any 'no' halts the launch.",
        items: [
          "Airspace: What class am I in at my intended altitude? (Chart / app + MSL→AGL check.)",
          "Authorization: If controlled, do I hold LAANC/authorization for this altitude and time?",
          "Restrictions: Any TFRs, special-use, security, or NOTAMs affecting this spot right now?",
          "Land use: Am I permitted to launch, land, and operate from this ground (parks, private, local law)?",
          "Environment: Wind, gusts, visibility, precipitation, light, and obstacles — within my and the aircraft's limits?",
          "Aircraft & compliance: Registered/marked, Remote ID active, batteries and firmware good, VO if needed?",
          "People: Can I avoid sustained flight over uninvolved people and moving vehicles?",
          "Contingency: Do I know my failsafe, return-to-home, and what I'll do if a crewed aircraft appears?"
        ]
      },
      {
        kind: "flycheck",
        eyebrow: "INTERACTIVE · SELECT A SITE",
        heading: "Make the call yourself.",
        body:
          "Choose a location. The tool surfaces what a real preflight check would reveal — then you decide go or no-go and see the reasoning, with the controlling rule."
      }
    ],
    questions: [
      {
        kind: "check",
        prompt: "Your check returns: Class G, no authorization needed, no TFRs or NOTAMs, permitted land, calm wind, good light. What's the call?",
        choices: [
          { text: "No-go — there's always a reason not to fly.", correct: false, why: "When every item clears, you're clear to fly (within 400 ft AGL, VLOS, and see-and-avoid). Excess caution isn't judgment." },
          { text: "Go — all items clear, so conduct a normal operation within the standing limits.", correct: true, why: "Correct. Class G, no authorization required, no restrictions, safe environment: proceed within the operating limits." },
          { text: "Go, but file with the FAA first.", correct: false, why: "Class G requires no filing; a clean check is your green light." }
        ]
      },
      {
        kind: "check",
        prompt: "The site is lawful in every respect, but a steady 24-knot wind is gusting to 32. Your aircraft is rated to ~22 knots. What does good ADM say?",
        choices: [
          { text: "Fly — it's legal, so it's fine.", correct: false, why: "Legality is necessary, not sufficient. Exceeding the aircraft's wind capability invites loss of control and flyaway." },
          { text: "No-go on environmental grounds — wind exceeds the aircraft's capability, regardless of legality.", correct: true, why: "Correct. Risk management can veto a legal flight. Winds beyond the aircraft's limits are a no-go." },
          { text: "Fly, but stay under 50 ft.", correct: false, why: "Gusts aloft don't vanish at low altitude; the aircraft is still over its wind rating." }
        ]
      },
      {
        kind: "scenario",
        setup:
          "Your check returns: Class D (LAANC ceiling 200 ft), no TFRs, permitted land, good weather. You want to fly at 150 ft.",
        question: "What's the correct sequence?",
        choices: [
          { text: "Just fly — 150 ft is under the 200 ft ceiling.", correct: false, why: "Class D is controlled; you must hold the authorization in hand before launch, even below the ceiling." },
          { text: "Request LAANC authorization at 150 ft, confirm the approval, then launch.", correct: true, why: "Correct. Controlled airspace requires authorization first — request at/below the ceiling, confirm, then fly." },
          { text: "Fly at 400 ft since no TFR is active.", correct: false, why: "The 200 ft ceiling binds, and you still need authorization; TFR status doesn't change either." }
        ]
      }
    ],
    terms: [
      { term: "Aeronautical decision-making (ADM)", def: "A systematic approach to consistently determining the best course of action in response to a given set of flight circumstances." },
      { term: "Preflight familiarization", def: "The § 107.49 duty to assess the operating area, airspace, weather, and aircraft before flight." },
      { term: "Go/no-go decision", def: "The final launch decision; any single unresolved 'no' on the preflight sequence halts it." },
      { term: "Failsafe / return-to-home", def: "Automatic behavior on signal loss or low battery; knowing its configuration is part of contingency planning." }
    ],
    references: [
      { label: "Preflight familiarization & inspection", cite: "14 CFR § 107.49" },
      { label: "Aeronautical decision-making", cite: "FAA Pilot's Handbook of Aeronautical Knowledge, ch. 2" },
      { label: "Small UAS guidance", cite: "FAA AC 107-2A" }
    ]
  }
);
