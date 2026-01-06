import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation for instant loading
export const dynamic = 'force-static'

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-50 min-h-screen text-slate-600">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold text-navy mb-2 font-display">Privacy Policy</h1>
                <p className="text-sm text-slate-500 mb-8">Last Updated: {new Date().getFullYear()}</p>

                <div className="space-y-10 leading-relaxed text-sm md:text-base">
                    <p>
                        Adaze Web Studio ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>adazestudio.com</strong>, engage our services, or participate in our Affiliate Program. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">1. Collection of Your Information</h2>
                        <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <div className="space-y-4 pl-4 border-l-4 border-primary/20">
                            <div>
                                <h3 className="text-navy font-bold">Personal Data</h3>
                                <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site, express interest in our services, or choose to participate in various activities related to the Site.</p>
                            </div>
                            <div>
                                <h3 className="text-navy font-bold">Derivative Data</h3>
                                <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>
                            </div>
                            <div>
                                <h3 className="text-navy font-bold">Financial Data</h3>
                                <p>Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date, or Mobile Money details), that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">2. Use of Your Information</h2>
                        <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>Create and manage your account and affiliate profile.</li>
                            <li>Process your payments, payouts, and prevent fraud.</li>
                            <li>Email you regarding your account, project, or order.</li>
                            <li>Compile anonymous statistical data and analysis for use internally.</li>
                            <li>Deliver targeted advertising, coupons, newsletters, and promotions regarding our services.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Perform other business activities as needed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">3. Disclosure of Your Information</h2>
                        <p className="mb-4">We may share information we have collected about you in certain situations using commercially reasonable efforts to ensure confidentiality:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">4. Security of Your Information</h2>
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">5. Policy for Children</h2>
                        <p>
                            We do not knowingly solicit information from or market to children under the age of 13. If you become aware that certain usage involves a child using our services without verification of parental consent, please contact us using the information provided below.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-navy mb-4">6. Contact Us</h2>
                        <p className="mb-2">If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <address className="not-italic text-navy font-medium">
                            <strong>Adaze Web Studio</strong><br />
                            Ho, Volta Region, Ghana<br />
                            Email: <a href="mailto:adazewebstudio@gmail.com" className="text-primary hover:underline">adazewebstudio@gmail.com</a><br />
                            Phone: <a href="tel:+233506562811" className="text-primary hover:underline">+233 50 656 2811</a>
                        </address>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
