import { SiteConfig, SocialLinks } from './types';

/**
 * ============================================================
 * WEBSITE CONFIGURATION
 * ============================================================
 * All core portfolio properties are managed in this centralized file.
 * 
 * - profileImage: Path to candidate photo. Default is 'assets/profile.jpg'.
 * - cvFile: Path to candidate CV document. Default is 'assets/cv.pdf'.
 * - showPrivateInformation: Default false. Set to true only if you wish
 *   to expose sensitive personal details (e.g., NID, Blood Group, Father's Name).
 */
export const SITE_CONFIG: SiteConfig = {
  name: "Md. Al Helal Sarkar",
  title: "Administration & Operations Professional",
  eyebrow: "ADMINISTRATION • OPERATIONS • COMPLIANCE",
  profileImage: "assets/profile.jpg",
  cvFile: "assets/cv.pdf",
  email: "alhelal711@gmail.com",
  phone: "+880 1717-845557", // Direct contact number
  location: "Dhaka, Bangladesh",
  showPrivateInformation: false, // Protected by default
};

/**
 * ============================================================
 * SOCIAL LINKS CONFIGURATION
 * ============================================================
 * If an entry is empty (""), the corresponding social link icon
 * is automatically hidden throughout the entire website.
 */
export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/", // Add your LinkedIn profile URL here
  facebook: "", // Add your Facebook profile URL if desired
  github: "",   // Add your GitHub profile URL if desired
  whatsapp: "", // Add your WhatsApp direct link (e.g. https://wa.me/88017...)
};

/**
 * Confidential Information (displayed ONLY if showPrivateInformation is true)
 */
export const CONFIDENTIAL_INFO = {
  fatherName: "Confidential / Provided on formal request",
  motherName: "Confidential / Provided on formal request",
  dateOfBirth: "Confidential / Provided on formal request",
  maritalStatus: "Confidential / Provided on formal request",
  religion: "Confidential / Provided on formal request",
  bloodGroup: "Confidential / Provided on formal request",
  nationalId: "Confidential / Provided on formal request",
};
