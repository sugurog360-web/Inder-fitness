import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function PageShell({
  title,
  subtitle,
  actionLabel,
  actionHref,
  children,
}: {
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
  children: ReactNode;
}) {
  return (
    <div className="page-shell">
      <div className="page-hero">
        <div className="page-tag">Inder Fitness</div>
        <h1 className="page-title">{title}</h1>
        {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}

        {actionLabel && actionHref ? (
          <div style={{ marginTop: 18 }}>
            <Link href={actionHref} className="button primary" style={{ display: 'inline-flex' }}>
              {actionLabel}
              <ArrowUpRight size={16} style={{ marginLeft: 8 }} />
            </Link>
          </div>
        ) : null}
      </div>

      {children}
    </div>
  );
}

export function BackLink({ href, label = 'Back' }: { href: string; label?: string }) {
  return (
    <Link href={href} className="button secondary" style={{ display: 'inline-flex' }}>
      <ArrowLeft size={16} style={{ marginRight: 8 }} />
      {label}
    </Link>
  );
}
