import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const routines = [
  { title: 'Full body strength', level: 'Intermediate', duration: '45 min', focus: 'Compound power' },
  { title: 'Lower body drive', level: 'Beginner', duration: '35 min', focus: 'Legs & core' },
  { title: 'Mobility reset', level: 'All levels', duration: '20 min', focus: 'Recovery flow' },
  { title: 'Upper body push', level: 'Advanced', duration: '50 min', focus: 'Press & posture' },
];

export default function FitnessPage() {
  return (
    <AppShell>
      <PageShell title="Fitness" subtitle="Training plans, movement quality and performance tracking built around consistency and recovery." actionLabel="Start workout" actionHref="/ai">
        <section className="section-grid">
          {routines.map((routine) => (
            <article key={routine.title} className="metric-card">
              <span className="meta">{routine.level}</span>
              <strong style={{ fontSize: '1.55rem', marginTop: 10 }}>{routine.title}</strong>
              <small>{routine.duration} • {routine.focus}</small>
            </article>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
