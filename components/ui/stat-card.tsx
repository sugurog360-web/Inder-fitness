export function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <article className="stat-card">
      <span className="label">{label}</span>
      <strong className="value">{value}</strong>
      <span className="trend">{trend}</span>
    </article>
  );
}
