import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8 font-display">Terms of Use</h1>

                <div className="space-y-8 leading-relaxed">
                    <p>
                        Welcome to Adaze Web Studio. These Terms of Use ("Terms") govern your access to and use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Services Provided</h2>
                        <p>
                            Adaze Web Studio specializes in web design, software development, and digital strategy services ("Services"). The specific scope of work, deliverables, timelines, and fees for any project will be agreed upon in a separate formal proposal or contract ("Service Agreement"). In the event of a conflict between these Terms and a Service Agreement, the Service Agreement shall control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Client Obligations</h2>
                        <p className="mb-4">To ensure successful project delivery, you agree to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide all necessary content (text, images, credentials) in a timely manner.</li>
                            <li>Grant us the necessary access to hosting, domain, and other third-party accounts required for development.</li>
                            <li>Review and provide feedback on deliverables within the agreed-upon timeframes.</li>
                            <li>Ensure you have the legal right to use all content materials you provide to us.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Our IP:</strong> Adaze Web Studio retains all rights, title, and interest in our pre-existing code, tools, frameworks, and methodologies used to create your deliverables.</li>
                            <li><strong className="text-white">Your IP:</strong> Upon full payment of all fees, you will own the final visual designs, HTML/CSS/JS code, and content specific to your project.</li>
                            <li><strong className="text-white">License:</strong> You grant us a non-exclusive license to use your branding and content solely for the purpose of fulfilling our services to you.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Affiliate Program Terms</h2>
                        <p className="mb-4">By participating in the Adaze Web Studio Affiliate Program, you agree to the following:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Commission:</strong> You will earn a 20% commission on the first successful project payment made by clients you refer using your unique referral link.</li>
                            <li><strong className="text-white">Payouts:</strong> Payouts are processed upon request via the Affiliate Dashboard. You must have a valid payment method (Bank Account or Mobile Money) connected. Payouts are subject to a standard verification period.</li>
                            <li><strong className="text-white">Prohibited Conduct:</strong> You may not use spam, misleading claims, or illegal marketing tactics to generate referrals. We reserve the right to ban any affiliate and withhold commissions if fraudulent activity is suspected.</li>
                            <li><strong className="text-white">Independent Contractor:</strong> You are an independent partner, not an employee or agent of Adaze Web Studio. You are responsible for your own taxes and legal compliance.</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
