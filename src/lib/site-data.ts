import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutPortrait from "@/assets/about-portrait.jpg";
import authority from "@/assets/authority.jpg";
import caseEcommerce from "@/assets/case-ecommerce.jpg";
import casePersonal from "@/assets/case-personal.jpg";
import caseD2c from "@/assets/case-d2c.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceContent from "@/assets/service-content.jpg";
import servicePaid from "@/assets/service-paid.jpg";
import serviceConversion from "@/assets/service-conversion.jpg";
import serviceSystems from "@/assets/service-systems.jpg";
import finalCta from "@/assets/final-cta.jpg";
import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

export const images = {
  heroPortrait,
  aboutPortrait,
  authority,
  finalCta,
};

export const FACTS = {
  name: "Hancel Villatoro",
  roles: "Marketing Expert · Entrepreneur",
  tagline: "I Scale Brands",
  instagram: "@viphancel",
  instagramUrl: "https://instagram.com/viphancel",
  followers: "37.3K+",
  posts: "165+",
  completions: "450+",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Results", href: "#results" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export type Service = {
  num: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    title: "Brand Strategy",
    description: "Clarify positioning and build a stronger market identity.",
    image: serviceBrand,
    alt: "Monochrome brand guideline printouts and swatch cards on a white desk",
  },
  {
    num: "02",
    title: "Content & Social Growth",
    description: "Create systems designed to build attention and authority.",
    image: serviceContent,
    alt: "Minimal content studio with a phone on a gimbal and ring light",
  },
  {
    num: "03",
    title: "Paid Acquisition",
    description: "Build structured campaigns around measurable growth.",
    image: servicePaid,
    alt: "Laptop showing a campaign dashboard with cobalt blue charts",
  },
  {
    num: "04",
    title: "Conversion Strategy",
    description: "Turn traffic and attention into stronger customer journeys.",
    image: serviceConversion,
    alt: "White cards arranged as a customer journey with one blue card highlighted",
  },
  {
    num: "05",
    title: "Marketing Systems",
    description: "Create repeatable marketing processes that can scale.",
    image: serviceSystems,
    alt: "Abstract white node diagram representing a connected marketing system",
  },
];

export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  summary: string;
  image: string;
  alt: string;
  problem: string;
  strategy: string;
  execution: string;
  lesson: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ecommerce",
    category: "E-commerce Brand",
    title: "Repositioning + Acquisition",
    summary:
      "A product-led brand with strong inventory and an unclear reason to be chosen over cheaper alternatives.",
    image: caseEcommerce,
    alt: "Minimalist white e-commerce product packaging arranged on a pale grey surface",
    problem:
      "The brand competed on price because its positioning never explained why the product was worth more. Traffic arrived, compared, and left.",
    strategy:
      "Rebuild the value story first: define who the product is for, what it replaces, and the single idea the brand should own before any spend increases.",
    execution:
      "Rewrite the core brand narrative, restructure product messaging around that idea, then rebuild acquisition campaigns so each audience meets the message written for it.",
    lesson:
      "Acquisition rarely fixes a positioning problem. Clarity makes every channel cheaper to run.",
  },
  {
    id: "personal",
    category: "Personal Brand",
    title: "Authority + Content Strategy",
    summary:
      "A credible founder posting consistently, without a structure that turned attention into recognised authority.",
    image: casePersonal,
    alt: "Behind the scenes of a personal brand content shoot in a white studio",
    problem:
      "Content volume was high and direction was low. Each post existed on its own, so the audience never accumulated a clear idea of what this person stands for.",
    strategy:
      "Reduce the number of themes and increase the depth of each one, so the audience hears a consistent point of view instead of a feed of unrelated topics.",
    execution:
      "Define three content pillars, build a repeatable production format for each, and design the profile so a first-time visitor understands the offer within seconds.",
    lesson:
      "Authority is repetition with intent. Posting more is not the same as being remembered.",
  },
  {
    id: "d2c",
    category: "D2C Brand",
    title: "Funnel + Campaign Optimization",
    summary:
      "A direct-to-consumer brand generating interest that dropped off between the first click and the checkout.",
    image: caseD2c,
    alt: "Marketing funnel analytics displayed on a screen in a bright minimal workspace",
    problem:
      "The top of the funnel worked. Everything after it leaked, and the team could not see which step was responsible.",
    strategy:
      "Instrument the journey step by step so decisions are based on where people actually stop, not on where the team assumes they stop.",
    execution:
      "Map each stage from ad to checkout, rewrite the weakest steps, and run a structured testing cadence so improvements compound instead of resetting.",
    lesson: "You cannot optimise what you cannot see. Visibility comes before creativity.",
  },
];

export const GROWTH_STAGES = [
  { num: "01", title: "Position", copy: "Clarify how the brand should be perceived." },
  { num: "02", title: "Attract", copy: "Create attention that reaches the right audience." },
  { num: "03", title: "Convert", copy: "Turn attention into qualified opportunities." },
  { num: "04", title: "Optimize", copy: "Identify what is working and improve the system." },
  { num: "05", title: "Scale", copy: "Expand what works without losing the brand." },
];

export const PROCESS = [
  { num: "01", title: "Discover", copy: "Understand the brand and the opportunity." },
  { num: "02", title: "Diagnose", copy: "Identify what is slowing growth." },
  { num: "03", title: "Design", copy: "Build the strategy and direction." },
  { num: "04", title: "Optimize", copy: "Identify what is working and improve the system." },
  { num: "05", title: "Scale", copy: "Double down on what works." },
];

export const TESTIMONIALS = [
  {
    quote:
      "The clarity came before the campaigns. Once we knew what we were actually selling, everything else got simpler.",
    client: "Sample Client",
    business: "Consumer brand",
    outcome: "Repositioning",
  },
  {
    quote:
      "It stopped feeling like guessing. We had a system, a sequence, and a reason behind every decision.",
    client: "Sample Client",
    business: "Service business",
    outcome: "Marketing systems",
  },
  {
    quote:
      "The audit alone showed us where the attention we already had was quietly going to waste.",
    client: "Sample Client",
    business: "Personal brand",
    outcome: "Content strategy",
  },
];

export const INSTAGRAM_GRID = [
  { src: ig1, alt: "Marketing strategy notebook with a hand-drawn funnel diagram" },
  { src: ig2, alt: "Entrepreneur speaking at a small modern business workshop" },
  { src: ig3, alt: "Phone showing a growth analytics chart with blue bars" },
  { src: ig4, alt: "Espresso and notebook on a marble table in a modern city" },
  { src: ig5, alt: "Abstract glass office tower facade against a white sky" },
  { src: ig6, alt: "Monochrome brand moodboard pinned on a white wall" },
];

export const AUDIT_AREAS = [
  {
    key: "brand",
    title: "Brand",
    copy: "How clearly your brand explains why it deserves attention.",
  },
  {
    key: "content",
    title: "Content",
    copy: "Whether your content builds a consistent point of view.",
  },
  {
    key: "conversion",
    title: "Conversion",
    copy: "Where interested people stop moving toward a decision.",
  },
  {
    key: "acquisition",
    title: "Acquisition",
    copy: "How new attention is created, and how repeatable it is.",
  },
];
