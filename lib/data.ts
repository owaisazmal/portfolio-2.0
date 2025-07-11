import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'owaisazmal@hotmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Owais, I am reaching out to you because...',

    oldPortfolio: '',
    resume: 'https://drive.google.com/file/d/1Ii9kEX9H1fY7xzIFGNAmPkEYwAn1gx2H/view?usp=sharing',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/owaisazmal' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/owais-k-0ab718323/',
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
    {
        title: 'Expense Tracker App',
        slug: 'expense-tracker',
        techStack: ['SwiftUI', 'SwiftUICharts'],
        thumbnail: './projects/images/ExpTracker1.png',
        longThumbnail: './projects/images/ExpTracker1.png',
        images: [
            './projects/images/ExpTracker1.png',
            './projects/images/ExpTracker2.png',
        ],
        sourceCode: 'https://github.com/owaisazmal/ExpenseTracker',
        year: 2023,
        description: `ExpenseTracker is a mobile application built using SwiftUI and SwiftUICharts. The app helps users keep track of their expenses and provides a visual representation of their spending habits.<br/> <br/>Key Features:<br/>
        <ul>
            <li>📊 <strong>Expense Overview</strong> – Displays a summary of all expenses in a clear and concise manner.</li>
            <li>📈 <strong>Interactive Charts</strong> – Visualizes expense data with interactive line charts.</li>
            <li>💸 <strong>Recent Transactions</strong> – Lists the most recent transactions for easy tracking.</li>
            <li>🔔 <strong>Notification Badge</strong> – Displays a notification icon to keep users informed of new updates.</li>
            <li>🌙 <strong>Dark Mode</strong> – Supports dark mode for comfortable usage in low-light environments.</li>
        </ul>`,
                role: `- Designed and developed a clean, intuitive user interface for tracking expenses.<br/>
        - Integrated interactive line charts using <strong>SwiftUICharts</strong> for enhanced data presentation.<br/>
        - Added dark mode support to improve accessibility and user experience in different lighting conditions.<br/>
        - Built a robust system ensuring the app delivered real-time notification updates effectively.`,
        },
    {
        title: 'WCAG Checklist Tool',
        slug: 'accessibility-checklist-tool',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: './projects/images/Checklist1.png',
        longThumbnail: './projects/images/Checklist1.png',
        images: [
            './projects/images/Checklist1.png',
            './projects/images/Checklist2.png',
        ],
        sourceCode: 'https://github.com/owaisazmal/AccessibilityChecklistTool',
        liveUrl: 'https://owaisazmal.github.io/AccessibilityChecklistTool/',
        year: 2023,
        description: `A simple, interactive web-based checklist tool designed to help developers and designers evaluate key accessibility aspects of their websites. It is based on a curated subset of the Web Content Accessibility Guidelines (WCAG) 2.2 AA.<br/> <br/>Key Features:<br/>
<ul>
    <li>✅ <strong>Interactive Checklist</strong> – Seamlessly check off items while auditing websites.</li>
    <li>🎯 <strong>WCAG 2.2 AA Focused</strong> – A curated set of high-impact accessibility criteria with direct WCAG references for clarity.</li>
    <li>📊 <strong>Real-time Progress</strong> – Tracks audit progress dynamically and displays a score.</li>
    <li>📂 <strong>Export Findings (CSV)</strong> – Allows users to download audit results in \`.csv\` format.</li>
    <li>🔄 <strong>Reset Functionality</strong> – Clear all selections to start a fresh audit.</li>
    <li>⭐ <strong>GitHub Integration</strong> – Displays live star and fork counts from the GitHub repository, encouraging community engagement.</li>
</ul>`,
        role: `- Conceptualized and developed a lightweight tool to promote accessibility awareness among developers.<br/>
- Built an interactive and user-friendly interface using <strong>HTML, CSS, and JavaScript</strong>.<br/>
- Implemented real-time progress tracking and dynamic scoring features to enhance the user experience.<br/>
- Created functionality to export findings in CSV format for better record-keeping and sharing.<br/>
- Integrated live GitHub project metrics, showcasing community engagement and encouraging contributions.<br/>
- Focused on adherence to WCAG 2.2 AA guidelines to ensure developers target high-priority accessibility fixes.`,
    }
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