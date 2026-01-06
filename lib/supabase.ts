import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our affiliate system
export interface Affiliate {
    id: string
    email: string
    full_name: string
    phone: string
    referral_code: string
    created_at: string
    total_earnings: number
    total_paid: number
    is_active: boolean
    profile_image?: string | null
    // Payment details
    payment_method?: 'momo' | 'bank' | null
    momo_provider?: string | null
    momo_number?: string | null
    bank_name?: string | null
    bank_account_number?: string | null
    bank_account_name?: string | null
}

export interface Referral {
    id: string
    affiliate_id: string
    client_name: string
    client_email: string
    project_type: string
    project_value: number
    commission_rate: number
    commission_amount: number
    status: 'pending' | 'confirmed' | 'paid'
    created_at: string
    confirmed_at: string | null
    paid_at: string | null
    notes: string | null
}

export interface Payout {
    id: string
    affiliate_id: string
    amount: number
    payment_method: string
    reference: string
    created_at: string
}

export interface PayoutRequest {
    id: string
    affiliate_id: string
    amount: number
    status: 'pending' | 'approved' | 'rejected' | 'paid'
    payment_method: string
    payment_details: string
    requested_at: string
    reviewed_at: string | null
    paid_at: string | null
    admin_notes: string | null
    transaction_reference: string | null
}
