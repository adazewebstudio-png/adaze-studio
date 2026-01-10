'use client'

import { Share2, Check, Copy, Twitter, Facebook, Linkedin } from 'lucide-react'
import { useState } from 'react'

interface ShareButtonsProps {
    title: string
    url: string
    description?: string
}

export default function ShareButtons({ title, url, description }: ShareButtonsProps) {
    const [copied, setCopied] = useState(false)

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text: description,
                    url,
                })
            } catch (error) {
                console.log('Error sharing:', error)
            }
        } else {
            handleCopy()
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description || '')}`,
    }

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
            <p className="text-slate-600 font-medium whitespace-nowrap">Found this helpful? Share it!</p>

            <div className="flex flex-wrap items-center gap-2">
                {/* Native Share / Copy */}
                <button
                    onClick={handleShare}
                    className="p-2.5 bg-white rounded-full hover:bg-primary hover:text-white text-slate-500 transition-colors border border-slate-200"
                    title="Share"
                    aria-label="Share article"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                </button>

                <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

                {/* Direct Social Links */}
                <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-full hover:bg-[#1DA1F2] hover:text-white text-slate-500 transition-colors border border-slate-200"
                    title="Share on Twitter"
                >
                    <Twitter className="w-4 h-4" />
                </a>

                <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-full hover:bg-[#4267B2] hover:text-white text-slate-500 transition-colors border border-slate-200"
                    title="Share on Facebook"
                >
                    <Facebook className="w-4 h-4" />
                </a>

                <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-full hover:bg-[#0077b5] hover:text-white text-slate-500 transition-colors border border-slate-200"
                    title="Share on LinkedIn"
                >
                    <Linkedin className="w-4 h-4" />
                </a>
            </div>
        </div>
    )
}
