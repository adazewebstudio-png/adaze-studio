import { Sparkles } from 'lucide-react'

export default function JournalLoading() {
    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50">
            {/* Hero Skeleton */}
            <section className="px-6 mb-16 text-center">
                <div className="container mx-auto max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 animate-pulse mb-6">
                        <div className="w-3 h-3 bg-slate-300 rounded-full" />
                        <div className="w-24 h-3 bg-slate-300 rounded-full" />
                    </div>
                    <div className="h-12 md:h-16 bg-slate-200 animate-pulse rounded-2xl mb-6 max-w-2xl mx-auto" />
                    <div className="h-4 bg-slate-200 animate-pulse rounded-full max-w-xl mx-auto mb-2" />
                    <div className="h-4 bg-slate-200 animate-pulse rounded-full max-w-md mx-auto" />
                </div>
            </section>

            {/* Categories Skeleton */}
            <section className="px-6 mb-12">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-24 h-10 bg-slate-200 animate-pulse rounded-full" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Section Skeleton */}
            <section className="px-6 mb-16">
                <div className="container mx-auto max-w-6xl">
                    <div className="w-48 h-8 bg-slate-200 animate-pulse rounded-lg mb-8" />
                    <div className="grid md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm h-[500px]">
                                <div className="aspect-[16/9] bg-slate-200 animate-pulse" />
                                <div className="p-8 space-y-4">
                                    <div className="w-3/4 h-6 bg-slate-200 animate-pulse rounded-lg" />
                                    <div className="w-full h-4 bg-slate-200 animate-pulse rounded-lg" />
                                    <div className="w-1/2 h-4 bg-slate-200 animate-pulse rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts Skeleton */}
            <section className="px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="w-48 h-8 bg-slate-200 animate-pulse rounded-lg mb-8" />
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm h-[400px]">
                                <div className="aspect-[16/10] bg-slate-200 animate-pulse" />
                                <div className="p-5 space-y-3">
                                    <div className="w-full h-5 bg-slate-200 animate-pulse rounded-lg" />
                                    <div className="w-2/3 h-4 bg-slate-200 animate-pulse rounded-lg" />
                                    <div className="w-1/3 h-3 bg-slate-200 animate-pulse rounded-lg mt-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
