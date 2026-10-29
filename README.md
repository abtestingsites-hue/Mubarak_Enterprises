# Mubarak Enterprises — Industrial Tools & Workshop Equipment Website
### Coimbatore, Tamil Nadu, India

A high-performance, responsive wholesale digital catalogue and quotation enquiry platform built for **Mubarak Enterprises**, an industrial tools, abrasives, and workshop machinery supplier associated with Coimbatore's manufacturing ecosystem.

---

## 1. Project Overview & Business Purpose

Coimbatore is renowned as the engineering and manufacturing capital of Western Tamil Nadu—housing foundries, wet grinder manufacturers, agricultural pump and motor fabricators, textile machinery works, and precision CNC machine shops.

This website is designed specifically for **contractors, machine shop owners, maintenance teams, and industrial procurement managers** seeking reliable tools with clear specifications, volume availability, and direct WhatsApp / telephone enquiry pathways.

### Key Capabilities
- **Original Typographic Identity**: Clean, durable industrial wordmark and brand descriptor.
- **Product Range & Taxonomy**: 6 core industrial equipment categories (Power Tools, Hand Tools, Welding Equipment, Cutting Tools & Abrasives, Safety Equipment, Workshop Equipment).
- **Interactive Catalogue Engine**: Combined real-time search (by name, model code, applications), category filter pills, brand dropdown, sorting, active filter indicator, and clear-filters reset.
- **Dedicated Product Specification Sheet**: Detailed modal view for every tool featuring full technical parameters, application tags, packaging details, and an interactive quantity selector.
- **Dynamic WhatsApp RFQ Dispatch Utility**: Single configurable utility that generates formatted, URL-encoded WhatsApp messages (`wa.me`) with exact product names, models, quantities, and customer details.
- **Frequently Asked Questions (FAQ) with Schema.org JSON-LD**: Accessible plus/minus accordion layout answering 8 common commercial procurement questions with structured SEO data (`FAQPage`).
- **Customer Feedback & Trade Reputation**: Honest, transparent customer reviews section with a verified zero-fake-review policy, clear empty-state communication, and a direct WhatsApp feedback submission link.
- **Regional Contact & Location Hub**: Coimbatore address, direct phone link, interactive RFQ quotation form, and Google Maps direction actions.
- **Conservative & Honest Presentation**: Zero fabricated reviews, fake statistics, or counterfeit partner claims. Clear provisional notices until verified with the business owner.

---

## 2. Technology Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Test Runner**: [TSX](https://github.com/privatenumber/tsx) (Automated 139+ assertion suite)

---

## 3. Industrial Design Tokens

| Token | Hex Value | Application |
|---|---|---|
| **Deep Industrial Navy** | `#17364A` (`navy-800`) | Primary brand headers, cards, navigation |
| **Industrial Dark Navy** | `#0B1720` (`navy-950`) | Announcement bar, hero background, footer |
| **Safety Orange Accent** | `#F47A32` (`accent-500`) | Primary CTA buttons, badges, key focal points |
| **Dark Slate Text** | `#20313B` (`industrial-dark`) | High-contrast body copy |
| **Muted Slate** | `#65737D` (`industrial-muted`) | Specifications, model codes, descriptions |
| **Light Neutral Surface** | `#F4F6F8` (`industrial-light`) | Crisp background for catalogue cards |

---

## 4. Business Configuration & Owner Verification

All contact coordinates, WhatsApp numbers, shop addresses, and verification toggles are stored in one central file:

**`src/config/business.ts`**

```typescript
export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Mubarak Enterprises",
  legalName: "Mubarak Enterprises Industrial Supplies",
  tagline: "Industrial Tools, Machinery & Workshop Equipment",
  descriptor: "B2B Industrial Tools, Abrasives & Machinery Supplier",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  postalCode: "641001",
  addressDisplay: "Coimbatore Industrial Area, Tamil Nadu 641001, India",
  googleMapsUrl: "https://maps.google.com/?q=Mubarak+Enterprises+Coimbatore+Tamil+Nadu",
  phoneDisplay: "+91 98420 12345",   // Replace with verified shop phone
  phoneRaw: "+919842012345",
  whatsappNumber: "919842012345",    // Country code + 10 digits (digits only)
  email: "enquiries@mubarakenterprises.in",
  workingHours: {
    weekdays: "9:00 AM – 7:30 PM",
    saturday: "9:00 AM – 7:00 PM",
    sunday: "Closed (WhatsApp enquiries monitored)",
  },
  isVerifiedByOwner: false, // Set to true once verified by owner to hide review badge
};
```

### Owner Verification Checklist
Before public deployment, confirm the following with the business owner:
1. **Primary WhatsApp Business Number**: Update `whatsappNumber` in `src/config/business.ts`.
2. **Official Shop Address**: Add exact shop door number, street, and landmark in Coimbatore (e.g., Ganapathy, SIDCO Kurichi, or Dr. Nanjappa Road).
3. **Primary Telephone**: Update `phoneDisplay` and `phoneRaw`.
4. **GST / Official Trade Name**: If applicable, update `legalName`.
5. **Catalogue Confirmation**: Remove or add specific manufacturer brands (e.g. Bosch, Taparia, ESAB, Norton) based on official distributorships.

---

## 5. WhatsApp Enquiry Integration

The central utility in `src/utils/whatsapp.ts` constructs standardized quotation enquiries:

### Product-Specific Message Format:
> *"Hello Mubarak Enterprises, I would like to enquire about [Product Name]. Model: [Model]. Quantity: [Quantity]. Please share the price and availability."*

### General RFQ Format:
> *"Hello Mubarak Enterprises, I am reaching out to enquire about industrial supplies and equipment for our operations in Coimbatore / Tamil Nadu.*  
> *From: [Name] ([Company])*  
> *Requirement: [Details]*  
> *Please share your product catalogue and quotation procedure."*

All messages are URL-encoded and dispatched via standard `https://wa.me/[number]?text=[encodedMessage]` links.

---

## 6. Project Architecture

```
Mubarak Enterprises/
├── index.html                  # HTML entry point with Inter & JetBrains Mono fonts
├── package.json                # Project dependencies & scripts
├── tsconfig.json               # TypeScript strict configuration
├── vite.config.ts              # Vite React configuration
├── tailwind.config.js          # Industrial theme tokens & colors
├── postcss.config.js           # PostCSS Tailwind plugins
├── public/
│   └── favicon.svg             # Precision ME industrial gear monogram favicon
├── scripts/
│   ├── verify.ts               # Automated 139-assertion verification test
│   └── check-images.ts         # Live HTTP 200 accessibility checker for image URLs
├── src/
│   ├── App.tsx                 # Main application layout & modal controller
│   ├── main.tsx                # React DOM root mounting
│   ├── index.css               # Global Tailwind directives & custom scrollbars
│   ├── config/
│   │   └── business.ts         # Central business config (Phone, WhatsApp, Location)
│   ├── types/
│   │   └── index.ts            # Product, Category, Filter, FAQ & Review definitions
│   ├── data/
│   │   ├── products.ts         # 24 industrial products across 6 core categories
│   │   ├── faqs.ts             # 8 commercial procurement FAQs with verification metadata
│   │   └── reviews.ts          # Structured client reviews model (initialized empty)
│   ├── utils/
│   │   └── whatsapp.ts         # Reusable wa.me link generation utility
│   └── components/
│       ├── Header.tsx          # Top bar, wordmark, nav links & mobile menu drawer
│       ├── Hero.tsx            # Industrial hero with technical specs card
│       ├── CategoryShowcase.tsx# 6 equipment category cards with 1-click filter
│       ├── Catalogue.tsx       # Search, category pills, brand filter & sorting
│       ├── ProductCard.tsx     # Card with image, specs preview & quick enquiry
│       ├── ProductDetailModal.tsx # Spec table, bulk quantity chips & live message preview
│       ├── BulkEnquiryBanner.tsx  # Industrial B2B & contractor RFQ banner
│       ├── AboutSection.tsx    # Conservative, honest profile of Mubarak Enterprises
│       ├── CustomerReviewsSection.tsx # Honest zero-fake-review empty state with WhatsApp CTA
│       ├── FAQSection.tsx      # Accessible plus/minus accordion with FAQPage JSON-LD
│       ├── ContactSection.tsx  # Location, operating hours, phone & interactive RFQ form
│       ├── Footer.tsx          # Industrial site map, disclaimer & contact info
│       └── ProvisionalBadge.tsx# Collapsible owner review banner with checklist
```

---

## 7. Commercial FAQ & Customer Trust Architecture

### 7.1 Frequently Asked Questions (`FAQSection.tsx`)
The FAQ section provides immediate answers to typical commercial procurement questions while adhering strictly to conservative truth-in-advertising principles:

1. **Can I request bulk quantities?** Explains quotation request flow without guaranteeing acceptance prior to owner review.
2. **How do I request a quotation?** Guides users through product selection, WhatsApp enquiry dispatch, and specification submission.
3. **Are all listed products currently in stock?** Clarifies that online items represent sample/reference catalogue listings and stock must be confirmed.
4. **Which brands are available?** States brand availability varies and clarifies that listing does not imply exclusive or authorized distributorship without confirmation.
5. **Can I enquire about a product that is not listed?** Welcomes unlisted inquiries with specifications or drawings without promising immediate sourcing.
6. **Do you offer delivery?** Explicitly indicates delivery coverage and charges require business confirmation.
7. **What warranty applies to a product?** Explains that warranties are governed by original manufacturers.
8. **How can I contact the business?** Points to verified contact coordinates in `BUSINESS_CONFIG`.

### 7.2 Structured Data (Schema.org JSON-LD)
`FAQSection.tsx` injects a valid `application/ld+json` script containing `@type: "FAQPage"`, matching all 8 questions and answers for search engine indexing.

### 7.3 Honest Customer Reviews Policy (`CustomerReviewsSection.tsx`)
In accordance with B2B credibility principles:
- **Zero Fake Reviews**: `CUSTOMER_REVIEWS` is initialized as an empty array (`[]`).
- **Zero Fabricated Star Ratings**: No 5-star ratings or artificial customer names/avatars are displayed.
- **Transparent Empty State**: Displays *"Customer feedback will be featured here as reviews become available"* and provides a direct WhatsApp CTA inviting verified workshops to submit feedback.

---

## 8. Commands to Run & Verify

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Accessible at: `http://localhost:5173/`

### Run Verification Test Suite (166 Automated Checks)
```bash
npm test
```
Verifies category structure, product attributes, specification matrices, WhatsApp number sanitization, all 8 FAQ entries, and empty review initializations.

### Verify Image URL Reachability
```bash
npx tsx scripts/check-images.ts
```
Queries all 24 unique image URLs via HTTP HEAD requests to confirm 0 broken links (100% HTTP 200 OK).

### Run Headless Visual & Interactive Audit (Puppeteer)
```bash
npx tsx scripts/visual-audit.ts
```
Launches headless Chrome to audit 1440px desktop, 1024px laptop, 768px tablet, 390px mobile, and 360px small mobile viewports:
- Verifies zero horizontal overflow across all 5 breakpoints.
- Verifies zero console errors.
- Tests category pill selection and active state.
- Tests search input, live filtering, and filter reset.
- Tests product detail modal, bulk quantity chips, and WhatsApp dispatch preview.
- Tests customer reviews empty state and feedback CTA.
- Tests FAQ accordion toggling with mouse and keyboard (Enter key navigation) with dynamic `aria-expanded` updates.
- Verifies Schema.org `FAQPage` JSON-LD structure.
- Tests responsive mobile navigation drawer.

### Run TypeScript Strict Typecheck
```bash
npx tsc --noEmit
```

### Build for Production
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 9. Deployment Options

The project is a standard Vite Single-Page Application (SPA) with zero backend dependency overhead:

1. **Vercel / Netlify**: Connect repository or run `npm run build`; set publish directory to `dist`.
2. **Cloudflare Pages / GitHub Pages**: Build command `npm run build`, output directory `dist`.
3. **Shared / Static Hosting**: Upload the contents of the `dist/` directory to any static web host or Apache/Nginx web root.

