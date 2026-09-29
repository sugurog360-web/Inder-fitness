import { AppShell } from '@/components/app-shell';
import { PageShell } from '@/components/ui/page-shell';

const products = [
  { name: 'Recovery band set', price: '$29', category: 'Recovery' },
  { name: 'Performance bottle', price: '$18', category: 'Accessories' },
  { name: 'Gym towel set', price: '$22', category: 'Gear' },
];

export default function ProductsPage() {
  return (
    <AppShell>
      <PageShell title="Products" subtitle="Smart fitness gear, accessories and recovery essentials for everyday performance." actionLabel="Shop picks" actionHref="/dashboard">
        <section className="section-grid">
          {products.map((product) => (
            <article key={product.name} className="metric-card">
              <span className="meta">{product.category}</span>
              <strong style={{ fontSize: '1.5rem' }}>{product.name}</strong>
              <small>{product.price}</small>
            </article>
          ))}
        </section>
      </PageShell>
    </AppShell>
  );
}
