import React, { useState, useEffect } from 'react';

export default function Header({ onExport, onImport }) {
  const [dark, setDark] = useState(() => localStorage.getItem('ovbs-teal-dark') === 'true');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
    localStorage.setItem('ovbs-teal-dark', dark);
  }, [dark]);

  return (
    <header style={{
      background: '#1A1A18',
      borderBottom: '3px solid #4AB8A8',
      padding: '12px 16px 12px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <svg width="28" height="28" viewBox="0 0 44 44" fill="none">
          <rect x="2" y="2" width="18" height="18" rx="3" fill="#4AB8A8"/>
          <rect x="24" y="2" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
          <rect x="2" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
          <rect x="24" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.55"/>
          <circle cx="22" cy="22" r="3" fill="#7DD3C8"/>
        </svg>
        <div>
          <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'1rem', color:'white', lineHeight:1 }}>
            <span style={{ color:'#7DD3C8' }}>OneView</span> Bible Study
          </div>
          <div style={{ fontSize:'0.48rem', color:'rgba(255,255,255,0.3)', letterSpacing:'0.14em', textTransform:'uppercase', marginTop:2 }}>
            Simple Tools. Big Clarity.
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setDark(!dark)} style={hBtn}>{dark ? '☀️' : '🌙'}</button>
        <button onClick={onExport} style={hBtn}>Export</button>
        <label style={{...hBtn, cursor:'pointer'}}>
          Import
          <input type="file" accept=".json" onChange={onImport} style={{display:'none'}} />
        </label>
      </div>
    </header>
  );
}

const hBtn = {
  background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:20,
  padding:'5px 12px', fontSize:'0.67rem', color:'rgba(255,255,255,0.65)',
  letterSpacing:'0.06em', transition:'all 0.2s', display:'inline-flex', alignItems:'center'
};
