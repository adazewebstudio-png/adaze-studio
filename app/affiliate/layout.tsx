import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Affiliate Program - Earn Money Referring Clients',
    description: 'Join the Adaze Web Studio affiliate program and earn commissions by referring clients. Get 10% commission on every successful project referral. Sign up today and start earning!',
    keywords: ['affiliate program Ghana', 'referral program web design', 'earn money referring clients', 'Adaze affiliate'],
    openGraph: {
        title: 'Affiliate Program | Adaze Web Studio',
        description: 'Earn commissions by referring clients to us',
        url: 'https://adazewebstudio.com/affiliate',
        type: 'website',
    },
    alternates: {
        canonical: 'https://adazewebstudio.com/affiliate',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function AffiliateLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
