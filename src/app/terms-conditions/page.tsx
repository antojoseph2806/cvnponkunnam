import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";

export const metadata: Metadata = {
  title: "Terms & Conditions | AKM Sree Rudra CVN Kalari",
  description: "Terms and Conditions for using AKM Sree Rudra CVN Kalari services and website.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="min-h-screen bg-[#f6f4ec]">
            <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 lg:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> May 12, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the AKM Sree Rudra CVN Kalari website (akmsreerudra.com) and services, 
              you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, 
              please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">2. Services Offered</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AKM Sree Rudra CVN Kalari provides:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Traditional Kalaripayattu training programs</li>
              <li>Marma Chikitsa (therapeutic treatments)</li>
              <li>Kalari rejuvenation therapies</li>
              <li>Yoga classes</li>
              <li>Related wellness and martial arts services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">3. Eligibility and Registration</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">3.1 Age Requirements</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Participants must be at least 6 years old for training programs</li>
              <li>Minors (under 18) must have parental/guardian consent</li>
              <li>Age-appropriate programs will be assigned based on participant's age and fitness level</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">3.2 Health Requirements</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Participants must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Be in good physical health to participate in training</li>
              <li>Disclose any medical conditions, injuries, or health concerns</li>
              <li>Obtain medical clearance if required by the instructor</li>
              <li>Inform instructors of any changes in health status during training</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">4. Enrollment and Fees</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">4.1 Enrollment Process</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To enroll in our training programs:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Contact us directly via phone, email, or visit our center</li>
              <li>Discuss your training goals and select an appropriate program</li>
              <li>Complete the enrollment form with required information</li>
              <li>Enrollment is confirmed upon completion of registration and fee payment</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">4.2 Fee Payment</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All fee payments are handled directly at our center or through arrangements made with our staff:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Payment methods and schedules will be discussed during enrollment</li>
              <li>Fees must be paid before or on the training start date</li>
              <li>Payment receipts will be provided for all transactions</li>
              <li>Fee structure and payment terms are subject to the policies communicated at enrollment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">5. Training Program Rules</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">5.1 Attendance</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Regular attendance is expected for optimal learning</li>
              <li>Missed classes cannot be made up or refunded</li>
              <li>Notify instructors in advance if you must miss a session</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">5.2 Conduct and Discipline</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Participants must:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Respect instructors, staff, and fellow students</li>
              <li>Follow safety guidelines and instructions</li>
              <li>Wear appropriate training attire</li>
              <li>Maintain cleanliness and hygiene</li>
              <li>Not use training for harmful or illegal purposes</li>
              <li>Not consume alcohol or drugs before or during training</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">6. Liability and Risk</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">6.1 Assumption of Risk</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kalaripayattu and martial arts training involve physical activity and inherent risks. 
              By participating, you acknowledge and accept these risks, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Physical injuries (sprains, strains, bruises)</li>
              <li>Muscle soreness and fatigue</li>
              <li>Accidental contact during training</li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">6.2 Limitation of Liability</h3>
            <p className="text-muted-foreground leading-relaxed">
              AKM Sree Rudra CVN Kalari, its instructors, and staff are not liable for any injuries, 
              accidents, or health issues arising from participation in training programs, except in cases 
              of proven negligence or willful misconduct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on our website, including text, images, logos, videos, and training materials, 
              is the property of AKM Sree Rudra CVN Kalari and protected by copyright laws.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You may not reproduce, distribute, or modify our content without permission</li>
              <li>Training techniques and methods are proprietary</li>
              <li>Photography and videography during training require prior approval</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">8. Photography and Media</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By participating in our programs:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You consent to being photographed or recorded during training</li>
              <li>We may use photos/videos for promotional purposes</li>
              <li>You can opt-out by notifying us in writing</li>
              <li>Personal photography during training requires instructor permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">9. Termination of Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We reserve the right to terminate or suspend your participation if:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You violate these Terms and Conditions</li>
              <li>You engage in disruptive or dangerous behavior</li>
              <li>You fail to pay required fees</li>
              <li>Your health condition poses risk to yourself or others</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              No refunds will be provided in case of termination due to violation of terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">10. Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your personal information is handled in accordance with our Privacy Policy. 
              By using our services, you consent to the collection and use of your information 
              as described in the Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">11. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for failure to perform our obligations due to circumstances beyond 
              our control, including natural disasters, pandemics, government restrictions, strikes, 
              or other force majeure events.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">12. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be 
              effective immediately upon posting on our website. Continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">13. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from 
              these terms or use of our services shall be subject to the exclusive jurisdiction of the 
              courts in Kottayam, Kerala, India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, 
              the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">15. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms and Conditions:
            </p>
            <div className="bg-white border border-primary/10 rounded-lg p-6">
              <p className="text-foreground mb-2"><strong>AKM Sree Rudra CVN Kalari</strong></p>
              <p className="text-muted-foreground">Lakkattoor, Kottayam, Kerala, India</p>
              <p className="text-muted-foreground">Email: info@akmsreerudra.com</p>
              <p className="text-muted-foreground">Website: akmsreerudra.com</p>
            </div>
          </section>

          <div className="bg-highlight/5 border border-highlight/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Acknowledgment:</strong> By enrolling in our programs or using our services, 
              you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, 
              along with our Privacy Policy.
            </p>
          </div>
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
