```md
# Inder Fitness

A premium fitness and wellness platform built with Next.js, React, TypeScript, and Supabase.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy environment file
   ```bash
   cp .env.example .env.local
   ```
3. Run the app
   ```bash
   npm run dev
   ```

## Environment variables

Create `.env.local` with values such as:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Supabase setup

1. Create a Supabase project.
2. Run the SQL from `supabase/schema.sql`.
3. Enable email auth and configure Row Level Security.

## Deployment

1. Push to GitHub.
2. Import the repository in Vercel.
3. Add environment variables in the Vercel dashboard.
4. Deploy.

## Notes

This project includes demo data and production-ready architecture for future Supabase and AI integrations.
```
