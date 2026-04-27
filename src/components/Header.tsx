"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  {
    label: "SERVICES",
    href: "/services",
    children: [
      { label: "Ayurveda Treatments", href: "/services/ayurveda-treatments" },
      { label: "Kalari Rejuvenation", href: "/services/kalari-rejuvenation" },
      { label: "Kalari Training", href: "/services/kalari-training" },
      { label: "Yoga Classes", href: "/services/yoga-classes" },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
  { label: "CONTACT US", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Main nav */}
      <nav className="relative flex h-20 items-center justify-between bg-section-dark/95 px-4 shadow-sm backdrop-blur-md md:px-8 lg:px-16">
        <Link href="/" className="flex items-center">
          <img
            src="/assets/logo-wide.png"
            alt="A.K.M Sree Rudra"
            className="h-12 md:h-14 w-auto max-w-[220px] md:max-w-[320px] object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="flex items-center gap-1 rounded-full border border-border/80 bg-white px-3 py-2 shadow-[0_18px_40px_-24px_rgba(18,41,25,0.38)] ring-1 ring-white/60 backdrop-blur-xl">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);

              return item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="relative inline-flex min-w-[118px] items-center justify-center gap-1.5 overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] transition-all duration-300"
                  >
                    <span
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        active
                          ? "scale-100 bg-[linear-gradient(135deg,rgba(202,242,156,0.95),rgba(168,235,124,0.95))] shadow-[0_10px_24px_-14px_rgba(49,95,34,0.75)]"
                          : "scale-95 bg-transparent opacity-0 group-hover:scale-100 group-hover:bg-secondary/85 group-hover:opacity-100"
                      }`}
                    />
                    <span
                      className={`absolute bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                        active ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-70 group-hover:scale-100"
                      }`}
                    />
                    <span className={`relative z-10 ${active ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                      {item.label}
                    </span>
                    <ChevronDown
                      className={`relative z-10 h-3.5 w-3.5 transition-transform duration-300 ${
                        active ? "text-primary" : "text-foreground/70 group-hover:text-primary group-hover:translate-y-[1px]"
                      }`}
                    />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full mt-3 w-[230px] -translate-x-1/2 rounded-2xl border border-border/70 bg-card/95 p-2 opacity-0 shadow-[0_22px_45px_-28px_rgba(17,38,24,0.42)] backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => {
                      const childActive = isActiveLink(child.href);

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                            childActive
                              ? "bg-secondary text-primary"
                              : "text-foreground hover:bg-muted hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group relative inline-flex min-w-[110px] items-center justify-center overflow-hidden rounded-full px-5 py-3 text-sm font-semibold tracking-[0.08em] transition-all duration-300"
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      active
                        ? "scale-100 bg-[linear-gradient(135deg,rgba(202,242,156,0.95),rgba(168,235,124,0.95))] shadow-[0_10px_24px_-14px_rgba(49,95,34,0.75)]"
                        : "scale-95 bg-transparent opacity-0 group-hover:scale-100 group-hover:bg-secondary/85 group-hover:opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute bottom-1.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 ${
                      active ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-70 group-hover:scale-100"
                    }`}
                  />
                  <span className={`relative z-10 ${active ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <a href="https://wa.me/917306901750" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_16px_36px_-20px_rgba(15,72,39,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent">
            SEND A MESSAGE
          </a>
        </div>

        {/* Mobile toggle */}
        <button 
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary-foreground transition-all hover:bg-primary/20"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`fixed top-[5rem] left-0 right-0 lg:hidden bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden z-40 ${
          mobileOpen 
            ? 'max-h-[calc(100vh-5rem)] opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 text-left hover:bg-gray-50 transition-colors"
                  aria-label={`Toggle ${item.label} menu`}
                >
                  <span className="text-sm font-semibold text-gray-800">
                    {item.label}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`bg-gray-50 transition-all duration-300 ease-in-out overflow-hidden ${
                    servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setServicesOpen(false);
                      }}
                      className="block px-10 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-100 transition-colors border-b border-gray-200 last:border-b-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-4 text-sm font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors border-b border-gray-200"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <a 
              href="https://wa.me/917306901750" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block text-center bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-accent transition-all duration-300 hover:shadow-xl"
            >
              SEND A MESSAGE
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
