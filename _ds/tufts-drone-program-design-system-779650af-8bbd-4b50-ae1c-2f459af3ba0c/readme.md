# Tufts Drone Program — Design System

A brand and UI system for the **Tufts Drone Program**, a student initiative within the
**Tufts University Data Lab**. It packages Tufts University's visual identity into tokens,
components, a tutorial-document template, and a marketing-site UI kit so designers and agents
can produce on-brand tutorials, decks, and interfaces.

## Sources

- **Tufts University Brand Guidelines** — https://brand.tufts.edu/ (color, typography, voice, logo policy). Color values are taken verbatim from `brand.tufts.edu/guidelines/color`.
- **Uploaded Word templates** (the tutorial-authoring standard this system encodes):
  - `uploads/Tufts Template _Blankish Starter.docx` — the blank tutorial starter with named paragraph styles (Title, Subtitle, Heading, Heading 2, List Paragraph, Normal).
  - `uploads/Tufts Template and Tutorial Formatting Guidelines.docx` — full formatting rules (page setup, text formatting, image guidelines, final checks), illustrated with the Yaws / ArcGIS Pro example tutorial.
- The Word docs describe a Data Lab GIS-tutorial format; this system extends that format to the Drone Program (photogrammetry + GIS).

> **Note on access:** these are the only sources provided. There is no codebase or Figma file. If a Figma or repo exists, re-attach it and this system can be tightened against it.

---

## CONTENT FUNDAMENTALS

The voice is that of a **patient, plain-spoken lab instructor** — the Tufts University Data Lab tutorial style, aligned with Tufts' broader "warm, clear, human" brand voice.

- **Person:** address the reader directly as *you* ("you'll learn", "save your file"). Refer to the program as *we*.
- **Register:** instructional and encouraging, never stiff or academic-dense. Short, scannable steps beat long theory.
- **Explain the *why*:** every section opens with 1–2 sentences on what will be covered **and why** it matters ("…so page numbers stay correct").
- **Emphasis conventions (from the Word guidelines):**
  - **Bold** verbs / action items, tools, and proper nouns the reader must click (e.g. the **Contents** pane).
  - ***Bold + italic*** layer names; *italicize* dataset/layer names on their own.
  - Highlight or a **Note:** callout for anything important; keep callouts out of the numbered sequence.
- **Arrows:** use the pretty arrow **→** between clicks. **Never** use `>` or `->`.
- **Casing:** sentence case for body and most headings; Title Case only for the document Title and proper product names (ArcGIS Pro, Tufts Box).
- **Numbers/steps:** numbered "List Paragraph" steps; **restart numbering** at the start of each new section or sub-section.
- **Emoji:** none in official tutorials or communications.
- **Accessibility:** never set body text in Tufts Blue (fails contrast on white). Tufts Blue is fine for bold text ≥20px or regular text ≥24px; use **Jumbo Blue (#002E6D)** for headings and any smaller blue text.

Example intro (from the source): *"This tutorial will lead you through the steps in ArcGIS Pro to create a thematic map… This tutorial will cover adding data, symbolizing categorical and quantitative data, labelling, setting a map frame projection, and composing a final map layout."*

---

## VISUAL FOUNDATIONS

- **Color:** Lead with **Tufts Blue (#3E8EDE)** and/or **Tufts Brown (#63493A)** — at least one must appear in every piece. A warm **Jumbo Blue (#002E6D)** carries headings and body-adjacent blue (it's the accessible workhorse). The extended palette (Ballou Blue, Prez Lawn Green, Aurora Green, Flame Orange, Beacon Yellow, Civic Purple, Radiant Magenta, Bessie Brown) is used *sparingly* to signal categories or type hierarchy — **never** as large solid fields, never screened/tinted. Alert Red / Alert Yellow are reserved for urgent UI only. Body text is Bessie Brown (#3D2E25) on white or warm **Candle White (#F2EDE7)**.
- **Type:** a three-family system — a high-contrast **display serif** for titles, a **geometric sans** for UI/labels, and a **reading serif** for long-form tutorial body. See TYPOGRAPHY below. Display headings use tight tracking (−0.02em); eyebrows/labels are uppercase sans with wide tracking (0.12em).
- **Backgrounds:** clean and mostly solid — white and Candle White surfaces. Hero/brand bands use flat Jumbo Blue or a restrained blue gradient (Jumbo→deeper blue). No textures, no photographic full-bleed by default; imagery (aerial orthomosaics, campus) is placed in bordered, rounded cards. No hand-drawn illustration; no repeating patterns except a neutral diagonal hatch for image placeholders.
- **Imagery vibe:** aerial/mapping imagery, cool and natural (blues/greens), crisp and documentary — not warm-filtered or grainy. Always inline / left-aligned in documents (never text-wrapped), with enough surrounding context to orient the reader, annotated in Snagit rather than Word shapes.
- **Corner radii:** modest and academic — 3/6/10/16px (`--radius-sm…xl`); pills for badges/tags/step markers. Nothing is heavily rounded.
- **Borders:** 1px hairline in warm gray for card edges; a **4px Tufts-blue left rule** marks callouts and a top rule marks accented cards; 2px focus/interactive borders.
- **Shadows:** soft, warm-tinted (rgba of Bessie Brown), never heavy — `--shadow-sm` at rest, `--shadow-lg` on hover lift. No inner shadows. Focus is a 3px 40%-opacity Tufts-blue ring.
- **Cards:** white surface, hairline border, `--radius-lg`, resting `--shadow-sm`; optional Tufts-blue top accent rule; hover lifts 2px to `--shadow-lg`.
- **Animation:** subtle and quick — 120–320ms, `cubic-bezier(0.2,0,0,1)`. Buttons lift 1px on hover and shift background one shade darker; cards lift and deepen shadow. No bounces, no elaborate motion.
- **Hover/press:** hover = 1px lift + darker fill (solids) or 8–12% blue tint wash (outline/ghost); press relies on the darker fill. Links: Jumbo Blue → Tufts Blue on hover.
- **Transparency/blur:** used lightly — tinted callout fields (7–8% color), translucent white text on brand bands. No glassmorphism/backdrop-blur.
- **Layout:** centered containers (44rem for reading, 68rem content, 82rem wide) on a 4px spacing grid; sticky Jumbo-Blue site header; generous vertical rhythm.

---

## TYPOGRAPHY

The **official Tufts typefaces are licensed Adobe Fonts** — **IvyMode, Americane, Meta Serif, Proxima Nova** — and cannot be embedded in this system. The tokens use the nearest free **Google Fonts** substitutes:

| Role | Tufts official | Substitute here | Token |
| --- | --- | --- | --- |
| Display serif (titles) | IvyMode | **Playfair Display** | `--font-display` |
| Sans (UI, labels, body) | Proxima Nova | **Montserrat** | `--font-sans` |
| Reading serif (tutorials) | Meta Serif | **Source Serif 4** | `--font-serif` |
| Slab (impact heads) | Americane | *not substituted* | — |

> ⚠️ **Substitution flag — action needed.** Replace these with the licensed Tufts webfont files (available to Tufts staff via fonts.adobe.com) when you have them, then swap the `@import` in `tokens/fonts.css` for local `@font-face` rules. For email, Tufts recommends **Arial**.

---

## ICONOGRAPHY

Tufts publishes **no official icon font or icon set** in its brand guidelines — the identity is carried by type, color, and the wordmark, not iconography. This system therefore standardizes on **[Lucide](https://lucide.dev)** (loaded from CDN) as a **flagged substitution**: a clean, consistent, thin-stroke open-source set that suits the academic, understated tone.

- **Usage:** `<i data-lucide="map"></i>` then `lucide.createIcons()`; size 14–24px, stroke inherits `currentColor`. Pair with `IconButton` for controls.
- **Emoji:** never used in tutorials or official communications.
- **Unicode as icon:** only the pretty arrow **→** (and ✓/✕ for do/don't lists) — a documented Data Lab convention.
- **No hand-drawn SVG brand marks.** If Tufts issues an official icon set, replace Lucide and update this section.

---

## LOGO

Both official mark families are bundled in `assets/`:

**Tufts University wordmark** (official, supplied as transparent PNGs) — the primary mark, used in every header lockup:
- `wordmark-blue.png` — on light surfaces
- `wordmark-white.png` — on dark/brand surfaces
- `wordmark-black.png` — one-color / print

**Jumbo mascot** (athletic mark; JPGs knocked out to transparent PNGs):
- `logo.png` — blue head (primary mascot, also the thumbnail/hero mark)
- `mascot-brown-head.png`, `mascot-blue-body.png`, `mascot-brown-body.png`

**Lockup pattern used throughout:** official wordmark + a hairline divider + the unit name "Drone Program" in wide-tracked uppercase sans; Jumbo appears alongside on hero/title surfaces. It's wired into the tutorial header, deck title/section, infographic header, site nav/footer, the *Brand · Logos* card, and `thumbnail.html`. **Never recolor, distort, redraw, or reconstruct either mark**; keep clear space around the wordmark equal to the cap-height of the "T".

---

## Index / Manifest

**Root**
- `styles.css` — entry point; `@import`s all token files.
- `thumbnail.html` — homepage tile (wordmark placeholder + swatch strip).
- `readme.md` — this file. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.

**`components/`** (namespace `TuftsDroneProgramDesignSystem_779650`)
- `buttons/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Checkbox**
- `content/` — **Card**, **Badge**, **Tag**, **Callout**, **StepList**

**`templates/`**
- `data-lab-tutorial/` — **DataLabTutorial** — a Tufts Data Lab tutorial document (TOC, numbered steps, Note/Important callouts, image placeholders, running header + page number), following the uploaded Word formatting guidelines.

**`ui_kits/`**
- `drone-program-site/` — Drone Program marketing site recreation: **Home**, **Library** (tutorial index with filters), **Article** (a tutorial rendered on the web). Also a Starting Point.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

### Intentional additions
- **Callout** and **StepList** components — not in any provided source, added to encode the Word template's "Note:" highlights and numbered-step formatting as reusable primitives.
- **Lucide** icon set — substitute for the (nonexistent) official Tufts icon set; see ICONOGRAPHY.
