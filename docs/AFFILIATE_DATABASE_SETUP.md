# Affiliate Program - Supabase Database Setup

This document outlines the database tables required for the Affiliate Program functionality.

## Tables

### 1. `affiliates`
Stores affiliate user profiles and their earnings information.

```sql
CREATE TABLE affiliates (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT,
    referral_code TEXT UNIQUE NOT NULL,
    profile_image TEXT,
    total_earnings NUMERIC DEFAULT 0,
    total_paid NUMERIC DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    payment_method TEXT CHECK (payment_method IN ('momo', 'bank')),
    momo_provider TEXT,
    momo_number TEXT,
    bank_name TEXT,
    bank_account_name TEXT,
    bank_account_number TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE affiliates ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own data
CREATE POLICY "Users can view own affiliate profile" ON affiliates
    FOR SELECT USING (auth.uid() = id);

-- Policy: Users can update their own data
CREATE POLICY "Users can update own affiliate profile" ON affiliates
    FOR UPDATE USING (auth.uid() = id);

-- Policy: Anyone can insert (for signup)
CREATE POLICY "Enable insert for signup" ON affiliates
    FOR INSERT WITH CHECK (true);
```

### 2. `referrals`
Tracks all referrals made by affiliates.

```sql
CREATE TABLE referrals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    affiliate_id UUID REFERENCES affiliates(id) ON DELETE CASCADE,
    client_name TEXT NOT NULL,
    client_email TEXT,
    client_phone TEXT,
    project_type TEXT,
    project_value NUMERIC DEFAULT 0,
    commission_amount NUMERIC DEFAULT 0,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'paid', 'cancelled')),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    confirmed_at TIMESTAMPTZ,
    paid_at TIMESTAMPTZ
);

-- Enable Row Level Security
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Policy: Affiliates can view their own referrals
CREATE POLICY "Users can view own referrals" ON referrals
    FOR SELECT USING (auth.uid() = affiliate_id);
```

### 3. `payout_requests`
Manages payout requests from affiliates.

```sql
CREATE TABLE payout_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    affiliate_id UUID REFERENCES affiliates(id) ON DELETE CASCADE,
    amount NUMERIC NOT NULL,
    payment_method TEXT NOT NULL,
    payment_details TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'paid', 'rejected')),
    requested_at TIMESTAMPTZ DEFAULT NOW(),
    reviewed_at TIMESTAMPTZ,
    paid_at TIMESTAMPTZ,
    admin_notes TEXT,
    transaction_reference TEXT
);

-- Enable Row Level Security
ALTER TABLE payout_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Affiliates can view their own payout requests
CREATE POLICY "Users can view own payout requests" ON payout_requests
    FOR SELECT USING (auth.uid() = affiliate_id);

-- Policy: Affiliates can insert payout requests
CREATE POLICY "Users can create payout requests" ON payout_requests
    FOR INSERT WITH CHECK (auth.uid() = affiliate_id);
```

## Indexes (Recommended for Performance)

```sql
CREATE INDEX idx_affiliates_referral_code ON affiliates(referral_code);
CREATE INDEX idx_referrals_affiliate_id ON referrals(affiliate_id);
CREATE INDEX idx_referrals_status ON referrals(status);
CREATE INDEX idx_payout_requests_affiliate_id ON payout_requests(affiliate_id);
CREATE INDEX idx_payout_requests_status ON payout_requests(status);
```

## Setup Instructions

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run each `CREATE TABLE` statement above
4. Run the `ALTER TABLE` and `CREATE POLICY` statements for each table
5. Optionally, run the index creation statements

## Storage Bucket (For Profile Images)

1. Go to **Storage** in Supabase dashboard
2. Click **New bucket**
3. Name it `avatars`
4. Make it **Public** (so profile images can be displayed)
5. Add this policy for uploads:

```sql
-- Allow authenticated users to upload their own avatar
CREATE POLICY "Users can upload avatars" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Allow public read access
CREATE POLICY "Public read access for avatars" ON storage.objects
    FOR SELECT USING (bucket_id = 'avatars');
```

## Environment Variables

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Testing

After setup, you can test by:
1. Creating a new affiliate account via `/affiliate/signup`
2. Logging in at `/affiliate/login`
3. Viewing the dashboard at `/affiliate/dashboard`

## Admin Functions (Future)

For admin functionality, you may want to create additional policies or use Supabase's service role key to:
- View all affiliates
- Update referral statuses
- Approve/reject payout requests
- Update affiliate earnings
