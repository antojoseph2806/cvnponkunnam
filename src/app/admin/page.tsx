"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Image,
  Info,
  Sword,
  Heart,
  Sparkles,
  BookOpen,
  Phone,
  Save,
  RotateCcw,
  Download,
  Upload,
  LogOut,
  ChevronRight,
  Globe,
  PanelBottom,
} from "lucide-react";
import { useSiteContent, exportContent, importContent } from "@/lib/content-store";
import { logout } from "@/lib/admin-auth";
import { AdminField } from "@/components/admin/AdminField";
import { SectionCard } from "@/components/admin/SectionCard";
import type { CourseItem, StatItem, ProgramItem, WellnessPackage, SiteContent } from "@/lib/admin-types";

const tabs = [
  { id: "hero", label: "Hero Section", icon: Image },
  { id: "about", label: "About", icon: Info },
  { id: "kalaripayattu", label: "Kalaripayattu", icon: Sword },
  { id: "marma", label: "Marma Chikitsa", icon: Heart },
  { id: "wellness", label: "Wellness", icon: Sparkles },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "contact", label: "Contact", icon: Phone },
  { id: "footer", label: "Footer", icon: PanelBottom },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const { content, updateContent, reset } = useSiteContent();
  const [activeTab, setActiveTab] = useState("hero");
  const [saved, setSaved] = useState(false);
  const [importText, setImportText] = useState("");
  const [importError, setImportError] = useState("");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      reset();
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    }
  };

  const handleExport = () => {
    const blob = new Blob([exportContent()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "akm-site-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    setImportError("");
    if (!importText.trim()) return;
    if (importContent(importText)) {
      setImportText("");
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } else {
      setImportError("Invalid JSON. Please check your file and try again.");
    }
  };

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-heritage-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-heritage-green-dark text-heritage-cream flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-temple-gold/20">
          <h1 className="font-display text-xl text-temple-gold">Admin Panel</h1>
          <p className="text-xs text-heritage-cream/60 mt-1">AKM Sree Rudra</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-colors ${
                  activeTab === tab.id
                    ? "bg-temple-gold/20 text-temple-gold"
                    : "text-heritage-cream/80 hover:bg-white/5 hover:text-heritage-cream"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {activeTab === tab.id && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            );
          })}
        </nav>
        <div className="p-4 border-t border-temple-gold/20 space-y-2">
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm text-heritage-cream/70 hover:text-heritage-cream transition-colors"
          >
            <Globe className="w-4 h-4" />
            View Website
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-heritage-cream/70 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white border-b border-border px-6 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="font-display text-xl text-heritage-green">
              {tabs.find((t) => t.id === activeTab)?.label}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {saved && (
              <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-md">Saved successfully!</span>
            )}
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-green text-heritage-cream text-sm rounded-md hover:bg-heritage-green-dark transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm rounded-md hover:bg-muted/80 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {activeTab === "hero" && <HeroEditor content={content.hero} onChange={(hero) => updateContent((prev) => ({ ...prev, hero }))} />}
            {activeTab === "about" && <AboutEditor content={content.about} onChange={(about) => updateContent((prev) => ({ ...prev, about }))} />}
            {activeTab === "kalaripayattu" && <KalaripayattuEditor content={content.kalaripayattu} onChange={(k) => updateContent((prev) => ({ ...prev, kalaripayattu: k }))} />}
            {activeTab === "marma" && <MarmaEditor content={content.marma} onChange={(m) => updateContent((prev) => ({ ...prev, marma: m }))} />}
            {activeTab === "wellness" && <WellnessEditor content={content.wellness} onChange={(w) => updateContent((prev) => ({ ...prev, wellness: w }))} />}
            {activeTab === "courses" && <CoursesEditor courses={content.courses} onChange={(courses) => updateContent((prev) => ({ ...prev, courses }))} />}
            {activeTab === "contact" && <ContactEditor content={content.contact} onChange={(contact) => updateContent((prev) => ({ ...prev, contact }))} />}
            {activeTab === "footer" && <FooterEditor content={content.footer} onChange={(footer) => updateContent((prev) => ({ ...prev, footer }))} />}

            {/* Import / Export */}
            <SectionCard title="Import / Export Content">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-heritage-green mb-3">Export All Content</h4>
                  <p className="text-xs text-muted-foreground mb-3">Download your site content as a JSON file for backup.</p>
                  <button
                    onClick={handleExport}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-heritage-green text-heritage-cream text-sm rounded-md hover:bg-heritage-green-dark transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Export JSON
                  </button>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-heritage-green mb-3">Import Content</h4>
                  <p className="text-xs text-muted-foreground mb-3">Paste a previously exported JSON file to restore content.</p>
                  {importError && <p className="text-xs text-red-600 mb-2">{importError}</p>}
                  <textarea
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    placeholder="Paste JSON content here..."
                    rows={3}
                    className="w-full px-3 py-2 border border-border rounded-md bg-white text-foreground text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
                  />
                  <button
                    onClick={handleImport}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-temple-gold text-heritage-green-dark text-sm rounded-md hover:bg-temple-gold-light transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    Import JSON
                  </button>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </main>
    </div>
  );
}

/* Hero Editor */
function HeroEditor({ content, onChange }: { content: SiteContent["hero"]; onChange: (v: SiteContent["hero"]) => void }) {
  return (
    <SectionCard title="Hero Section">
      <AdminField label="Background Image Path" value={content.backgroundImage} onChange={(v) => onChange({ ...content, backgroundImage: v })} placeholder="/assets/kalari-training-hero.png" />
      <AdminField label="Badge Text" value={content.badgeText} onChange={(v) => onChange({ ...content, badgeText: v })} />
      <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
      <AdminField label="Tagline" value={content.tagline} onChange={(v) => onChange({ ...content, tagline: v })} />
      <AdminField label="Subtitle" value={content.subtitle} onChange={(v) => onChange({ ...content, subtitle: v })} />
      <div className="grid grid-cols-2 gap-4">
        <AdminField label="Since Year" value={String(content.sinceYear)} onChange={(v) => onChange({ ...content, sinceYear: Number(v) || 1996 })} type="number" />
        <AdminField label="Primary Button Text" value={content.primaryButtonText} onChange={(v) => onChange({ ...content, primaryButtonText: v })} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <AdminField label="Primary Button Link" value={content.primaryButtonLink} onChange={(v) => onChange({ ...content, primaryButtonLink: v })} />
        <AdminField label="Secondary Button Text" value={content.secondaryButtonText} onChange={(v) => onChange({ ...content, secondaryButtonText: v })} />
      </div>
      <AdminField label="Secondary Button Link" value={content.secondaryButtonLink} onChange={(v) => onChange({ ...content, secondaryButtonLink: v })} />
      <div className="mt-4 p-4 bg-muted/30 rounded-md">
        <p className="text-xs text-muted-foreground font-medium mb-2">Preview:</p>
        <div className="text-sm text-heritage-green">{content.title}</div>
        <div className="text-xs text-muted-foreground italic">{content.tagline}</div>
      </div>
    </SectionCard>
  );
}

/* About Editor */
function AboutEditor({ content, onChange }: { content: SiteContent["about"]; onChange: (v: SiteContent["about"]) => void }) {
  return (
    <SectionCard title="About Section">
      <AdminField label="Eyebrow Label" value={content.eyebrow} onChange={(v) => onChange({ ...content, eyebrow: v })} />
      <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
      <AdminField label="Description" value={content.description} onChange={(v) => onChange({ ...content, description: v })} type="textarea" />
      <AdminField label="Image URL" value={content.image} onChange={(v) => onChange({ ...content, image: v })} />
      <AdminField label="Founder Title" value={content.founderTitle} onChange={(v) => onChange({ ...content, founderTitle: v })} />
      <AdminField label="Founder Name" value={content.founderName} onChange={(v) => onChange({ ...content, founderName: v })} />
      <AdminField label="Founder Text" value={content.founderText} onChange={(v) => onChange({ ...content, founderText: v })} type="textarea" />
      <AdminField label="Location Text" value={content.locationText} onChange={(v) => onChange({ ...content, locationText: v })} type="textarea" />
      <AdminField label="Mission Quote" value={content.missionQuote} onChange={(v) => onChange({ ...content, missionQuote: v })} type="textarea" />
      <AdminField label="Mission Label" value={content.missionLabel} onChange={(v) => onChange({ ...content, missionLabel: v })} />
      <AdminField label="Founder Link Text" value={content.founderLinkText} onChange={(v) => onChange({ ...content, founderLinkText: v })} />
      <AdminField label="Founder Link Href" value={content.founderLinkHref} onChange={(v) => onChange({ ...content, founderLinkHref: v })} />

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Statistics</h4>
        <div className="grid grid-cols-2 gap-4">
          {content.stats.map((stat: StatItem, i: number) => (
            <div key={i} className="space-y-2 p-3 bg-muted/30 rounded-md">
              <AdminField label={`Stat ${i + 1} Value`} value={stat.value} onChange={(v) => {
                const stats = [...content.stats];
                stats[i] = { ...stat, value: v };
                onChange({ ...content, stats });
              }} />
              <AdminField label={`Stat ${i + 1} Label`} value={stat.label} onChange={(v) => {
                const stats = [...content.stats];
                stats[i] = { ...stat, label: v };
                onChange({ ...content, stats });
              }} />
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* Kalaripayattu Editor */
function KalaripayattuEditor({ content, onChange }: { content: SiteContent["kalaripayattu"]; onChange: (v: SiteContent["kalaripayattu"]) => void }) {
  return (
    <SectionCard title="Kalaripayattu Programs">
      <AdminField label="Eyebrow Label" value={content.eyebrow} onChange={(v) => onChange({ ...content, eyebrow: v })} />
      <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
      <AdminField label="Description" value={content.description} onChange={(v) => onChange({ ...content, description: v })} type="textarea" />

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Programs</h4>
        <div className="space-y-4">
          {content.programs.map((program: ProgramItem, i: number) => (
            <div key={i} className="p-3 bg-muted/30 rounded-md space-y-2">
              <AdminField label={`Program ${i + 1} Title`} value={program.title} onChange={(v) => {
                const programs = [...content.programs];
                programs[i] = { ...program, title: v };
                onChange({ ...content, programs });
              }} />
              <AdminField label={`Program ${i + 1} Description`} value={program.description} onChange={(v) => {
                const programs = [...content.programs];
                programs[i] = { ...program, description: v };
                onChange({ ...content, programs });
              }} type="textarea" rows={2} />
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

/* Marma Editor */
function MarmaEditor({ content, onChange }: { content: SiteContent["marma"]; onChange: (v: SiteContent["marma"]) => void }) {
  return (
    <SectionCard title="Marma Chikitsa">
      <AdminField label="Eyebrow Label" value={content.eyebrow} onChange={(v) => onChange({ ...content, eyebrow: v })} />
      <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
      <AdminField label="Description" value={content.description} onChange={(v) => onChange({ ...content, description: v })} type="textarea" />

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Services</h4>
        <div className="space-y-2">
          {content.services.map((service: string, i: number) => (
            <div key={i} className="flex gap-2">
              <input
                value={service}
                onChange={(e) => {
                  const services = [...content.services];
                  services[i] = e.target.value;
                  onChange({ ...content, services });
                }}
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <button
                onClick={() => {
                  const services = content.services.filter((_: string, idx: number) => idx !== i);
                  onChange({ ...content, services });
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => onChange({ ...content, services: [...content.services, "New Service"] })}
            className="w-full py-2 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors"
          >
            + Add Service
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

/* Wellness Editor */
function WellnessEditor({ content, onChange }: { content: SiteContent["wellness"]; onChange: (v: SiteContent["wellness"]) => void }) {
  return (
    <SectionCard title="Wellness Packages">
      <AdminField label="Eyebrow Label" value={content.eyebrow} onChange={(v) => onChange({ ...content, eyebrow: v })} />
      <AdminField label="Title" value={content.title} onChange={(v) => onChange({ ...content, title: v })} />
      <AdminField label="Description" value={content.description} onChange={(v) => onChange({ ...content, description: v })} type="textarea" />

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Packages</h4>
        <div className="space-y-4">
          {content.packages.map((pkg: WellnessPackage, i: number) => (
            <div key={i} className="p-3 bg-muted/30 rounded-md space-y-2">
              <AdminField label={`Package ${i + 1} Title`} value={pkg.title} onChange={(v) => {
                const packages = [...content.packages];
                packages[i] = { ...pkg, title: v };
                onChange({ ...content, packages });
              }} />
              <AdminField label={`Package ${i + 1} Description`} value={pkg.description} onChange={(v) => {
                const packages = [...content.packages];
                packages[i] = { ...pkg, description: v };
                onChange({ ...content, packages });
              }} type="textarea" rows={2} />
              <button
                onClick={() => {
                  const packages = content.packages.filter((_: WellnessPackage, idx: number) => idx !== i);
                  onChange({ ...content, packages });
                }}
                className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md text-xs transition-colors"
              >
                Remove Package
              </button>
            </div>
          ))}
          <button
            onClick={() => onChange({ ...content, packages: [...content.packages, { title: "New Package", description: "Description" }] })}
            className="w-full py-2 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors"
          >
            + Add Package
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

/* Courses Editor */
function CoursesEditor({ courses, onChange }: { courses: CourseItem[]; onChange: (v: CourseItem[]) => void }) {
  return (
    <div className="space-y-6">
      {courses.map((course, i) => (
        <SectionCard key={course.id} title={`Course: ${course.title}`}>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Title" value={course.title} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, title: v };
              onChange(updated);
            }} />
            <AdminField label="Duration" value={course.duration} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, duration: v };
              onChange(updated);
            }} />
          </div>
          <AdminField label="Subtitle" value={course.subtitle} onChange={(v) => {
            const updated = [...courses];
            updated[i] = { ...course, subtitle: v };
            onChange(updated);
          }} />
          <AdminField label="Description" value={course.description} onChange={(v) => {
            const updated = [...courses];
            updated[i] = { ...course, description: v };
            onChange(updated);
          }} type="textarea" />
          <AdminField label="Features (one per line)" value={course.features} onChange={(v) => {
            const updated = [...courses];
            updated[i] = { ...course, features: v };
            onChange(updated);
          }} type="textarea" rows={5} />
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Type" value={course.type} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, type: v };
              onChange(updated);
            }} />
            <AdminField label="Suitable For" value={course.suitableFor} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, suitableFor: v };
              onChange(updated);
            }} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Amount (INR)" value={String(course.amountInr)} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, amountInr: Number(v) || 0 };
              onChange(updated);
            }} type="number" />
            <AdminField label="Amount (USD)" value={String(course.amountUsd)} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, amountUsd: Number(v) || 0 };
              onChange(updated);
            }} type="number" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <AdminField label="Token Amount (INR)" value={String(course.tokenAmountInr)} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, tokenAmountInr: Number(v) || 0 };
              onChange(updated);
            }} type="number" />
            <AdminField label="Token Amount (USD)" value={String(course.tokenAmountUsd)} onChange={(v) => {
              const updated = [...courses];
              updated[i] = { ...course, tokenAmountUsd: Number(v) || 0 };
              onChange(updated);
            }} type="number" />
          </div>
          <div className="flex items-center gap-4 pt-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={course.isPopular}
                onChange={(e) => {
                  const updated = [...courses];
                  updated[i] = { ...course, isPopular: e.target.checked };
                  onChange(updated);
                }}
                className="w-4 h-4 accent-heritage-green"
              />
              Popular
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={course.isActive}
                onChange={(e) => {
                  const updated = [...courses];
                  updated[i] = { ...course, isActive: e.target.checked };
                  onChange(updated);
                }}
                className="w-4 h-4 accent-heritage-green"
              />
              Active
            </label>
          </div>
        </SectionCard>
      ))}
    </div>
  );
}

/* Contact Editor */
function ContactEditor({ content, onChange }: { content: SiteContent["contact"]; onChange: (v: SiteContent["contact"]) => void }) {
  return (
    <SectionCard title="Contact Information">
      <div className="grid grid-cols-2 gap-4">
        <AdminField label="Phone (E.164)" value={content.phone} onChange={(v) => onChange({ ...content, phone: v })} />
        <AdminField label="Phone Display" value={content.phoneDisplay} onChange={(v) => onChange({ ...content, phoneDisplay: v })} />
      </div>
      <AdminField label="WhatsApp Number" value={content.whatsapp} onChange={(v) => onChange({ ...content, whatsapp: v })} />
      <AdminField label="Email" value={content.email} onChange={(v) => onChange({ ...content, email: v })} />
      <AdminField label="Address" value={content.address} onChange={(v) => onChange({ ...content, address: v })} type="textarea" />
      <AdminField label="Hours" value={content.hours} onChange={(v) => onChange({ ...content, hours: v })} />
      <AdminField label="Instagram URL" value={content.instagram} onChange={(v) => onChange({ ...content, instagram: v })} />
      <AdminField label="Facebook URL" value={content.facebook} onChange={(v) => onChange({ ...content, facebook: v })} />
      <AdminField label="YouTube URL" value={content.youtube} onChange={(v) => onChange({ ...content, youtube: v })} />
    </SectionCard>
  );
}

/* Footer Editor */
function FooterEditor({ content, onChange }: { content: SiteContent["footer"]; onChange: (v: SiteContent["footer"]) => void }) {
  return (
    <SectionCard title="Footer">
      <AdminField label="Brand Name" value={content.brand} onChange={(v) => onChange({ ...content, brand: v })} />
      <AdminField label="Tagline" value={content.tagline} onChange={(v) => onChange({ ...content, tagline: v })} />
      <AdminField label="Description" value={content.description} onChange={(v) => onChange({ ...content, description: v })} type="textarea" />
      <AdminField label="Copyright" value={content.copyright} onChange={(v) => onChange({ ...content, copyright: v })} />

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Quick Links</h4>
        <div className="space-y-2">
          {content.quickLinks.map((link: { label: string; href: string }, i: number) => (
            <div key={i} className="flex gap-2">
              <input
                value={link.label}
                onChange={(e) => {
                  const links = [...content.quickLinks];
                  links[i] = { ...link, label: e.target.value };
                  onChange({ ...content, quickLinks: links });
                }}
                placeholder="Label"
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <input
                value={link.href}
                onChange={(e) => {
                  const links = [...content.quickLinks];
                  links[i] = { ...link, href: e.target.value };
                  onChange({ ...content, quickLinks: links });
                }}
                placeholder="URL"
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <button
                onClick={() => {
                  const links = content.quickLinks.filter((_: unknown, idx: number) => idx !== i);
                  onChange({ ...content, quickLinks: links });
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => onChange({ ...content, quickLinks: [...content.quickLinks, { label: "New Link", href: "/" }] })}
            className="w-full py-2 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors"
          >
            + Add Link
          </button>
        </div>
      </div>

      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-heritage-green mb-3">Services Links</h4>
        <div className="space-y-2">
          {content.services.map((link: { label: string; href: string }, i: number) => (
            <div key={i} className="flex gap-2">
              <input
                value={link.label}
                onChange={(e) => {
                  const links = [...content.services];
                  links[i] = { ...link, label: e.target.value };
                  onChange({ ...content, services: links });
                }}
                placeholder="Label"
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <input
                value={link.href}
                onChange={(e) => {
                  const links = [...content.services];
                  links[i] = { ...link, href: e.target.value };
                  onChange({ ...content, services: links });
                }}
                placeholder="URL"
                className="flex-1 px-3 py-2 border border-border rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-temple-gold/50"
              />
              <button
                onClick={() => {
                  const links = content.services.filter((_: unknown, idx: number) => idx !== i);
                  onChange({ ...content, services: links });
                }}
                className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={() => onChange({ ...content, services: [...content.services, { label: "New Service", href: "/" }] })}
            className="w-full py-2 border-2 border-dashed border-border rounded-md text-sm text-muted-foreground hover:border-temple-gold/50 hover:text-temple-gold transition-colors"
          >
            + Add Service Link
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
