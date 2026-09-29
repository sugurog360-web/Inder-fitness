import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const playlists = [
  { name: 'Power drive', mood: 'Strength' },
  { name: 'Lean focus', mood: 'Focus' },
  { name: 'Recovery flow', mood: 'Calm' },
  { name: 'Afterburn', mood: 'HIIT' },
];

export default function MusicPage() {
  return (
    <AppShell>
      <PageShell title="Music" subtitle="Curated music experiences for focus, recovery, cardio and training momentum." actionLabel="Create playlist" actionHref="/dashboard">
        <section className="section-grid">
          {playlists.map((playlist) => (
            <article key={playlist.name} className="metric-card">
              <span className="meta">{playlist.mood}</span>
              <strong style={{ fontSize: '1.6rem' }}>{playlist.name}</strong>
              <small>Ready for your next session</small>
            </article>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
