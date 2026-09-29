import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

export default function ProfilePage() {
  return (
    <AppShell>
      <PageShell title="Profile" subtitle="Your summary, preferences and personal growth snapshot." actionLabel="Edit profile" actionHref="/settings">
        <section className="panel">
          <div className="profile-summary">
            <div className="profile-avatar">I</div>
            <div>
              <h2 style={{ margin: 0 }}>Inder</h2>
              <p className="page-subtitle" style={{ marginTop: 8 }}>Intermediate • Strength • Recovery • Mobility</p>
            </div>
          </div>
        </section>
      </PageShell>
    </AppShell>
  );
}
