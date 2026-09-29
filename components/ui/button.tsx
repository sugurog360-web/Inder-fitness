import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';

export function Button({
  children,
  variant = 'primary',
  as,
  href,
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: any;
  href?: string;
} & ComponentPropsWithoutRef<'button'>) {
  const className = `button ${variant}`;
  if (as && href) {
    const As: any = as;
    return <As href={href} className={className} {...props}>{children}</As>;
  }
  return <button className={className} {...props}>{children}</button>;
}
