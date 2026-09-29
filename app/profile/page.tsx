import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const coachTips = [
  'Progressive overload for your key lifts this week.',
  'Keep your rest intervals between 60–90 seconds for hypertrophy blocks.',
  'Prioritize recovery and mobility after the last heavy session.',
];

export default function AIPage() {
  return (
    <AppShell>
      <PageShell title="AI Trainer" subtitle="Personalized workout plans, recovery guidance and smart recommendations without overstepping medical advice." actionLabel="Generate plan" actionHref="/dashboard">
        <section className="stack">
          {coachTips.map((tip, index) => (
            <div key={tip} className="panel">
              <div className="list-item">
                <div>
                  <strong>Recommendation {index + 1}</strong>
                  <p>{tip}</p>
                </div>
                <span>AI</span>
              </div>
            </div>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
