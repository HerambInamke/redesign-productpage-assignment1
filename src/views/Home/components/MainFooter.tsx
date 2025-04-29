import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface LinkItem {
    text: string
    path: string
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">gogetwell.ai</h3>
                        <p className="text-gray-400 text-sm">
                            Revolutionizing healthcare with AI-powered solutions for better patient care and operational efficiency.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {links.map((item, i) => (
                                <li key={i}>
                                    <Link 
                                        to={item.path}
                                        className="text-gray-400 hover:text-primary transition-colors text-sm"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                        <div className="space-y-2">
                            <p className="text-gray-400 text-sm">
                                Email: hello@gogetwell.ai
                            </p>
                            <p className="text-gray-400 text-sm">
                                Phone: +91 9811396858
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                to="https://x.com/gogetwellai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors group"
                            >
                                <FaTwitter 
                                    size={20} 
                                    className="text-gray-400 group-hover:text-white transition-colors" 
                                />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/gogetwellai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors group"
                            >
                                <FaLinkedinIn 
                                    size={20} 
                                    className="text-gray-400 group-hover:text-white transition-colors" 
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} gogetwell.ai. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
