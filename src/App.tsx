import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views'
import appConfig from './configs/app.config'
import './locales'
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CTA from './components/CTA';
import Footer from './components/Footer';

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                    <Layout>
                        <Views />
                    </Layout>
                </AuthProvider>
            </BrowserRouter>
            <div className="min-h-screen">
                <Hero />
                <Features />
                <SocialProof />
                <CTA />
                <Footer />
            </div>
        </Theme>
    )
}

export default App
