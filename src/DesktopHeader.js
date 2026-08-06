import React, { useState, useEffect } from 'react';

export default function DesktopHeader({ onExport, onImport }) {
  const [dark, setDark] = useState(() => localStorage.getItem('ovbs-teal-dark') === 'true');

  useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
    localStorage.setItem('ovbs-teal-dark', dark);
  }, [dark]);

  return (
    <div style={{
      background: '#1A1A18',
      borderBottom: '3px solid #4AB8A8',
      padding: '10px 28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{ fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', fontFamily:"'DM Sans', sans-serif" }}>
        by OneView Studio · Your Word · Your Study · Every Day
      </div>
      <div style={{ display:'flex', gap:8 }}>
        <button onClick={() => setDark(!dark)} style={hBtn}>{dark ? '☀️ Light' : '🌙 Dark'}</button>
        <button onClick={onExport} style={hBtn}>Export</button>
        <label style={{...hBtn, cursor:'pointer'}}>
          Import
          <input type="file" accept=".json" onChange={onImport} style={{display:'none'}} />
        </label>
      </div>
    </div>
  );
}

const hBtn = {
  background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
  color:'rgba(255,255,255,0.65)', fontSize:'0.7rem', padding:'6px 14px',
  borderRadius:4, cursor:'pointer', letterSpacing:'0.04em',
  display:'inline-flex', alignItems:'center', gap:4, fontFamily:"'DM Sans', sans-serif",
};
