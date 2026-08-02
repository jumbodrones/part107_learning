// FAA Part 107 Safety Course — content
// Sources:
//  - FAA Summary of Small Unmanned Aircraft Rule (Part 107), June 21, 2016
//  - Operations of Small Unmanned Aircraft Systems Over People final rule (effective April 21, 2021)
//  - Remote ID of Unmanned Aircraft final rule (operational compliance Sept 16, 2023)
//  - Updated knowledge testing & recurrent training requirements (April 6, 2021)

window.COURSE = {
  title: "Part 107 Safety Essentials",
  subtitle: "A focused review of the FAA's most safety-critical small UAS rules",
  estimatedMinutes: 28,
  passingScore: 0.8,
  updatedNote: "Updated for the 2021 Operations Over People & Night rules and the 2023 Remote ID requirement.",

  lessons: [
    {
      id: "vlos",
      number: "01",
      title: "Visual Line of Sight",
      tagline: "See-and-avoid is the cornerstone",
      minutes: 4,
      icon: "eye",
      summary:
        "Why VLOS exists, what counts (and what doesn't), and how a visual observer fits in.",
      screens: [
        {
          kind: "concept",
          eyebrow: "RULE",
          heading: "The aircraft must remain within visual line of sight at all times.",
          body:
            "The remote pilot in command — or the person manipulating the controls — must be able to see the aircraft with vision unaided by anything other than corrective lenses. Binoculars, telephoto lenses, and FPV goggles do not satisfy the requirement.",
          callout: {
            label: "Why",
            text:
              "VLOS is how a remote pilot detects other aircraft, terrain, and hazards in time to yield right of way."
          }
        },
        {
          kind: "concept",
          eyebrow: "THE VO ASSISTS — DOES NOT REPLACE",
          heading: "A visual observer supports the PIC but never substitutes for them.",
          body:
            "A VO can call out traffic, terrain, and hazards in continuous communication with the remote PIC. But the see-and-avoid duty stays with the remote PIC and the person manipulating the controls — they must still be able to see the aircraft themselves. A VO is an extra set of eyes, not a stand-in.",
          callout: {
            label: "Bottom line",
            text:
              "If the only person who can see the aircraft is the VO, you are not compliant. The PIC must also be able to see it."
          }
        },
        {
          kind: "concept",
          eyebrow: "NO DAISY-CHAINING",
          heading: "VOs cannot be linked together to extend VLOS.",
          body:
            "You cannot stage a chain of visual observers — one watching the aircraft, another relaying to a third, and so on — to fly farther than the PIC can see. VLOS must be maintained from a single position by the remote PIC (with a VO assisting from nearby if used). Relayed observation is not VLOS.",
          callout: {
            label: "Also",
            text:
              "No person may serve as remote PIC or VO for more than one operation at a time."
          }
        },
        {
          kind: "concept",
          eyebrow: "FPV",
          heading: "First-person view does not satisfy see-and-avoid.",
          body:
            "FPV is permitted for framing or flight enjoyment, but the see-and-avoid duty must still be met by the PIC (with unaided vision on the aircraft itself), with a VO available to assist.",
          callout: null
        }
      ],
      check: {
        prompt:
          "Your aircraft drifts behind a tree line for a few seconds while you reposition. Which is acceptable under Part 107?",
        choices: [
          { text: "It's fine — your VO can see it, so you can keep flying.", correct: false, why: "The VO assists, but the see-and-avoid duty stays with the PIC. If the PIC can't see the aircraft, you're not compliant." },
          { text: "It's fine — you can re-acquire it in a moment using your FPV feed.", correct: false, why: "FPV cannot satisfy see-and-avoid. The PIC must keep unaided eyes on the aircraft." },
          { text: "Reposition (or land briefly) so the PIC regains unaided line of sight on the aircraft.", correct: true, why: "Correct. The PIC must be able to see the aircraft. The VO supports the PIC — it doesn't replace them." }
        ]
      },
      scenario: {
        setup:
          "You're filming a real-estate property. The owner wants you to circle the entire 4-acre lot, including a wooded section that will put the drone roughly 800 ft away and partly behind mature pines. A coworker offers to stand near the trees and relay aircraft position to you over radio.",
        question: "What's the legal call?",
        choices: [
          { text: "Daisy-chain it: your coworker watches the drone in the woods and relays to you so you can keep flying.", correct: false, why: "Relayed observation isn't VLOS. You can't chain observers to extend the operator's line of sight." },
          { text: "Reposition the launch point (or skip that segment) so the PIC retains unaided line of sight on the aircraft.", correct: true, why: "Correct. VLOS must be maintained by the PIC. Repositioning — or splitting the shot into segments the PIC can see — is the compliant path." },
          { text: "Use the drone's GPS return-to-home to handle the blind segment safely.", correct: false, why: "Automation does not replace the PIC's see-and-avoid duty." }
        ]
      }
    },

    {
      id: "limits",
      number: "02",
      title: "Altitude, Speed & Weather",
      tagline: "Hard ceilings, hard floors",
      minutes: 4,
      icon: "gauge",
      summary:
        "The numeric limits the FAA picked, and the one structure-proximity exception you need to remember.",
      screens: [
        {
          kind: "stats",
          eyebrow: "THE NUMBERS",
          heading: "Memorize these four.",
          stats: [
            { value: "400", unit: "ft AGL", label: "Max altitude" },
            { value: "100", unit: "mph", label: "Max groundspeed (87 kt)" },
            { value: "3", unit: "sm", label: "Min visibility from control station" },
            { value: "55", unit: "lb", label: "Max takeoff weight (incl. payload)" }
          ]
        },
        {
          kind: "concept",
          eyebrow: "STRUCTURE EXCEPTION",
          heading: "Above 400 ft AGL is allowed only near a structure.",
          body:
            "If the aircraft is within 400 feet of a structure, it may fly higher than 400 ft AGL — but never more than 400 feet above that structure's uppermost limit. This lets inspections of towers and tall buildings happen safely.",
          callout: {
            label: "Cloud clearance",
            text:
              "Cloud clearance minimums apply too: stay 500 ft below and 2,000 ft horizontally from clouds."
          }
        }
      ],
      check: {
        prompt:
          "You're inspecting a 600 ft cell tower. How high may you legally operate?",
        choices: [
          { text: "400 ft AGL — the ceiling never moves.", correct: false, why: "There's a structure exception when within 400 ft of the structure." },
          { text: "Up to 1,000 ft AGL, as long as you stay within 400 ft of the tower.", correct: true, why: "Correct — 600 ft tower + 400 ft above its top = 1,000 ft AGL." },
          { text: "Any altitude, since you're working.", correct: false, why: "There is no 'commercial work' altitude waiver baked into Part 107." }
        ]
      },
      scenario: {
        setup:
          "Visibility is reported at 2.5 statute miles with broken clouds at 700 ft. The client really wants the shot today.",
        question: "What does Part 107 require?",
        choices: [
          { text: "Fly — visibility is close enough.", correct: false, why: "Minimum visibility from the control station is 3 statute miles. Close isn't compliant." },
          { text: "Reschedule, or apply for a waiver before launching.", correct: true, why: "Correct. Either wait for legal weather or operate under a Certificate of Waiver." },
          { text: "Stay under 200 ft and fly anyway.", correct: false, why: "Visibility minimums are independent of altitude." }
        ]
      }
    },

    {
      id: "people",
      number: "03",
      title: "Operations Over People",
      tagline: "The four-category framework",
      minutes: 5,
      icon: "users",
      summary:
        "The 2021 Operations Over People rule replaced the old blanket prohibition with four eligibility categories.",
      screens: [
        {
          kind: "concept",
          eyebrow: "WHAT CHANGED",
          heading: "Since April 2021, eligible aircraft can fly over people.",
          body:
            "The original Part 107 banned flight over non-participants. The Operations Over People (OOP) final rule replaced that with four categories. Eligibility depends on the aircraft's weight, exposed-blade design, and FAA Declaration of Compliance for kinetic-energy and injury-severity tests. Operations over moving vehicles have their own rules under the same framework.",
          callout: {
            label: "Default",
            text:
              "If your aircraft does not qualify for a category, the original prohibition still applies — no flight over non-participants."
          }
        },
        {
          kind: "categories",
          eyebrow: "OOP CATEGORIES",
          heading: "Know which category your aircraft qualifies for.",
          items: [
            {
              code: "1",
              title: "≤ 0.55 lb (250 g)",
              desc: "Sustained flight over people allowed. No exposed rotating parts that could lacerate skin. Must comply with Remote ID."
            },
            {
              code: "2",
              title: "Limited kinetic energy",
              desc: "Eligible aircraft must not cause injury equivalent to >11 ft-lb impact and have no exposed blades capable of laceration. Sustained flight over people allowed."
            },
            {
              code: "3",
              title: "Stricter ops, heavier limits",
              desc: "≤25 ft-lb impact equivalent. Sustained flight over people NOT allowed; transit only over a closed/restricted-access site or where notice is given."
            },
            {
              code: "4",
              title: "Type-certificated aircraft",
              desc: "Aircraft holding an airworthiness certificate under part 21. Operating limits are defined per its airworthiness certificate."
            }
          ]
        },
        {
          kind: "concept",
          eyebrow: "MOVING VEHICLES",
          heading: "Operations over moving vehicles got their own rules.",
          body:
            "Sustained flight over moving vehicles is permitted only for Category 1, 2, or 3 aircraft inside a closed- or restricted-access site, or for transit when no person inside the vehicle is exposed for more than a brief time. The old 'no operating from a moving vehicle' rule still stands — except when operating in a sparsely populated area from a land vehicle.",
          callout: null
        }
      ],
      check: {
        prompt:
          "Which scenario clearly qualifies as a Category 1 operation?",
        choices: [
          { text: "A 1.2 lb aircraft with prop guards over a small audience.", correct: false, why: "Category 1 requires the aircraft to weigh 0.55 lb or less and meet the laceration safety standard." },
          { text: "A 230 g aircraft with no exposed rotating parts that can lacerate skin, broadcasting Remote ID.", correct: true, why: "Correct. Under 0.55 lb, no laceration hazard, and Remote ID compliant — Category 1 eligibility." },
          { text: "Any drone, as long as the people are warned in advance.", correct: false, why: "Verbal warning does not satisfy OOP eligibility — the aircraft itself must qualify." }
        ]
      },
      scenario: {
        setup:
          "A wedding planner asks you to fly directly over the seated guests during the ceremony for an overhead shot. Your aircraft weighs 2 lb and is not on the FAA's Declaration of Compliance list.",
        question: "How do you respond?",
        choices: [
          { text: "Decline overflight; offer angled shots from outside the seating area.", correct: true, why: "Correct. Without a Category 1–4 qualifying aircraft, sustained flight over non-participants is prohibited." },
          { text: "Fly fast and low so it's over quickly.", correct: false, why: "Speed and duration don't qualify your aircraft into a category." },
          { text: "Have the planner sign a waiver and proceed.", correct: false, why: "Private waivers don't override FAA rules. Eligibility starts with the aircraft itself." }
        ]
      }
    },

    {
      id: "night",
      number: "04",
      title: "Night & Twilight Operations",
      tagline: "Lights on, training current",
      minutes: 4,
      icon: "moon",
      summary:
        "The 2021 amendments allow night operations under Part 107 — with anti-collision lighting and current training.",
      screens: [
        {
          kind: "concept",
          eyebrow: "WHAT CHANGED",
          heading: "Night flight under Part 107 no longer requires a waiver.",
          body:
            "Effective April 21, 2021, remote pilots may operate at night without a waiver if two conditions are met: the aircraft has anti-collision lighting visible for at least 3 statute miles with a flash rate sufficient to avoid a collision, and the remote PIC has completed the updated initial knowledge test or recurrent training that includes night-operations content.",
          callout: {
            label: "Civil twilight",
            text:
              "Civil twilight (30 minutes before sunrise to 30 minutes after sunset, local time) also requires the same 3-sm anti-collision lighting."
          }
        },
        {
          kind: "concept",
          eyebrow: "TRAINING CURRENCY",
          heading: "Recurrent training replaced the old recurrent test.",
          body:
            "Since April 6, 2021, the recurrent FAA aeronautical knowledge test was replaced by free online recurrent training (every 24 calendar months). The training covers night operations and is required before any night flight under Part 107.",
          callout: null
        }
      ],
      check: {
        prompt:
          "Sunset is 7:48 PM. Your aircraft has anti-collision lighting visible for 1 sm. May you fly until 8:18 PM?",
        choices: [
          { text: "Yes — civil twilight is automatic.", correct: false, why: "Civil twilight and night operations both require anti-collision lighting visible for 3 statute miles." },
          { text: "No — your lighting doesn't meet the 3-sm visibility requirement.", correct: true, why: "Correct. The lighting must be visible for at least 3 statute miles to fly civil twilight or night." },
          { text: "Yes — but only until full darkness.", correct: false, why: "The 3-sm lighting requirement applies through both civil twilight and night." }
        ]
      },
      scenario: {
        setup:
          "A client wants nighttime stadium light-trail footage. Your aircraft has a compliant 3-sm strobe, but you took the FAA initial test in 2019 and have not done the updated recurrent training.",
        question: "What's required before launching?",
        choices: [
          { text: "Nothing — your initial test still covers everything.", correct: false, why: "The pre-2021 initial test did not cover night operations. You need the updated recurrent training." },
          { text: "Complete the FAA's free online recurrent training (which covers night ops) before flying.", correct: true, why: "Correct. The recurrent training is the path to night-ops currency under the 2021 rules." },
          { text: "File a waiver with the FAA.", correct: false, why: "Night operations no longer require a waiver as long as lighting and training requirements are met." }
        ]
      }
    },

    {
      id: "remoteid",
      number: "05",
      title: "Remote ID",
      tagline: "Your drone's digital license plate",
      minutes: 4,
      icon: "broadcast",
      summary:
        "Since September 16, 2023, almost every drone in the National Airspace System must broadcast Remote ID.",
      screens: [
        {
          kind: "concept",
          eyebrow: "THE RULE",
          heading: "Remote ID is required for nearly all drones operating in the U.S.",
          body:
            "As of September 16, 2023, Remote ID compliance is required for any drone that must be registered (effectively, anything 0.55 lb or heavier, plus all Part 107 operations regardless of weight). The aircraft broadcasts its identity, location, and control-station location during the entire flight, allowing the FAA, law enforcement, and other authorized parties to identify it from the ground.",
          callout: {
            label: "Why it matters",
            text:
              "Remote ID is what enables operations over people, expanded BVLOS, and integration with crewed aviation. It's the foundation of the modern UAS framework."
          }
        },
        {
          kind: "options",
          eyebrow: "THREE WAYS TO COMPLY",
          heading: "Pick one of three compliance paths.",
          items: [
            {
              tag: "Option 1",
              title: "Standard Remote ID Drone",
              desc: "A drone built with Remote ID baked in. Broadcasts ID, location, altitude, velocity, control-station location, time mark, and emergency status from takeoff to shutdown."
            },
            {
              tag: "Option 2",
              title: "Remote ID Broadcast Module",
              desc: "An add-on broadcast module attached to a non-Standard drone. The drone is then limited to visual line-of-sight only, and the module's serial number is added to the FAA registration."
            },
            {
              tag: "Option 3",
              title: "FRIA — FAA-Recognized Identification Area",
              desc: "Fly without Remote ID only inside an FRIA, a specifically approved geographic area. The aircraft must remain within VLOS of the operator and inside the FRIA boundary."
            }
          ]
        },
        {
          kind: "concept",
          eyebrow: "REGISTRATION",
          heading: "Update your registration with the Remote ID serial number.",
          body:
            "Whether you fly a Standard Remote ID drone or use a broadcast module, the serial number(s) must be listed on your FAA registration. A Part 107 pilot must register every aircraft individually (recreational fliers under the Exception for Limited Recreational Operations may register once per fleet).",
          callout: null
        }
      ],
      check: {
        prompt:
          "You bought a drone in 2019 with no Remote ID built in. You want to keep using it under Part 107. What's the simplest legal path?",
        choices: [
          { text: "Stop flying it — there's no way to use it now.", correct: false, why: "There are compliance paths for older drones." },
          { text: "Attach an FAA-approved broadcast module and add its serial number to your registration. The aircraft is then VLOS-only.", correct: true, why: "Correct. The broadcast module is the standard retrofit path." },
          { text: "Just register it more carefully and you're fine.", correct: false, why: "Registration alone doesn't satisfy Remote ID; the aircraft must broadcast or fly inside an FRIA." }
        ]
      },
      scenario: {
        setup:
          "Mid-flight, your aircraft's Remote ID broadcast fails (you see a system warning). You're 5 minutes into a 12-minute mapping flight.",
        question: "What's the safest legal response?",
        choices: [
          { text: "Continue — Remote ID is administrative, not safety-critical.", correct: false, why: "Operating without functioning Remote ID outside an FRIA is a violation. Land as soon as practical." },
          { text: "Land as soon as practical and troubleshoot before continuing.", correct: true, why: "Correct. The aircraft cannot legally operate without Remote ID outside a FRIA. Land safely, then resolve." },
          { text: "Pop a backup module on mid-air using a second pilot.", correct: false, why: "Mid-flight retrofits are not feasible or legal. Land first." }
        ]
      }
    },

    {
      id: "airspace",
      number: "06",
      title: "Airspace & ATC",
      tagline: "Permission, not just position",
      minutes: 3,
      icon: "tower",
      summary: "Class G is the default; B, C, D, E require ATC authorization — typically via LAANC.",
      screens: [
        {
          kind: "airspace",
          eyebrow: "AUTHORIZATION",
          heading: "Know whose airspace you're in.",
          body:
            "Operations in Class G airspace are allowed without ATC permission. Operations in Class B, C, D, and surface E airspace require prior ATC authorization. LAANC (Low Altitude Authorization and Notification Capability) provides near-real-time approval at participating facilities; otherwise use FAA DroneZone for further coordination.",
          classes: [
            { code: "B", color: "blue", desc: "Busy hub airports", auth: true },
            { code: "C", color: "magenta", desc: "Mid-size airports w/ radar", auth: true },
            { code: "D", color: "blue", desc: "Towered airports", auth: true },
            { code: "E", color: "magenta", desc: "Controlled, often surface near airports", auth: true },
            { code: "G", color: "none", desc: "Uncontrolled — default for most rural ops", auth: false }
          ]
        }
      ],
      check: {
        prompt:
          "You plan to fly 2 miles from a small towered airport. Without checking, which airspace are you most likely in?",
        choices: [
          { text: "Class G — no permission needed.", correct: false, why: "A towered airport almost always has Class D or higher around it. Always check the chart." },
          { text: "Probably Class D — request ATC authorization first.", correct: true, why: "Correct. Towered = Class D at minimum within ~4 nm. Use LAANC or FAA DroneZone." },
          { text: "Class A — request a transponder code.", correct: false, why: "Class A starts at 18,000 ft MSL. Not relevant to small UAS at the surface." }
        ]
      },
      scenario: {
        setup:
          "Your LAANC request for a Class D operation is auto-approved with a 200 ft ceiling, but the client wants 350 ft.",
        question: "What do you do?",
        choices: [
          { text: "Fly to 200 ft only — that's what was authorized.", correct: true, why: "Correct. ATC authorization defines the ceiling for that volume." },
          { text: "Fly to 350 ft — Part 107's 400 ft limit still applies.", correct: false, why: "ATC authorization can — and often does — impose a stricter ceiling than Part 107's default." },
          { text: "Cancel LAANC and fly under Class G rules.", correct: false, why: "You can't 'opt out' of controlled airspace by cancelling your authorization." }
        ]
      }
    },

    {
      id: "preflight",
      number: "07",
      title: "Preflight, Fitness & Reporting",
      tagline: "Before, during, after",
      minutes: 4,
      icon: "checklist",
      summary:
        "PIC duties bracket every flight: inspect, self-assess, and report what matters.",
      screens: [
        {
          kind: "checklist",
          eyebrow: "BEFORE",
          heading: "Preflight inspection is mandatory.",
          body:
            "The remote PIC must conduct a preflight inspection of the small UAS — including aircraft and control station systems checks — to ensure it is in a condition for safe operation.",
          items: [
            "Airframe, propellers, motors visually inspected",
            "Battery secured and at safe charge level",
            "Control station powered and linked",
            "Firmware / GPS lock confirmed",
            "Registration and Remote ID broadcast confirmed",
            "Anti-collision lighting tested (if civil twilight or night)",
            "Site survey: people, obstacles, airspace, weather"
          ]
        },
        {
          kind: "concept",
          eyebrow: "DURING",
          heading: "Don't fly impaired.",
          body:
            "A person may not operate a small UAS if they know — or have reason to know — of any physical or mental condition that would interfere with safe operation. Fatigue, illness, medication, and stress all count.",
          callout: {
            label: "Right of way",
            text:
              "Always yield the right of way to other aircraft. You are the smaller, more maneuverable vehicle."
          }
        },
        {
          kind: "concept",
          eyebrow: "AFTER",
          heading: "Report serious incidents within 10 days.",
          body:
            "The remote PIC must report to the FAA within 10 days any operation that results in at least serious injury, loss of consciousness, or property damage of at least $500 (excluding the aircraft itself).",
          callout: {
            label: "Records",
            text:
              "Make the small UAS and any required documents available to the FAA on request."
          }
        }
      ],
      check: {
        prompt:
          "During a corporate event flight, your aircraft strikes a parked car causing $1,200 in damage. No injuries.",
        choices: [
          { text: "No report needed — there were no injuries.", correct: false, why: "Property damage of $500+ alone triggers the reporting requirement." },
          { text: "Report to the FAA within 10 days.", correct: true, why: "Correct. $500+ in property damage triggers the 10-day report." },
          { text: "Report only if the owner asks you to.", correct: false, why: "The trigger is the dollar threshold, not a request from the property owner." }
        ]
      },
      scenario: {
        setup:
          "You're scheduled for a 6 AM job. You slept 4 hours and have a head cold. You feel 'okay-ish.'",
        question: "What's the right call under Part 107?",
        choices: [
          { text: "Fly — feeling 'okay' is good enough.", correct: false, why: "If you have reason to know a condition could interfere with safe operation, you may not operate." },
          { text: "Cancel or reschedule — you have reason to know your condition could interfere.", correct: true, why: "Correct. Self-assess honestly. Fatigue + illness is a known impairment risk." },
          { text: "Fly with extra coffee and shorten the flight.", correct: false, why: "Mitigation strategies don't override the rule." }
        ]
      }
    }
  ],

  finalExam: [
    {
      q: "Maximum legal groundspeed for a small UAS under Part 107?",
      choices: ["60 mph", "87 mph", "100 mph", "120 mph"],
      correct: 2
    },
    {
      q: "Default maximum altitude AGL?",
      choices: ["200 ft", "400 ft", "500 ft", "1,000 ft"],
      correct: 1
    },
    {
      q: "Minimum visibility from the control station?",
      choices: ["1 sm", "2 sm", "3 sm", "5 sm"],
      correct: 2
    },
    {
      q: "To fly at night under Part 107 (no waiver), the aircraft must have anti-collision lighting visible for at least…",
      choices: ["1 sm", "2 sm", "3 sm", "5 sm"],
      correct: 2
    },
    {
      q: "Recurrent training for Part 107 pilots is required every…",
      choices: ["12 calendar months", "24 calendar months", "36 calendar months", "Only once after initial certification"],
      correct: 1
    },
    {
      q: "Which Operations Over People category requires the aircraft to weigh 0.55 lb (250 g) or less?",
      choices: ["Category 1", "Category 2", "Category 3", "Category 4"],
      correct: 0
    },
    {
      q: "Which is NOT a valid path to Remote ID compliance?",
      choices: [
        "Operate a Standard Remote ID drone",
        "Attach an FAA-approved broadcast module to your drone",
        "Operate inside an FAA-Recognized Identification Area (FRIA)",
        "Carry a printed copy of your FAA registration"
      ],
      correct: 3
    },
    {
      q: "Which airspace is allowed without ATC permission?",
      choices: ["Class B", "Class C", "Class D", "Class G"],
      correct: 3
    },
    {
      q: "Above 400 ft AGL, operations are allowed only when…",
      choices: [
        "the PIC has 100+ logged hours",
        "the aircraft is within 400 ft of a structure and ≤ 400 ft above it",
        "ATC has cleared a higher altitude in writing",
        "the aircraft weighs under 5 lb"
      ],
      correct: 1
    },
    {
      q: "An incident must be reported to the FAA within 10 days when it causes…",
      choices: [
        "any property damage at all",
        "property damage of $500+ or serious injury / loss of consciousness",
        "media coverage",
        "damage to the drone itself"
      ],
      correct: 1
    },
    {
      q: "FPV alone is sufficient to satisfy the see-and-avoid duty.",
      choices: ["True", "False"],
      correct: 1
    },
    {
      q: "Maximum total takeoff weight (aircraft + payload) under Part 107?",
      choices: ["25 lb", "44 lb", "55 lb", "75 lb"],
      correct: 2
    }
  ]
};
