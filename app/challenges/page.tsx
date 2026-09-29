import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const posts = [
  { user: 'Ava', title: 'Consistency streak update', detail: '6 workouts completed this week.' },
  { user: 'Sam', title: 'Recovery check-in', detail: 'Sleeping better and moving more.' },
  { user: 'Mila', title: 'Nutrition wins', detail: 'Meal prep plan kept things simple and sustainable.' },
];

export default function CommunityPage() {
  return (
    <AppShell>
      <PageShell title="Community" subtitle="Share progress, celebrate wins and connect with a supportive fitness network." actionLabel="Join group" actionHref="/dashboard">
        <section className="stack">
          {posts.map((post) => (
            <div key={post.user} className="panel">
              <div className="list-item">
                <div>
                  <strong>{post.user}</strong>
                  <p>{post.title}</p>
                </div>
                <span>{post.detail}</span>
              </div>
            </div>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
