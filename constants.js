import rivalLogo from 'public/rival-badge.png';
import sasLogo from 'public/sas.png';
import coloplastLogo from 'public/coloplast.png';
import playerGridPreview from 'public/previews/player-grid.png';
import dailyPreview from 'public/previews/daily.png';
import trackrPreview from 'public/previews/trackr.png';
import { IconEmail, IconGithub, IconLinkedIn, IconPhone } from 'icons';

export const HEADER_HEIGHT = 80;
export const FOOTER_HEIGHT = 100;
export const HEIGHT_MARGIN = HEADER_HEIGHT + FOOTER_HEIGHT;

export const navItems = [
  {
    label: 'Experience',
    href: '/experience',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Skills',
    href: '/skills',
  },
  {
    label: 'Education',
    href: '/education',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const socials = [
  {
    type: 'Github',
    value: 'github.com/dklangevin',
    link: 'https://github.com/dklangevin',
    Icon: IconGithub,
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/dannylangevin',
    link: 'https://www.linkedin.com/in/dannylangevin/',
    Icon: IconLinkedIn,
  },
  {
    type: 'Email',
    value: 'dklangevin@gmail.com',
    link: 'mailto:dklangevin@gmail.com',
    Icon: IconEmail,
  },
  { type: 'Phone', value: '(952) 594-0482', Icon: IconPhone },
];

export const experience = [
  {
    position: 'Full Stack Software Engineer',
    company: 'Rival Games',
    logo: rivalLogo,
    backgroundLogoStyle: {
      top: '20%',
      left: '10%',
    },
    logoStyle: {
      maxWidth: 150,
    },
    slug: 'rival',
    timeRange: 'Feb. 2022 - Present',
    skills: ['Javascript', 'React.js', 'Next.js', 'Express.js', 'PostgreSQL'],
    responsibilities: [
      'Developed web pages and features for RivalGames.com, an admin portal, and other private sites for the company, all with CI/CD practices',
      'Designed and developed full-stack features, from initial concept to full-scale production implementation',
    ],
    technologies: [
      'Front-end development (React, Next): Designed and implemented responsive, modern webpages from the ground-up; created forms, modals, reusable components, etc.; implemented SSR and ISR',
      'Back-end development (Node, Express): REST API, cron services, OAuth, integrations, caching Technologies: React, Next, SWR, Node, Express, Sequelize, PostgreSQL, Formik, styled-components, SWR, Axios, Playwright, Pusher, Reddis',
      'Integrations: Stripe, Uploadcare, Discord, OAuth',
    ],
  },
  {
    position: 'Software Engineer II',
    company: 'Special Aerospace Services',
    logo: sasLogo,
    backgroundLogoStyle: {
      top: '-50%',
      left: '10%',
    },
    logoStyle: {
      maxWidth: 230,
    },
    slug: 'sas',
    timeRange: 'May 2018 - Feb. 2022',
    skills: ['Python', 'PyQt', 'Unix', 'XML', 'JIRA'],
    responsibilities: [
      'Highest position: Software tools developer under contract with Sierra Nevada Corporation (SNC)',
      'Developing Python tools/programs - back-ends and GUIs (PyQt) under controlled Agile environment',
      'Web development (Node.js, Express.js, Bootstrap)',
      'Database management (MariaDB/MySQL)',
      'Linux (CentOS) server administration and configuration',
      'Promoted to Lead of the unit testing team after one year of internship (during school), and six months of full-time employment. Managed team progress, metrics, and served as an important resource to the newer unit testers.',
      'Wrote numerous Python tools, including tools to automatically regression-test all previous test harnesses on new code builds',
      'Performed unit-level testing of United Launch Alliance (ULA) launch vehicle flight software across multiple programs and product lines, including Common Avionics, Commercial Crew Program, Interim Cryogenic Propulsion Stage, and Vulcan.',
      'Used LDRA Testbed tool suite in combination with Eclipse in a Linux environment',
      'Developed test cases based on launch vehicle flight software requirements (requirements-driven testing), and in accordance with DO-178 standards, including MC/DC coverage',
      'Gained extensive knowledge of the Ada programming language, Tartan Ada compiler suite, and MIL-STD-1750a assembly',
    ],
    technologies: [],
  },
  {
    position: 'Intern',
    company: 'Coloplast',
    logo: coloplastLogo,
    logoStyle: {
      maxWidth: 150,
    },
    backgroundLogoStyle: {
      top: '-100%',
      left: '0%',
    },
    slug: 'coloplast',
    timeRange: 'Summer 2016',
    skills: ['Excel/VBA'],
    responsibilities: [
      'Wrote various scripts to rename and organize files',
      'Analyzed documentation',
      'Various other tasks',
    ],
    technologies: [],
  },
];

export const webSkills = [
  { name: 'Javascript', icon: '/icons/js.png' },
  { name: 'React.js', logo: '/logos/react.png' },
  { name: 'Next.js', logo: '/logos/next.svg' },
  { name: 'Node.js', logo: '/logos/node.svg' },
  { name: 'Express.js', logo: '/logos/express.svg' },
  { name: 'Sequelize.js', logo: '/logos/sequelize.svg' },
  { name: 'Axios', logo: '/logos/axios.svg' },
  { name: 'styled-components', logo: '/logos/styled-components.png' },
  { name: 'OAuth', icon: '/icons/oauth.svg' },
  { name: 'SWR', logo: '/logos/swr.svg' },
  { name: 'PostgreSQL', logo: '/logos/postgres.svg' },
  { name: 'MariaDB', logo: '/logos/mariadb.svg' },
  { name: 'MySQL', logo: '/logos/mysql.svg' },
  { name: 'Playwright.js', logo: '/logos/playwright.webp' },
  { name: 'HTML', logo: '/logos/html.svg' },
  { name: 'CSS', logo: '/logos/css.svg' },
];

export const otherSkills = [
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'C/C++', icon: '/icons/cpp.svg' },
  { name: 'Unix', logo: '/logos/unix.svg' },
  { name: 'Bash', logo: '/logos/bash.png' },
  { name: 'MATLAB', icon: '/icons/matlab.png' },
  { name: 'Excel/VBA', icon: '/icons/excel.png' },
  { name: 'XML', icon: '/icons/xml.png' },
  { name: 'Mathematica', logo: '/logos/mathematica.webp' },
  { name: 'Agile' },
  { name: 'JIRA', logo: '/logos/jira.svg' },
  { name: 'Ada', icon: '/icons/ada.png' },
  { name: 'PyQt', icon: '/icons/pyqt.svg' },
  // { name: 'Multi-threaded' },
];

export const allSkills = [...webSkills, ...otherSkills];

export const projects = [
  {
    name: 'player-grid',
    preview: playerGridPreview,
    slug: 'player-grid',
    link: 'https://player-grid.vercel.app/',
    github: 'https://github.com/dklangevin/player-grid',
    shortDescription: 'NBA Trivia Game',
    description:
      'Web-based NBA trivia game built with React and Next.js. Uses the NBA API and custom database. Github actions perform cron functions in order to optimize performance for the end-user.',
    technologies: [
      'React.js',
      'Axios',
      'Node.js',
      'Next.js',
      'PostgreSQL',
      'styled-components',
    ],
    otherTechnologies: [
      'Next.js Serverless API Functions',
      'NBA Stats Database Fetching',
      'Github Actions',
      'Vercel',
    ],
  },
  {
    name: 'trackr',
    preview: trackrPreview,
    slug: 'trackr',
    link: 'https://player-grid.vercel.app/',
    github: 'https://github.com/dklangevin/player-grid',
    shortDescription: 'Issue Tracking App',
    description:
      'Issue tracking app like JIRA, Linear, and others, built with React. This project intentionally uses very minimal JS libraries in order to gain experience implementing lower-level functions such as database modeling and querying, front-end data fetching, image-uploading, etc. This project features client and server codebases (both hosted on Netlify), elaborate database (using bit.io), and Cloudinary for image storage/hosting.',
    technologies: [
      'React.js',
      'Axios',
      'Node.js',
      'Next.js',
      'PostgreSQL',
      'Express.js',
      'styled-components',
    ],
    otherTechnologies: [
      'Full Stack Application',
      'Image-uploading',
      'Cloudinary',
      'Netlify',
    ],
  },
  {
    name: 'daily',
    preview: dailyPreview,
    slug: 'daily',
    link: 'https://player-grid.vercel.app/',
    github: 'https://github.com/dklangevin/player-grid',
    shortDescription: 'Daily Goal Tracking App',
    technologies: ['React.js', 'Next.js', 'styled-components'],
    otherTechnologies: [],
  },
  // {
  //   name: 'news',
  //   slug: 'news',
  //   github: 'https://github.com/dklangevin/news-app',
  //   shortDescription: 'Simple News App',
  //   technologies: ['React.js'],
  //   otherTechnologies: [],
  // },
  // {
  //   name: 'weather',
  //   slug: 'weather',
  //   github: 'https://github.com/dklangevin/weather-app',
  //   shortDescription: 'Simple Weather App',
  //   technologies: ['React.js'],
  //   otherTechnologies: [],
  // },
];
