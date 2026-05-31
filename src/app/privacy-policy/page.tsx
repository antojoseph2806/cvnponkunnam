import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";

export const metadata: Metadata = {
  title: "Privacy Policy | AKM Sree Rudra CVN Kalari",
  description: "Privacy Policy for AKM Sree Rudra CVN Kalari - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="min-h-screen bg-[#f6f4ec]">
            <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 lg:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> May 12, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              AKM Sree Rudra CVN Kalari ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website akmsreerudra.com and use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">2.1 Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you contact us or enroll in our programs, we may collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City/Location</li>
              <li>Age and health information (for training purposes)</li>
              <li>Emergency contact details</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the collected information for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Processing enrollment inquiries and registrations</li>
              <li>Communicating about training schedules and programs</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Maintaining student records and attendance</li>
              <li>Ensuring safety and appropriate training assignments</li>
              <li>Improving our website and services</li>
              <li>Sending program updates and announcements (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that help us operate our website</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">8. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, 
              analyze website traffic, and understand user preferences. You can control cookies through 
              your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and believe your 
              child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">11. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-white border border-primary/10 rounded-lg p-6">
              <p className="text-foreground mb-2"><strong>AKM Sree Rudra CVN Kalari</strong></p>
              <p className="text-muted-foreground">Lakkattoor, Kottayam, Kerala, India</p>
              <p className="text-muted-foreground">Email: info@akmsreerudra.com</p>
              <p className="text-muted-foreground">Website: akmsreerudra.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
        </main>
        <Footer />
        <StickyContactButtons />
      </div>
    </>
  );
}
