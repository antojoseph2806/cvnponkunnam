"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { NAV_ITEMS } from "@/lib/heritage-content";
import { cn } from "@/lib/utils";

export function HeritageNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setProgramsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-temple-gold/20 transition-all duration-300",
        scrolled ? "bg-heritage-green-dark/98 backdrop-blur-md shadow-lg" : "bg-heritage-green/95 backdrop-blur-md"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0" aria-label="AKM Sree Rudra home">
            <Image
              src="/assets/logo.png"
              alt="AKM Sree Rudra Logo"
              width={180}
              height={64}
              className="h-14 w-auto object-contain md:h-16"
              priority
            />
          </Link>

          <div className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-heritage-cream hover:text-temple-gold transition-colors font-medium text-sm"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="min-w-[240px] bg-heritage-green-dark border border-temple-gold/20 rounded-md py-2 shadow-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm text-heritage-cream hover:bg-temple-gold/10 hover:text-temple-gold",
                            isActive(child.href) && "text-temple-gold"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-heritage-cream hover:text-temple-gold transition-colors font-medium text-sm",
                    isActive(item.href) && "text-temple-gold"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-temple-gold text-heritage-green-dark hover:bg-temple-gold-light transition-all rounded-md font-display text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" aria-hidden />
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 text-heritage-cream hover:text-temple-gold"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden bg-heritage-green-dark border-t border-temple-gold/20 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {NAV_ITEMS.map((item) =>
              "children" in item && item.children ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setProgramsOpen(!programsOpen)}
                    className="flex w-full items-center justify-between py-3 text-heritage-cream"
                  >
                    {item.label}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", programsOpen && "rotate-180")} />
                  </button>
                  {programsOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-heritage-cream/90 hover:text-temple-gold text-sm"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-heritage-cream hover:text-temple-gold"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-temple-gold text-heritage-green-dark rounded-md font-display"
            >
              <Phone className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
