import { USER_DATA } from "@/lib/data";

export const RESUME_URL = "/Razim_Manzoor_MBA_AI_Analytics.pdf";
export const WHATSAPP_URL = `https://wa.me/${USER_DATA.contact.phone.replace(/\D/g, "")}`;

export function whatsappDraft(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export function emailDraft(message: string) {
  return `mailto:${USER_DATA.contact.email}?subject=${encodeURIComponent("Project inquiry")}&body=${encodeURIComponent(message)}`;
}
