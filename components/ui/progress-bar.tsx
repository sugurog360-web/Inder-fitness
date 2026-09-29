export function ProgressBar({ value, tone = 'gold' }: { value: number; tone?: 'gold' | 'blue' }) {
  const color = tone === 'blue' ? '#7aa5ff' : '#f7c948';
  return (
    <div className="progress-bar" aria-label="Progress">
      <div className="progress-fill" style={{ width: `${Math.min(value, 100)}%`, background: `linear-gradient(90deg, ${color}, #f5d66f)` }} />
    </div>
  );
}
