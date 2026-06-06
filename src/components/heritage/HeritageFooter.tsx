"use client";

import Link from "next/link";
import Image from "next/image";
import { useSiteContent } from "@/lib/content-store";

export function HeritageFooter() {
  const { content } = useSiteContent();
  const footer = content.footer;
  const contact = content.contact;

  return (
    <footer className="bg-heritage-green-dark text-heritage-cream border-t border-temple-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Image
              src="/assets/logo.png"
              alt="AKM Sree Rudra"
              width={160}
              height={56}
              className="h-14 w-auto mb-6"
            />
            <p className="text-heritage-cream/70 text-sm leading-relaxed mb-4">
              {footer.description}
            </p>
            <p className="text-temple-gold text-xs tracking-wide uppercase">Kerala Tourism recognized institution</p>
          </div>

          <div>
            <h3 className="font-display text-temple-gold text-sm tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-heritage-cream/70 hover:text-temple-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-temple-gold text-sm tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-2">
              {footer.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-heritage-cream/70 hover:text-temple-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-temple-gold text-sm tracking-wider uppercase mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-heritage-cream/70">
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-temple-gold transition-colors">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-temple-gold transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-temple-gold transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-temple-gold transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-temple-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-temple-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-heritage-cream/60">
          <p>
            &copy; {new Date().getFullYear()} {footer.brand}. {footer.copyright}
          </p>
          <div className="flex gap-6">
            <a href={`tel:${contact.phone}`} className="hover:text-temple-gold transition-colors">
              {contact.phoneDisplay}
            </a>
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-temple-gold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
