import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const challengeList = [
  { title: '7-day hydration', progress: 72 },
  { title: 'Workout consistency', progress: 64 },
  { title: 'Daily habit streak', progress: 81 },
];

export default function ChallengesPage() {
  return (
    <AppShell>
      <PageShell title="Challenges" subtitle="Stay motivated with healthy streaks, habit-building and progress-based wins." actionLabel="View all" actionHref="/dashboard">
        <section className="stack">
          {challengeList.map((challenge) => (
            <div key={challenge.title} className="panel">
              <div className="panel-header">
                <h2>{challenge.title}</h2>
                <span>{challenge.progress}%</span>
              </div>
              <div className="progress-bar"><div className="progress-fill" style={{ width: `${challenge.progress}%` }} /></div>
            </div>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
