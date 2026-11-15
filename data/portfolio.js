
export const profile = {
  name: "Somaya Akter",
  title: "Frontend Web Developer",

  intro:
    "I build modern, responsive, and user-friendly web applications using React, Next.js, and JavaScript. I enjoy transforming creative ideas into meaningful digital experiences.",

  about:
    "Hello! I'm Somaya Akter, a passionate web developer who enjoys building modern websites and applications. My programming journey began with HTML, CSS, and JavaScript. Through practical projects, I have explored React, Next.js, authentication, API integration, and responsive design. I am always excited to learn new technologies and improve my problem-solving skills.",

  interests:
    "Beyond coding, I enjoy exploring creative ideas, discovering new technologies, and continuously learning new skills.",

  degree: "B.Sc. in Computer Science & Engineering",
  university: "City University, Bangladesh",
  educationYears: "Spring 2022 - Present",

  email: "eshaafredi@gmail.com",
  phone: "01643561005",
  whatsapp: "",

  github: "https://github.com/Somaya-Akter",
  linkedin: "https://www.linkedin.com/in/somaya-akter-cse",
  facebook: "",

  resume: "",

  experience: [],
};

export const skillGroups = [
  {
    title: "Frontend",
    emoji: "💻",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & APIs",
    emoji: "⚙️",
    skills: [
      "REST APIs",
      "API Integration",
      "Better Auth",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Deployment",
    emoji: "🛠️",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vite",
      "npm",
      "Vercel",
    ],
  },
];

export function projectImage(project) {
  const accent = project.accent;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="1000" height="620"
       viewBox="0 0 1000 620">
    <defs>
      <linearGradient id="g"
        x1="0" x2="1" y1="0" y2="1">
        <stop stop-color="#14273f"/>
        <stop offset="1" stop-color="#0a1123"/>
      </linearGradient>
    </defs>

    <rect width="1000" height="620"
      fill="url(#g)"/>

    <circle cx="820" cy="100" r="250"
      fill="${accent}" opacity=".10"/>

    <rect x="90" y="75" width="820"
      height="470" rx="23"
      fill="#101d31" stroke="#42536d"
      stroke-width="2"/>

    <path d="M90 120 H910"
      stroke="#42536d" stroke-width="2"/>

    <circle cx="121" cy="98" r="7" fill="#f67b7b"/>
    <circle cx="147" cy="98" r="7" fill="#f8ca72"/>
    <circle cx="173" cy="98" r="7" fill="#79d6ae"/>

    <rect x="117" y="151" width="165"
      height="360" rx="12" fill="#152840"/>

    <text x="140" y="190"
      font-family="Arial" font-size="24"
      font-weight="bold" fill="${accent}">
      ${project.name}
    </text>

    <rect x="140" y="220" width="105"
      height="11" rx="5" fill="#4d657d"/>
    <rect x="140" y="254" width="82"
      height="11" rx="5" fill="#36516b"/>
    <rect x="140" y="288" width="97"
      height="11" rx="5" fill="#36516b"/>

    <text x="324" y="191"
      font-family="Arial" font-size="27"
      font-weight="bold" fill="#f2f7ff">
      ${project.previewTitle}
    </text>

    <text x="325" y="226"
      font-family="Arial" font-size="15"
      fill="#97adc6">
      ${project.previewText}
    </text>

    <rect x="323" y="260" width="170"
      height="95" rx="14" fill="#1b344f"/>
    <rect x="511" y="260" width="170"
      height="95" rx="14" fill="#1b344f"/>
    <rect x="699" y="260" width="172"
      height="95" rx="14" fill="#1b344f"/>

    <text x="345" y="305"
      font-family="Arial" font-size="31"
      font-weight="bold" fill="${accent}">01</text>
    <text x="533" y="305"
      font-family="Arial" font-size="31"
      font-weight="bold" fill="${accent}">02</text>
    <text x="721" y="305"
      font-family="Arial" font-size="31"
      font-weight="bold" fill="${accent}">03</text>

    <rect x="323" y="383" width="548"
      height="128" rx="14" fill="#152840"/>

    <path
      d="M352 474 L406 440 L455 452
         L514 417 L570 431 L633 396
         L690 422 L759 393 L831 414"
      stroke="${accent}" fill="none"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"/>

    <path d="M352 492 H841"
      stroke="#3a536d" stroke-width="2"/>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export const projects = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    number: "01",
    category: "Market Price Tracker",
    accent: "#37e5bd",

    previewTitle: "Essential Market Prices",
    previewText: "Browse and compare product prices",

    summary:
      "A Bangladesh-focused application for viewing essential goods prices, price changes, and market information.",

    description:
      "Bazar Dor brings essential goods prices into a clean, easy-to-use interface. Users can browse product categories, compare current and previous prices, explore market information, and access protected features through authentication.",

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB Atlas",
    ],

    features: [
      "Product category browsing",
      "Current and previous price comparison",
      "Market-based product information",
      "Google, GitHub, and email authentication",
      "Protected product details",
      "Responsive user interface",
    ],

    challenges: [
      "Integrating authentication with protected routes",
      "Displaying price information clearly across devices",
    ],

    future: [
      "Historical price charts",
      "Price change notifications",
    ],

    live:
      "https://b14-a7-bazar-dor-six-beta.vercel.app/",

    github:
      "https://github.com/Somaya-Akter/B14-A7-Bazar-Dor",
  },

  {
    slug: "fitlog",
    name: "FitLog",
    number: "02",
    category: "Workout Library & Planner",
    accent: "#ffb36c",

    previewTitle: "Your Fitness Dashboard",
    previewText: "Plan and track daily workouts",

    summary:
      "A fitness application featuring exercise details, daily workout planning, saved workouts, and progress statistics.",

    description:
      "FitLog is a responsive fitness application designed to help users discover exercises and manage workout routines. It provides workout details, daily planning, saved workouts, and fitness statistics for an organised exercise experience.",

    stack: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "localStorage",
    ],

    features: [
      "Browse available workouts",
      "View individual exercise details",
      "Create a daily workout plan",
      "Save favourite workouts",
      "Track workout statistics",
      "Responsive layout",
    ],

    challenges: [
      "Managing workout selection and state",
      "Keeping workout statistics consistent",
    ],

    future: [
      "Cross-device account synchronisation",
      "Detailed progress history and charts",
    ],

    live:
      "https://b14-a6-fit-log-ruddy.vercel.app/",

    github:
      "https://github.com/Somaya-Akter/B14-A6-Fit-Log",
  },

  {
    slug: "devstack",
    name: "DevStack",
    number: "03",
    category: "Technology Stack Builder",
    accent: "#b4a2ff",

    previewTitle: "Choose Your Dev Stack",
    previewText: "Explore developer technologies",

    summary:
      "An interactive application for discovering development technologies and building a personalised technology stack.",

    description:
      "DevStack helps users explore technologies used in modern software development. Users can browse technology categories, learn about different tools, and build their own stack through an interactive interface.",

    stack: [
      "React",
      "Vite",
      "JavaScript",
      "CSS3",
      "React Toastify",
      "JSON Data",
    ],

    features: [
      "Explore developer technologies",
      "Browse technology categories",
      "Build a personal technology stack",
      "Prevent duplicate selections",
      "Interactive toast notifications",
      "Responsive user interface",
    ],

    challenges: [
      "Managing technology selection dynamically",
      "Preventing duplicate stack entries",
    ],

    future: [
      "Save technology stacks for future visits",
      "Shareable technology stack links",
    ],

    live:
      "https://b14-a05-dev-stack-eight.vercel.app/",

    github:
      "https://github.com/Somaya-Akter/B14-A05-DevStack",
  },
];
