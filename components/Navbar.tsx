'use client';
import { cn } from '@/lib/utils';

const MENU_LINKS = [
    { name: 'About Me', url: './#about-me' },
    { name: 'Skills', url: './#my-stack' },
    { name: 'Experience', url: './#my-experience' },
    { name: 'Projects', url: './#selected-projects' },
];

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-black bg-opacity-30">
            <nav className="container mx-auto flex justify-center items-center py-4 px-8">
                {/* Navigation Links */}
                <ul className="flex space-x-8">
                    {MENU_LINKS.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.url}
                                className={cn(
                                    'text-lg text-white hover:text-gray-300 transition-colors duration-200',
                                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary px-2 py-1 rounded'
                                )}
                                aria-label={`Navigate to ${link.name}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;