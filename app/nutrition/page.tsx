import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const trends = [
  { label: 'Workout frequency', value: '5 / 7 days' },
  { label: 'Duration', value: '280 min' },
  { label: 'Strength trend', value: '+18%' },
  { label: 'Recovery', value: 'Good' },
];

export default function ProgressPage() {
  return (
    <AppShell>
      <PageShell title="Progress" subtitle="Track performance trends, recovery, consistency and milestones over time." actionLabel="View analytics" actionHref="/dashboard">
        <section className="section-grid">
          {trends.map((trend) => (
            <article key={trend.label} className="metric-card">
              <span className="meta">{trend.label}</span>
              <strong>{trend.value}</strong>
              <small>Updated this week</small>
            </article>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
