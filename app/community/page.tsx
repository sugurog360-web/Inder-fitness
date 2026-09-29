import Link from 'next/link';
import { AppShell } from '@/components/app-shell';

export default function LoginPage() {
  return (
    <AppShell>
      <div className="page-shell">
        <div className="panel" style={{ maxWidth: 680, margin: '40px auto 0', padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <img src="/branding/inder-fitness-logo.svg" alt="Inder Fitness" width={120} height={120} />
          </div>
          <h1 style={{ textAlign: 'center', marginBottom: 12 }}>Welcome back</h1>
          <p className="page-subtitle" style={{ textAlign: 'center', margin: '0 auto 24px' }}>Sign in to continue your training, goals and recovery plan.</p>

          <form style={{ display: 'grid', gap: 16 }}>
            <input className="searchbox" type="email" placeholder="Email address" aria-label="Email" />
            <input className="searchbox" type="password" placeholder="Password" aria-label="Password" />
            <button type="submit" className="button primary">Sign in</button>
          </form>

          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Link href="/dashboard" style={{ color: 'var(--gold-soft)' }}>Continue as guest</Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
