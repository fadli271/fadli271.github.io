import contactInfo from "@/config/contact-info.json";

export type ContactInfo = typeof contactInfo;

export const CONTACT_INFO: ContactInfo = contactInfo;

export const buildWhatsAppLink = (message?: string) => {
  const text = message ?? contactInfo.whatsapp.defaultMessage ?? "";
  const query = text ? `?text=${encodeURIComponent(text)}` : "";

  return `https://wa.me/${contactInfo.whatsapp.number}${query}`;
};
