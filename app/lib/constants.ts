import { CertificateTypes, NavLinksTypes, TechnicalSkills } from "./types";

export const navLinks: NavLinksTypes[] = [
  {
    label: "Home",
    url: "/",
    icon: "/home.svg"
  },
  {
    label: "About",
    url: "/about",
    icon: "/user.svg"
  },
  {
    label: "Projects",
    url: "/projects",
    icon: "/grid.svg"
  },
];

// Projects
const github = "https://github.com/DowardCaparas/";
const githubPages = "https://dowardcaparas.github.io/";

export const projects = [
  {
    name: "Shapi",
    type: "E-commerce Website",
    image: "/images/shapiMockup.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "Vercel",
      "Tailwind",
      "Shadcn",
      "REST API"
    ],
    url: "https://dcaparas-shapi.vercel.app",
    github: `${github}e-commerce-app-shapi`,
    description: `Simple e-commerce prototype where users can sign up as either an Admin or a Shopper.`
  },
  {
    name: "Book Keeper",
    type: "Web app",
    image: "/images/bookKeeperMockup.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "Vercel",
      "Tailwind",
    ],
    url: "https://dcaparas-book-keeper.vercel.app",
    github: `${github}book-keeper`,
    description: `Book management system with customers, CRUD.`,
  },
  {
    name: "Payflow",
    type: "Web app",
    image: "/images/payflowMockup.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "SQL",
      "PostgreSQL",
      "Vercel",
    ],
    url: "https://dcaparas-payflow.vercel.app",
    github: `${github}payflow`,
    description: `Invoice management system with customers, CRUD.`,
  },
  {
    name: "Content Summarizer AI",
    type: "Web app",
    image: "/images/aiSummarizerMockup.webp",
    technologies: ["React", "Next.js", "TypeScript", "Vercel", "OpenAI"],
    url: "https://dcaparas-content-summarizer.vercel.app",
    github: `${github}ai-content-summarizer`,
    description: `It can summarize the article or content.`,
  },
  {
    name: "Dishify Recipe",
    type: "Website",
    image: "/images/dishifyRecipeMockup.webp",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "REST API",
      "Vercel",
      "Tailwind",
    ],
    url: "https://dcaparas-dishify-recipe.vercel.app",
    github: `${github}recipe-app`,
    description: `A recipe app where users can select a dish and view its ingredients and instructions.`,
  },
  {
    name: "QR Code Generator",
    type: "Web app",
    image: "/images/qrCodeGeneratorMockup.webp",
    technologies: ["React", "Vite", "TypeScript", "Vercel", "Tailwind"],
    url: "https://dcaparas-qrcode-generator.vercel.app",
    github: `${github}qrcode-generator`,
    description: `QR Code generator, you can download it also as PNG or JPG.`,
  },
  {
    name: "Anime Vault",
    type: "Website",
    image: "/images/animeVaultMockup.webp",
    technologies: ["Tailwind", "React", "Next.js", "TypeScript", "Vercel"],
    url: "https://dcaparas-anime-vault.vercel.app",
    github: `${github}anime_list`,
    description: `Infinite scroll for looking anime movies/series.`,
  },
  {
    name: "ToDo App",
    type: "Web App",
    image: "/images/todoAppMockup.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: `${githubPages}todoApp`,
    github: `${github}todoApp`,
    description: `Basic task manager, you can manage and monitor your tasks.`,
  },
  {
    name: "BinDec",
    type: "Web App",
    image: "/images/bindecMockup.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: "https://dcaparas-bin-dec.vercel.app",
    github: `${github}BinDec`,
    description: `Decimal to Binary converter and vice versa.`,
  },
  {
    name: "Doward Website",
    type: "Website",
    image: "/images/dowardPortfolioMockup01.webp",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    url: "https://dowardc.vercel.app",
    github: `${github}portfolio-main`,
    description: `This is my old website.`,
  },
  {
    name: "Sophia Site",
    type: "Website",
    image: "/images/sophiaPortfolioMockup.webp",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    url: "https://sophia-site.vercel.app",
    github: `${github}sophia-portfolio`,
    description: `Single page website.`,
  },
  {
    name: "Doward Site",
    type: "Website",
    image: "/images/dowardPortfolioMockup.webp",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
    url: `${githubPages}portfolio`,
    github: `${github}portfolio`,
    description: `Single page website.`,
  },
  {
    name: "Calculator",
    type: "Web App",
    image: "/images/simpleCalculatorMockup.webp",
    technologies: ["React", "Tailwind", "TypeScript", "Next.js"],
    url: `${githubPages}calculator`,
    github: `${github}calculator`,
    description: `Basic arethmetic calculator.`,
  },
  {
    id: 12,
    name: "Day Counter",
    type: "Web App",
    image: "/images/remainingDaysCalculatorMockup.webp",
    technologies: ["Tailwind", "React", "Next.js", "JavaScript"],
    url: `${githubPages}RemainingDayCounter`,
    github: `${github}RemainingDayCounter`,
    description: `The calculator that can count the remaining days between start and end date.`,
  },
];

// Certificates
const freeCodeCamp =
  "https://www.freecodecamp.org/certification/Dounhuward_B_Caparas/";

export const certificates: CertificateTypes[] = [
  {
    name: "SQL (Intermediate)",
    organization: "HackerRank",
    orglogo: "/hackerrank.svg",
    url: `https://www.hackerrank.com/certificates/iframe/ec24b289f045`,
    image: `/images/SQL(Intermediate)Cert.webp`,
    date: "Mar 2025",
    skills: ["Complex joins", "Unions", "Sub-queries"],
    description: `It includes complex joins, unions, and sub-queries.`,
  },
  {
    name: "SQL (Basic)",
    organization: "HackerRank",
    orglogo: "/hackerrank.svg",
    url: `https://www.hackerrank.com/certificates/iframe/ef81d36d6520`,
    image: `/images/SQL(Basic)Cert.webp`,
    date: "Mar 2025",
    skills: ["Simple queries", "Relationships", "Aggregators"],
    description: `It includes simple queries, relationships, and aggregators.`,
  },
  {
    name: "Problem Solving (Basic)",
    organization: "HackerRank",
    orglogo: "/hackerrank.svg",
    url: `https://www.hackerrank.com/certificates/iframe/ec24b289f045`,
    image: `/images/ProblemSolving(Basic)Cert.webp`,
    date: "Mar 2025",
    skills: ["Algorithms", "Data Structures", "Sorting and Searching", "Arrays and Strings"],
    description: `It covers basic topics of Data Structures (such as Arrays, Strings) 
      and Algorithms (such as Sorting and Searching).`,
  },
  {
    name: "React (Basic)",
    organization: "HackerRank",
    orglogo: "/hackerrank.svg",
    url: `https://www.hackerrank.com/certificates/iframe/57c3315cf170`,
    image: `/images/React(Basic)Cert.webp`,
    date: "Mar 2025",
    skills: ["Routing", "Rendering Elements", "State Management (Internal Component State)",
      "Handling Events", " ES6 and JavaScript", "Form Validation"
    ],
    description: `React (Basic) It covers topics like Basic Routing, Rendering Elements,
      State Management (Internal Component State), Handling Events, ES6 and JavaScript and Form Validation.`,
  },
  {
    name: "Foundational C-Sharp with Microsoft",
    organization: "freeCodeCamp",
    orglogo: "/images/freeCodeCampLogo.webp",
    url: `${freeCodeCamp}foundational-c-sharp-with-microsoft`,
    image: `/images/FoundationalC-SharpCert.webp`,
    date: "Aug 2024",
    skills: ["Data Structures and Algorithm", "Loops", "Arrays"],
    description: `This certificate validates foundational knowledge of C#, including core syntax, 
      data structures, object-oriented programming principles, and error handling.`,
  },
  {
    name: "Responsive Web Design",
    organization: "freeCodeCamp",
    orglogo: "/images/freeCodeCampLogo.webp",
    url: `${freeCodeCamp}responsive-web-design`,
    image: `/images/ResponsiveWebDesignCert.webp`,
    date: "Jun 2024",
    skills: ["Grids", "Flex box", "CSS", "HTML", "Media queries"],
    description: `It covers the principles of building responsive websites using HTML, CSS, and Flexbox, 
      ensuring a seamless experience across various screen sizes.`,
  },
];

// Socials
export const socials = [
  {
    name: "Linkedin",
    iconUrl: "/linkedin.svg",
    url: "https://www.linkedin.com/in/dounhuwardcaparas",
    icon: "/linkedin.svg",
  },
  {
    name: "Github",
    iconUrl: "/github.svg",
    url: "https://github.com/DowardCaparas",
    icon: "/github.svg",
  },
  {
    name: "HackerRank",
    iconUrl: "/hackerrank.svg",
    url: "https://www.hackerrank.com/profile/dounhuward_c",
    icon: "/hackerrank.svg",
  },
];

export const accomplishments = [
  "Maintained system units, ensuring optimal performance.",
  "Resolved network issues, minimizing downtime.",
  "Created engaging photo and video content for various projects.",
  "Accurately encoded employee data to streamline processes.",
  "Monitored CCTV systems, providing detailed reports for security enhancement.",
];

export const technicalSkills: TechnicalSkills[] = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: "/techstacks/javascript.svg",
      },
      {
        name: "TypeScript",
        icon: "/techstacks/typescript.svg",
      },
      {
        name: "React",
        icon: "/techstacks/react.svg",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/techstacks/tailwind.svg",
      },
    ]
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: "/techstacks/nodejs.svg",
      },
      {
        name: "REST API",
        icon: "https://img.icons8.com/ios-filled/50/ffffff/api.png",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ]
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Postman",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
      {
        name: "Git",
        icon: "/techstacks/git.svg",
      },
      {
        name: "GitHub",
        icon: "/github.svg",
      },
      {
        name: "Vercel",
        icon: "/vercel.svg",
      },
    ]
  },
];
