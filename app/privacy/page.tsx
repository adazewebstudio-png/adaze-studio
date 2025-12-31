import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <Navbar />
            
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="text-slate-400 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        At Adaze Web Studio ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>We collect information to provide better services to all our users. The types of information we collect include:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> When you contact us or start a project, we may collect personal details such as your name, email address, phone number, company name, and billing address.</li>
                        <li><strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and interaction data (pages visited, time spent).</li>
                        <li><strong>Communication Data:</strong> We retain records of your correspondence (emails, messages) to accurately respond to your inquiries and manage your project.</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use the collected data for the following purposes:</p>
                    <ul>
                        <li><strong>Service Delivery:</strong> To design, develop, and maintain websites and applications as per our agreement.</li>
                        <li><strong>Communication:</strong> To respond to inquiries, send project updates, invoices, and administrative messages.</li>
                        <li><strong>Improvement:</strong> To analyze website usage trends and improve our user experience and service offerings.</li>
                        <li><strong>Marketing:</strong> With your consent, we may send you newsletters or promotional offers relevant to your business needs (you may opt-out at any time).</li>
                        <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                    </ul>

                    <h3>3. Cookies and Tracking Technologies</h3>
                    <p>
                        We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and understand how you use our site. You can control or disable specific cookies through your browser settings, though this may affect site functionality.
                    </p>

                    <h3>4. Data Sharing and Disclosure</h3>
                    <p>We do not sell your personal information. We may share your data only in the following distinct circumstances:</p>
                    <ul>
                        <li><strong>Service Providers:</strong> We may share data with trusted third-party vendors who assist us in operating our website, conducting our business, or serving you (e.g., hosting providers, payment processors), provided they agree to keep this information confidential.</li>
                        <li><strong>Legal Obligations:</strong> We may disclose information if required to do so by law or in the good-faith belief that such action is necessary to comply with legal requirements or protect our rights.</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                    </ul>

                    <h3>5. Data Security</h3>
                    <p>
                        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h3>6. Third-Party Links</h3>
                    <p>
                        Our website may distinct links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>

                    <h3>7. Children's Privacy</h3>
                    <p>
                        Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected such information, we will take steps to delete it.
                    </p>

                    <h3>8. Your Rights</h3>
                    <p>Depending on your jurisdiction, you may have the right to:</p>
                    <ul>
                        <li>Access the personal information we hold about you.</li>
                        <li>Request correction of inaccurate or incomplete data.</li>
                        <li>Request deletion of your personal data.</li>
                        <li>Object to or restrict specific processing of your data.</li>
                    </ul>
                    <p>To exercise these rights, please contact us using the information below.</p>

                    <h3>9. Changes to This Policy</h3>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last Updated" date.
                    </p>

                    <h3>10. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="not-prose text-slate-300">
                        <strong>Adaze Web Studio</strong><br />
                        Ho, Volta Region, Ghana<br />
                        Email: <a href="mailto:enquiries@adazewebstudio.com" className="text-primary hover:underline">enquiries@adazewebstudio.com</a><br />
                        Phone: <a href="tel:+233506562811" className="text-primary hover:underline">+233 50 656 2811</a>
                    </p>
                </div>
            </div>
            
            <Footer />
        </main>
    )
}
