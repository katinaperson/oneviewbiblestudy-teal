import React from 'react';

const NAV_ITEMS = [
  { id:'plan',   label:'Reading Plan',  icon:'📖', desc:'Your daily reading' },
  { id:'notes',  label:'My Notes',      icon:'✏️',  desc:'Study & reflection' },
  { id:'search', label:'Search',        icon:'🔍', desc:'Find anything' },
];

export default function DesktopSidebar({ active, onChange }) {
  return (
    <div style={{
      width: 240, minWidth: 240,
      background: '#1A1A18',
      borderRight: '3px solid #4AB8A8',
      display: 'flex', flexDirection: 'column',
      height: '100vh', position: 'sticky', top: 0, overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px 20px', borderBottom: '1px solid #2A2A28' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
            <rect x="2" y="2" width="18" height="18" rx="3" fill="#4AB8A8"/>
            <rect x="24" y="2" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
            <rect x="2" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
            <rect x="24" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.55"/>
            <circle cx="22" cy="22" r="3" fill="#7DD3C8"/>
          </svg>
          <div>
            <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'1.1rem', color:'white', lineHeight:1 }}>
              <span style={{ color:'#7DD3C8' }}>OneView</span>
            </div>
            <div style={{ fontFamily:"'DM Sans', sans-serif", fontSize:'0.65rem', color:'rgba(255,255,255,0.5)', letterSpacing:'0.08em', marginTop:2 }}>
              Bible Study
            </div>
          </div>
        </div>
        <div style={{ fontSize:'0.5rem', color:'rgba(255,255,255,0.2)', letterSpacing:'0.14em', textTransform:'uppercase' }}>
          Simple Tools. Big Clarity.
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '12px 10px' }}>
        {NAV_ITEMS.map(item => (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            style={{
              width: '100%', display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 12px', borderRadius: 6, border: 'none',
              background: active === item.id ? 'rgba(74,184,168,0.15)' : 'transparent',
              borderLeft: `3px solid ${active === item.id ? '#4AB8A8' : 'transparent'}`,
              cursor: 'pointer', marginBottom: 2, transition: 'all 0.15s', textAlign: 'left',
            }}
          >
            <span style={{ fontSize: '1.05rem', width: 24, textAlign: 'center', flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div style={{
                fontSize: '0.78rem', fontWeight: active === item.id ? 600 : 400,
                color: active === item.id ? '#4AB8A8' : 'rgba(255,255,255,0.65)',
                letterSpacing: '0.02em', marginBottom: 1,
                fontFamily: "'DM Sans', sans-serif",
              }}>{item.label}</div>
              <div style={{
                fontSize: '0.58rem', color: 'rgba(255,255,255,0.28)',
                letterSpacing: '0.04em', fontFamily: "'DM Sans', sans-serif",
              }}>{item.desc}</div>
            </div>
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid #2A2A28' }}>
        <div style={{
          fontSize: '0.56rem', color: 'rgba(255,255,255,0.2)',
          letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center'
        }}>
          Your notes stay on your device
        </div>
      </div>
    </div>
  );
}
