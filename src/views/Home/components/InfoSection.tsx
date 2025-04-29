import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import { BiRocket, BiTrendingUp, BiLock, BiGlobe } from 'react-icons/bi'
import { FaRobot, FaUserMd } from 'react-icons/fa'

interface SectionProps {
    img: any
    icon1: ReactNode
    icon2: ReactNode
    title: string
    content1: string
    content2: string
    icontitle1: string
    iconp1: string
    icontitle2: string
    iconp2: string
    status: 'left' | 'right'
}

const Section: React.FC<SectionProps> = ({
    status,
    img,
    icon1,
    icon2,
    title,
    content1,
    content2,
    icontitle1,
    iconp1,
    icontitle2,
    iconp2,
}) => {
    return (
        <motion.div 
            className="flex flex-col lg:flex-row gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Image Section */}
            <motion.div
                className={`w-full lg:w-1/2 flex items-center justify-center ${status === 'right' ? 'lg:order-last' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img
                        src={img}
                        alt={title}
                        className="relative w-full object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition duration-300"
                    />
                </div>
            </motion.div>

            {/* Content Section */}
            <div className={`w-full lg:w-1/2 space-y-8 ${status === 'right' ? 'lg:order-first' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, x: status === 'right' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                </motion.div>

                <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-lg text-gray-600 leading-relaxed">{content1}</p>
                    <p className="text-lg text-gray-600 leading-relaxed">{content2}</p>
                </motion.div>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl group-hover:scale-110 transition duration-300">
                                {icon1}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition duration-300">
                                {icontitle1}
                            </h4>
                            <p className="text-gray-600">{iconp1}</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="flex-shrink-0">
                            <div className="p-3 bg-gradient-to-br from-primary/10 to-blue-600/10 rounded-xl group-hover:scale-110 transition duration-300">
                                {icon2}
                            </div>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition duration-300">
                                {icontitle2}
                            </h4>
                            <p className="text-gray-600">{iconp2}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

const InfoSection: React.FC = () => {
    const sections: SectionProps[] = [
        {
            img: aboutUs,
            icon1: <BiRocket className="w-6 h-6 text-primary" />,
            icon2: <FaRobot className="w-6 h-6 text-primary" />,
            title: 'Revolutionizing Healthcare Management',
            content1:
                'We are pioneering AI-driven solutions that transform how healthcare facilitators operate. Our platform addresses the complexities of medical tourism, making it easier for providers to deliver exceptional care across borders.',
            content2:
                'Through innovative technology, we\'re empowering healthcare professionals to focus on what matters most - patient care.',
            icontitle1: 'Rapid Implementation',
            iconp1: 'Get started in minutes, not months',
            icontitle2: 'AI-Powered Automation',
            iconp2: 'Streamline operations with smart technology',
            status: 'left' as const,
        },
        {
            img: mission,
            icon1: <BiGlobe className="w-6 h-6 text-primary" />,
            icon2: <FaUserMd className="w-6 h-6 text-primary" />,
            title: 'Our Mission & Vision',
            content1:
                'Our mission is to revolutionize healthcare facilitation through AI innovation. We\'re building a future where healthcare providers can effortlessly manage their digital presence and patient relationships.',
            content2:
                'We envision a world where quality healthcare is easily accessible and efficiently delivered across borders.',
            icontitle1: 'Global Impact',
            iconp1: 'Connecting patients worldwide',
            icontitle2: 'Provider Success',
            iconp2: 'Empowering healthcare professionals',
            status: 'right' as const,
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                        Our Story
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Transforming Healthcare Tourism
                    </h2>
                    <p className="text-lg text-gray-600">
                        Discover how we are revolutionizing healthcare tourism with AI-powered solutions.
                    </p>
                </motion.div>
                
                {sections.map((section, index) => (
                    <Section key={index} {...section} />
                ))}
            </div>
        </section>
    )
}

export default InfoSection;
