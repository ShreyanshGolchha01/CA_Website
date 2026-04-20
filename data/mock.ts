export type NavItem = {
  label: string;
  href: string;
};

export type ValuePillar = {
  title: string;
  description: string;
  icon: "integrity" | "expertise" | "commitment";
};

export type ServiceItem = {
  title: string;
  description: string;
  icon:
    | "statutoryAudit"
    | "taxAudit"
    | "incomeTax"
    | "gst"
    | "incorporation"
    | "roc"
    | "bookkeeping"
    | "advisory";
};

export type Partner = {
  name: string;
  qualification: string;
  membershipNumber: string;
  bio: string;
  image: string;
};

export type Article = {
  title: string;
  excerpt: string;
  date: string;
};

export type VideoResource = {
  title: string;
  summary: string;
  duration: string;
  embedUrl: string;
};

export type ProfessionalUpdate = {
  source: "ICAI" | "MCA" | "Income Tax Department";
  title: string;
  summary: string;
};

export type UsefulLink = {
  title: string;
  url: string;
};

export type MediaCoverageItem = {
  id: number;
  publication: string;
  publicationColor: string;
  badge: string;
  date: string;
  page: string;
  cardImage: string;
  fullImage: string;
  headline: {
    hi: string;
    en: string;
    mr: string;
  };
  details: {
    hi: string[];
    en: string[];
    mr: string[];
  };
};

export type MediaInterview = {
  channel: string;
  title: string;
  date: string;
  embedUrl: string;
};

export const firmInfo = {
  name: "Ankit Lunawat & Associates",
  tagline: "Accurate, Timely, and Ethical Financial Guidance for Businesses and Professionals.",
  subTagline: "Chartered Accountant Firm | Gotegaon, District Narsinghpur (MP)",
  city: "Gotegaon, District Narsinghpur (MP)",
  establishedYear: "",
  about:
    "Ankit Lunawat & Associates is a professionally managed CA firm delivering taxation, audit, accounts, registration, and business advisory services. We help individuals, businesses, traders, and professionals with structured financial management and compliance support.",
  icaiMembershipNumber: "ICAI Registered Chartered Accountant",
  frn: "",
  address: "Ankit Lunawat & Associates, Gotegaon, District Narsinghpur (MP)",
  phone: "8989510482",
  whatsapp: "8989510482",
  officeTimings: "Monday - Saturday, 10:30 AM to 7:00 PM",
  email: "caankitlunawat@gmail.com",
  instagram: "https://www.instagram.com/ankitlunawat_associates",
  linkedin: "",
  mapEmbedUrl: "https://www.google.com/maps?q=Ankit+lunawat+%26+Associates&output=embed",
  mapShareUrl: "https://share.google/qCCEwR3d0vQn4oJZW",
  complianceBanner:
    "Trusted CA services focused on GST, Income Tax, Audit, and Business Advisory in Gotegaon (MP).",
  disclaimer:
    "This website is maintained for general professional information and client communication.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Articles", href: "#news" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Vision",
    description:
      "To offer ethical, transparent, and high-quality financial and compliance services to individuals, startups, and established businesses.",
    icon: "expertise",
  },
  {
    title: "Mission",
    description:
      "To simplify taxation and compliance, guide businesses with the right financial insights, and maintain trust through professional standards.",
    icon: "commitment",
  },
  {
    title: "Practice Standards",
    description:
      "We focus on accurate, timely, and compliant service delivery with a strong commitment to client satisfaction.",
    icon: "integrity",
  },
];

export const services: ServiceItem[] = [
  {
    title: "GST Services",
    description:
      "GST Registration, Monthly/Quarterly GST Returns Filing, GST Books and Reconciliation, Annual Return Filing (GSTR-9/9C), and GST Advisory and Compliance Support.",
    icon: "gst",
  },
  {
    title: "Income Tax Services",
    description:
      "ITR Filing for salaried, business, professionals, and HUF; business income computation; tax planning and optimization; TDS/TCS compliance; and notice handling with reply drafting.",
    icon: "incomeTax",
  },
  {
    title: "Audit & Assurance",
    description:
      "Income Tax Audit, GST Audit and Reconciliation, Internal Audit, Stock and Process Audit, and Project and Compliance Audit.",
    icon: "taxAudit",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Monthly accounts management, ledger scrutiny and reconciliation, profit and loss with balance sheet preparation, MIS reporting, and cash flow statements.",
    icon: "bookkeeping",
  },
  {
    title: "Business Registration & Licenses",
    description:
      "Firm registration, company registration guidance, MSME registration, shop and establishment registration, and PAN, TAN, and GST registration.",
    icon: "incorporation",
  },
  {
    title: "Project Report & Financial Assistance",
    description:
      "Detailed project reports for banks, CMA data preparation, working capital assessment, and loan file preparation with documentation.",
    icon: "advisory",
  },
];

export const partners: Partner[] = [
  {
    name: "CA Ankit Lunawat",
    qualification: "Founder & Proprietor",
    membershipNumber: "Specialization: GST, Income Tax, Audit & Financial Advisory",
    bio: "A qualified Chartered Accountant with expertise in handling taxation, audit, and business advisory services. Focused on delivering accurate, timely, and compliant solutions to clients.",
    image: "/images/partner-1.svg",
  },
  {
    name: "Srishti Lunawat",
    qualification: "CA Semi Qualified",
    membershipNumber: "Focus: Taxation, Accounting, GST, and Income Tax Compliance",
    bio: "Assists in taxation, accounting, and compliance work with strong knowledge in GST and Income Tax matters. Plays a key role in supporting client servicing and documentation.",
    image: "/images/partner-2.svg",
  },
  {
    name: "Adv. Mayank Lunawat",
    qualification: "Tax Practitioner & Legal Advisor",
    membershipNumber: "Focus: Tax Notices, Representations, and Legal Compliance",
    bio: "Handles taxation matters, legal compliance, and advisory services. Provides support in handling notices, representations, and legal aspects related to tax matters.",
    image: "/images/partner-3.svg",
  },
  {
    name: "Garima Lunawat",
    qualification: "MBA (Finance & Management)",
    membershipNumber: "Focus: Business Advisory, Financial Planning, and Client Coordination",
    bio: "Supports in business advisory, financial planning, and client coordination. Focused on improving client experience and operational efficiency.",
    image: "/images/partner-4.svg",
  },
];

export const articles: Article[] = [
  {
    title: "GST Services for Businesses and Professionals",
    excerpt:
      "Covers GST registration, monthly or quarterly return filing, books reconciliation, annual return filing (GSTR-9/9C), and advisory support.",
    date: "Service Overview",
  },
  {
    title: "Income Tax Filing and Compliance Support",
    excerpt:
      "Includes ITR filing for salaried, business, professionals, and HUF, along with tax planning, TDS/TCS compliance, and notice handling support.",
    date: "Service Overview",
  },
  {
    title: "Audit, Accounts, and Financial Advisory",
    excerpt:
      "Provides audit and assurance, bookkeeping, registration support, project reports for banks, CMA data preparation, and working capital assessment.",
    date: "Service Overview",
  },
];

export const videoResources: VideoResource[] = [
  // Fill with real video resources.
];

export const professionalUpdates: ProfessionalUpdate[] = [
  // Fill with actual professional updates.
];

export const usefulLinks: UsefulLink[] = [
  { title: "Income Tax Portal", url: "https://www.incometax.gov.in" },
  { title: "GST Portal", url: "https://www.gst.gov.in" },
  { title: "MCA21", url: "https://www.mca.gov.in" },
  { title: "ICAI Website", url: "https://www.icai.org" },
  { title: "TRACES", url: "https://www.tdscpc.gov.in" },
  { title: "NSDL", url: "https://www.nsdl.co.in" },
  { title: "RBI", url: "https://www.rbi.org.in" },
  { title: "SEBI", url: "https://www.sebi.gov.in" },
];

export const mediaCoverage: MediaCoverageItem[] = [
  {
    id: 1,
    publication: "Nai Dunia",
    publicationColor: "#F59E0B",
    badge: "City Coverage",
    date: "12 Dec 2025",
    page: "Page IV",
    cardImage: "/images/naidunia-full-page.jpeg",
    fullImage: "/images/naidunia-full-page.jpeg",
    headline: {
      hi: "शहर को बस अतिक्रमण मुक्त कर दें, तो बन जाएगा महानगर",
      en: "Encroachment-Free City Vision Highlighted in Coverage",
      mr: "अतिक्रमणमुक्त शहराच्या संकल्पनेवर सविस्तर वृत्तांकन",
    },
    details: {
      hi: [
        "नईदुनिया के शहर संस्करण में स्थानीय मुद्दों और सामाजिक गतिविधियों पर प्रमुख कवरेज।",
        "मुख्य शीर्षक के साथ ग्राउंड रिपोर्ट और फोटो कवरेज शामिल।",
      ],
      en: [
        "Featured in Nai Dunia city edition with prominent local civic coverage.",
        "Includes headline story, supporting columns, and event visuals.",
      ],
      mr: [
        "नवदुनिया शहर आवृत्तीत स्थानिक प्रश्नांवरील मुख्य बातमी.",
        "मुख्य मथळ्यासह फोटो आणि पूरक स्तंभ प्रकाशित.",
      ],
    },
  },
  {
    id: 2,
    publication: "Nai Dunia",
    publicationColor: "#f5590b",
    badge: "Expert View",
    date: "21 Oct 2025",
    page: "Business Column",
    cardImage: "/images/naidunia-repo-rate.jpeg",
    fullImage: "/images/naidunia-repo-rate.jpeg",
    headline: {
      hi: "आरबीआई की रेपो रेट में कटौती से राहत संभव",
      en: "Possible Relief from RBI Repo Rate Cut",
      mr: "आरबीआय रेपो दर कपातीमुळे दिलासा शक्य",
    },
    details: {
      hi: [
        "रेपो रेट में कटौती का असर होम, कार और बिजनेस लोन की EMI पर पड़ सकता है।",
        "वित्तीय अनुशासन और सही उत्पाद चयन से बचत बेहतर हो सकती है।",
      ],
      en: [
        "Repo rate reduction may support affordability across home, car, and business loans.",
        "Disciplined planning and product selection can improve savings outcomes.",
      ],
      mr: [
        "रेपो दर कपातीचा परिणाम विविध कर्जांच्या परतफेडीवर होऊ शकतो.",
        "योग्य नियोजन आणि उत्पाद निवडीमुळे बचत अधिक प्रभावी होते.",
      ],
    },
  },
  {
    id: 3,
    publication: "Patrika",
    publicationColor: "#0C447C",
    badge: "Expert View",
    date: "04 Jul 2025",
    page: "Page 8",
    cardImage: "/images/patrika-gold-investment.jpeg",
    fullImage: "/images/patrika-gold-investment.jpeg",
    headline: {
      hi: "लॉन्ग टाइम सेविंग के लिए जबलपुरियंस को रास आ रहा गोल्ड इन्वेस्टमेंट",
      en: "Gold Investment Gaining Attention for Long-Term Savings",
      mr: "दीर्घकालीन बचतीसाठी गोल्ड इन्व्हेस्टमेंट लोकप्रिय",
    },
    details: {
      hi: [
        "डिजिटल गोल्ड, गोल्ड ETF और सॉवरेन गोल्ड बॉन्ड जैसे विकल्प चर्चा में रहे।",
        "विशेषज्ञ मत में व्यवस्थित निवेश और जोखिम संतुलन पर जोर दिया गया।",
      ],
      en: [
        "The article highlights digital gold, ETFs, and sovereign bonds as key options.",
        "Expert commentary emphasizes consistent investing and risk balance.",
      ],
      mr: [
        "डिजिटल गोल्ड, ETF आणि सॉव्हरिन बॉन्ड या पर्यायांवर लेखात भर.",
        "तज्ञांच्या मते नियोजनबद्ध गुंतवणूक आणि जोखीम संतुलन महत्त्वाचे.",
      ],
    },
  },
];

export const featuredPublications: string[] = [];

export const mediaInterviews: MediaInterview[] = [
  // Optional: Add TV/web interviews with embeddable URLs when available.
];

export const sectionContent = {
  navbar: {
    mobileDescription: "Navigate through the website sections.",
  },
  hero: {
    eyebrow: "Ankit Lunawat & Associates",
    cta: "Get In Touch",
    placeholderTitle: "Professional Financial Services",
    placeholderSubtitle: "Official firm profile and details will be updated shortly.",
  },
  about: {
    title: "About Us",
    placeholderDescription: "Firm profile details will be updated soon.",
    registrationPending: "Registration details will be updated soon.",
  },
  services: {
    title: "Our Services",
    subtitle:
      "We provide structured and reliable support across GST, Income Tax, audit, accounting, registration, and financial assistance requirements.",
    emptyStateTitle: "Service details will be added soon.",
    emptyStateDescription: "We will update this section with actual service offerings.",
  },
  team: {
    title: "Our Team",
    subtitle:
      "Meet the professionals supporting taxation, audit, legal compliance, and financial advisory services.",
    emptyState: "Team profiles will be published after final review.",
  },
  resources: {
    title: "Educational Resources",
    subtitle:
      "Articles, educational video placeholders, and regulatory updates for general awareness.",
    articlesTitle: "Articles",
    videosTitle: "Watch & Learn",
    videosComingSoonTitle: "Watch & Learn: Coming Soon",
    videosComingSoonDescription:
      "Practical videos on GST, Income Tax, Audit, and Compliance will be published here very soon. We are preparing clear and useful explainers for clients.",
    updatesTitle: "Professional Updates",
    embedPlaceholder: "Embed-ready YouTube slot",
    embedUrlLabel: "Embed URL",
    articlesEmpty: "No articles added yet.",
    videosEmpty: "No video resources added yet.",
    updatesEmpty: "No professional updates added yet.",
  },
  news: {
    title: "Articles and Blogs",
    // subtitle:
    //   "Media coverage highlighting our work in taxation, audit, and compliance across trusted publications.",
    featuredInTitle: "Also Featured In",
    interviewsTitle: "TV & Video Mentions",
    interviewsSubtitle: "Optional interview embeds can be added here whenever links are available.",
  },
  usefulLinks: {
    title: "Useful Links",
    subtitle: "Direct access to important government and regulatory portals.",
    emptyState: "Useful links will be listed soon.",
  },
  contact: {
    title: "Contact",
    subtitle:
      "For professional queries, please reach out using the office details below or submit the contact form.",
    officeDetailsTitle: "Office Details",
    formTitle: "Send a Message",
    instagramText: "@ankitlunawat_associates",
    linkedinText: "View Professional Profile",
    whatsappLabel: "WhatsApp",
    officeHoursLabel: "Office Timings",
    mapLinkText: "Open in Google Maps",
    detailsPending: "Contact details will be updated soon.",
    mapPending: "Map location will be added after address confirmation.",
    formLabels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      messagePlaceholder: "Write your query here",
      submit: "Submit",
      submitting: "Sending...",
    },
    successTitle: "Message submitted successfully.",
    successDescription:
      "Your details have been shared with our team by email. We will contact you shortly.",
    errorTitle: "Unable to send message.",
    errorDescription:
      "Please try again in a moment, or contact us directly via phone or email.",
  },
  footer: {
    memberLine: "Professional taxation, audit, and advisory services in Gotegaon, Narsinghpur (MP)",
    quickLinks: "Quick Links",
    rights: "All rights reserved.",
  },
};
