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

export const firmInfo = {
  name: "Sharma & Associates",
  tagline: "Trusted Financial Guidance. Rooted in Integrity.",
  subTagline: "Chartered Accountants | Est. 2005 | Jaipur",
  city: "Jaipur",
  establishedYear: "2005",
  about:
    "Sharma & Associates is a practice dedicated to audit, direct and indirect taxation, compliance reporting, and advisory support for businesses and individuals. Our team follows applicable professional standards and delivers clear, timely, and structured financial guidance.",
  icaiMembershipNumber: "ICAI Membership No. 098765",
  frn: "FRN 012345N",
  address:
    "Office No. 402, Horizon Business Centre, C-Scheme, Jaipur, Rajasthan 302001",
  phone: "+91 98765 43210",
  email: "info@sharmaassociates.in",
  linkedin: "https://www.linkedin.com/company/sharma-associates-ca",
  complianceBanner:
    "Informational website maintained in line with ICAI guidelines for professional communication.",
  disclaimer:
    "This website is for informational purposes only and does not constitute solicitation or advertisement.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const valuePillars: ValuePillar[] = [
  {
    title: "Integrity",
    description:
      "We maintain transparency, confidentiality, and professional ethics in every engagement.",
    icon: "integrity",
  },
  {
    title: "Expertise",
    description:
      "Our team applies updated technical knowledge across audit, taxation, and compliance matters.",
    icon: "expertise",
  },
  {
    title: "Commitment",
    description:
      "We prioritize responsive communication and timely delivery aligned with statutory timelines.",
    icon: "commitment",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Statutory Audit",
    description:
      "Audit procedures and reporting as required under applicable laws and standards.",
    icon: "statutoryAudit",
  },
  {
    title: "Tax Audit",
    description:
      "Tax audit assignments with documentation and reporting support under relevant provisions.",
    icon: "taxAudit",
  },
  {
    title: "Income Tax Planning & Filing",
    description:
      "Return preparation, tax planning support, and filing compliance for individuals and entities.",
    icon: "incomeTax",
  },
  {
    title: "GST Registration & Returns",
    description:
      "GST registration assistance and periodic return filing with reconciliation support.",
    icon: "gst",
  },
  {
    title: "Company Incorporation",
    description:
      "Documentation and filing support for setting up companies under prescribed procedures.",
    icon: "incorporation",
  },
  {
    title: "ROC Compliance",
    description:
      "Annual and event-based ROC filings along with statutory record maintenance guidance.",
    icon: "roc",
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Bookkeeping structures, accounting supervision, and periodic financial reporting assistance.",
    icon: "bookkeeping",
  },
  {
    title: "Financial Advisory (as per Regulation 191, CA Regulations 1988)",
    description:
      "Advisory support on financial structuring and compliance-oriented decision frameworks.",
    icon: "advisory",
  },
];

export const partners: Partner[] = [
  {
    name: "CA Rohan Sharma",
    qualification: "B.Com, FCA",
    membershipNumber: "ICAI Membership No. 098765",
    bio: "Handles statutory audits, internal controls review, and financial reporting engagements.",
    image: "/images/partner-1.svg",
  },
  {
    name: "CA Nisha Mehta",
    qualification: "B.Com, ACA",
    membershipNumber: "ICAI Membership No. 112233",
    bio: "Focuses on direct tax advisory, return compliance, and assessment representation support.",
    image: "/images/partner-2.svg",
  },
  {
    name: "CA Arvind Kulkarni",
    qualification: "B.Com, FCA, DISA",
    membershipNumber: "ICAI Membership No. 223344",
    bio: "Leads GST compliance systems, ROC reporting calendars, and process-oriented advisory.",
    image: "/images/partner-3.svg",
  },
];

export const articles: Article[] = [
  {
    title: "Key Changes in Budget 2024",
    excerpt:
      "A concise overview of direct and indirect tax changes relevant for businesses and salaried taxpayers.",
    date: "15 Feb 2026",
  },
  {
    title: "GST Annual Return Guide",
    excerpt:
      "Checklist-based guidance for reconciling data and preparing annual GST returns accurately.",
    date: "02 Mar 2026",
  },
  {
    title: "New ITR Forms Explained",
    excerpt:
      "Summary of form-level updates, revised disclosures, and filing points for the current year.",
    date: "21 Mar 2026",
  },
];

export const videoResources: VideoResource[] = [
  {
    title: "Budget 2024 in 12 Minutes",
    summary: "Educational walkthrough of major compliance updates and reporting implications.",
    duration: "12 min",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_BUDGET",
  },
  {
    title: "GST Return Reconciliation Basics",
    summary: "Step-by-step explanation of periodic GST reconciliation checkpoints.",
    duration: "10 min",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_GST",
  },
  {
    title: "ITR Filing Documentation Checklist",
    summary: "A practical checklist of records commonly needed before filing income tax returns.",
    duration: "9 min",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_ITR",
  },
];

export const professionalUpdates: ProfessionalUpdate[] = [
  {
    source: "ICAI",
    title: "Advisory on Documentation Standards",
    summary:
      "Recent ICAI communication emphasizes quality documentation and audit trail clarity for assignments.",
  },
  {
    source: "MCA",
    title: "Annual Filing Form Timeline Update",
    summary:
      "MCA circular updated timelines and fee implications for select annual compliance forms.",
  },
  {
    source: "Income Tax Department",
    title: "E-Filing Utility Revision Note",
    summary:
      "Updated utility version issued with clarifications on validation checks for specific schedules.",
  },
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

export const sectionContent = {
  navbar: {
    mobileDescription: "Navigate through the website sections.",
  },
  hero: {
    eyebrow: "Chartered Accountants",
    cta: "Get In Touch",
  },
  about: {
    title: "About The Firm",
  },
  services: {
    title: "Services",
    subtitle:
      "The following services are offered in an informative mode and are executed as per applicable professional and statutory requirements.",
  },
  team: {
    title: "Team",
    subtitle:
      "Meet our professionals with experience in audit, taxation, compliance, and reporting assignments.",
  },
  resources: {
    title: "Educational Resources",
    subtitle:
      "Articles, educational video placeholders, and regulatory updates for general awareness.",
    articlesTitle: "Articles",
    videosTitle: "Watch & Learn",
    updatesTitle: "Professional Updates",
    embedPlaceholder: "Embed-ready YouTube slot",
    embedUrlLabel: "Embed URL",
  },
  usefulLinks: {
    title: "Useful Links",
    subtitle: "Direct access to important government and regulatory portals.",
  },
  contact: {
    title: "Contact",
    subtitle:
      "For professional queries, please use the details below or submit the contact form.",
    officeDetailsTitle: "Office Details",
    formTitle: "Send a Message",
    linkedinText: "View Professional Profile",
    formLabels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      messagePlaceholder: "Write your query here",
      submit: "Submit",
    },
    successTitle: "Message submitted successfully.",
    successDescription:
      "This demo form is frontend-only. Your details are not sent to a backend.",
  },
  footer: {
    memberLine: "Member of The Institute of Chartered Accountants of India",
    quickLinks: "Quick Links",
    rights: "All rights reserved.",
  },
};
