# 📐 DESIGN SYSTEM & SPECIFICATION — APEX PLUMBER
> **Google Stitch Specification & Cleanroom Light Industrial Protocol**  
> *Target Category:* High-Converting Emergency Trade Service Platform & Multi-State Pitch Atelier.

---

## 1. Visual Hierarchy & Aesthetic Direction
- **Archetype:** Precision Industrial & Maritime Trust Cleanroom (Hyper-legible, clinical white, deep nautical slate, high-visibility rescue safety accents).
- **Core Emotional Triggers:** Immediate Relief, Absolute Authority, Unshakeable Reliability, Transparent Upfront Pricing.
- **Strict Mode:** Pure Light Cleanroom. Zero dark-mode ambiguity, 100% WCAG AAA contrast ratio on all critical text and emergency CTAs.

---

## 2. Color Palette & Semantic Tokens

### Primary Trust Palette (Maritime Deep Slate & Hydronic Blues)
- `--navy-950`: `#0F172A` (Dominant text, authority headlines, master badges)
- `--navy-900`: `#1E293B` (Secondary headings, dark trust containers)
- `--blue-800`: `#1E3A8A` (Deep nautical anchor, header accents)
- `--blue-600`: `#2563EB` (Primary brand accent, interactive links, trust checks)
- `--blue-500`: `#3B82F6` (Active indicator, hover highlight)
- `--blue-50`:  `#EFF6FF` (Soft hydronic tint for trust callouts)

### Emergency Rescue Accents (High-Visibility Safety Amber & Orange)
- `--orange-500`: `#F97316` (Emergency dispatch hotline, primary CTA buttons, live response pill)
- `--orange-600`: `#EA580C` (Active/Hover button state, urgent warning highlight)
- `--orange-400`: `#FB923C` (Border glow, subtle indicator)
- `--orange-50`:  `#FFF7ED` (Emergency dispatch background tint)

### Surface & Neutral Scale (Clinical Cleanroom Slate)
- `--surface-white`: `#FFFFFF` (Card surfaces, cleanroom canvas)
- `--surface-50`:    `#F8FAFC` (Page background, alternating row surface)
- `--surface-100`:   `#F1F5F9` (Subtle dividers, input fills, badge backgrounds)
- `--border-200`:    `#E2E8F0` (Default precision card border)
- `--border-300`:    `#CBD5E1` (Input focus boundary, active tab outline)
- `--text-muted`:    `#64748B` (Secondary descriptions, metadata)
- `--text-body`:     `#334155` (High-legibility readable paragraph text)

### Functional Feedback Tokens
- `--status-success`: `#16A34A` (Available technicians, verified license badge)
- `--status-warning`: `#CA8A04` (Heavy call volume alert)
- `--status-urgent`:  `#DC2626` (Pipe burst emergency marker)

---

## 3. Typography Scale & Fonts

### Font Families
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif (Weights: 700, 800, 900)
- **Body & Controls:** `Plus Jakarta Sans`, -apple-system, sans-serif (Weights: 400, 500, 600)
- **Technical & License Numbers:** `JetBrains Mono`, monospace (License IDs, timestamps, exact prices)

### Type Scale
- `display-2xl`: `3.5rem` (56px) / Line-height: `1.08` / Tracking: `-0.03em`
- `display-xl`:  `2.75rem` (44px) / Line-height: `1.12` / Tracking: `-0.025em`
- `heading-lg`:  `2rem` (32px) / Line-height: `1.2` / Tracking: `-0.02em`
- `heading-md`:  `1.5rem` (24px) / Line-height: `1.3` / Tracking: `-0.015em`
- `body-lg`:     `1.125rem` (18px) / Line-height: `1.6`
- `body-base`:   `1rem` (16px) / Line-height: `1.5`
- `caption-sm`:  `0.875rem` (14px) / Line-height: `1.4` / Tracking: `0.01em`
- `code-mono`:   `0.8125rem` (13px) / Monospace / Tracking: `0.02em`

---

## 4. Components, Spacing & Border Radii

### Border Radii (Modern Crisp Architectural)
- Small components (badges, chips, tags): `rounded-md` (6px)
- Interactive buttons & inputs: `rounded-lg` (8px)
- Service cards & dispatch widget: `rounded-xl` (12px)
- Modals & hero card wrappers: `rounded-2xl` (16px)

### Shadows & Depth (No AI-Slop Heavy Blur)
- Card border: `1px solid #E2E8F0` with subtle elevation `0 1px 3px 0 rgb(0 0 0 / 0.05)`
- Interactive Hover: `0 8px 24px -4px rgb(15 23 42 / 0.08)`
- Emergency Button Glow: `0 4px 14px 0 rgb(249 115 22 / 0.35)`

---

## 5. Anti-AI-Slop & Vercel Guideline Checklist
- [x] Zero generic "Learn More → 01" number ornaments.
- [x] Zero decorative blinking ping dots.
- [x] All buttons have explicit `hover`, `active`, and `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500` accessibility states.
- [x] Every phone number is interactive with `tel:+18005552739` and formatted clearly `(800) 555-APEX`.
- [x] All form controls have matching `<label>` elements or `aria-label`.
- [x] Strict Light Theme enforcement — clean, crisp contrast suitable for homeowners during emergencies.
