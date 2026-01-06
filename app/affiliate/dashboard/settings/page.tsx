"use client"
import { useEffect, useState, useRef } from 'react'
import AffiliateDashboardLayout from '@/components/AffiliateDashboardLayout'
import { supabase } from '@/lib/supabase'
import { Save, User, Shield, Wallet, Camera, Upload } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SettingsPage() {
    const router = useRouter()
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [uploadingImage, setUploadingImage] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [userId, setUserId] = useState<string | null>(null)

    // Profile State
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [profileImage, setProfileImage] = useState<string | null>(null)

    // Security State
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Payout State
    const [paymentMethod, setPaymentMethod] = useState('momo')
    const [momoProvider, setMomoProvider] = useState('')
    const [momoNumber, setMomoNumber] = useState('')
    const [bankName, setBankName] = useState('')
    const [accountName, setAccountName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')

    useEffect(() => {
        loadSettings()
    }, [])

    const loadSettings = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) {
            router.push('/affiliate/login')
            return
        }

        setUserId(user.id)

        const { data } = await supabase
            .from('affiliates')
            .select('*')
            .eq('id', user.id)
            .single()

        if (data) {
            setFullName(data.full_name || '')
            setEmail(data.email || '')
            setPhone(data.phone || '')
            setProfileImage(data.profile_image || null)
            setPaymentMethod(data.payment_method || 'momo')
            setMomoProvider(data.momo_provider || '')
            setMomoNumber(data.momo_number || '')
            setBankName(data.bank_name || '')
            setAccountName(data.bank_account_name || '')
            setAccountNumber(data.bank_account_number || '')
        }
        setLoading(false)
    }

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file || !userId) return

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setMessage({ type: 'error', text: 'Please select an image file.' })
            return
        }

        // Validate file size (max 2MB)
        if (file.size > 2 * 1024 * 1024) {
            setMessage({ type: 'error', text: 'Image must be less than 2MB.' })
            return
        }

        setUploadingImage(true)
        setMessage(null)

        try {
            // Create a unique filename
            const fileExt = file.name.split('.').pop()
            const fileName = `${userId}-${Date.now()}.${fileExt}`
            const filePath = `affiliates/${fileName}`

            // Upload to Supabase Storage
            const { error: uploadError } = await supabase.storage
                .from('avatars')
                .upload(filePath, file, { upsert: true })

            if (uploadError) throw uploadError

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('avatars')
                .getPublicUrl(filePath)

            // Update affiliate record
            const { error: updateError } = await supabase
                .from('affiliates')
                .update({ profile_image: publicUrl })
                .eq('id', userId)

            if (updateError) throw updateError

            setProfileImage(publicUrl)
            setMessage({ type: 'success', text: 'Profile picture updated!' })
        } catch (err: any) {
            console.error('Upload error:', err)
            setMessage({ type: 'error', text: err.message || 'Failed to upload image.' })
        } finally {
            setUploadingImage(false)
        }
    }

    const handleRemoveImage = async () => {
        if (!userId || !profileImage) return

        setUploadingImage(true)
        setMessage(null)

        try {
            // Update affiliate record to remove image
            const { error: updateError } = await supabase
                .from('affiliates')
                .update({ profile_image: null })
                .eq('id', userId)

            if (updateError) throw updateError

            setProfileImage(null)
            setMessage({ type: 'success', text: 'Profile picture removed.' })
        } catch (err: any) {
            console.error('Remove error:', err)
            setMessage({ type: 'error', text: err.message || 'Failed to remove image.' })
        } finally {
            setUploadingImage(false)
        }
    }

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage(null)

        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const { error } = await supabase
            .from('affiliates')
            .update({ full_name: fullName, phone })
            .eq('id', user.id)

        if (error) {
            setMessage({ type: 'error', text: 'Failed to save profile.' })
        } else {
            setMessage({ type: 'success', text: 'Profile updated successfully.' })
        }
        setSaving(false)
    }

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            setMessage({ type: 'error', text: 'New passwords do not match.' })
            return
        }
        if (newPassword.length < 6) {
            setMessage({ type: 'error', text: 'Password must be at least 6 characters.' })
            return
        }

        setSaving(true)
        setMessage(null)

        const { error } = await supabase.auth.updateUser({ password: newPassword })

        if (error) {
            setMessage({ type: 'error', text: error.message })
        } else {
            setMessage({ type: 'success', text: 'Password changed successfully.' })
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
        }
        setSaving(false)
    }

    const handleSavePayout = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setMessage(null)

        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const updates = {
            payment_method: paymentMethod,
            momo_provider: paymentMethod === 'momo' ? momoProvider : null,
            momo_number: paymentMethod === 'momo' ? momoNumber : null,
            bank_name: paymentMethod === 'bank' ? bankName : null,
            bank_account_name: paymentMethod === 'bank' ? accountName : null,
            bank_account_number: paymentMethod === 'bank' ? accountNumber : null,
        }

        const { error } = await supabase
            .from('affiliates')
            .update(updates)
            .eq('id', user.id)

        if (error) {
            setMessage({ type: 'error', text: 'Failed to save payout details.' })
        } else {
            setMessage({ type: 'success', text: 'Payout details updated successfully.' })
        }
        setSaving(false)
    }

    if (loading) {
        return (
            <AffiliateDashboardLayout>
                <div className="flex items-center justify-center h-64">
                    <div className="text-slate-400">Loading settings...</div>
                </div>
            </AffiliateDashboardLayout>
        )
    }

    return (
        <AffiliateDashboardLayout>
            <div className="max-w-3xl space-y-10">
                <div>
                    <h1 className="text-2xl font-bold text-navy mb-2">Account Settings</h1>
                    <p className="text-slate-500">Manage your profile, security, and payout preferences.</p>
                </div>

                {/* Global Message */}
                {message && (
                    <div className={`p-4 rounded-xl text-sm font-medium ${message.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
                        {message.text}
                    </div>
                )}

                {/* Section 0: Profile Picture */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                            <Camera className="w-5 h-5 text-pink-600" />
                        </div>
                        <h2 className="text-lg font-bold text-navy">Profile Picture</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Avatar Preview */}
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-lg overflow-hidden">
                                {profileImage ? (
                                    <Image
                                        src={profileImage}
                                        alt="Profile"
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-400 to-blue-500 text-white text-3xl font-bold">
                                        {fullName.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            {uploadingImage && (
                                <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>

                        {/* Upload Controls */}
                        <div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                accept="image/*"
                                className="hidden"
                            />
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    disabled={uploadingImage}
                                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all text-sm flex items-center gap-2 disabled:opacity-50"
                                >
                                    <Upload className="w-4 h-4" />
                                    {uploadingImage ? 'Processing...' : 'Upload Photo'}
                                </button>
                                {profileImage && (
                                    <button
                                        type="button"
                                        onClick={handleRemoveImage}
                                        disabled={uploadingImage}
                                        className="px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl transition-all text-sm disabled:opacity-50"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                            <p className="text-xs text-slate-400 mt-2">JPG, PNG or GIF. Max 2MB.</p>
                        </div>
                    </div>
                </div>

                {/* Section 1: Profile Information */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <h2 className="text-lg font-bold text-navy">Profile Information</h2>
                    </div>
                    <form onSubmit={handleSaveProfile} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">Full Name</label>
                                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">Phone / WhatsApp</label>
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+233 ..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy">Email Address</label>
                            <input type="email" value={email} disabled className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-slate-500 cursor-not-allowed font-medium" />
                            <p className="text-xs text-slate-400">Email cannot be changed.</p>
                        </div>
                        <button type="submit" disabled={saving} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                            <Save className="w-4 h-4" /> Save Profile
                        </button>
                    </form>
                </div>

                {/* Section 2: Security */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-purple-600" />
                        </div>
                        <h2 className="text-lg font-bold text-navy">Security</h2>
                    </div>
                    <form onSubmit={handleChangePassword} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-navy">Current Password</label>
                            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Enter current password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">New Password</label>
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Min. 6 characters" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">Confirm New Password</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter password" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                            </div>
                        </div>
                        <button type="submit" disabled={saving} className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                            <Shield className="w-4 h-4" /> Change Password
                        </button>
                    </form>
                </div>

                {/* Section 3: Payout Details */}
                <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-emerald-600" />
                        </div>
                        <h2 className="text-lg font-bold text-navy">Payout Details</h2>
                    </div>
                    <form onSubmit={handleSavePayout} className="space-y-6">
                        {/* Method Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-bold text-navy">Preferred Method</label>
                            <div className="grid grid-cols-2 gap-4">
                                <label className={`cursor-pointer border rounded-xl p-4 transition-all text-center ${paymentMethod === 'momo' ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-500'}`}>
                                    <input type="radio" name="payout_method" value="momo" checked={paymentMethod === 'momo'} onChange={() => setPaymentMethod('momo')} className="sr-only" />
                                    <span className="font-bold block">Mobile Money</span>
                                </label>
                                <label className={`cursor-pointer border rounded-xl p-4 transition-all text-center ${paymentMethod === 'bank' ? 'bg-emerald-50 border-emerald-500 text-emerald-700 ring-1 ring-emerald-500' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-500'}`}>
                                    <input type="radio" name="payout_method" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="sr-only" />
                                    <span className="font-bold block">Bank Transfer</span>
                                </label>
                            </div>
                        </div>

                        {/* Mobile Money Fields */}
                        {paymentMethod === 'momo' && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-top-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Network Provider</label>
                                    <select value={momoProvider} onChange={(e) => setMomoProvider(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium">
                                        <option value="">Select Network...</option>
                                        <option value="MTN">MTN Mobile Money</option>
                                        <option value="Vodafone">Telecel (Vodafone Cash)</option>
                                        <option value="AirtelTigo">AT Money</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Mobile Number</label>
                                    <input type="tel" value={momoNumber} onChange={(e) => setMomoNumber(e.target.value)} placeholder="0XX XXX XXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                                </div>
                            </div>
                        )}

                        {/* Bank Fields */}
                        {paymentMethod === 'bank' && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-top-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Bank Name</label>
                                    <input type="text" value={bankName} onChange={(e) => setBankName(e.target.value)} placeholder="e.g. Ecobank Ghana" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy">Account Name</label>
                                        <input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="Name on Account" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-navy">Account Number</label>
                                        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} placeholder="Account Number" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-navy placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all font-medium" />
                                    </div>
                                </div>
                            </div>
                        )}

                        <button type="submit" disabled={saving} className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all text-sm flex items-center gap-2">
                            <Save className="w-4 h-4" /> Save Payout Details
                        </button>
                    </form>
                </div>
            </div>
        </AffiliateDashboardLayout>
    )
}
