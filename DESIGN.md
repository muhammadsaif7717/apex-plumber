# 📐 DESIGN SYSTEM & SPECIFICATION — APEX PLUMBER (PLUMCO THEME ATELIER)
> **Direct Plumco Architecture & Clean Industrial Precision Protocol**  
> *Benchmark Target:* https://wpocean.com/wp/plumco/  
> *Target Category:* High-Converting Emergency & Commercial Plumbing Platform & Multi-State Pitch Atelier.

---

## 1. Visual Hierarchy & Aesthetic Direction
- **Archetype:** Plumco Signature Master Tradesman Theme — Royal Hydronic Blue (`#0052da`), Deep Nautical Charcoal Slate (`#253041`), Crisp Pure White (`#ffffff`), and Soft Ice Blue Canvas (`#f4f8fe`).
- **Core Emotional Triggers:** "Ready To Help You", 25+ Years Experience, Absolute Professionalism, No Overtime Fees, Guaranteed On-Time Arrival.
- **Responsive Guarantee:** 100% Pixel-Perfect Mobile-First from 360px (and down to 320px) up to 4K Ultrawide with Zero Horizontal Overflow (`overflow-x: hidden`).

---

## 2. Color Palette & Semantic Tokens

### Plumco Primary Palette
- `--plumco-blue`: `#0052da` (rgb(0, 82, 218)) — Primary buttons, active tabs, fun fact background, service highlights.
- `--plumco-blue-hover`: `#0041ae` (Hover state for buttons and links)
- `--plumco-blue-light`: `#eef5ff` / `#f4f8fe` (Hero background, alternating sections)
- `--plumco-navy`: `#253041` (rgb(37, 48, 65)) — Primary headings, appointment section background, footer background.
- `--plumco-dark`: `#162132` (Deepest footer & topbar background)
- `--plumco-text`: `#4c5165` (High-legibility readable paragraph text)
- `--plumco-yellow`: `#ffb600` / `#f59e0b` (5-Star reviews, subtle attention badge)
- `--plumco-white`: `#ffffff` (Pure white card surfaces)
- `--plumco-border`: `#e7edf6` (Subtle modern borders)

---

## 3. Section Architecture (Matching Plumco Exact 1:1)

1. **Top Bar Header:**
   - Left: Location info (Dynamic per State/City) + Dispatch Email (`dispatch@apexplumber.com`)
   - Right: Working Hours (`24/7 Mon - Sun Emergency Response`) + Social links / State Switcher.
2. **Main Navigation Header (`ApexNavbar.tsx`):**
   - Brand Logo: "Apex Plumber" in Trust Slate & Royal Blue with Drop & Wrench emblem
   - Nav Menu: Home, About Us, Services, Projects, Team, Estimator, Reviews, Blog, Contact
   - Right Box: Call Anytime with Phone Icon (`tel:`) + "Book Online" primary button.
3. **Hero Section (`Ready To Help You.`):**
   - Subtitle: `:: Highly Trained Staff`
   - Heading: `Ready To Help You.`
   - Body: `We are certified company. We provide best plumbing services for you & your company with zero overtime fees.`
   - CTAs: [Book Online] primary button + [Emergency Hotline] direct call badge
   - Plumber Cutout Image with backdrop badge and rating pill.
4. **3 Features Grid Under Hero (`wpo-features-section`):**
   - 1. `Book Online` (Online intake & schedule)
   - 2. `We Arrive` (Under 35-min GPS van arrival)
   - 3. `Solve Problem` (Master licensed diagnosis & repair)
5. **About Us Section (`Over 25+ Years Experience In Plumbing Service`):**
   - 25+ Years Experience floating circle badge + dual image montage.
   - Core checklist (On-Time Guarantee, Upfront Pricing, Licensed Master Plumbers).
   - Emergency hotline signature box.
6. **Best Services We Offer (6 Plumco Cards):**
   - Kitchen Plumbing
   - Gas Line Services
   - Water Line Repair
   - Bathroom Plumbing
   - Basement Plumbing
   - Remodeling & Repiping
7. **Fun Fact / Counter Section (`We Are Provide Always Different`):**
   - Royal Blue (`#0052da`) full-width band
   - Customer Review rating + 4 live counters (Running Projects, Team Members, Happy Clients, Awards Won).
8. **Our Latest Projects Gallery (Interactive Tabs):**
   - Categories: `ALL PROJECTS`, `BATHROOM`, `GAS LINE`, `KITCHEN`, `DRAIN & SEWER`
   - High-res project cards with hover overlays and zoom inspection.
9. **Dedicated Team Members:**
   - Master Plumbers with titles, verified license tags, and contact links.
10. **Online Booking For Appointments Form:**
    - Embedded 60-second appointment booking intake form on deep navy background.
11. **Testimonial Slider / Grid (`What People's Say`):**
    - 5-Star verified homeowner feedback with quotes and client avatars.
12. **Latest News & Blog:**
    - 3 insightful plumbing maintenance articles with publication dates and author tags.
13. **Plumco Signature Footer:**
    - Quick links, newsletter subscription, services list, licensing notice, and copyright.
14. **Global Utilities:**
    - Interactive State/City Switcher updating all phone numbers & municipal licenses
    - Canvas-confetti emergency dispatch confirmation ticket modal
    - Sticky mobile dock for 360px screens.
