type Props = { name: 'card' | 'calendar' | 'scan' }

export function ServiceIcon({ name }: Props) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {name === 'card' && <><rect x="3" y="6" width="22" height="16" rx="3" /><path d="M3 11h22M7 17h5M17 17h3" /></>}
      {name === 'calendar' && <><rect x="4" y="6" width="20" height="18" rx="3" /><path d="M9 3v6M19 3v6M4 12h20M9 17h3M16 17h3" /></>}
      {name === 'scan' && <><path d="M4 10V5a1 1 0 0 1 1-1h5M18 4h5a1 1 0 0 1 1 1v5M24 18v5a1 1 0 0 1-1 1h-5M10 24H5a1 1 0 0 1-1-1v-5M8 14h12M11 11v6M16 11v6" /></>}
    </svg>
  )
}
