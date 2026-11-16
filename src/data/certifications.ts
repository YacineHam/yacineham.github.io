/**
 * Certifications — language-neutral (proper nouns), so one shared list.
 * `url` is the public verification page of the credential.
 */
export interface Certification {
  name: string;
  issuer: string;
  /** Optional: shown after the issuer when set. */
  year?: number;
  /** Path relative to /public — real company logo SVG */
  logo: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    logo: '/logos/google.svg',
    url: 'https://google.accredible.com/d8031dd6-530f-4151-ad05-a4e0287cf0ce',
  },
  {
    name: 'CCNA Routing & Switching',
    issuer: 'Cisco',
    logo: '/logos/cisco.svg',
    url: 'https://www.credly.com/badges/e2ec14f9-0a74-47d9-aa78-e5975df862ee/linked_in_profile',
  },
];
