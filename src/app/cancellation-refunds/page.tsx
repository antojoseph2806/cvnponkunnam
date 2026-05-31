import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyContactButtons from "@/components/StickyContactButtons";

export const metadata: Metadata = {
  title: "Enrollment & Cancellation Policy | AKM Sree Rudra CVN Kalari",
  description: "Enrollment and Cancellation Policy for AKM Sree Rudra CVN Kalari training programs.",
};

export default function CancellationRefundsPage() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="min-h-screen bg-[#f6f4ec]">
            <div className="mx-auto max-w-4xl px-4 py-16 md:px-8 lg:py-24">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-8">Enrollment & Cancellation Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Last Updated:</strong> May 30, 2026
          </p>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">1. Enrollment Process</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All enrollments for training programs at AKM Sree Rudra CVN Kalari are handled directly through our center:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>
                <strong>Contact Us:</strong> Reach out via phone, email, or visit our center in person to discuss your interest in our programs.
              </li>
              <li>
                <strong>Program Selection:</strong> Our instructors will help you choose the most suitable training program based on your goals, experience level, and availability.
              </li>
              <li>
                <strong>Registration:</strong> Complete the enrollment form with your personal details, health information, and emergency contacts.
              </li>
              <li>
                <strong>Fee Discussion:</strong> Payment terms, schedules, and methods will be discussed and agreed upon during enrollment.
              </li>
              <li>
                <strong>Confirmation:</strong> Your enrollment is confirmed once registration is complete and initial payment arrangements are made.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">2. Fee Structure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our training programs have different fee structures based on duration and type:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li><strong>1 Month Programs:</strong> Foundation courses for beginners</li>
              <li><strong>3 Month Programs:</strong> Intermediate training with advanced techniques</li>
              <li><strong>6 Month Programs:</strong> Comprehensive advanced training</li>
              <li><strong>1 Year Programs:</strong> Complete mastery and instructor certification</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Specific fees, payment schedules, and any applicable deposits will be communicated during the enrollment process. 
              Payment arrangements are flexible and can be discussed based on individual circumstances.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">3. Cancellation by Student</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">3.1 Before Training Starts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you need to cancel your enrollment before the training program begins:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-4">
              <li>
                <strong>Advance Notice:</strong> Please inform us as soon as possible, preferably at least 7 days before the start date.
              </li>
              <li>
                <strong>Refund Policy:</strong> Refund eligibility and amounts will depend on the timing of cancellation and any deposits or advance payments made. This will be discussed on a case-by-case basis.
              </li>
              <li>
                <strong>Administrative Fees:</strong> Some administrative or preparation costs may be non-refundable, as communicated during enrollment.
              </li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">3.2 After Training Starts</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Once the training program has commenced:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>Refunds are generally not provided for fees already paid for the current training period</li>
              <li>Students who discontinue training should discuss their situation with management</li>
              <li>Absence from classes does not automatically entitle students to refunds</li>
              <li>Special circumstances will be considered on an individual basis</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">4. Program Postponement or Cancellation by Center</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In rare cases where we need to postpone or cancel a training program:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>Students will be notified as soon as possible, ideally at least 7 days in advance</li>
              <li>Alternative training dates will be offered</li>
              <li>Full refund of all fees paid will be provided if alternative arrangements are not acceptable</li>
              <li>We will work with each student to find a suitable solution</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">5. Rescheduling and Transfers</h2>
            
            <h3 className="font-semibold text-lg text-foreground mb-3">5.1 Student-Initiated Rescheduling</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you need to reschedule your training:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-4">
              <li>
                <strong>Before Training Starts:</strong> Rescheduling is generally allowed if requested at least 7 days in advance, subject to availability in other batches.
              </li>
              <li>
                <strong>After Training Starts:</strong> Rescheduling mid-program is difficult but may be considered in exceptional circumstances. Discuss with management.
              </li>
              <li>
                <strong>Fees:</strong> Any fees paid can typically be transferred to the new training dates, subject to our policies.
              </li>
            </ul>

            <h3 className="font-semibold text-lg text-foreground mb-3">5.2 Batch Transfers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Transferring to a different batch or program level may be possible based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Availability of space in the desired batch</li>
              <li>Instructor assessment of your skill level</li>
              <li>Any fee differences between programs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">6. Medical or Emergency Situations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We understand that unforeseen circumstances can arise:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>
                <strong>Medical Issues:</strong> If you cannot continue training due to medical reasons, please provide relevant documentation. We will work with you to find a solution, which may include rescheduling or partial refunds.
              </li>
              <li>
                <strong>Family Emergencies:</strong> In case of serious family emergencies, please contact us immediately. Each situation will be reviewed with compassion and flexibility.
              </li>
              <li>
                <strong>Documentation:</strong> Medical certificates or other relevant documentation may be required for consideration.
              </li>
              <li>
                <strong>Individual Review:</strong> All emergency situations are reviewed on a case-by-case basis by management.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">7. No-Show Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If a student fails to show up on the training start date without prior communication:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Please contact us as soon as possible to explain the situation</li>
              <li>Continued absence without communication may result in forfeiture of enrollment</li>
              <li>Refund eligibility will depend on the circumstances and timing</li>
              <li>We encourage open communication to resolve any issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">8. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When refunds are approved:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li>Refunds will be processed through the same method as the original payment</li>
              <li>Processing time typically takes 7-14 business days</li>
              <li>You will receive confirmation once the refund is processed</li>
              <li>Any transaction fees or administrative costs may be deducted as applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">9. Communication and Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We believe in open communication and fair resolution:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
              <li>
                <strong>Contact Us First:</strong> If you have any concerns about enrollment, fees, or cancellation, please contact us directly via phone or email.
              </li>
              <li>
                <strong>Provide Details:</strong> Share your enrollment information and explain your situation clearly.
              </li>
              <li>
                <strong>Review Process:</strong> We will review your case within 3-5 business days and work with you to find a fair solution.
              </li>
              <li>
                <strong>Management Decision:</strong> Final decisions on refunds and cancellations rest with center management, taking into account all circumstances.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For enrollment inquiries, cancellations, or to discuss your situation:
            </p>
            <div className="bg-white border border-primary/10 rounded-lg p-6">
              <p className="text-foreground mb-2"><strong>AKM Sree Rudra CVN Kalari</strong></p>
              <p className="text-muted-foreground">Lakkattoor, Kottayam, Kerala, India</p>
              <p className="text-muted-foreground">Email: info@akmsreerudra.com</p>
              <p className="text-muted-foreground">Website: akmsreerudra.com</p>
              <p className="text-muted-foreground mt-3 text-sm">
                <strong>Note:</strong> We encourage you to contact us directly to discuss any concerns. 
                We are committed to working with our students to find fair and reasonable solutions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl text-foreground mb-4">11. Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              This policy may be updated from time to time to reflect changes in our procedures or legal requirements. 
              The "Last Updated" date at the top of this page indicates when the policy was last revised. 
              Enrolled students will be notified of any significant changes that affect their enrollment.
            </p>
          </section>

          <div className="bg-highlight/5 border border-highlight/20 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Important Note:</strong> This policy provides general guidelines. 
              Specific terms regarding fees, deposits, and refunds will be discussed and agreed upon during the enrollment process. 
              We strive to be fair and flexible while maintaining the sustainability of our programs. 
              Please don't hesitate to discuss any concerns with us directly.
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
