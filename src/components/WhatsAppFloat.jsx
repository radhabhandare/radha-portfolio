import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${profile.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}