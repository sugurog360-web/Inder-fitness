export function Badge({ children, tone = 'gold' }: { children: React.ReactNode; tone?: 'gold' | 'soft' }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
