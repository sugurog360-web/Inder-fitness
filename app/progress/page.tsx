import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';
import { ProgressBar } from '@/components/ui/progress-bar';

const goals = [
  { title: 'Lean strength', current: 74, target: '3x / week', detail: 'Add 2 sessions this week' },
  { title: 'Hydration', current: 88, target: '2.7L', detail: 'Finish 1.1L today' },
  { title: 'Mobility', current: 63, target: '3 sessions', detail: 'Add 10 minutes daily' },
];

export default function GoalsPage() {
  return (
    <AppShell>
      <PageShell title="Goals" subtitle="Set clear direction, keep momentum and track progress while maintaining a sustainable training rhythm." actionLabel="New goal" actionHref="/dashboard">
        <section className="stack">
          {goals.map((goal) => (
            <div key={goal.title} className="panel">
              <div className="panel-header">
                <h2>{goal.title}</h2>
                <span>{goal.target}</span>
              </div>
              <ProgressBar value={goal.current} tone="gold" />
              <div className="meta-row" style={{ marginTop: 16 }}>
                <span>{goal.current}% complete</span>
                <span>{goal.detail}</span>
              </div>
            </div>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
