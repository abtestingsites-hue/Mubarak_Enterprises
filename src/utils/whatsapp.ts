import { BUSINESS_CONFIG } from '../config/business';
import { WhatsAppEnquiryParams } from '../types';

/**
 * Sanitizes phone number to digits only (E.164 compatible without '+' sign)
 * e.g., "+91 98420-12345" -> "919842012345"
 */
export function sanitizeWhatsAppNumber(numberStr: string): string {
  return numberStr.replace(/\D/g, '');
}

/**
 * Builds the standard message text for Mubarak Enterprises WhatsApp enquiries.
 * 
 * Target format:
 * "Hello Mubarak Enterprises, I would like to enquire about [product name]. Model: [model if available]. Quantity: [quantity]. Please share the price and availability."
 */
export function buildWhatsAppMessage(params: WhatsAppEnquiryParams): string {
  const { productName, model, quantity, notes, customerName, companyName } = params;

  if (productName) {
    let msg = `Hello ${BUSINESS_CONFIG.name}, I would like to enquire about ${productName}.`;

    if (model && model.trim().length > 0) {
      msg += ` Model: ${model.trim()}.`;
    }

    if (quantity !== undefined && quantity !== null && quantity !== '') {
      msg += ` Quantity: ${quantity}.`;
    }

    msg += ` Please share the price and availability.`;

    if (customerName || companyName) {
      const buyerInfo = [customerName, companyName ? `(${companyName})` : ''].filter(Boolean).join(' ');
      msg += `\n\nFrom: ${buyerInfo}`;
    }

    if (notes && notes.trim().length > 0) {
      msg += `\nNote: ${notes.trim()}`;
    }

    return msg;
  }

  // General wholesale/commercial enquiry message
  let generalMsg = `Hello ${BUSINESS_CONFIG.name}, I am reaching out to enquire about industrial supplies and equipment for our operations in Coimbatore / Tamil Nadu.`;

  if (customerName || companyName) {
    const buyerInfo = [customerName, companyName ? `(${companyName})` : ''].filter(Boolean).join(' ');
    generalMsg += `\n\nFrom: ${buyerInfo}`;
  }

  if (notes && notes.trim().length > 0) {
    generalMsg += `\nRequirement: ${notes.trim()}`;
  }

  generalMsg += `\nPlease share your product catalogue and quotation procedure.`;
  return generalMsg;
}

/**
 * Generates the full wa.me link for WhatsApp enquiry
 */
export function generateWhatsAppUrl(params: WhatsAppEnquiryParams = {}): string {
  const cleanNumber = sanitizeWhatsAppNumber(BUSINESS_CONFIG.whatsappNumber);
  const message = buildWhatsAppMessage(params);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Helper to open WhatsApp in a new tab
 * Note: This triggers the WhatsApp app or WhatsApp Web; it does not claim the message was delivered.
 */
export function openWhatsAppEnquiry(params: WhatsAppEnquiryParams = {}): void {
  const url = generateWhatsAppUrl(params);
  window.open(url, '_blank', 'noopener,noreferrer');
}

