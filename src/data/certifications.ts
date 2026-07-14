/**
 * Certifications — language-neutral (proper nouns), so one shared list.
 * TODO Yacine: replace each `url` with the real verification/credential link
 * (e.g. your Credly badge URL) and confirm the years.
 */
export interface Certification {
  name: string;
  issuer: string;
  year: number;
  /** Path relative to /public — real company logo SVG */
  logo: string;
  /** Brand accent color used to tint the logo container */
  brandColor: string;
  /** Light background tint for the logo pill */
  brandBg: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    year: 2024,
    logo: '/logos/google.svg',          // Google multicolor G
    brandColor: '#4285F4',
    brandBg: 'rgba(66, 133, 244, 0.10)',
    url: 'https://www.credly.com/users/yacine-hamitou', // TODO: real Credly badge URL
  },
  {
    name: 'IT Infrastructure Services',  // 2nd
    issuer: 'Google',
    year: 2021,
    logo: '/logos/google.svg',
    brandColor: '#4285F4',
    brandBg: 'rgba(66, 133, 244, 0.10)',
    url: '', // TODO: Coursera certificate link
  },
  {
    name: 'CCNA — Routing & Switching',  // 3rd
    issuer: 'Cisco',
    year: 2021,
    logo: '/logos/cisco.svg',
    brandColor: '#1BA0D7',
    brandBg: 'rgba(27, 160, 215, 0.12)',
    url: '', // TODO: verification link if available
  },
  {
    name: 'Git & GitHub',
    issuer: 'Codecademy',
    year: 2021,
    logo: '/logos/github.svg',
    brandColor: '#24292F',
    brandBg: 'rgba(36, 41, 47, 0.08)',
    url: '', // TODO: Codecademy certificate link
  },
];
