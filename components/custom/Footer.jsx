'use client';

import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { YouTube } from '@mui/icons-material';

export default function Footer() {
    const footerSections = {
        Product: ['Features', 'Pricing', 'Integrations', 'Enterprise'],
        Resources: ['Blog', 'Tutorials', 'Guides', 'Documentation'],
        Company: ['About Us', 'Careers', 'Press', 'Contact'],
    };

    return (
        <footer className="bg-gray-900 text-white py-10 px-10">
            <div className="mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {Object.entries(footerSections).map(([title, items]) => (
                        <div key={title}>
                            <h3 className="text-lg font-semibold mb-4">{title}</h3>
                            <ul className="space-y-2">
                                {items.map((item) => (
                                    <li key={item}>
                                        <Link href="/#" className="text-gray-400 hover:text-white">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <div className="flex space-x-3 mb-4">
                            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, YouTube].map((Icon, index) => (
                                <Link href="/#" key={index} className="text-gray-400 hover:text-white">
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>

                        <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-3 py-2 w-full bg-gray-800 text-white border border-gray-700 focus:border-gray-500 focus:ring-0"
                                required
                            />
                            <button
                                type="submit"
                                className="ml-2 bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-4 text-center">
                    <p className="text-gray-400">&copy; 2025 Meeedia. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-2">
                        {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((text) => (
                            <Link key={text} href="/#" className="text-gray-400 hover:text-white">
                                {text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
