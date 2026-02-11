export type Locale = 'fr' | 'de' | 'en';

export const nav = {
  fr: {
    home: 'Accueil',
    services: 'Prestations',
    medical: 'Événements médicaux',
    corporate: 'Événements d\'entreprise',
    team: 'Qui sommes-nous ?',
    years: 'Déjà 15 ans',
    references: 'Références',
    contact: 'Contact',
  },
  de: {
    home: 'Startseite',
    services: 'Dienstleistungen',
    medical: 'Medizinische Events',
    corporate: 'Firmenanlässe',
    team: 'Qui sommes-nous ?',
    years: 'Bereits 15 Jahre',
    references: 'Referenzen',
    contact: 'Kontakt',
  },
  en: {
    home: 'Home',
    services: 'Services',
    medical: 'Medical events',
    corporate: 'Corporate events',
    team: 'About us',
    years: '15 years',
    references: 'References',
    contact: 'Contact',
  },
} as const;

export const footer = {
  fr: {
    tagline: 'une équipe quadrilingue · connaissance du marché · longue expérience · précision et qualité',
    links: 'Liens',
    contact: 'Contact',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    cookies: 'Préférences de cookies',
    copyright: 'SoMICE Sàrl',
  },
  de: {
    tagline: 'viersprachiges Team · Marktkenntnis · langjährige Erfahrung · Präzision und Qualität',
    links: 'Links',
    contact: 'Kontakt',
    legal: 'Impressum',
    privacy: 'Datenschutz',
    cookies: 'Cookie-Einstellungen',
    copyright: 'SoMICE Sàrl',
  },
  en: {
    tagline: 'quadrilingual team · market knowledge · long experience · precision and quality',
    links: 'Links',
    contact: 'Contact',
    legal: 'Legal notice',
    privacy: 'Privacy policy',
    cookies: 'Cookie preferences',
    copyright: 'SoMICE Sàrl',
  },
} as const;

export const contactInfo = {
  address: 'Avenue des Figuiers 4, CH-1007 Lausanne',
  phone: '+41 78 682 39 84',
  email: 'contact@somice.ch',
  emailSuppliers: 'fournisseurs@somice.ch',
};
