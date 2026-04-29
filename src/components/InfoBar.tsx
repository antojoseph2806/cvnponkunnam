import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACT_PHONE_DISPLAY } from "@/lib/contact";

const InfoBar = () => (
  <section className="bg-section-dark text-primary-foreground py-6 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <MapPin className="w-8 h-8 text-highlight-light" />
        <p className="font-semibold">Sree Rudra CVN Kalari</p>
        <p className="text-sm text-primary-foreground/70">Lakkoor, Kothala, Ponkunnam</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Phone className="w-8 h-8 text-highlight-light" />
        <p className="font-semibold">{CONTACT_PHONE_DISPLAY}</p>
        <p className="text-sm text-primary-foreground/70">Call &amp; WhatsApp</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Clock className="w-8 h-8 text-highlight-light" />
        <p className="font-semibold">7:00AM -12:00PM & 5:30PM - 7:30PM</p>
        <p className="text-sm text-primary-foreground/70">Sunday: 7:00AM - 12:00PM</p>
      </div>
    </div>
  </section>
);

export default InfoBar;
