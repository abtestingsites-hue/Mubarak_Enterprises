/**
 * Mubarak Enterprises — Central Business Configuration
 * 
 * AUDIT AND OWNER VERIFICATION NOTICE:
 * All business details in this file are provisional references based on the commercial
 * listing for Mubarak Enterprises in Coimbatore, Tamil Nadu.
 * 
 * Prior to live public deployment:
 * 1. Replace `whatsappNumber` and `phoneRaw` with the confirmed business telephone.
 * 2. Update `addressDisplay` with the verified shop unit number and street address.
 * 3. Verify standard working hours with the business owner.
 * 4. Set `isVerifiedByOwner: true` once confirmed.
 */

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  descriptor: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  addressDisplay: string;
  addressDisclaimer: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string; // international digits only (e.g. 919842012345)
  email: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  isVerifiedByOwner: boolean;
  notesForOwner: string;
  brandNotice: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Mubarak Enterprises",
  legalName: "Mubarak Enterprises Industrial Supplies",
  tagline: "Industrial Tools, Machinery & Workshop Equipment",
  descriptor: "Industrial Tools, Abrasives & Workshop Machinery Supplier",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  postalCode: "641001",
  addressDisplay: "Coimbatore Industrial Area, Tamil Nadu 641001, India",
  addressDisclaimer: "Provisional listing location. Exact shop/godown premises to be confirmed by owner.",
  googleMapsUrl: "https://maps.google.com/?q=Mubarak+Enterprises+Coimbatore+Tamil+Nadu",
  googleMapsEmbedQuery: "Coimbatore+Tamil+Nadu+Mubarak+Enterprises",
  phoneDisplay: "+91 99449 19969",
  phoneRaw: "+919944919969",
  whatsappNumber: "919944919969", // Format: 91XXXXXXXXXX
  email: "enquiries@mubarakenterprises.in",
  workingHours: {
    weekdays: "9:00 AM – 7:30 PM (Provisional)",
    saturday: "9:00 AM – 7:00 PM (Provisional)",
    sunday: "Closed (WhatsApp enquiries monitored)",
  },
  isVerifiedByOwner: false,
  notesForOwner: "Replace phone, WhatsApp number, and exact street address with verified shop credentials before marketing.",
  brandNotice: "Manufacturer brand names (Bosch, Makita, DeWalt, ESAB, Norton, Taparia, Karam) are reference industrial product lines supplied for trade enquiry. Mubarak Enterprises does not claim exclusive territorial distributorship unless confirmed in writing."
};
