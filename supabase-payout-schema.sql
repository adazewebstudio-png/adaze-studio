-- Adaze Web Studio Affiliate System - Phase 1 Payout Features
-- Run this SQL in your Supabase SQL Editor

-- 1. Add payment method columns to affiliates table
ALTER TABLE affiliates 
ADD COLUMN IF NOT EXISTS payment_method TEXT DEFAULT 'momo',
ADD COLUMN IF NOT EXISTS momo_provider TEXT,
ADD COLUMN IF NOT EXISTS momo_number TEXT,
ADD COLUMN IF NOT EXISTS bank_name TEXT,
ADD COLUMN IF NOT EXISTS bank_account_number TEXT,
ADD COLUMN IF NOT EXISTS bank_account_name TEXT;

-- 2. Create payout_requests table
CREATE TABLE IF NOT EXISTS payout_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    affiliate_id UUID REFERENCES affiliates(id) ON DELETE CASCADE,
    amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'paid')),
    payment_method TEXT NOT NULL,
    payment_details TEXT NOT NULL,
    requested_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    paid_at TIMESTAMP WITH TIME ZONE,
    admin_notes TEXT,
    transaction_reference TEXT
);

-- 3. Enable RLS on payout_requests
ALTER TABLE payout_requests ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS policies for payout_requests
CREATE POLICY "Affiliates can view own payout requests" ON payout_requests
    FOR SELECT USING (auth.uid() = affiliate_id);

CREATE POLICY "Affiliates can create payout requests" ON payout_requests
    FOR INSERT WITH CHECK (auth.uid() = affiliate_id);

-- 5. Create index for performance
CREATE INDEX IF NOT EXISTS idx_payout_requests_affiliate_id ON payout_requests(affiliate_id);
CREATE INDEX IF NOT EXISTS idx_payout_requests_status ON payout_requests(status);

-- Done! Payout system database is ready.
