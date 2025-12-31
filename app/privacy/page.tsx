import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8 font-display">Privacy Policy</h1>

                <div className="space-y-8 leading-relaxed">
                    <p>
                        At Adaze Web Studio ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We collect information to provide better services to all our users. The types of information we collect include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Personal Information:</strong> When you contact us or start a project, we may collect personal details such as your name, email address, phone number, company name, and billing address.</li>
                            <li><strong className="text-white">Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and interaction data (pages visited, time spent).</li>
                            <li><strong className="text-white">Communication Data:</strong> We retain records of your correspondence (emails, messages) to accurately respond to your inquiries and manage your project.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the collected data for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Service Delivery:</strong> To design, develop, and maintain websites and applications as per our agreement.</li>
                            <li><strong className="text-white">Communication:</strong> To respond to inquiries, send project updates, invoices, and administrative messages.</li>
                            <li><strong className="text-white">Improvement:</strong> To analyze website usage trends and improve our user experience and service offerings.</li>
                            <li><strong className="text-white">Marketing:</strong> With your consent, we may send you newsletters or promotional offers relevant to your business needs (you may opt-out at any time).</li>
                            <li><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us remember your preferences and analyze site traffic. You can modify your browser settings to refuse cookies, though doing so may limit some website functionalities.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
