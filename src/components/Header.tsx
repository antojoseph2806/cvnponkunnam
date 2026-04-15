import { useState } from "react";
import { Menu, X, ChevronDown, MapPin, Phone } from "lucide-react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "GURUKKAL", href: "#about" },
  {
    label: "SERVICES",
    href: "#services",
    children: [
      { label: "Ayurveda Treatments", href: "#services" },
      { label: "Kalari Rejuvenation", href: "#services" },
      { label: "Kalari Training", href: "#services" },
      { label: "Yoga Classes", href: "#services" },
    ],
  },
  { label: "GUEST HOUSE", href: "#packages" },
  { label: "GALLERY", href: "#gallery" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="hidden sm:inline">Temple Rd, Kaduthuruthy, Kottayam, KL</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+919447042422" className="flex items-center gap-1 hover:text-terracotta-light transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+91 9447042422</span>
          </a>
          <a href="tel:+919496186093" className="flex items-center gap-1 hover:text-terracotta-light transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+91 9496186093</span>
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="#" aria-label="Facebook" className="hover:text-terracotta-light transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-terracotta-light transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp" className="hover:text-terracotta-light transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-sm px-4 md:px-8 lg:px-16 flex items-center justify-between h-20">
        <a href="#home" className="font-heading text-xl font-bold text-primary">
          CVN Kalari
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 mt-2 bg-card shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors">
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors tracking-wide">
                {item.label}
              </a>
            )
          )}
          <a href="https://wa.me/919447042422" target="_blank" rel="noopener noreferrer" className="ml-4 bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent transition-colors">
            SEND A MESSAGE
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border shadow-lg">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="bg-muted">
                    {item.children.map((child) => (
                      <a key={child.label} href={child.href} onClick={() => setMobileOpen(false)} className="block px-10 py-2 text-sm text-foreground hover:text-primary">
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className="block px-6 py-3 text-sm font-medium text-foreground hover:text-primary">
                {item.label}
              </a>
            )
          )}
          <div className="p-4">
            <a href="https://wa.me/919447042422" target="_blank" rel="noopener noreferrer" className="block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded text-sm font-semibold">
              SEND A MESSAGE
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
