import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Force static generation for instant loading
export const dynamic = 'force-static'

export default function TermsOfUse() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-300">
            <Navbar />
            <div className="container mx-auto px-6 py-32 max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-2 font-display">Terms of Use</h1>
                <p className="text-sm text-slate-500 mb-8">Effective Date: {new Date().getFullYear()}</p>

                <div className="space-y-10 leading-relaxed text-sm md:text-base">
                    <p>
                        These Terms of Use ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Adaze Web Studio ("Company," "we," "us," or "our"), concerning your access to and use of the <strong>adazestudio.com</strong> website as well as any other media form, media channel, mobile website, or mobile application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use.
                    </p>

                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-200 text-sm">
                        <strong>IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Intellectual Property Rights</h2>
                        <p className="mb-4">
                            Unless otherwise indicated, the Site and our Services are our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                        </p>
                        <p>
                            <strong>Ownership of Deliverables:</strong> Upon full payment of all fees invoiced, Adaze Web Studio grants you a perpetual, non-exclusive, non-transferable license to use the final custom deliverables (website code, visual designs) for your business purposes. Adaze Web Studio retains ownership of all pre-existing libraries, tools, and underlying technologies used to create the deliverables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. User Representations</h2>
                        <p className="mb-4">By using the Site or Services, you represent and warrant that:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Use.</li>
                            <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Affiliate Program Agreement</h2>
                        <div className="pl-4 border-l-2 border-primary/20 space-y-4">
                            <p>
                                <strong>3.1 Participation:</strong> Enrollment in the Affiliate Program is subject to our approval. We reserve the right to reject or terminate any affiliate account at our sole discretion.
                            </p>
                            <p>
                                <strong>3.2 Commissions:</strong> Affiliates earn a commission of <strong>20%</strong> on the initial project fee paid by a referred client. Commissions are not paid on recurring maintenance fees, domain purchases, or hosting costs unless explicitly stated otherwise.
                            </p>
                            <p>
                                <strong>3.3 Payouts:</strong> Commissions are eligible for payout after a holding period of 30 days following the client's payment to ensure no refunds are issued. Payouts are made via Bank Transfer or Mobile Money. The minimum payout threshold is GH₵ 100.
                            </p>
                            <p>
                                <strong>3.4 Independent Contractor:</strong> Affiliates are independent contractors and are not employees, agents, or partners of Adaze Web Studio. You have no authority to make binding offers or representations on our behalf.
                            </p>
                            <p>
                                <strong>3.5 Prohibited Activities:</strong> You may not use spam (email, SMS, social media), bid on our branded keywords in paid search, or misrepresent our services. Violation of this clause will result in immediate termination and forfeiture of all unpaid commissions.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitations of Liability</h2>
                        <p className="mb-4 uppercase font-bold text-sm tracking-wide">Read this section carefully.</p>
                        <p>
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                        </p>
                        <p className="mt-4">
                            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law & Dispute Resolution</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of <strong>Ghana</strong>. Adaze Web Studio and yourself irrevocably consent that the courts of Ghana shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                        <p className="mt-2">
                            Any dispute arising out of or in connection with this contract, including any question regarding its existence, validity, or termination, shall initially be attempted to be settled by amicable negotiation. If negotiation fails, the dispute shall be referred to and finally resolved by arbitration in accordance with the Alternative Dispute Resolution Act, 2010 (Act 798) of Ghana.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                        <p className="mb-2">To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                        <address className="not-italic text-white">
                            <strong>Adaze Web Studio</strong><br />
                            Ho, Volta Region, Ghana<br />
                            Email: <a href="mailto:adazewebstudio@gmail.com" className="text-primary hover:underline">adazewebstudio@gmail.com</a>
                        </address>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    )
}
