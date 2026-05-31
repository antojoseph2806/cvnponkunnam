export interface Course {
  id: number;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  features: string;
  type: string;
  suitable_for: string;
  amount_inr: number;
  amount_usd: number;
  token_amount_inr: number;
  token_amount_usd: number;
  is_popular: boolean;
  is_active: boolean;
  display_order: number;
}

export const courses: Course[] = [
  {
    id: 1,
    duration: "1 Month",
    title: "Foundation Course",
    subtitle: "Perfect for beginners to experience authentic Kalaripayattu",
    description: "An intensive introduction to the ancient martial art of Kalaripayattu, covering basic techniques, body conditioning, and traditional practices.",
    features: "Basic stances and movements\nBody flexibility training\nIntroduction to traditional weapons\nMeditation and breathing exercises\nCultural understanding of Kalari",
    type: "Residential",
    suitable_for: "Beginners",
    amount_inr: 15000,
    amount_usd: 200,
    token_amount_inr: 3000,
    token_amount_usd: 40,
    is_popular: false,
    is_active: true,
    display_order: 1
  },
  {
    id: 2,
    duration: "3 Months",
    title: "Intermediate Training",
    subtitle: "Deepen your practice with advanced techniques",
    description: "Build upon foundational skills with advanced combat techniques, weapon training, and deeper understanding of Kalari philosophy.",
    features: "Advanced combat techniques\nWeapon mastery (staff, sword)\nMarma point knowledge\nAdvanced flexibility training\nTraditional healing practices\nSparring sessions",
    type: "Residential",
    suitable_for: "Intermediate",
    amount_inr: 40000,
    amount_usd: 550,
    token_amount_inr: 8000,
    token_amount_usd: 110,
    is_popular: true,
    is_active: true,
    display_order: 2
  },
  {
    id: 3,
    duration: "6 Months",
    title: "Advanced Program",
    subtitle: "Master the art with comprehensive training",
    description: "Comprehensive training program covering all aspects of Kalaripayattu including advanced weapons, healing techniques, and teaching methodology.",
    features: "Complete weapon training\nMarma chikitsa (healing)\nAdvanced combat forms\nTeaching methodology\nPhilosophy and history\nDaily practice routines\nCertification preparation",
    type: "Residential",
    suitable_for: "Advanced",
    amount_inr: 75000,
    amount_usd: 1000,
    token_amount_inr: 15000,
    token_amount_usd: 200,
    is_popular: false,
    is_active: true,
    display_order: 3
  },
  {
    id: 4,
    duration: "1 Year",
    title: "Master Course",
    subtitle: "Complete mastery and instructor certification",
    description: "The ultimate training program for those seeking complete mastery of Kalaripayattu, including instructor certification and deep knowledge of healing arts.",
    features: "Complete Kalari mastery\nInstructor certification\nAdvanced marma therapy\nAll traditional weapons\nAyurvedic integration\nTeaching practicum\nLifetime guidance\nCertificate of completion",
    type: "Residential",
    suitable_for: "All Levels",
    amount_inr: 140000,
    amount_usd: 1850,
    token_amount_inr: 28000,
    token_amount_usd: 370,
    is_popular: false,
    is_active: true,
    display_order: 4
  }
];

export function getCourses(): Course[] {
  return courses.filter(course => course.is_active);
}

export function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id && course.is_active);
}

export function getFeaturedCourses(): Course[] {
  return courses
    .filter(course => course.is_active)
    .sort((a, b) => a.display_order - b.display_order);
}
