/**
 * Business copy and media paths for Choropoulos Sound.
 * Swap placeholder images in /public/images and fill in the real email
 * when Nikolaos provides them.
 */
export const site = {
  name: "Choropoulos Sound",
  legalName: "Χορόπουλος Νικόλαος",
  category: "Ηχητική Κάλυψη Εκδηλώσεων · DJ",
  englishLine: "Sound - Light - Atmosphere",
  tagline:
    "Αναλαμβάνουμε εκδηλώσεις γάμου, βάπτισης, events, karaoke, parties και lives με την καλύτερη μουσική και τον πιο σύγχρονο εξοπλισμό στο Αγρίνιο.",
  shortTagline: "Ήχος, φως και ατμόσφαιρα για τις στιγμές που μετράνε.",
  servicesIntro:
    "Οργανώνουμε μουσικά, ηχητικά και φωτιστικά τις πιο ωραίες γαμήλιες δεξιώσεις, τα πιο κεφάτα party και γενικότερα τις πιο χαρούμενες εκδηλώσεις!",
  about:
    "Καλύπτουμε γάμους, βαπτίσεις, πάρτι και live εμφανίσεις στην περιοχή του Αγρινίου — με προσωπική φροντίδα, σύγχρονο εξοπλισμό και μουσική που δένει με τον χαρακτήρα κάθε εκδήλωσης. Από την πρώτη επικοινωνία μέχρι τον τελευταίο χορό, ο ήχος και ο φωτισμός δουλεύουν μαζί για μια βραδιά που θυμάστε.",
  email: "choropoulosdj@gmail.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://choropoulos-sound.vercel.app",
  address: {
    street: "28ης Οκτωβρίου 51",
    area: "Άγιος Κωνσταντίνος",
    postal: "30027",
    region: "Αιτωλοακαρνανίας",
    line: "28ης Οκτωβρίου 51, Άγιος Κωνσταντίνος, 30027, Αιτωλοακαρνανίας",
  },
  phones: [
    {
      label: "Κινητό",
      display: "693 612 1241",
      href: "tel:+306936121241",
    },
    {
      label: "Σταθερό",
      display: "26410 52936",
      href: "tel:+302641052936",
    },
  ],
  social: {
    facebook: "https://www.facebook.com/choropoulosdj/",
    instagram: "https://www.instagram.com/choropoulos_nikos/",
    youtube: "https://www.youtube.com/channel/UCmIdxEnRktSUGGEzYHFGcUg",
  },
  maps: {
    embed:
      "https://maps.google.com/maps?q=28%CE%B7%CF%82%20%CE%9F%CE%BA%CF%84%CF%89%CE%B2%CF%81%CE%AF%CE%BF%CF%85%2051%2C%20%CE%86%CE%B3%CE%B9%CE%BF%CF%82%20%CE%9A%CF%89%CE%BD%CF%83%CF%84%CE%B1%CE%BD%CF%84%CE%AF%CE%BD%CE%BF%CF%82%2C%2030027&z=16&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=28%CE%B7%CF%82+%CE%9F%CE%BA%CF%84%CF%89%CE%B2%CF%81%CE%AF%CE%BF%CF%85+51%2C+%CE%86%CE%B3%CE%B9%CE%BF%CF%82+%CE%9A%CF%89%CE%BD%CF%83%CF%84%CE%B1%CE%BD%CF%84%CE%AF%CE%BD%CE%BF%CF%82%2C+30027",
  },
  /**
   * Drop a muted looping clip at /public/videos/hero.mp4 and set this
   * to "/videos/hero.mp4" to replace the still hero image.
   */
  heroVideo: null as string | null,
} as const;

export const nav = [
  { href: "#about", label: "Σχετικά" },
  { href: "#services", label: "Υπηρεσίες" },
  { href: "#contact", label: "Επικοινωνία" },
] as const;

export const services = [
  {
    id: "weddings",
    title: "Γάμοι",
    eyebrow: "Weddings",
    description:
      "Μουσική και φωτισμός που ακολουθούν τον ρυθμό της δεξίωσης — από την είσοδο των νεόνυμφων μέχρι τα ξημερώματα.",
    image: "/images/service-wedding.jpg",
    // Replace service-wedding.jpg with a real wedding reception photo.
    featured: true,
  },
  {
    id: "baptisms",
    title: "Βαπτίσεις",
    eyebrow: "Baptisms",
    description:
      "Διακριτική ηχητική κάλυψη στην τελετή και κεφάτη συνέχεια στο τραπέζι, με σεβασμό στην οικογένεια και τους καλεσμένους.",
    image: "/images/service-baptism.jpg",
    featured: false,
  },
  {
    id: "parties",
    title: "Events & Parties",
    eyebrow: "Nights out",
    description:
      "Γενέθλια, εταιρικά και ιδιωτικά πάρτι με δυναμικό πρόγραμμα, φώτα και ατμόσφαιρα που κρατάει τον χώρο ζωντανό.",
    image: "/images/service-party.jpg",
    featured: false,
  },
  {
    id: "karaoke",
    title: "Karaoke",
    eyebrow: "Sing along",
    description:
      "Karaoke βραδιές με καθαρό ήχο, οθόνες και λίστα που σηκώνει και τους πιο διστακτικούς στο μικρόφωνο.",
    image: "/images/service-karaoke.jpg",
    featured: false,
  },
  {
    id: "live",
    title: "Live Music",
    eyebrow: "Lives",
    description:
      "Ηχητική υποστήριξη για live εμφανίσεις και μουσικά events — σκηνή, μόνιτορ και μίξη που τιμούν τους μουσικούς.",
    image: "/images/service-live.jpg",
    featured: false,
  },
] as const;
