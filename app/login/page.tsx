import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const settings = ['Account', 'Profile details', 'Notifications', 'Privacy', 'Theme', 'Data controls'];

export default function SettingsPage() {
  return (
    <AppShell>
      <PageShell title="Settings" subtitle="Tune your account, notifications, privacy and preferences in one place." actionLabel="Save changes" actionHref="/dashboard">
        <section className="stack">
          {settings.map((setting) => (
            <div key={setting} className="panel">
              <div className="list-item">
                <strong>{setting}</strong>
                <span>Manage</span>
              </div>
            </div>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
