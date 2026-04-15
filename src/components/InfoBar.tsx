import { MapPin, Phone, Clock } from "lucide-react";

const InfoBar = () => (
  <section className="bg-section-dark text-primary-foreground py-6 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="flex flex-col items-center gap-2">
        <MapPin className="w-8 h-8 text-terracotta-light" />
        <p className="font-semibold">CVN Kalari (EP Vasudeva Gurukkal)</p>
        <p className="text-sm text-primary-foreground/70">Temple Rd, Kaduthuruthy, Kottayam, KL</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Phone className="w-8 h-8 text-terracotta-light" />
        <p className="font-semibold">+91 9447042422 /</p>
        <p className="text-sm text-primary-foreground/70">+91 9496186093</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Clock className="w-8 h-8 text-terracotta-light" />
        <p className="font-semibold">7:00AM -12:00PM & 5:30PM - 7:30PM</p>
        <p className="text-sm text-primary-foreground/70">Sunday: 7:00AM - 12:00PM</p>
      </div>
    </div>
  </section>
);

export default InfoBar;
