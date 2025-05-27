import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'owaiskhan461@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Owais, I am reaching out to you because...',

    oldPortfolio: '',
    resume: 'https://drive.google.com/file/d/1Ii9kEX9H1fY7xzIFGNAmPkEYwAn1gx2H/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/owaisazmal' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/owais-khan-266492222/',
    },
    // { name: 'facebook', url: 'https://www.facebook.com/okhan945' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/owaisazmal/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: './logo/js.png',
        },
        {
            name: 'Typescript',
            icon: './logo/ts.png',
        },
        {
            name: 'React',
            icon: './logo/react.png',
        },
        {
            name: 'Next.js',
            icon: './logo/next.png',
        },
        {
            name: 'HTML',
            icon: './logo/HTML5.png',
        },
        {
            name: 'Tailwind CSS',
            icon: './logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: './logo/gsap.png',
        },
        {
            name: 'CSS',
            icon: './logo/CSS3.svg',
        },
        {
            name: 'SASS',
            icon: './logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: './logo/bootstrap.svg',
        },
    ],
    Readers: [
        {
            name: 'NVDA',
            icon: './logo/NVDA_Logo.png',
        },
        {
            name: 'JAWS',
            icon: './logo/jaws.png',
        },
        // {
        //     name: 'Express.js',
        //     icon: './logo/express.png',
        // },
    ],
    // database: [
    //     {
    //         name: 'MySQL',
    //         icon: './logo/mysql.svg',
    //     },
    //     {
    //         name: 'PostgreSQL',
    //         icon: './logo/postgreSQL.png',
    //     },
    //     {
    //         name: 'MongoDB',
    //         icon: './logo/mongodb.svg',
    //     },
    //     {
    //         name: 'Prisma',
    //         icon: './logo/prisma.png',
    //     },
    // ],
    tools: [
        {
            name: 'axe DevTools',
            icon: './logo/axe_DevTools.png',
        },
        {
            name: 'Git',
            icon: './logo/git.png',
        },
        {
            name: 'WAVE',
            icon: './logo/WAVE.webp',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Malkit Sweets & Catering',
        slug: 'malkit-sweets',
        liveUrl: 'https://malkitsweetsandcatering.com/',
        year: 2024,
        description: `
      A vibrant and immersive restaurant and catering services platform developed for Malkit Sweets & Catering, a premier provider of traditional Indian cuisine in California. The site blends rich cultural storytelling with a modern web experience to highlight their culinary offerings, chef expertise, and event catering services. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🍛 Catering Services Showcase – Dedicated sections for Wedding, Party, and On-Demand catering with service highlights and visual storytelling</li>
        <li>👨‍🍳 Chef Profiles – Meet-the-chefs module spotlighting industry veterans like Mr. Malkit and team</li>
        <li>📺 Multimedia Integration – Engaging video embeds and image carousels to bring the kitchen to life</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>📍 Location & Contact Integration – Google Maps and quick-contact setup for local customers</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Integrated Swiper.js for dynamic visual carousels in service and chef sections</li>
        <li>Customized Payload CMS to enable effortless content updates across menus, staff, and videos</li>
        <li>Developed elegant, reusable UI components using shadcn and Tailwind CSS</li>
        <li>Optimized form submissions using React Hook Form for user inquiries and event bookings</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend – Designed Payload CMS architecture with collections for services, chefs, and media</li>
        <li>🎨 Frontend – Crafted responsive, culturally inspired UI with Tailwind and shadcn</li>
        <li>🔄 State Management – Managed CMS data flow and hydration using Next.js capabilities</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>📹 Media Embeds – Integrated promotional videos and carousels to enhance user engagement</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: './projects/images/MSC-1.png',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: ['./projects/images/MSC-1.png', './projects/images/MSC-2.png'],
    },
    // {
    //     title: 'Real Estate Portfolio',
    //     slug: 'Sarbreal',
    //     techStack: [
    //         'React',
    //         'Redux',
    //         'React i18n',
    //         'Tailwind CSS',
    //         'Framer Motion',
    //         'React Hook Form',
    //         'Api Integration',
    //     ],
    //     thumbnail: './projects/images/SarbrealShort.png',
    //     longThumbnail: './projects/images/SarbrealLong.png',
    //     images: [
    //         './projects/images/SarbrealShort.png',
    //         './projects/images/Sarbreal1.png',
    //     ],
    //     liveUrl: 'https://sarbreal.com/',
    //     year: 2024,
    //     description: `A clean, modern real estate platform developed for Sarb Real Estate, a property services firm focused on delivering personalized buying, selling, and investment experiences. The site positions the brand as a trustworthy local expert with a sleek, intuitive interface and robust content management capabilities.,<br/> <br/>

    //     Key Features:<br/>
    //         <ul>
    //             <li>🏠 Property Listing System – Dynamically generated pages for featured properties with images and contact CTAs</li>
    //             <li>🧑‍💼 Agent Profiles – Highlighted real estate professionals with bios and contact links to build trust</li>
    //             <li>🎥 Home Page Carousel – Engaging visual slider to showcase premium listings and services</li>
    //             <li>🧭 Location-Based Navigation – Clean sectioning for exploring properties and services</li>
    //             <li>📱 Mobile Optimization – Fully responsive design for mobile-first browsing</li>
    //         </ul><br/>
    //     Technical Highlights:
    //         <ul>
    //             <li>Engineered property carousel using Swiper.js with smooth transitions and content overlays</li>
    //             <li>Customized Payload CMS to manage listings, agent bios, testimonials, and media assets</li>
    //             <li>Built fully modular UI components using shadcn and Tailwind CSS for brand consistency</li>
    //             <li>Leveraged React Hook Form for seamless lead capture through property inquiry forms</li>
    //         </ul>
    //     `,
    //     role: `As the frontend developer in a team of five, I: <br/>
    //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
    //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
    //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
    //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    // },
    {
        title: 'Website Accessibility Audit',
        slug: 'Website-Audit',
        techStack: [
            'WCAG 2.1 Level AA',
            'NVDA',
            'WAVE',
            'Chrome DevTools',
            'AXE DevTools',
        ],
        thumbnail: './projects/images/Audit1.png',
        longThumbnail: './projects/images/Audit2.png',
        images: [
            './projects/images/Audit1.png',
            './projects/images/Audit2.png',
        ],
        liveUrl:
            'https://docs.google.com/spreadsheets/d/1_a0qTDEy4MZY_ianS6mSct5a_rp47e1eRhWr8HMCoZE/edit?usp=sharing',
        year: 2025,
        description:
            'This accessibility audit was conducted on the Daily Grind Cafe website to identify barriers that could prevent individuals with disabilities from accessing its content and services. The audit revealed several critical and moderate accessibility issues primarily related to semantic HTML, color contrast, and keyboard navigation. Addressing these issues is crucial for enhancing inclusivity, complying with accessibility standards (WCAG 2.1 AA), and potentially avoiding legal risks while expanding the cafe customer base.',
        role: `
        - Automated Testing (Simulated WAVE/axe DevTools): Initial scan to identify common, easily detectable issues.<br/>
        - Screen Reader Compatibility: Tested navigation, content consumption, and interactive elements with a simulated screen reader (NVDA).<br/>
        - Keyboard Navigation: Assessed complete website navigation using only the keyboard (Tab, Shift+Tab, Enter, Spacebar) to check for focus management, logical tab order, and access to all interactive elements.<br/>
        - Code Review: Inspected HTML structure for semantic correctness and ARIA attribute usage.<br/>
        - WCAG 2.1 AA Checklist: Used as the primary reference for evaluation criteria.`,
    },
    // {
    //     title: 'Resume Roaster',
    //     slug: 'resume-roaster',
    //     techStack: [
    //         'GPT-4',
    //         'Next.js',
    //         'Postgressql',
    //         'Prisma',
    //         'Tailwind CSS',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    {
        title: 'Real Estate Portfolio',
        slug: 'Sarbreal',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'React Hook Form',
            'Api Integration',
        ],
        thumbnail: './projects/images/SarbrealShort.png',
        longThumbnail: './projects/images/SarbrealLong.png',
        images: [
            './projects/images/SarbrealShort.png',
            './projects/images/Sarbreal1.png',
        ],
        liveUrl: 'https://sarbreal.com/',
        year: 2024,
        description: `A clean, modern real estate platform developed for Sarb Real Estate, a property services firm focused on delivering personalized buying, selling, and investment experiences. The site positions the brand as a trustworthy local expert with a sleek, intuitive interface and robust content management capabilities.,<br/> <br/>Key Features:<br/>
        <ul>
            <li>🏠 Property Listing System – Dynamically generated pages for featured properties with images and contact CTAs</li>
            <li>🧑‍💼 Agent Profiles – Highlighted real estate professionals with bios and contact links to build trust</li>
            <li>🎥 Home Page Carousel – Engaging visual slider to showcase premium listings and services</li>
            <li>🧭 Location-Based Navigation – Clean sectioning for exploring properties and services</li>
            <li>📱 Mobile Optimization – Fully responsive design for mobile-first browsing</li>
        </ul><br/>
        Technical Highlights:
            <ul>
                <li>Engineered property carousel using Swiper.js with smooth transitions and content overlays</li>
                <li>Customized Payload CMS to manage listings, agent bios, testimonials, and media assets</li>
                <li>Built fully modular UI components using shadcn and Tailwind CSS for brand consistency</li>
                <li>Leveraged React Hook Form for seamless lead capture through property inquiry forms</li>
            </ul>           
            
            `,
        role: `Led design and implementation of the full stack: <br/>
        - ✅ Backend – Created CMS architecture for property listings, agent profiles, and testimonials<br/>
        - 🎨 Frontend – Developed responsive layout with clean UX to guide users through available services<br/>
        - 🔄 Data Management – Set up CMS-to-frontend data pipelines for listings and agent content<br/>
        - 🖥️ CMS Customization – Designed user-friendly admin dashboards for real estate staff
`,
    },
    // {
    //     title: 'Expense Tracker App',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
];

export const MY_EXPERIENCE = [
    {
        title: 'Accesibility Engineer',
        company: 'CVD Diamond Inc',
        duration: 'Dec 2022 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'AHC Technologies',
        duration: 'Oct 2020 - Nov 2022',
    },
    // {
    //     title: 'FRONTEND ENGINEER',
    //     company: 'Anchorblock Technology',
    //     duration: 'Oct 2022 - Sep 2023',
    // },
    // {
    //     title: 'Frontend Developer (Part-time)',
    //     company: 'Branex IT',
    //     duration: 'Jan 2022 - Oct 2022',
    // },
];
