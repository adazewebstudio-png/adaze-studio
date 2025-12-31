import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TermsOfUse() {
    return (
        <main className="bg-slate-950 min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Terms of Use</h1>
                <p className="text-slate-400 mb-12">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

                <div className="prose prose-invert prose-lg max-w-none">
                    <p>
                        Welcome to Adaze Web Studio. These Terms of Use ("Terms") govern your access to and use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree, please do not use our services.
                    </p>

                    <h3>1. Services Provided</h3>
                    <p>
                        Adaze Web Studio specializes in web design, software development, and digital strategy services ("Services"). The specific scope of work, deliverables, timelines, and fees for any project will be agreed upon in a separate formal proposal or contract ("Service Agreement"). In the event of a conflict between these Terms and a Service Agreement, the Service Agreement shall control.
                    </p>

                    <h3>2. Client Obligations</h3>
                    <p>To ensure successful project delivery, you agree to:</p>
                    <ul>
                        <li>Provide all necessary content (text, images, credentials) in a timely manner.</li>
                        <li>Grant us the necessary access to hosting, domain, and other third-party accounts required for development.</li>
                        <li>Review and provide feedback on deliverables within the agreed-upon timeframes.</li>
                        <li>Ensure you have the legal right to use all content materials you provide to us.</li>
                    </ul>

                    <h3>3. Intellectual Property Rights</h3>
                    <ul>
                        <li><strong>Our IP:</strong> Adaze Web Studio retains all rights, title, and interest in our pre-existing code, tools, frameworks, and methodologies used to create your deliverables.</li>
                        <li><strong>Your IP:</strong> Upon full payment of all fees, you will own the final visual designs, HTML/CSS/JS code, and content specific to your project.</li>
                        <li><strong>License:</strong> You grant us a non-exclusive license to use your branding and content solely for the purpose of fulfilling our services to you.</li>
                        <li><strong>Portfolio Rights:</strong> We reserve the right to display your finished project in our portfolio and marketing materials as a demonstration of our work, unless a Non-Disclosure Agreement (NDA) states otherwise.</li>
                    </ul>

                    <h3>4. Payment Terms</h3>
                    <p>
                        <strong>Invoicing:</strong> Payments are due as per the schedule outlined in your Service Agreement. Common terms include a deposit before work begins and the balance upon completion.<br />
                        <strong>Late Payments:</strong> We reserve the right to suspend services or withhold final deliverables if payments are not made on time.<br />
                        <strong>Refunds:</strong> Deposits are generally non-refundable once work has commenced. Specific refund policies will be detailed in your Service Agreement.
                    </p>

                    <h3>5. User Conduct</h3>
                    <p>
                        You agree not to use our website or services for any unlawful purpose. You shall not attempt to hack, destabilize, or gain unauthorized access to our website or our other clients' systems.
                    </p>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                        To the maximum extent permitted by law, Adaze Web Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business reputation. Our total liability for any claim arising out of these Terms or our Services shall not exceed the total amount paid by you to us for the specific project giving rise to the claim.
                    </p>

                    <h3>7. Warranty Disclaimer</h3>
                    <p>
                        Our services are provided "as is" and "as available." While we strive for excellence, we do not warrant that our deliverables will be error-free, uninterrupted, or fully compatible with every browser or device indefinitely, particularly as third-party technologies evolve.
                    </p>

                    <h3>8. Termination</h3>
                    <p>
                        We reserve the right to terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
                    </p>

                    <h3>9. Governing Law</h3>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the competent courts of Ghana.
                    </p>

                    <h3>10. Changes to Terms</h3>
                    <p>
                        We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h3>11. Contact Us</h3>
                    <p>
                        If you have any questions about these Terms, please contact us at:
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
