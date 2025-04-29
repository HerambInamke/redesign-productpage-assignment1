import React, { ReactNode } from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'

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
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <div
                className={`w-full lg:w-1/2 flex items-center justify-center ${status === 'right' ? 'lg:order-last' : ''}`}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img
                        src={img}
                        alt={title}
                        className="relative w-full object-cover rounded-xl shadow-xl transform group-hover:scale-105 transition duration-300"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div
                className={`w-full lg:w-1/2 space-y-8 ${status === 'right' ? 'lg:order-first' : ''}`}
            >
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                </div>

                <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">{content1}</p>
                    <p className="text-lg text-gray-600 leading-relaxed">{content2}</p>
                </div>

                {/* Feature Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition duration-300">
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
                    </div>

                    <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition duration-300">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

const InfoSection: React.FC = () => {
    const sections: SectionProps[] = [
        {
            img: aboutUs,
            icon1: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: 'About Us',
            content1:
                'We are a pioneering AI-driven platform focused on revolutionizing the medical tourism industry. By addressing inefficiencies and disorganization, we empower healthcare facilitators to modernize their operations, attract more patients, and deliver seamless, personalized care across borders.',
            content2:
                'Our cutting-edge solutions are designed to streamline processes and enhance the overall patient experience.',
            icontitle1: 'Modern Solutions',
            iconp1: 'Leveraging AI technology for healthcare',
            icontitle2: 'Patient-Centric',
            iconp2: 'Personalized healthcare experiences',
            status: 'left' as const,
        },
        {
            img: mission,
            icon1: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            icon2: (
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                </svg>
            ),
            title: 'Our Mission',
            content1:
                'Our mission is to simplify the complex medical tourism process by leveraging advanced AI tools that optimize healthcare facilitators operations, maximize revenue opportunities, and provide patients with personalized and stress-free treatment journeys.',
            content2:
                'We strive to become the leading platform for healthcare tourism management and digital transformation.',
            icontitle1: 'Innovation',
            iconp1: 'Pushing boundaries with AI technology',
            icontitle2: 'Growth',
            iconp2: 'Expanding healthcare opportunities',
            status: 'right' as const,
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                        Our Story
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Transforming Healthcare Tourism
                    </h2>
                    <p className="text-lg text-gray-600">
                        Learn about our journey and mission to revolutionize healthcare facilitation
                    </p>
                </div>
                
                <div className="space-y-32">
                    {sections.map((section, index) => (
                        <Section key={index} {...section} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InfoSection;
