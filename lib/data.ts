import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'owaisazmal@hotmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Owais, I am reaching out to you because...',

    oldPortfolio: '',
    upworkProfile: '',
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
    {
        title: 'Real Estate Portfolio',
        slug: 'Sabreal',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: './projects/thumbnail/epikcart.jpg',
        longThumbnail: './projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
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
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Accesibility Engineer',
        company: 'CVD Diamond Inc',
        duration: 'Dec 2022 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Epikcoders',
        duration: 'Oct 2023 - Nov 2024',
    },
    {
        title: 'FRONTEND ENGINEER',
        company: 'Anchorblock Technology',
        duration: 'Oct 2022 - Sep 2023',
    },
    {
        title: 'Frontend Developer (Part-time)',
        company: 'Branex IT',
        duration: 'Jan 2022 - Oct 2022',
    },
];
