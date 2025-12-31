// Layout for affiliate dashboard - no website navbar/footer
export default function AffiliateDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* This layout removes the default Navbar and Footer */}
            {/* The dashboard has its own sidebar navigation */}
            {children}
        </>
    )
}
