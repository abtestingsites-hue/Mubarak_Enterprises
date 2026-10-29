import { BUSINESS_CONFIG } from '../config/business';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  ownerConfirmationRequired?: boolean;
  confirmationDetails?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-bulk-orders',
    question: 'Can I request bulk quantities?',
    answer: 'Yes, we welcome trade enquiries from fabrication workshops, contractors, and industrial plants. Because bulk pricing tiers and stock availability depend on the specific product, manufacturer schedules, and quantity required, please contact our sales desk directly via WhatsApp or phone to request a formal quotation. (Note: Bulk order terms and wholesale discount thresholds require confirmation with the business owner).',
    ownerConfirmationRequired: true,
    confirmationDetails: 'Bulk order discount tiers, minimum order quantities (MOQ), and trade credit terms require owner confirmation.'
  },
  {
    id: 'faq-request-quotation',
    question: 'How do I request a quotation?',
    answer: 'Browse our product catalogue, select the tool or machinery item to open its specification sheet, choose your required quantity, and click "Send Enquiry via WhatsApp". This pre-populates a structured message with model codes and specifications for you to review before sending. Alternatively, you can fill in the RFQ form in our Contact section or call our sales desk directly.',
    ownerConfirmationRequired: false,
    confirmationDetails: 'Procedure follows the digital catalogue WhatsApp RFQ workflow.'
  },
  {
    id: 'faq-stock-availability',
    question: 'Are all listed products currently in stock?',
    answer: 'The online catalogue serves as a comprehensive reference guide to the industrial tools, consumables, and machinery lines we supply. Due to regular workshop turnover and manufacturer production runs, live floor stock and delivery lead times must be confirmed with our desk prior to placing a firm purchase order.',
    ownerConfirmationRequired: false,
    confirmationDetails: 'Items are reference specifications; stock is subject to confirmation upon enquiry.'
  },
  {
    id: 'faq-brands-available',
    question: 'Which brands are available?',
    answer: 'We supply recognized industrial brands including Bosch, Makita, DeWalt, ESAB, Norton, Taparia, and Karam across power tools, abrasives, welding equipment, and safety PPE. Specific brand availability varies by product type and batch; please check with our desk for current supply lines. (Note: Listed brand names represent standard commercial supply lines, not exclusive or authorized distributorship agreements).',
    ownerConfirmationRequired: true,
    confirmationDetails: 'Formal distributorship certificates and authorized dealership claims require owner confirmation.'
  },
  {
    id: 'faq-unlisted-products',
    question: 'Can I enquire about a product that is not listed?',
    answer: 'Yes. If you need a specific tool rating, custom abrasive diameter, specialized welding electrode, or heavy workshop machine not featured on the website, contact us via WhatsApp with the manufacturer part number, specifications, or a reference photograph. We will check availability through our regional distributor network. (Note: Sourcing capability is subject to regional availability and cannot be unconditionally guaranteed).',
    ownerConfirmationRequired: false,
    confirmationDetails: 'Special sourcing is evaluated on a case-by-case basis.'
  },
  {
    id: 'faq-delivery-policy',
    question: 'Do you offer delivery?',
    answer: 'We coordinate local order pick-up in Coimbatore and arrange parcel transport dispatch for workshops across Western Tamil Nadu (including Tiruppur, Erode, and Pollachi). (Note: Exact delivery radius, freight charges, minimum order values, and transit timelines require owner confirmation and will be specified during quotation).',
    ownerConfirmationRequired: true,
    confirmationDetails: 'Delivery radiuses, freight coverage, transport carrier tie-ups, and transit timelines require owner confirmation.'
  },
  {
    id: 'faq-warranty-coverage',
    question: 'What warranty applies to a product?',
    answer: 'Warranty terms, duration, and authorized service procedures are provided directly by the respective equipment manufacturers (such as Bosch, Makita, or ESAB) for their power tools and welding machinery. Consumables and hand tools are covered by standard pre-use trade inspection. Please confirm the applicable manufacturer warranty terms with our desk prior to purchase.',
    ownerConfirmationRequired: true,
    confirmationDetails: 'Replacement procedures, manufacturer warranty claims, and return policies require owner confirmation.'
  },
  {
    id: 'faq-contact-business',
    question: 'How can I contact the business?',
    answer: `You can reach Mubarak Enterprises through our direct desk at ${BUSINESS_CONFIG.phoneDisplay}, message our WhatsApp desk at +${BUSINESS_CONFIG.whatsappNumber}, email ${BUSINESS_CONFIG.email}, or visit our registered location in Coimbatore during operating hours (${BUSINESS_CONFIG.workingHours.weekdays}). Note: Phone and WhatsApp coordinates are provisional staging lines awaiting final owner verification.`,
    ownerConfirmationRequired: true,
    confirmationDetails: 'Primary WhatsApp number, telephone, and shop unit address are provisional and require owner verification.'
  }
];

