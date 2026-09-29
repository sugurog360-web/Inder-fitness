import { Home, Dumbbell, Target, BarChart3, Apple, Music4, ShoppingBag, Users, Trophy, Sparkles, UserCircle2, Settings, Search, Bell, MoonStar, LogIn } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/fitness', label: 'Fitness', icon: Dumbbell },
  { href: '/goals', label: 'Goals', icon: Target },
  { href: '/progress', label: 'Progress', icon: BarChart3 },
  { href: '/nutrition', label: 'Nutrition', icon: Apple },
  { href: '/music', label: 'Music', icon: Music4 },
  { href: '/products', label: 'Products', icon: ShoppingBag },
  { href: '/community', label: 'Community', icon: Users },
  { href: '/challenges', label: 'Challenges', icon: Trophy },
  { href: '/ai', label: 'AI Trainer', icon: Sparkles },
  { href: '/profile', label: 'Profile', icon: UserCircle2 },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">
          <img src="/branding/inder-fitness-logo.svg" alt="Inder Fitness" width={40} height={40} />
        </div>
        <div className="brand-copy">
          <strong>Inder</strong>
          <span>Fitness</span>
        </div>
      </div>

      <nav className="nav-section" aria-label="Sidebar navigation">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
          return (
            <Link key={href} href={href} className={clsx('nav-link', isActive && 'active')}>
              <Icon />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <strong>Recovery mode</strong>
        <p>Sleep 7.8h • Hydration 92% • Recovery ready</p>
      </div>
    </aside>
  );
}

export function Header() {
  return (
    <header className="topbar">
      <label className="searchbox" aria-label="Search">
        <Search size={18} />
        <input type="text" placeholder="Search exercises, meals, playlists, people..." />
      </label>

      <div className="topbar-actions">
        <button className="button secondary" type="button" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button className="button secondary" type="button" aria-label="Theme switch">
          <MoonStar size={16} />
        </button>
        <Link href="/login" className="button secondary" aria-label="Login or sign up">
          <LogIn size={16} />
        </Link>
        <div className="profile-chip">
          <div className="avatar">I</div>
          <span>Inder</span>
        </div>
      </div>
    </header>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-panel">
        <Header />
        {children}
      </main>
    </div>
  );
}
