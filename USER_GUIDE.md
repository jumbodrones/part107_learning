# User Guide

## For students

- Work through the 11 lessons in order — each builds on definitions and rules from the last.
- Each lesson opens with **learning objectives**; use these to check your understanding before moving on.
- **Deep-dive callouts** are optional — skip them on a first pass if you're short on time, return for exam prep.
- The **glossary** (57 terms) and **Sources** page are always accessible for reference; every regulatory citation links out to the official text on Cornell Law's LII where a stable link exists.
- The **final exam** is at the end of the course. In the Canvas version, your score and completion are recorded automatically — no need to submit anything separately.
- Progress: the Canvas (SCORM) version resumes where you left off automatically. In the standalone web version, keep the same browser/device to preserve your place.

## For instructors

- **Which file to use:** upload the SCORM zip to Canvas for gradebook tracking; use the standalone HTML file if you just need a shareable link (e.g., for non-Canvas audiences or a public syllabus page).
- **Grading:** the SCORM package reports completion status and the final exam score to Canvas's gradebook via the standard SCORM 1.2 API — no manual grading needed. Confirm your Canvas gradebook column is set to accept the SCORM score on import.
- **Currency check:** the course flags Part 108 as proposed rulemaking, not final. Before each term, verify at faa.gov/uas whether Part 108 or other cited rules have changed, and update `course-data.js` / the relevant lesson file if so.
- **Editing content:** lesson content lives in `nas-lessons-a/b/c.js` and `nas-data.js` (see `nas-course/`). After edits, the standalone and SCORM builds need to be regenerated/re-exported and re-copied into `dist/`.
- **Accessibility:** content is text- and table-based with no time-gated interactions, suitable for screen readers and untimed accommodations.
