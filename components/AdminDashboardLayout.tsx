"use client"
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, Users, DollarSign, CreditCard, LogOut, Menu, X, Shield } from 'lucide-react'

interface AdminLayoutProps {
    children: React.ReactNode
}

export default function AdminDashboardLayout({ children }: AdminLayoutProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        // Check admin authentication
        if (typeof window !== 'undefined') {
            const isAuth = sessionStorage.getItem('admin_authenticated') === 'true'
            if (!isAuth) {
                router.push('/admin/login')
            } else {
                setAuthenticated(true)
            }
        }
    }, [router])

    const handleLogout = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('admin_authenticated')
        }
        router.push('/admin/login')
    }

    const navItems = [
        { href: '/admin/dashboard', label: 'Overview', icon: LayoutDashboard },
        { href: '/admin/dashboard/affiliates', label: 'Affiliates', icon: Users },
        { href: '/admin/dashboard/referrals', label: 'Referrals', icon: DollarSign },
        { href: '/admin/dashboard/payouts', label: 'Payouts', icon: CreditCard },
    ]

    if (!authenticated) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-slate-400">Loading...</div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-900 flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar - Fixed */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-800 border-r border-white/5 transform transition-transform lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-6 border-b border-white/10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h1 className="text-lg font-bold text-white">Admin Panel</h1>
                                    <p className="text-xs text-slate-400">Affiliate Manager</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-slate-400 hover:text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 space-y-1">
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

                    {/* Logout */}
                    <div className="p-4 border-t border-white/10">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
                        >
                            <LogOut className="w-5 h-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {/* Top Bar */}
                <header className="h-16 border-b border-white/5 bg-slate-800/50 backdrop-blur-sm flex items-center px-6 sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-slate-400 hover:text-white mr-4"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-white">
                            {navItems.find(item => item.href === pathname)?.label || 'Dashboard'}
                        </h2>
                    </div>
                    <Link
                        href="/affiliate/dashboard"
                        target="_blank"
                        className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                        View Affiliate Portal →
                    </Link>
                </header>

                {/* Page Content */}
                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
