import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation for instant loading
export const dynamic = 'force-static'

export default function AccessibilityStatement() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Navbar />
            <div id="main-content" className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-2 font-display">Accessibility Statement</h1>
                <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().getFullYear()}</p>

                <div className="space-y-8 leading-relaxed text-sm md:text-base">
                    <p>
                        At Adaze Web Studio, we are committed to ensuring digital accessibility for people of all abilities. We continually improve the user experience for everyone and apply relevant accessibility standards to our website and the websites we build for our clients.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                        <p className="mb-4">
                            We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. These guidelines explain how to make web content more accessible for people with disabilities, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Visual impairments (blindness, low vision, color blindness)</li>
                            <li>Hearing impairments</li>
                            <li>Motor impairments</li>
                            <li>Cognitive impairments</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Accessibility Features</h2>
                        <p className="mb-4">Our website includes the following accessibility features:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li><strong className="text-white">Skip to Content:</strong> A "Skip to main content" link is provided for keyboard users.</li>
                            <li><strong className="text-white">Keyboard Navigation:</strong> All interactive elements can be accessed via keyboard.</li>
                            <li><strong className="text-white">Focus Indicators:</strong> Visible focus rings help keyboard users track their location.</li>
                            <li><strong className="text-white">Semantic HTML:</strong> Proper heading hierarchy and ARIA labels for screen readers.</li>
                            <li><strong className="text-white">Alt Text:</strong> Descriptive alternative text for all meaningful images.</li>
                            <li><strong className="text-white">Color Contrast:</strong> Text meets minimum contrast ratios for readability.</li>
                            <li><strong className="text-white">Responsive Design:</strong> Content is accessible on all device sizes.</li>
                            <li><strong className="text-white">Reduced Motion:</strong> Animations respect user preferences for reduced motion.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">For Our Clients</h2>
                        <p>
                            We don't just build accessible websites for ourselves — we build them for you. When you work with Adaze Web Studio, accessibility is built into every project. We can also audit your existing website for accessibility issues and provide remediation recommendations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Feedback</h2>
                        <p className="mb-4">
                            We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                        </p>
                        <address className="not-italic text-white">
                            <strong>Adaze Web Studio</strong><br />
                            Email: <a href="mailto:enquiries@adazewebstudio.com" className="text-primary hover:underline">enquiries@adazewebstudio.com</a><br />
                            Phone: <a href="tel:+233506562811" className="text-primary hover:underline">+233 50 656 2811</a>
                        </address>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
