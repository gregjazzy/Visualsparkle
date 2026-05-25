import { ReactNode } from 'react';

export function Marquee({ items, speed = 28 }: { items: ReactNode[]; speed?: number }) {
  const set = (
    <div className="flex gap-16 items-center text-slate-400 font-mono text-sm uppercase tracking-widest shrink-0">
      {items.map((it, i) => (
        <span key={i} className="shrink-0">{it}</span>
      ))}
    </div>
  );
  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-16 w-max"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {set}
        {set}
      </div>
    </div>
  );
}
