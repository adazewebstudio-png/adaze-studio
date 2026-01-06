"use client"
import AffiliateDashboardLayout from '@/components/AffiliateDashboardLayout'
import { Gift, TrendingUp, Target } from 'lucide-react'

export default function RewardsPage() {
    // In a real app, this would come from the database
    const currentReferrals = 0
    const targetReferrals = 15
    const progress = Math.min((currentReferrals / targetReferrals) * 100, 100)

    return (
        <AffiliateDashboardLayout>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-navy">Bonuses & Perks</h1>
                <p className="text-slate-500">Unlock higher commission rates by referring more clients.</p>
            </div>

            {/* Current Commission */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-slate-500 font-medium mb-1">Your Current Commission Rate</p>
                        <p className="text-4xl font-bold text-navy">20%</p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                        <TrendingUp className="w-8 h-8 text-emerald-600" />
                    </div>
                </div>
            </div>

            {/* Unlock Higher Rate Card */}
            <div className="bg-gradient-to-br from-navy to-slate-800 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-gold/10 rounded-full blur-3xl -ml-10 -mb-10"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                            <Gift className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">Unlock 30% Commission</h2>
                            <p className="text-slate-300 text-sm">Reach 15 successful referrals</p>
                        </div>
                    </div>

                    <p className="text-slate-300 mb-8 max-w-lg">
                        Once you successfully refer 15 clients who complete their projects with us, your commission rate permanently increases from <span className="text-white font-bold">20% to 30%</span> on all future referrals.
                    </p>

                    {/* Progress Section */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <Target className="w-5 h-5 text-emerald-400" />
                                <span className="text-sm font-medium text-slate-300">Your Progress</span>
                            </div>
                            <span className="text-sm font-bold text-white">{currentReferrals} / {targetReferrals} Referrals</span>
                        </div>

                        <div className="h-4 bg-white/10 rounded-full overflow-hidden mb-4">
                            <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        <p className="text-sm text-slate-400">
                            {currentReferrals === 0
                                ? "Start referring clients to track your progress here."
                                : `You need ${targetReferrals - currentReferrals} more referrals to unlock 30% commission.`
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Info Note */}
            <div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <p className="text-sm text-slate-500">
                    <strong className="text-navy">Note:</strong> A referral is counted as "successful" once the referred client has paid for their project. Your commission is calculated based on the project value at the time of payment.
                </p>
            </div>
        </AffiliateDashboardLayout>
    )
}
