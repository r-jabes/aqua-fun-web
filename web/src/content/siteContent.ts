export const siteContent = {
  brand: {
    name: "Acqua Fun",
    locationName: "Bugesera",
    fullName: "Acqua Fun Bugesera",
    tagline: "Splash days for the whole family.",
    socialHandle: "Acqua Fun Bugesera",
  },

  contact: {
    whatsapp: {
      display: "0783 799 890",
      href: "https://wa.me/250783799890",
      label: "Chat on WhatsApp",
    },
    phones: [
      { display: "0783 799 890", href: "tel:+250783799890" },
      { display: "0789 331 352", href: "tel:+250789331352" },
      { display: "0789 299 815", href: "tel:+250789299815" },
    ],
  },

  location: {
    area: "Bugesera",
    road: "Kanzenze Road",
    country: "Rwanda",
    fullAddress: "Kanzenze Road, Bugesera, Rwanda",
    mapsQuery: "Acqua Fun Bugesera Kanzenze Road",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Acqua%20Fun%20Bugesera%20Kanzenze%20Road",
    directionsNote: "Follow Kanzenze Road in Bugesera and look for Acqua Fun park signs.",
  },

  hours: {
    summary: "Open daily",
    open: "10:00 AM",
    close: "7:00 PM",
    display: "10:00 AM – 7:00 PM",
    note: "Hours may vary on public holidays — confirm on WhatsApp before you travel.",
  },

  /**
   * Listed swim rates for the website.
   * Keep these in sync with the operator — do not pull old poster promo prices blindly.
   * Set `publishRates` to false to hide numbers and push WhatsApp confirmation instead.
   */
  pricing: {
    publishRates: true,
    currencyLabel: "RWF",
    shortCurrency: "K",
    disclaimer:
      "Listed swim rates are a guide and may change. Confirm today’s admission on WhatsApp before your visit.",
    tickets: [
      {
        id: "kids",
        name: "Kids",
        amount: 12,
        unit: "K",
        detail: "Swim admission",
        highlight: true,
      },
      {
        id: "adults",
        name: "Adults",
        amount: 8,
        unit: "K",
        detail: "Swim admission",
        highlight: false,
      },
    ],
  },

  visitEssentials: ["Swimwear", "Towel", "Sunscreen", "Water shoes", "Big energy"],

  attractions: [
    {
      id: "wave-pool",
      name: "Wave Pool",
      cue: "Families · Thrill",
      description: "Catch the energy of moving water — splash, float and ride the rhythm together.",
      image: "/photos/facilities/wave-pool.webp",
      imageAlt: "Guests enjoying a water park wave pool",
      layout: "feature" as const,
      object: { src: "/objects/life-vest.webp", className: "attractions__object--vest" },
    },
    {
      id: "water-slides",
      name: "Water Slides",
      cue: "Kids · Thrill",
      description: "Race the curves and drop into the splash.",
      image: "/photos/facilities/water-slides.webp",
      imageAlt: "Colourful water park slides",
      layout: "tall" as const,
    },
    {
      id: "bubbles-pool",
      name: "Bubbles Pool",
      cue: "Kids · Play",
      description: "Foam-filled fun for sensory splash time.",
      image: "/photos/facilities/bubbles-pool.webp",
      imageAlt: "Children playing in a foam bubble pool at a water park",
      layout: "offset" as const,
      object: { src: "/objects/beach-ball.webp", className: "attractions__object--ball" },
    },
    {
      id: "family-pool",
      name: "Family Pool",
      cue: "Families",
      description: "Shared water space with slides and play for parents and kids together.",
      image: "/photos/facilities/family-pool.webp",
      imageAlt: "Family water playground at a water park",
      layout: "wide" as const,
    },
    {
      id: "super-pool",
      name: "Super Pool",
      cue: "All ages",
      description: "Wide, bright blue water made for floating and easy swimming.",
      image: "/photos/facilities/super-pool.webp",
      imageAlt: "Large open swimming area at a water park",
      layout: "panel" as const,
      object: { src: "/objects/inflatable-ring.webp", className: "attractions__object--ring" },
    },
    {
      id: "toys-games",
      name: "Toys & Games",
      cue: "Kids",
      description: "Colourful play energy between dips — spring riders and outdoor fun.",
      image: "/photos/facilities/toys-games.webp",
      imageAlt: "Kids play area beside a water park pool",
      layout: "finale" as const,
      object: { src: "/objects/starfish.webp", className: "attractions__object--starfish" },
    },
  ],

  faq: [
    {
      question: "What are the opening hours?",
      answer:
        "Acqua Fun Bugesera is open daily from 10:00 AM to 7:00 PM. Hours may change on holidays — message us on WhatsApp to confirm before you travel.",
    },
    {
      question: "How much does swimming cost?",
      answer:
        "Listed swim rates are 12K for kids and 8K for adults. Rates can change, so confirm today’s admission on WhatsApp before your visit.",
    },
    {
      question: "Where is the park?",
      answer:
        "We are on Kanzenze Road in Bugesera, Rwanda. Use Google Maps for Acqua Fun Bugesera or follow local park signs.",
    },
    {
      question: "Can I enquire on WhatsApp?",
      answer:
        "Yes. WhatsApp is the fastest way to ask about rates, hours, groups and directions: 0783 799 890.",
    },
    {
      question: "Do you host groups, schools or parties?",
      answer:
        "Yes. Send a group enquiry with your date, group size and needs. We’ll confirm availability and the right setup for your visit.",
    },
    {
      question: "What should we bring?",
      answer: "Swimwear, a towel, sunscreen, water shoes and lots of energy for a full splash day.",
    },
  ],

  groups: {
    title: "Groups & events",
    lead: "Schools, birthdays, churches and company outings — tell us what you need and we’ll help plan it.",
    audiences: ["Schools", "Birthdays", "Churches", "Company outings"],
    ctaLabel: "Send a group enquiry",
  },
} as const;

export type SiteContent = typeof siteContent;
