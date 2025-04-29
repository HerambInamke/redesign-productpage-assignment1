import { Button, Notification, toast } from '@/components/ui';
import { useState } from 'react';
import { BiPhone, BiSend, BiUser } from 'react-icons/bi';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';

interface FormState {
    fullname: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formState, setFormState] = useState<FormState>({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focused, setFocused] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            // await apiContactUs(formState)
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={'Success'}
                    type={'success'}
                >
                    Successfully submitted
                </Notification>,
            );
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (err: any) {
            setIsSubmitting(false);
            toast.push(
                <Notification
                    title={err?.response?.data.message}
                    type={'danger'}
                >
                    {err?.response?.data.message}
                </Notification>,
            );
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                            Contact Us
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Let's get in touch!
                        </h2>
                        <p className="text-lg text-gray-600">
                            Got questions about GoGetWell.AI? Our team is here to help. Contact us for quick and friendly support.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Left Column - Contact Info */}
                        <div className="space-y-8">
                            <div className="space-y-6">
                                {/* Contact Details */}
                                <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                        <BiPhone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Phone</p>
                                        <a 
                                            href="tel:+919811396858" 
                                            className="text-gray-900 hover:text-primary transition-colors font-medium"
                                        >
                                            +91 9811396858
                                        </a>
                                    </div>
                                </div>

                                <div className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                                    <div className="bg-gradient-to-br from-primary/10 to-blue-600/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                                        <CgMail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-gray-600">Email</p>
                                        <a 
                                            href="mailto:hello@gogetwell.ai" 
                                            className="text-gray-900 hover:text-primary transition-colors font-medium"
                                        >
                                            hello@gogetwell.ai
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    <Link 
                                        to="https://x.com/gogetwellai" 
                                        target='_blank' 
                                        className="group bg-gradient-to-br from-primary/10 to-blue-600/10 p-3 rounded-xl hover:scale-110 transition-transform"
                                    >
                                        <BsTwitter className="w-6 h-6 text-primary group-hover:text-blue-600 transition-colors" />
                                    </Link>
                                    <Link 
                                        to="https://www.linkedin.com/company/gogetwellai/" 
                                        target='_blank' 
                                        className="group bg-gradient-to-br from-primary/10 to-blue-600/10 p-3 rounded-xl hover:scale-110 transition-transform"
                                    >
                                        <BsLinkedin className="w-6 h-6 text-primary group-hover:text-blue-600 transition-colors" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative group">
                                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                        focused === 'fullname' || formState.fullname ? 'text-primary' : 'text-gray-400'
                                    }`}>
                                        <BiUser className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder="Full Name"
                                        value={formState.fullname}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('fullname')}
                                        onBlur={() => setFocused('')}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50"
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <div className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                        focused === 'email' || formState.email ? 'text-primary' : 'text-gray-400'
                                    }`}>
                                        <CgMail className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('email')}
                                        onBlur={() => setFocused('')}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50"
                                        required
                                    />
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocused('message')}
                                        onBlur={() => setFocused('')}
                                        rows={4}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all group-hover:border-primary/50 resize-none"
                                        required
                                    />
                                </div>

                                <Button
                                    loading={isSubmitting}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                                >
                                    <span>Send Message</span>
                                    <BiSend className="w-5 h-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;