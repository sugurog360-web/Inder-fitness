# Inder Fitness

A modern, AI-powered fitness, wellness and lifestyle platform built with Next.js, React, TypeScript, and Supabase.

## Features

- 🤖 AI Personal Trainer with adaptive workout generation
- 📹 AI Training Videos and guided workout sessions
- 💪 Comprehensive Fitness Library with exercise tracking
- 🎯 Goal Management System with progress tracking
- 📊 Analytics and Progress Tracking
- 🥗 Nutrition Planning and Food Logging
- 💤 Health & Daily Habits Tracking
- 🎵 Workout Music Integration
- 🛍️ Fitness Products Marketplace
- 👥 Social Community Features
- 🏆 Challenges & Gamification
- 👤 User Profiles with Achievements
- 🔔 Smart Notifications
- 🔍 Universal Search
- ❤️ Favorites & Saved Content
- 🔐 Secure Authentication with Supabase

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

```
inder-fitness/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── (auth)/            # Authentication routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── fitness/           # Fitness section
│   ├── goals/             # Goals section
│   ├── progress/          # Analytics section
│   ├── nutrition/         # Nutrition section
│   ├── music/             # Music section
│   ├── products/          # Products marketplace
│   ├── community/         # Community section
│   ├── challenges/        # Challenges section
│   ├── ai/                # AI Trainer
│   ├── profile/           # User profile
│   └── settings/          # Settings
│
├── components/
│   ├── ui/                # Reusable UI components
│   ├── navigation/        # Navigation components
│   ├── dashboard/         # Dashboard components
│   ├── fitness/           # Fitness section components
│   ├── nutrition/         # Nutrition section components
│   ├── ai/                # AI components
│   └── common/            # Common components
│
├── lib/
│   ├── supabase.ts        # Supabase client
│   ├── auth.ts            # Authentication utilities
│   ├── ai.ts              # AI service integration
│   └── utils.ts           # Utility functions
│
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── services/              # Business logic services
├── public/                # Static assets
│   └── branding/          # Logo and branding assets
│
├── supabase/              # Supabase database schema
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account
- OpenAI API key (for AI features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sugurog360-web/Inder-fitness.git
   cd Inder-fitness
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Supabase and OpenAI credentials.

4. **Set up Supabase**
   - Create a new project on [Supabase](https://supabase.com)
   - Run the database schema from `supabase/schema.sql`
   - Enable authentication and configure providers as needed

5. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

The application uses PostgreSQL with the following key tables:

- **profiles**: User account information
- **goals**: User fitness goals
- **exercises**: Exercise library
- **workouts**: Workout templates
- **workout_sessions**: Tracking user workout sessions
- **wellness_logs**: Daily health tracking
- **nutrition_logs**: Food and meal tracking
- **achievements**: User achievements and badges
- **challenges**: Active challenges
- **challenge_members**: Challenge participation
- **friendships**: User connections
- **community_posts**: Social feed content
- **notifications**: User notifications
- **favorites**: Saved items
- **products**: Marketplace products

All tables include Row Level Security (RLS) policies to ensure users only access their own data.

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add all variables from `.env.example` in Vercel project settings
   - Make sure `SUPABASE_SERVICE_ROLE_KEY` is available for server-side operations

4. **Deploy**
   - Vercel will automatically build and deploy on push
   - Your app will be live at `your-app.vercel.app`

## API Routes

Server-side API routes handle sensitive operations:

- `/api/auth/*` - Authentication
- `/api/ai/*` - AI features (never expose API keys)
- `/api/workouts/*` - Workout management
- `/api/nutrition/*` - Nutrition tracking
- `/api/user/*` - User operations

## Security Considerations

✅ **Implemented**:
- Supabase Row Level Security (RLS)
- Environment variables for secrets
- Server-side API routes for sensitive operations
- Authentication checks on protected pages
- Type-safe database queries
- Input validation and sanitization

⚠️ **Never**:
- Commit `.env.local` or secret keys
- Expose `SUPABASE_SERVICE_ROLE_KEY` to the browser
- Store AI API keys in client-side code
- Trust user input without validation

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Database query optimization with indexes
- Caching strategies for API responses
- Component memoization for performance-critical sections

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- High contrast color scheme
- Screen reader friendly

## Contributing

This is a personal project, but feel free to fork and customize for your needs.

## License

MIT License - See LICENSE file for details

## Support

For issues or questions, open an issue on GitHub.

---

**Inder Fitness** - *Life comes from you, not for you.*
