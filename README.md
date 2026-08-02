# Part 107 eLearning Course — Drones in the National Airspace System

A self-study course on U.S. civil drone regulation, built for Tufts Drone Program. Covers the regulatory hierarchy, § 44809 vs. Part 107, airspace classes, LAANC/Remote ID, operating rules, waivers/BVLOS, and the proposed Part 108 rulemaking. Citations link to Cornell Law's LII.

## What's in this repo

- **`dist/`** — the two ready-to-ship exports:
  - `Part 107 Safety Course (standalone).html` — single self-contained file. Open it directly or host it (e.g. GitHub Pages) — no build step, no dependencies.
  - `Part-107-Safety-Course-SCORM-1.2.zip` — SCORM 1.2 package for Canvas. Upload as an External Learning Tool / SCORM package to get completion and score tracking in the gradebook.
- **`nas-course/`** — source for the standalone build (React/JSX components, lesson content, styles). `index.html` is the entry point; `Drones in the National Airspace System.html` is the bundled output.
- **`scorm/`** — source for the SCORM build, including `imsmanifest.xml` and `scorm-api.js` (the Canvas gradebook bridge). `index.html` is the SCORM entry point.
- **`_ds/`** — bound design system assets (Tufts Drone Program Design System). Do not edit directly; components are consumed via the bundle it exports.
- **`uploads/`** — reference materials used while building the course.

Root-level `app.jsx`, `hub.jsx`, `lesson.jsx`, `exam.jsx`, `course-data.js`, `styles.css`, `icons.jsx`, `support.js`, `tweaks-panel.jsx`, and `Canvas.dc.html` are working copies used during development; the shipped builds live in `dist/`.


See `USER_GUIDE.md` for usage notes.

## Course structure

11 lessons — regulatory hierarchy, § 44809 vs. Part 107, MSL/AGL altitudes, airspace classes A–G, sectional symbology, LAANC/Remote ID (Part 89), operating rules, TFRs/NOTAMs, waivers/BVLOS, and proposed Part 108 — plus a 57-term glossary, a centralized Sources page, and a final exam. Each lesson includes learning objectives, formal definitions, data tables, optional deep-dive callouts, and per-lesson references.

Note: Part 108 is presented as proposed/emerging rulemaking (status as of mid-2026), not settled law — update this framing if the rule finalizes.
