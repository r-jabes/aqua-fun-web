# 02 — Design System

**Acqua Fun Bugesera**  
Design tokens, type, components, layout rules  
Status: Proposed for review · Not for implementation yet

---

## 1. Purpose

This system translates the **Splash Composition** brand direction into enforceable tokens and UI rules.

Goals:

- Keep creativity consistent across pages  
- Protect readability and accessibility  
- Prevent “fun = chaos” drift during build  
- Make mobile behaviour intentional from the start  

---

## 2. Design tokens

### 2.1 Colour tokens

#### Brand core

| Token | Hex | Role |
|---|---|---|
| `--color-ocean-blue` | `#0878D1` | Primary brand, key CTAs, links on light |
| `--color-splash-cyan` | `#19C6E8` | Highlights, secondary accents, water energy |
| `--color-sunshine-yellow` | `#FFD33D` | Joy accents, kids moments, selected highlights |
| `--color-coral` | `#FF684F` | Warm accent, urgency, slide energy |
| `--color-bubble-pink` | `#FF70AD` | Playful accent (rare; kids/toys moments) |
| `--color-deep-ocean` | `#102D4C` | Primary text, dark sections, footer |
| `--color-water-white` | `#F5FBFF` | Page canvas, calm sections |

#### Supporting neutrals

| Token | Hex | Role |
|---|---|---|
| `--color-white` | `#FFFFFF` | Surfaces, contrast on photos |
| `--color-mist` | `#E7F4FC` | Soft section alternation |
| `--color-foam` | `#D5EEF9` | Dividers, subtle chips |
| `--color-slate` | `#5B6B7C` | Secondary text |
| `--color-ink` | `#0B1C2E` | Highest-contrast text (optional on bright yellow) |

#### Semantic

| Token | Value | Role |
|---|---|---|
| `--color-focus` | `#0878D1` | Focus rings |
| `--color-success` | `#1FA97A` | Confirmation only |
| `--color-danger` | `#D64545` | Errors only |
| `--color-overlay` | `rgba(16, 45, 76, 0.55)` | Photo scrims when needed |

#### Section colour roles (do not invent new pairs casually)

| Section mood | Field | Accent | Text |
|---|---|---|---|
| Hero splash | Photo + soft cyan wash | Yellow or coral (one) | White / deep ocean |
| Discovery / facilities | Water white | Ocean blue | Deep ocean |
| Kids / toys | Mist or soft pink wash (very light) | Bubble pink or yellow | Deep ocean |
| Visit / practical | Water white | Ocean blue | Deep ocean + slate |
| CTA band | Ocean blue or deep ocean | Yellow | White |
| Footer | Deep ocean | Splash cyan | White / foam |

**Hard rule:** Never use all brand colours in one section. Cap at **field + 1 accent + optional soft support**.

#### Contrast rules

- Body text on water white: `--color-deep-ocean` or `--color-slate`  
- Text on sunshine yellow: `--color-ink` (not white)  
- Text on ocean blue / deep ocean: white  
- Large display on photos: white with soft shadow **or** solid deep-ocean plate behind type — never thin white type on busy water  

---

### 2.2 Typography tokens

#### Families

| Role | Family | Fallback |
|---|---|---|
| Display | **Fredoka** | `Fredoka, "Nunito", "Segoe UI Rounded", sans-serif` |
| Body / UI | **Plus Jakarta Sans** | `"Plus Jakarta Sans", "Manrope", system-ui, sans-serif` |

**Decision:** Fredoka over Baloo 2 for cleaner editorial sizing at huge scales. Plus Jakarta Sans over Manrope for sharper UI labels and forms.

#### Type scale (desktop)

| Token | Size / line / weight | Use |
|---|---|---|
| `--text-display-xl` | 72–96px / 0.95 / 600–700 | Hero only |
| `--text-display-lg` | 56–64px / 1.0 / 600 | Section openers |
| `--text-display-md` | 40–48px / 1.05 / 600 | Facility titles |
| `--text-title` | 28–32px / 1.15 / 600 | Subsections |
| `--text-body-lg` | 18–20px / 1.55 / 400–500 | Lead paragraphs |
| `--text-body` | 16–17px / 1.6 / 400 | Default body |
| `--text-ui` | 14–15px / 1.4 / 500–600 | Nav, buttons, labels |
| `--text-caption` | 12–13px / 1.4 / 500 | Meta, legal, image captions |

#### Type scale (mobile)

| Token | Size guidance |
|---|---|---|
| Display XL | 40–48px |
| Display LG | 32–40px |
| Display MD | 28–32px |
| Body | 16px minimum |

#### Typography rules

1. One display voice per viewport.  
2. Display lines preferably 2–5 words.  
3. Tracking: slightly tight on large Fredoka (`-0.02em` to `-0.03em`); normal on body.  
4. Never set long paragraphs in Fredoka.  
5. Buttons and form labels always Plus Jakarta Sans.

---

### 2.3 Spacing tokens

Base unit: **8px**

| Token | Value |
|---|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px |
| `--space-10` | 128px |

#### Section rhythm

| Context | Desktop padding | Mobile padding |
|---|---|---|
| Hero | `clamp(64px, 10vh, 120px)` vertical | 48–72px |
| Standard section | 96–128px vertical | 64–80px |
| Practical / FAQ | 64–96px vertical | 48–64px |
| Content max width | 1120–1200px | Fluid with 20–24px gutters |
| Full-bleed media | 100vw (ignore content max) | 100vw |

---

### 2.4 Radius tokens

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 8px | Inputs, small controls |
| `--radius-md` | 16px | Buttons, chips |
| `--radius-lg` | 24px | Media frames when needed |
| `--radius-xl` | 40px | Soft organic panels (rare) |
| `--radius-pill` | 999px | **Avoid by default** — only for true toggle/chip UI |

**Critical:** Do not default every container to large rounded cards. Prefer:

- Squared/soft-rect media with creative crop masks  
- Organic blob masks for decorative colour fields  
- Straight edges for practical tables/lists  

---

### 2.5 Shadow tokens

| Token | Value | Use |
|---|---|---|
| `--shadow-soft` | `0 8px 24px rgba(16, 45, 76, 0.08)` | Floating objects, light elevation |
| `--shadow-media` | `0 16px 40px rgba(16, 45, 76, 0.12)` | Hero/object depth |
| `--shadow-focus` | `0 0 0 3px rgba(25, 198, 232, 0.45)` | Accessibility focus |

Avoid multi-layer glam shadows and glow effects.

---

### 2.6 Border tokens

| Token | Value |
|---|---|---|
| `--border-subtle` | `1px solid rgba(16, 45, 76, 0.08)` |
| `--border-strong` | `2px solid #0878D1` |
| `--border-light` | `1px solid rgba(255,255,255,0.25)` |

---

### 2.7 Motion tokens

| Token | Value |
|---|---|---|
| `--ease-play` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| `--dur-fast` | 160ms |
| `--dur-mid` | 320ms |
| `--dur-slow` | 700ms |
| `--dur-float` | 4.5s–7s (loop) |

Full behaviour rules: `04-animation-guidelines.md`.

---

### 2.8 Z-index scale

| Token | Value | Use |
|---|---|---|
| `--z-base` | 0 | Content |
| `--z-media` | 1 | Photos |
| `--z-object` | 2 | Decorative 3D objects |
| `--z-content` | 3 | Text blocks |
| `--z-nav` | 40 | Header |
| `--z-overlay` | 50 | Menus/modals |

Decorative objects never sit above primary CTAs or sticky nav.

---

## 3. Layout system

### 3.1 Grid

- Desktop: 12-column grid, 24px gutters  
- Tablet: 8-column  
- Mobile: 4-column  

### 3.2 Composition patterns (preferred)

Use these instead of repetitive cards:

1. **Hero stage** — full-bleed photo, brand, one headline, one support line, CTA group, 1–2 anchored objects  
2. **Offset editorial** — large type left / bleeding photo right (or reverse)  
3. **Facility ribbon** — horizontal narrative of real facilities with asymmetric crops (not equal cards)  
4. **Photo interrupt** — full-bleed image band with short overlay caption  
5. **Practical strip** — quiet list/grid for hours, location, contact  
6. **CTA plunge** — deep ocean/ocean blue band with single action  

### 3.3 Anti-patterns

- Equal 3-column rounded attraction cards as the default  
- Icon + title + paragraph repeated six times identically  
- Nested cards inside cards  
- Hero overloaded with hours, map, prices, social proof, and facilities  

---

## 4. Component direction

### 4.1 Buttons

| Variant | Style |
|---|---|
| Primary | Ocean blue fill, white text, radius-md, strong hover lift (2–4px) |
| Secondary | White/water-white fill, ocean blue text + border |
| Accent | Sunshine yellow fill, ink text (use once per viewport max) |
| Ghost | Transparent + white text (on photos/dark only) |

Min height: 48px. Min tap target: 44×44px.

### 4.2 Navigation

- Transparent-to-solid on scroll over hero  
- Compact logo left  
- Primary links: Facilities, Visit, Gallery, Contact (final IA in architecture doc)  
- Persistent CTA: **Plan your visit** or **Contact**  
- Mobile: full-screen playful menu (not a cramped dropdown), with large type and one clear CTA  

Borrowed from Suntago: make “planning a visit” feel like a first-class path, not buried footer info.

### 4.3 Facility presentation (not cards-by-default)

Each facility gets a **composition block**:

- Distinctive photo crop  
- Short name in Fredoka  
- One sentence benefit  
- Optional tiny motif object  
- Optional “good for” micro-label (Families / Kids / Thrill)  

Use a horizontal scroll narrative on mobile rather than six stacked identical cards, if it preserves clarity.

### 4.4 Forms / contact

Calm visual register:

- Water white surface  
- Clear labels  
- Ocean focus states  
- No decorative objects competing with inputs  

### 4.5 FAQ / practical info

Accordion or stacked Q&A with excellent scanability. Expressive type only for section title; answers stay body text.

### 4.6 Media frames

Prefer:

- Straight edges with creative overflow  
- Organic wave/blob masks for accent moments  
- Occasional large radius (`--radius-lg`) for portrait crops  

Avoid: every image in identical rounded rectangle cards with equal drop shadows.

---

## 5. Iconography

- Custom simple line-plus-fill icons for facilities (wave, slide, bubbles, toys, pool, family)  
- Stroke weight consistent (~1.75–2px at 24px)  
- Colour: ocean blue on light; white on dark  
- Icons support labels; they never replace photography as the main facility communication  

Do not use emoji as UI icons.

---

## 6. Decorative object system (UI rules)

| Rule | Detail |
|---|---|
| Scale | Objects sized relative to headline (roughly 20–45% of display width at desktop) |
| Placement | Anchored to edges, overlaps, or photo corners — never random empty corners |
| Shadow | `--shadow-soft` / `--shadow-media` only |
| Quantity | 1–2 per section |
| Interaction | Slow float optional; no aggressive spin |
| Accessibility | `aria-hidden="true"`; never convey meaning only via decoration |
| Performance | Prefer optimized WebP/AVIF or lightweight Rive/Lottie sparingly; static PNG/WebP acceptable |

---

## 7. Responsive behaviour principles

Breakpoints (proposed):

| Name | Min width |
|---|---|---|
| Mobile | 0 |
| Tablet | 768px |
| Desktop | 1024px |
| Wide | 1280px |

### Behaviour

1. **Hero:** stack brand → headline → support → CTA → image; objects reduce to one or hide if they harm tap targets.  
2. **Asymmetry:** becomes vertical rhythm, not forced side-by-side squeeze.  
3. **Type:** scale down display sizes; keep weight and personality.  
4. **Touch:** no hover-only essential actions.  
5. **Practical info:** phone numbers become tap-to-call; maps open externally.  
6. **Motion:** reduce travel distances; honour `prefers-reduced-motion`.  

---

## 8. Accessibility baseline

- WCAG AA contrast for text and essential controls  
- Visible focus states  
- Keyboard-accessible nav and accordions  
- Alt text for real photos; empty alt for pure decoration  
- No information carried by colour alone  
- Forms with associated labels and error text  

Creativity is not an accessibility exemption.

---

## 9. Content density rules

| Surface | Density |
|---|---|
| Hero / discovery | Low — one idea |
| Facilities | Medium — one facility idea at a time |
| Visit / FAQ / contact | Higher — scannable facts |
| Footer | Structured links + contact essentials |

---

## 10. Implementation notes (for later build)

Suggested token delivery:

- CSS variables in `:root`  
- Optional theme map in JS/TS for component libraries  
- Font loading: `display=swap`; preload Fredoka + Plus Jakarta Sans primary weights  

Do not implement in this phase.

---

## 11. Review checklist

- [ ] Colour roles feel distinctive and not rainbow-everywhere  
- [ ] Fredoka / Plus Jakarta pairing approved  
- [ ] Radius philosophy (restrained) approved  
- [ ] Component set covers marketing + practical needs without card addiction  
- [ ] Responsive rules protect the brand test on mobile  

---

*Next: `03-website-architecture.md` — pages, sections, user journeys.*
