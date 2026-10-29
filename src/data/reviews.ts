/**
 * Mubarak Enterprises — Customer Reviews Data Model
 * 
 * POLICY ON TESTIMONIALS:
 * We do not publish fictional reviews, fabricated star ratings, or simulated customer quotes.
 * Only verified customer feedback with explicit permission from the buyer or workshop owner
 * will be listed here.
 * 
 * To add genuine reviews in the future, populate the `CUSTOMER_REVIEWS` array below.
 */

export interface CustomerReview {
  id: string;
  authorName: string;
  companyOrWorkshop?: string;
  location?: string;
  feedback: string;
  date: string;
  productReferenced?: string;
}

/**
 * Currently empty pending owner submission of genuine, verified client testimonials.
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [];

