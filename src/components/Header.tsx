"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTACT_WHATSAPP_HREF } from "@/lib/contact";
import { cn } from "@/lib/utils";

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
      { label: "Marma Chikilsa", href: "/services/marma-chikilsa" },
      { label: "Kalaripayattu Training", href: "/services/kalari-training" },
      { label: "Kalari Rejuvenation", href: "/services/kalari-rejuvenation" },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) {
      setServicesOpen(false);
    }
  }, [mobileOpen]);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 16);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={cn("fixed left-0 top-0 w-full px-4 pt-4", mobileOpen ? "z-[90]" : "z-50")}>
      {/* Main nav */}
      <nav
        className={cn(
          "kalari-nav-shell relative z-[95] mx-auto flex h-[78px] max-w-[1180px] items-center justify-between overflow-visible border px-3 ring-1 ring-black/5 backdrop-blur-xl transition-all duration-500 md:px-4",
          scrolled
            ? "border-white/70 bg-white/90 shadow-[0_22px_56px_-34px_rgba(8,30,16,0.72)]"
            : "border-white/80 bg-white/94 shadow-[0_30px_80px_-42px_rgba(8,30,16,0.78)]",
        )}
      >
        <span className="kalari-nav-accent kalari-nav-accent-left" aria-hidden="true" />
        <span className="kalari-nav-accent kalari-nav-accent-right" aria-hidden="true" />
        <Link href="/" className="kalari-logo-block flex h-full items-center border-r border-primary/10 pr-5">
          <img
            src="/assets/logo-wide.png"
            alt="A.K.M Sree Rudra"
            className="h-11 w-auto max-w-[190px] object-contain md:h-12 md:max-w-[245px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden h-full flex-1 items-stretch justify-center px-6 lg:flex">
          <div className="flex h-full items-stretch">
            {navItems.map((item) => {
              const active = isActiveLink(item.href);

              return item.children ? (
                <div key={item.label} className="group relative flex items-stretch">
                  <Link
                    href={item.href}
                    data-active={active}
                    className="premium-nav-link relative inline-flex min-w-[118px] items-center justify-center gap-1.5 overflow-hidden border-l border-primary/10 px-5 text-[0.76rem] font-bold tracking-[0.14em] text-foreground whitespace-nowrap transition-colors duration-300 hover:text-primary data-[active=true]:text-primary"
                  >
                    <span className="relative z-10">
                      {item.label}
                    </span>
                    <ChevronDown
                      className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-[1px]"
                    />
                  </Link>
                  <div className="premium-nav-dropdown invisible absolute left-1/2 top-full z-[140] mt-3 w-[300px] border border-primary/12 bg-white/[0.98] p-2 opacity-0 shadow-[0_28px_70px_-32px_rgba(8,29,15,0.58)] ring-1 ring-black/5 backdrop-blur-xl group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => {
                      const childActive = isActiveLink(child.href);

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`block border-b border-primary/8 px-4 py-3 text-sm font-semibold transition-all duration-300 last:border-b-0 ${
                            childActive
                              ? "bg-section-dark text-highlight-light shadow-[0_14px_30px_-24px_rgba(8,29,15,0.8)]"
                              : "text-foreground/78 hover:bg-section-warm hover:pl-6 hover:text-primary"
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
                  data-active={active}
                  className="premium-nav-link group relative inline-flex min-w-[104px] items-center justify-center overflow-hidden border-l border-primary/10 px-5 text-[0.76rem] font-bold tracking-[0.14em] text-foreground whitespace-nowrap transition-colors duration-300 hover:text-primary data-[active=true]:text-primary last:border-r"
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden lg:flex items-center">
          <a href={CONTACT_WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="kalari-nav-cta bg-section-dark px-5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.14em] text-highlight-light shadow-[0_18px_38px_-22px_rgba(8,29,15,0.85)]">
            Send a Message
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={cn(
            "relative z-[80] flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 lg:hidden",
            mobileOpen
              ? "bg-section-dark text-highlight-light ring-2 ring-primary/10"
              : "bg-section-warm text-primary backdrop-blur-md hover:bg-secondary",
          )}
          onClick={() => {
            if (mobileOpen) {
              closeMobileMenu();
              return;
            }

            setMobileOpen(true);
          }}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <Menu
            className={cn(
              "absolute h-5 w-5 transition-all duration-300",
              mobileOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
            )}
          />
          <X
            className={cn(
              "absolute h-5 w-5 transition-all duration-300",
              mobileOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0",
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn("fixed inset-0 z-[80] lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className={cn(
            "absolute inset-0 top-[5.75rem] bg-[linear-gradient(180deg,rgba(7,22,12,0.2),rgba(7,22,12,0.58))] backdrop-blur-sm transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={closeMobileMenu}
          aria-label="Close menu overlay"
        />

        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "absolute inset-x-3 top-[6rem] origin-top rounded-[26px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,249,241,0.96))] p-2.5 shadow-[0_30px_70px_-30px_rgba(8,32,17,0.55)] ring-1 ring-black/5 transition-all duration-300 ease-out",
            mobileOpen ? "translate-y-0 scale-100 opacity-100" : "-translate-y-4 scale-[0.98] opacity-0",
          )}
        >
          <div>
            <div className="space-y-1.5">
              {navItems.map((item, index) => {
                const active = isActiveLink(item.href);
                const hasActiveChild = item.children?.some((child) => isActiveLink(child.href)) ?? false;

                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className={cn(
                        "transition-all duration-300 ease-out",
                        mobileOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                      )}
                      style={{ transitionDelay: mobileOpen ? `${index * 45}ms` : "0ms" }}
                    >
                      <div
                        className={cn(
                          "overflow-hidden rounded-[22px] border bg-white/78 shadow-[0_16px_40px_-32px_rgba(11,38,19,0.6)] backdrop-blur-sm transition-all duration-300",
                          active || hasActiveChild
                            ? "border-primary/15 ring-1 ring-primary/10"
                            : "border-transparent hover:border-primary/10",
                        )}
                      >
                        <div className="flex items-center gap-2 p-1.5">
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className={cn(
                              "group flex min-w-0 flex-1 items-center rounded-[18px] px-4 py-2.5 transition-all duration-300",
                              active || hasActiveChild
                                ? "bg-[linear-gradient(135deg,rgba(233,246,223,0.95),rgba(246,250,242,0.98))]"
                                : "bg-transparent hover:bg-white/85",
                            )}
                          >
                            <span
                              className={cn(
                                "block text-[0.76rem] font-semibold tracking-[0.16em]",
                                active || hasActiveChild ? "text-primary" : "text-foreground/85 group-hover:text-primary",
                              )}
                            >
                              {item.label}
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-[16px] border transition-all duration-300",
                              servicesOpen
                                ? "border-primary/10 bg-primary text-primary-foreground shadow-[0_16px_34px_-20px_rgba(21,78,38,0.95)]"
                                : "border-border/60 bg-white/80 text-primary hover:border-primary/15 hover:bg-secondary/70",
                            )}
                            aria-label={`Toggle ${item.label} menu`}
                            aria-expanded={servicesOpen}
                            aria-controls="mobile-services-menu"
                          >
                            <ChevronDown
                              className={cn("h-5 w-5 transition-transform duration-300", servicesOpen ? "rotate-180" : "")}
                            />
                          </button>
                        </div>

                        <div
                          id="mobile-services-menu"
                          className={cn(
                            "grid transition-all duration-300 ease-out",
                            servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <div className="mx-1.5 mb-1.5 mt-0.5 rounded-[18px] border border-primary/10 bg-[linear-gradient(180deg,rgba(252,255,250,0.98),rgba(240,247,236,0.96))] p-1.5">
                              {item.children.map((child) => {
                                const childActive = isActiveLink(child.href);

                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={closeMobileMenu}
                                    className={cn(
                                      "group block rounded-2xl px-4 py-2.5 text-[0.92rem] font-medium transition-all duration-200",
                                      childActive
                                        ? "bg-white text-primary shadow-[0_12px_28px_-22px_rgba(14,62,29,0.7)]"
                                        : "text-foreground/80 hover:bg-white/90 hover:text-primary",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={cn(
                      "transition-all duration-300 ease-out",
                      mobileOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                    )}
                    style={{ transitionDelay: mobileOpen ? `${index * 45}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={cn(
                        "group block rounded-[22px] border px-4 py-3 shadow-[0_16px_40px_-32px_rgba(11,38,19,0.6)] backdrop-blur-sm transition-all duration-300",
                        active
                          ? "border-primary/15 bg-[linear-gradient(135deg,rgba(233,246,223,0.95),rgba(246,250,242,0.98))] ring-1 ring-primary/10"
                          : "border-transparent bg-white/78 hover:border-primary/10 hover:bg-white/90",
                      )}
                    >
                      <span
                        className={cn(
                          "text-[0.76rem] font-semibold tracking-[0.16em]",
                          active ? "text-primary" : "text-foreground/85 group-hover:text-primary",
                        )}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-2.5 rounded-[22px] border border-primary/10 bg-white/95 p-2.5 shadow-[0_-12px_35px_-28px_rgba(10,43,21,0.45)] backdrop-blur-md">
              <a
                href="/#contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center rounded-[16px] bg-primary px-5 py-3 text-sm font-semibold tracking-[0.08em] text-primary-foreground shadow-[0_18px_36px_-24px_rgba(21,78,38,0.9)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
