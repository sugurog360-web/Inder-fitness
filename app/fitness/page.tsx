import { PageShell } from '@/components/ui/page-shell';
import { AppShell } from '@/components/app-shell';

const metrics = [
  { label: 'Workout completion', value: '84%', note: '+12% since last week' },
  { label: 'Calories burned', value: '8,240', note: 'Across 5 sessions' },
  { label: 'Hydration', value: '2.4L', note: 'Target 2.7L' },
  { label: 'Sleep quality', value: '7.9h', note: 'Recovery excellent' },
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageShell title="Dashboard" subtitle="Your fitness profile, habits and momentum all in one place." actionLabel="Coach overview" actionHref="/ai">
        <section className="section-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <span className="meta">{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.note}</small>
            </article>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
