-- Adaze Web Studio Affiliate System Database Schema
-- Run this SQL in your Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- 1. Create affiliates table
CREATE TABLE affiliates (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    referral_code TEXT UNIQUE NOT NULL,
    total_earnings DECIMAL(10,2) DEFAULT 0,
    total_paid DECIMAL(10,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Create referrals table
CREATE TABLE referrals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    affiliate_id UUID REFERENCES affiliates(id) ON DELETE CASCADE,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    project_type TEXT NOT NULL,
    project_value DECIMAL(10,2) NOT NULL,
    commission_rate DECIMAL(4,2) DEFAULT 20.00,
    commission_amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'paid')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    confirmed_at TIMESTAMP WITH TIME ZONE,
    paid_at TIMESTAMP WITH TIME ZONE,
    notes TEXT
);

-- 3. Create payouts table
CREATE TABLE payouts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    affiliate_id UUID REFERENCES affiliates(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    payment_method TEXT NOT NULL,
    reference TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE payouts ENABLE ROW LEVEL SECURITY;

-- 5. Create RLS Policies for affiliates
-- Affiliates can read their own data
CREATE POLICY "Affiliates can view own profile" ON affiliates
    FOR SELECT USING (auth.uid() = id);

-- Allow insert for new signups
CREATE POLICY "Enable insert for signup" ON affiliates
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 6. Create RLS Policies for referrals
-- Affiliates can view their own referrals
CREATE POLICY "Affiliates can view own referrals" ON referrals
    FOR SELECT USING (auth.uid() = affiliate_id);

-- 7. Create RLS Policies for payouts
-- Affiliates can view their own payouts
CREATE POLICY "Affiliates can view own payouts" ON payouts
    FOR SELECT USING (auth.uid() = affiliate_id);

-- 8. Create indexes for performance
CREATE INDEX idx_referrals_affiliate_id ON referrals(affiliate_id);
CREATE INDEX idx_referrals_status ON referrals(status);
CREATE INDEX idx_payouts_affiliate_id ON payouts(affiliate_id);

-- Done! Your affiliate system database is ready.
