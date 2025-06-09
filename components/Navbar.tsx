'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
//test
const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <button
                    className={cn(
                        'group size-12 absolute top-5 right-5 md:right-10 z-[2] rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500', // Added focus styles
                    )}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    // --- Accessibility additions for the button ---
                    aria-label={
                        isMenuOpen
                            ? 'Close navigation menu'
                            : 'Open navigation menu'
                    }
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation-menu" // ID of the menu container
                >
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                            {
                                'rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:rotate-12': !isMenuOpen,
                            },
                        )}
                        aria-hidden="true" // Hide from screen readers
                    ></span>
                    <span
                        className={cn(
                            'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                            {
                                '-rotate-45 -translate-y-1/2': isMenuOpen,
                                'md:group-hover:-rotate-12': !isMenuOpen,
                            },
                        )}
                        aria-hidden="true" // Hide from screen readers
                    ></span>
                </button>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
                // Consider adding role="button" and aria-label="Close menu" here too
                // if this overlay is meant to be clickable to close the menu.
                // Also handle keyboard interaction (e.g., Space/Enter key)
                aria-label="Close menu by clicking outside" // added for clarity
            ></div>

            <div
                id="main-navigation-menu" // Added ID for aria-controls
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
                // Role 'dialog' or 'menu' can be added if this is a complex menu.
                // For a simple navigation, a 'nav' element within might be sufficient.
                role="dialog" // Or "menu" if it strictly contains only menu items
                aria-modal="true" // Indicates that the element is a modal and blocks content behind it.
                aria-label="Main navigation" // Descriptive label for the overall menu
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div
                    className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto"
                    // Removed aria-label="Social links" from this div
                >
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p
                                id="social-links-label"
                                className="text-muted-foreground mb-5 md:mb-8"
                            >
                                {/* Moved the ID here */}
                                SOCIAL
                            </p>
                            <ul
                                className="space-y-3"
                                aria-labelledby="social-links-label"
                            >
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Added focus styles
                                            // Add aria-label if the link text alone isn't clear enough, e.g., "Visit my LinkedIn profile"
                                        >
                                            {link.name}
                                            <span className="sr-only">
                                                {' '}
                                                (opens in a new tab)
                                            </span>{' '}
                                            {/* Screen reader only text for external links */}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p
                                id="menu-links-label"
                                className="text-muted-foreground mb-5 md:mb-8"
                            >
                                {/* Added ID here */}
                                MENU
                            </p>
                            <ul
                                className="space-y-3"
                                aria-labelledby="menu-links-label"
                            >
                                {MENU_LINKS.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Added focus styles
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx],
                                                )}
                                                aria-hidden="true" // Hide the decorative circle from screen readers
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                    aria-hidden="true" // Hide the icon from screen readers
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4">GET IN TOUCH</p>
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" // Added focus styles
                    >
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
