# 04 — Animation Guidelines

**Acqua Fun Bugesera**  
Motion principles, interaction specs, performance & accessibility  
Status: Proposed for review · Not for implementation yet

---

## 1. Motion thesis

Motion should feel like **water and play**: buoyant, soft, confident.

It should never feel like:

- a particle-effects landing page  
- a luxury dark-mode glow show  
- random floating stickers fighting for attention  

**Principle:** Motion supports hierarchy and presence. If removing an animation does not reduce clarity or delight meaningfully, cut it.

---

## 2. What we borrow from references

### AquaFun Dubai energy

- Entrance moments feel alive  
- Objects and scenes have physical presence  
- Joy is visible without chaos  

### Suntago clarity

- Practical areas stay calm  
- Navigation and planning UI do not over-animate  
- Motion never delays task completion  

---

## 3. Motion principles

1. **Purposeful, not constant** — animate arrivals, hovers, and a few ambient loops only.  
2. **Buoyancy over bounce-spam** — soft overshoot is fine; cartoon rubber-banding is not.  
3. **Water logic** — floats, gentle drifts, soft fades, ripple-like reveals.  
4. **One hero performance** — the hero can be the most animated scene; later sections quieter.  
5. **Functional calm** — visit/contact/forms use fast, minimal transitions.  
6. **Respect reduced motion** — provide non-animated equivalents.  
7. **Performance budget** — beauty cannot destroy load time or scroll FPS.  

---

## 4. Tokenised timing

From the design system:

| Token | Value | Use |
|---|---|---|
| `--dur-fast` | 160ms | Hovers, button feedback |
| `--dur-mid` | 320ms | Accordion, menu, image swap |
| `--dur-slow` | 700ms | Section enters |
| `--dur-float` | 4.5s–7s | Ambient object loops |
| `--ease-play` | `cubic-bezier(0.22, 1, 0.36, 1)` | Playful entrances |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | UI standards |

---

## 5. Global page motion

### 5.1 First load

**Allowed:**

- Hero photo subtle scale from 1.04 → 1.00 (slow, ~1.2s)  
- Headline fade/rise (12–24px)  
- CTA fade after headline  
- One decorative object floats in from an intentional edge  

**Not allowed:**

- Multi-stage intro splash screens  
- Forced wait before content  
- Logo animation longer than ~800ms  
- Auto-playing loud video with sound  

### 5.2 Scroll-driven reveals

Use sparingly on major sections:

- Section display title: fade + rise once  
- Facility photo: soft clip-reveal or fade  
- Stagger children by 60–100ms max (not long cascades)

**Threshold:** Trigger around 15–25% visibility.  
**Once only:** Prefer `once: true` to avoid re-trigger fatigue.

### 5.3 Parallax

- Hero only (or hero + one decorative band)  
- Low amplitude: 4–10% movement difference between layers  
- Disable on mobile if janky; replace with static depth  

---

## 6. Decorative object motion

Objects may use ambient loops:

| Motion | Spec |
|---|---|---|
| Float/bob | TranslateY ±6–14px over 5–7s, alternating ease |
| Soft sway | Rotate ±2–4deg over 6–8s |
| Drift | TranslateX ±8–16px only if composition allows |

**Rules:**

- Max 2 looping objects visible at once in viewport  
- No spinning beach balls as default  
- Pause loops when tab is hidden  
- Objects must not cause layout shift  

### Integration examples

- Hero: life vest gently bobs near headline edge  
- Facilities kids cluster: starfish slow sway near photo corner  
- Feeling section: beach ball barely drifts across organic shape edge  

---

## 7. Component interaction specs

### 7.1 Buttons

| State | Motion |
|---|---|---|
| Hover | Lift 2–4px + shadow increase (`--dur-fast`) |
| Active | Settle 1px down |
| Focus | Focus ring appear instantly (no delay) |

Accent yellow buttons may use a tiny scale `1 → 1.02` on hover — not a bounce loop.

### 7.2 Navigation

- Background: transparent → solid deep/white blur over 200–300ms on scroll  
- Mobile menu: full-screen panel slides/fades (`--dur-mid`) with large links  
- Links: underline or colour shift only — no wild motion  

### 7.3 Facility blocks

- Hover on desktop: photo subtle zoom `1 → 1.03` inside mask  
- Optional object accent reacts lightly (2–3px)  
- No flip-cards  

### 7.4 Gallery

- Lightbox open/close: mid duration fade + slight scale  
- Grid hover: restrained brightness/zoom  
- Avoid auto-scrolling marquees of faces (feels generic)

### 7.5 Accordions / FAQ

- Height animate with soft ease  
- Icon rotate 180deg  
- Keep under 300ms  

### 7.6 Forms

- Field focus: border/colour only  
- Success: short check confirmation, no confetti explosion  

---

## 8. Section-by-section motion plan

| Section | Ambient | Entrance | Hover |
|---|---|---|---|
| Hero | Object float + soft photo breath | Staged text/CTA | CTA lift |
| Feeling | Optional shape drift | Title + image once | Photo zoom |
| Facilities | Rare object sway | Per-block once | Photo zoom |
| Moments | None | Light stagger | Zoom/lightbox |
| Visit | None | Minimal fade | Link colour |
| Contact | None or tiny static object | Minimal | Button only |
| Footer | None | None | Link colour |

**Budget goal:** 2–3 intentional signature motions site-wide that people remember (hero float, facility reveals, CTA hover language) — not 20 micro-gimmicks.

---

## 9. Signature motion moments (proposed)

1. **Hero buoyant entrance** — brand and splash objects settle like they floated into frame.  
2. **Facility photo reveal** — each facility arrives like a wave peeling back.  
3. **CTA pulse on idle (optional, subtle)** — primary button soft glow/scale once every ~8s max on hero only; disable if distracting.  

If only one is approved, keep **#1**.

---

## 10. Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable floats, parallax, staged delays */
  /* Keep instant opacity state changes if needed for clarity */
}
```

Requirements:

- No essential content revealed only by animation  
- Menus and accordions still operable  
- Decorative loops off  

---

## 11. Performance guidelines

1. Prefer CSS transforms/opacity over layout properties.  
2. Avoid scroll listeners that force layout; use Intersection Observer.  
3. Compress object assets; consider static images before Lottie.  
4. If using Lottie/Rive: one complex animation max above the fold.  
5. Target stable scroll on mid-range mobile (especially Android).  
6. Do not animate giant full-resolution PNGs with filters.  

### Suggested library stance (later build)

- Prefer CSS + small utility (e.g. modest Motion/Framer usage) over heavy scroll-theatre frameworks  
- No particle systems for v1  

---

## 12. Accessibility & UX constraints

- Never autoplay sound  
- Never trap focus during decorative animation  
- Never delay form submission feedback for “delight”  
- Keep tap targets free of wandering hit-areas from moving objects  
- Moving objects must be non-interactive unless intentionally clickable (default: non-interactive)  

---

## 13. Anti-patterns (reject)

- Continuous parallax on every section  
- Text scrambling / glitch effects  
- Elastic bounce on all headings  
- Cursor-follow blobs site-wide  
- Confetti on page load  
- Hover effects that cover text  
- Scroll-jacking  
- Animated gradient backgrounds as primary spectacle  

---

## 14. QA checklist before launch

- [ ] Hero motion feels premium and calm under 3G CPU throttle  
- [ ] No CLS from late-loading animated assets  
- [ ] `prefers-reduced-motion` verified  
- [ ] Objects never obscure CTAs at common breakpoints  
- [ ] Visit/contact sections feel instant  
- [ ] Only 2–3 memorable motion ideas remain  

---

*Next: `05-content-and-assets.md` — copy inventory, photography, decorative assets, open content risks.*
