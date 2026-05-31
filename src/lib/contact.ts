export const CONTACT_PHONE_DISPLAY = "+91 99464 71378";
export const CONTACT_PHONE_E164 = "+919946471378";
export const CONTACT_PHONE_DIGITS = "919946471378";

export const CONTACT_TEL_HREF = `tel:${CONTACT_PHONE_E164}`;
export const CONTACT_WHATSAPP_HREF = `https://wa.me/${CONTACT_PHONE_DIGITS}`;

export const buildWhatsAppHref = (message?: string) =>
  message ? `${CONTACT_WHATSAPP_HREF}?text=${encodeURIComponent(message)}` : CONTACT_WHATSAPP_HREF;

/**
 * Build WhatsApp link for course enrollment inquiry
 */
export const buildCourseEnrollmentWhatsApp = (courseDuration: string, courseTitle: string) => {
  const message = `Hello! I'm interested in enrolling for the *${courseDuration} ${courseTitle}* program at AKM Sree Rudra CVN Kalari.

I would like to know more about:
• Training schedule and start dates
• Fee structure and payment options
• Accommodation details
• Prerequisites and requirements

Looking forward to hearing from you.

Thank you!`;

  return buildWhatsAppHref(message);
};
