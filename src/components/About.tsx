import Link from "next/link";

const About = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img src="/assets/about-kalari.jpg" alt="CVN Kalari Kerala" loading="lazy" width={1200} height={800} className="w-full h-[400px] lg:h-[500px] object-cover" />
      </div>
      <div>
        <p className="text-highlight font-semibold text-sm tracking-wide mb-2">C. V. N. Kalari Tradition</p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">
          AKM Sri Rudra Kalari
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          AKM Sri Rudra (C. V. N. Kalari) is situated in Lakkoor, Kothala, Ponkunnam, Kottayam and is close to famous tourist centres like Kumarakom and Wagamon. Ajithkumar Gurukkal, the founder of this kalari, was the student of Malabar Vasudeva Gurukkal who belongs to the C. V. N. tradition. He established it in 1996, after having first learnt under his father Karunakaran Nair too.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Sri Rudra is a kuzhi kalari and it focuses on Meypayattu, Self defence and weapon training which is the cornerstone of the Northern style. Besides daily Kalaripayattu classes are done in morning and evenings, it offers yoga classes as well. Children from the age of seven are taken in for training programmes. No upper age limit has been fixed to induct interested pupils.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          According to a rough estimate, Sri Rudra must have trained at least 5,000 students in Kalaripayattu by now. Women too enrol themselves for his courses, most of whom are physical education instructors at schools. Foreign students from countries like Japan, Switzerland and USA have come here and signed up for short courses. Most prefer short-term programmes such as (1 month courses).
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Gurukkal travels all over Kerala and India to give Kalaripayattu performances in front of invited audiences, and participates in cultural events as well. Students are given massage treatment and Marmachikitsa in the month of Karkidakam (July-August). Many foreigners also come here for treatment or rejuvenation therapies.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          All the oils required for massage and treatment are manufactured here itself. Accommodation facilities for up to inpatients are available, along with Kerala food. Sri Rudra Kalari is a recipient of the Membership Certificate issued by Responsible Tourism Mission of the Government of Kerala. As it is a member of the Arts and Cultural Forum of Responsible Tourism Mission, many foreign tourists flock towards the kalari to watch the performances conducted there.
        </p>
        <Link href="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm hover:bg-accent transition-colors">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

export default About;
