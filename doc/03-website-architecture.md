# 03 — Website Architecture

**Acqua Fun Bugesera**  
Information architecture, page compositions, journeys  
Status: Proposed for review · Not for implementation yet

---

## 1. Product goal

Convert curiosity into a planned visit.

Primary actions:

1. Understand what the park offers (real facilities)  
2. Feel excited to come  
3. Get location, contact, and visit essentials quickly  

Secondary actions:

- Browse gallery / social proof  
- Contact for groups, parties, current pricing  

---

## 2. Sitemap (v1)

Keep the first release focused. Prefer a powerful one-pager with clear anchors **plus** light secondary pages only if content volume demands it.

### Recommended v1 structure

```text
Home (/)
├─ #hero
├─ #feeling          → brand promise
├─ #facilities       → real attractions
├─ #moments          → gallery / atmosphere
├─ #visit            → plan your visit
├─ #contact          → phones, location, form
└─ footer

Optional secondary pages (phase 1.5):
/visit               → expanded practical guide
/gallery             → extended photo grid
/groups              → schools / parties / enquiry
/privacy             → if form collecting data
```

**Decision (approved):** Start with a **single immersive homepage** (AquaFun Dubai energy) organised with Suntago-like visit clarity via sticky nav anchors. Add `/visit` and `/groups` only if homepage becomes overcrowded.

---

## 3. Global navigation

### Desktop

| Item | Target | Notes |
|---|---|---|
| Logo | `/` | Brand first |
| Facilities | `#facilities` | Discovery |
| Moments | `#moments` | Social/atmosphere |
| Visit | `#visit` | Practical |
| Contact | `#contact` | Conversion |
| CTA button | `#visit` or `#contact` | **Plan your visit** |

### Mobile

- Hamburger / playful menu toggle  
- Large Fredoka links  
- CTA pinned at bottom of menu  
- Tap-to-call shortcut in header utility (optional but useful)

### Persistent utility (optional top micro-bar)

Only if it stays calm:

- Location short label: Bugesera · Kanzenze Road  
- Phone tap link  

Do **not** put historical promo prices in a sticky bar.

---

## 4. Homepage composition map

Each section has **one job**.

### 4.1 Hero — Enter the playground

**Job:** Brand recognition + desire in one viewport.

**Contains (and only these):**

1. Acqua Fun Bugesera brand at hero scale  
2. One oversized headline  
3. One short supporting sentence  
4. One CTA group (primary + optional secondary)  
5. One dominant full-bleed park photograph  
6. 1–2 anchored decorative objects integrated into the composition  

**Headline direction:**  
`Jump into the splash.` / `Family days, made wetter.` / `Bugesera’s colourful water playground.`

**Support line direction:**  
Wave pool, slides, bubbles and play — a sunny escape for all ages.

**CTA group:**

- Primary: Plan your visit  
- Secondary: See facilities  

**Layout:** Full-bleed image plane (not inset card). Brand must pass the brand test without relying on nav.

**Avoid:** hours widgets, price chips, floating badges, map embeds, facility lists, stats.

---

### 4.2 Feeling — Why come

**Job:** Emotional framing before facility inventory.

**Composition:** Offset editorial — large statement + one supporting paragraph + one atmospheric photo crop.

**Message pillars (pick 3 max as short lines, not icon soup):**

- Splash together (families)  
- Play all day (kids energy)  
- Cool water under Bugesera sun (place)

**Decorative strategy:** One soft organic shape behind type; optional single beach ball intersecting photo edge.

---

### 4.3 Facilities — Real attractions

**Job:** Present actual facilities as a destination story.

**Canonical facility set (do not invent beyond this):**

| Facility | Experience angle | Audience cue |
|---|---|---|
| Wave Pool | Moving water excitement; life-vest energy | Families / thrill |
| Water Slides | Speed and splash | Kids / thrill |
| Bubbles Pool | Foam play, sensory fun | Kids / families |
| Family Pool | Shared swim & play structure moments | Families |
| Super Pool | Open swimming, space to float | All ages |
| Toys & Games | Inflatable/animal play energy | Kids |
| Children’s play equipment | Spring riders, playground zone | Young kids |
| Family entertainment | Music, gatherings, day-out atmosphere | Families |

**Presentation pattern (anti-card):**

A vertical or horizontal **facility narrative**:

1. Featured opener: Wave Pool (largest composition)  
2. Pairing row: Water Slides + Bubbles Pool (asymmetric)  
3. Pairing row: Family Pool + Super Pool  
4. Kids cluster: Toys & Games + Children’s play equipment  
5. Closing note: Family entertainment as atmosphere, not a fake ride  

Each facility block:

- Real photo  
- Name  
- One sentence  
- Optional micro-label  

**Borrowed from Suntago:** clear zone-like scanning without inventing spa/jungle worlds.

**Borrowed from AquaFun Dubai:** bold naming + joy language, not dry amenity lists.

---

### 4.4 Moments — Gallery / social proof

**Job:** Prove the place is real and lively.

**Composition:** Creative masonry / staggered crops (not uniform squares). Mix:

- Wide wave pool energy  
- Close foam/bubbles texture  
- Kids on play equipment  
- Super pool calm blue  

Optional: Instagram handle prompt — **Acqua Fun Bugesera** — without embedding a noisy feed widget in v1.

**Avoid:** fake 5-star review carousels with invented quotes.

---

### 4.5 Visit — Plan your day

**Job:** Functional clarity. Calm design register.

**Content blocks:**

1. **Where** — Bugesera, Kanzenze Road + map link/embed  
2. **Contact** — `0789 331 352` / `0789 299 815`  
3. **When** — Opening hours **only if verified**; otherwise “Contact us for opening hours”  
4. **What to bring** — Swimwear, towel, sunscreen, smile (practical, light tone)  
5. **Good to know** — Family destination notes; safety supervision messaging at high level  
6. **Pricing stance** — Do **not** publish Instagram poster promo prices as current. Use:  
   - “Ask for today’s rates” / contact CTA, **or**  
   - Verified current prices once provided by the business  

**Layout:** Clean two-column practical layout on desktop; stacked on mobile. Expressive section title only; body is UI-calm.

This is the Suntago lesson: visitor logistics deserve a dedicated, trustworthy zone.

---

### 4.6 Contact — Talk to us

**Job:** Conversion for questions, groups, bookings.

**Contains:**

- Short invite headline  
- Clickable phones  
- Simple form: name, phone/email, message, party size (optional)  
- Social links (TikTok, Facebook, Instagram, Google as present on materials)  

**Decorative strategy:** Minimal. Maybe one soft life vest at the edge — never over the form.

---

### 4.7 Footer

**Job:** Orientation + legal essentials.

- Compact logo  
- Anchor links  
- Location + phones  
- Social icons  
- © Acqua Fun Bugesera  

Deep ocean field; quiet cyan accents.

---

## 5. Optional secondary pages

### `/visit`

Expand practical content if homepage visit section cannot hold:

- Directions notes  
- FAQ  
- Group arrival tips  
- What to expect on arrival  

Tone: calm, scannable, Suntago-like utility.

### `/groups`

For schools, birthdays, company outings:

- Who it’s for  
- What you can enquire about  
- Enquiry form  

Do not invent package prices without confirmation.

### `/gallery`

Only if moments section is intentionally short on homepage.

---

## 6. User journeys

### Journey A — Excited parent (Kigali weekend)

1. Lands on hero → feels desire  
2. Skims facilities → confirms kid-friendly options  
3. Checks visit → location + contact  
4. Calls or WhatsApp/phone  

**Design implication:** Facilities must be visual and fast; visit block near end but linked from sticky CTA early.

### Journey B — Local family who already knows the park

1. Wants hours / phone / directions  
2. Uses Visit or header call link  

**Design implication:** Practical info cannot be buried under endless storytelling.

### Journey C — Group organiser

1. Skims atmosphere  
2. Goes to contact/groups  
3. Sends enquiry  

**Design implication:** Contact path always visible.

---

## 7. Content hierarchy rules

1. Desire → proof → logistics → contact  
2. Never reverse into logistics-first homepage  
3. Never strand logistics at the very bottom with no nav path  
4. Every section title answers “what is this for?”  

---

## 8. Responsive architecture notes

| Section | Mobile behaviour |
|---|---|---|
| Hero | Single column; one object max; CTA full-width |
| Feeling | Type then image |
| Facilities | Snap-scroll story or stacked full-width compositions (avoid tiny equal cards) |
| Moments | 2-column staggered grid |
| Visit | Definition list / stacked fact blocks |
| Contact | Form full width; phones sticky-friendly |

---

## 9. SEO / page intent (lightweight)

Homepage title direction:

`Acqua Fun Bugesera | Family Water Park in Bugesera, Rwanda`

Primary entities to communicate:

- Water park  
- Bugesera  
- Family facilities listed accurately  
- Contact and location  

Do not keyword-stuff invented attractions.

---

## 10. Analytics events (for later build)

Track:

- CTA clicks (Plan your visit)  
- Phone link clicks  
- Facility deep links  
- Form submits  
- Map clicks  

---

## 11. Open questions for stakeholders

1. Single immersive homepage vs multi-page from day one?  
2. Is online ticketing required in v1, or contact-first?  
3. Confirmed opening hours for public display?  
4. Confirmed current pricing policy?  
5. Preferred contact channel: phone call, WhatsApp, form, or all?  
6. Should “La Bubu” mascot appear on the site, or stay social-only?

---

## 12. Architecture success criteria

- A new visitor understands the park offer in under 30 seconds  
- A returning visitor can find phone/location in under 5 seconds  
- Facilities shown match real park inventory  
- No section exists without a clear job  
- Mobile journey remains obvious under thumb reach  

---

*Next: `04-animation-guidelines.md` — motion principles and interaction specs.*
