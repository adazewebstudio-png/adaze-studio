"use client"
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { supabase, Affiliate } from '@/lib/supabase'
import { LayoutDashboard, Users, DollarSign, Gift, LogOut, Menu, X, TrendingUp, Settings } from 'lucide-react'

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function AffiliateDashboardLayout({ children }: DashboardLayoutProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [affiliate, setAffiliate] = useState<Affiliate | null>(null)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        checkAuth()
    }, [])

    const checkAuth = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            router.push('/affiliate/login')
            return
        }

        const { data } = await supabase
            .from('affiliates')
            .select('*')
            .eq('id', user.id)
            .single()

        if (data) setAffiliate(data)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/affiliate/login')
    }

    const navItems = [
        { href: '/affiliate/dashboard', label: 'Overview', icon: LayoutDashboard },
        { href: '/affiliate/dashboard/referrals', label: 'My Referrals', icon: Users },
        { href: '/affiliate/dashboard/earnings', label: 'Earnings', icon: DollarSign },
        { href: '/affiliate/dashboard/rewards', label: 'Bonuses & Perks', icon: Gift },
        { href: '/affiliate/dashboard/settings', label: 'Settings', icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar (Dark Navy Premium) - Fixed position */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-navy border-r border-white/5 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10 shrink-0">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-xl font-bold text-white">Partner Portal</h1>
                                <p className="text-sm text-emerald-400">Adaze Web Studio</p>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* User Info */}
                    {affiliate && (
                        <div className="p-4 mx-4 mt-4 rounded-xl bg-slate-800/50 border border-white/5 shrink-0">
                            <p className="text-white font-semibold">{affiliate.full_name}</p>
                            <p className="text-slate-400 text-sm truncate">{affiliate.email}</p>
                            <div className="mt-2 pt-2 border-t border-white/10">
                                <p className="text-xs text-slate-500">Your Code</p>
                                <p className="text-emerald-400 font-mono font-bold">{affiliate.referral_code}</p>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <nav className="p-4 space-y-1 shrink-0">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* Spacer to push bottom content down */}
                    <div className="flex-1"></div>

                    {/* Available Balance - Right after nav */}
                    {affiliate && (
                        <div className="p-4 mx-4 rounded-xl bg-gradient-to-br from-emerald-900/30 to-slate-900 border border-emerald-500/20 shrink-0">
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs text-slate-400 uppercase tracking-wider">Available Balance</span>
                            </div>
                            <p className="text-2xl font-bold text-white">GH₵ {((affiliate.total_earnings || 0) - (affiliate.total_paid || 0)).toLocaleString()}</p>
                        </div>
                    )}

                    {/* Logout - At the very bottom */}
                    <div className="p-4 border-t border-white/10 mt-4 shrink-0">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content - offset for fixed sidebar on desktop */}
            <main className="flex-1 flex flex-col min-h-screen lg:ml-72">
                {/* Top Bar (Light) */}
                <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-sm flex items-center px-6 sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-slate-600 hover:text-navy mr-4"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-navy">
                            {navItems.find(item => item.href === pathname)?.label || 'Dashboard'}
                        </h2>
                    </div>
                    <Link
                        href="/"
                        target="_blank"
                        className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
                    >
                        View Main Site →
                    </Link>
                </header>

                {/* Page Content */}
                <div className="flex-1 p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
