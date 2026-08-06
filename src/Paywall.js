import React, { useState } from 'react';

const UNLOCK_CODE = 'ONEVIEWTEAL2026';
const GUMROAD_LINK = 'https://gumroad.com';

export default function Paywall({ onUnlock }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [showCode, setShowCode] = useState(false);

  function handleUnlock() {
    if (code.trim().toUpperCase() === UNLOCK_CODE) {
      onUnlock();
    } else {
      setError("That code doesn't match. Please check your purchase email and try again.");
      setTimeout(() => setError(''), 3000);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1A1A18',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '24px 20px', fontFamily: "'DM Sans', sans-serif",
    }}>
      {/* Logo */}
      <div style={{ display:'flex', alignItems:'center', gap:14, marginBottom:8 }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <rect x="2" y="2" width="18" height="18" rx="3" fill="#4AB8A8"/>
          <rect x="24" y="2" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
          <rect x="2" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.8"/>
          <rect x="24" y="24" width="18" height="18" rx="3" fill="#4A4A44" opacity="0.55"/>
          <circle cx="22" cy="22" r="3" fill="#7DD3C8"/>
        </svg>
        <div>
          <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'clamp(1.6rem,5vw,2.2rem)', color:'white', lineHeight:1 }}>
            <span style={{ color:'#7DD3C8' }}>OneView</span> Bible Study
          </div>
          <div style={{ fontSize:'0.6rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginTop:4 }}>
            Your Word · Your Study · Every Day
          </div>
        </div>
      </div>

      <div style={{ width:40, height:2, background:'#4AB8A8', margin:'16px 0 32px', borderRadius:1 }}/>

      {/* Feature card */}
      <div style={{
        background:'#1E1E1C', border:'1px solid #2A2A28',
        borderTop: '3px solid #4AB8A8',
        borderRadius:8, padding:'28px 28px', maxWidth:480, width:'100%',
        marginBottom:20,
      }}>
        <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'1.2rem', color:'white', marginBottom:6, textAlign:'center' }}>
          A beautiful space for your faith journey
        </div>
        <div style={{ width:32, height:1, background:'#4AB8A8', margin:'0 auto 20px' }}/>

        {[
          ['📖', 'Customizable reading plans', 'OT + NT, Psalms & Proverbs, Gospels and more'],
          ['✏️', 'Personal study notes', 'Capture what God is saying to YOU, not just what the Bible says'],
          ['🏷️', 'Tags & custom labels', 'Organize by Bible Study, Devotion, Sermon, Prayer, Gratitude'],
          ['🖍️', 'Rich text formatting', 'Bold, italic, underline and color highlighting for deeper study'],
          ['📎', 'Attachments', 'Add photos of handwritten notes, sermon bulletins, anything'],
          ['🔍', 'Powerful search', 'Find any note by title, scripture, tag or keyword instantly'],
          ['🔒', 'Private & secure', 'Your notes never leave your device — no accounts, no data collection'],
        ].map(([icon, title, desc]) => (
          <div key={title} style={{ display:'flex', gap:12, marginBottom:14, alignItems:'flex-start' }}>
            <span style={{ fontSize:'1.1rem', flexShrink:0, marginTop:1 }}>{icon}</span>
            <div>
              <div style={{ fontSize:'0.84rem', fontWeight:500, color:'white', marginBottom:2 }}>{title}</div>
              <div style={{ fontSize:'0.74rem', color:'rgba(255,255,255,0.4)', lineHeight:1.5 }}>{desc}</div>
            </div>
          </div>
        ))}

        <div style={{ borderTop:'1px solid #2A2A28', paddingTop:18, marginTop:6, textAlign:'center' }}>
          <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:'2rem', color:'#4AB8A8', marginBottom:2 }}>$19.99</div>
          <div style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.3)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>One-time purchase · Yours forever</div>
          <a href={GUMROAD_LINK} target="_blank" rel="noopener noreferrer" style={{
            display:'block', width:'100%', padding:'13px',
            background:'#4AB8A8', color:'#1A1A18', border:'none', borderRadius:4,
            fontFamily:"'DM Sans', sans-serif", fontSize:'0.85rem', fontWeight:600,
            cursor:'pointer', textDecoration:'none', textAlign:'center', marginBottom:8,
            letterSpacing:'0.08em', textTransform:'uppercase'
          }}>
            ✦ Purchase on Gumroad
          </a>
          <div style={{ fontSize:'0.65rem', color:'rgba(255,255,255,0.25)' }}>
            After purchase you'll receive an unlock code by email
          </div>
        </div>
      </div>

      {/* Unlock */}
      <div style={{
        background:'#1E1E1C', border:'1px solid #2A2A28',
        borderRadius:8, padding:'20px 24px', maxWidth:480, width:'100%',
      }}>
        <div style={{ fontSize:'0.7rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)', marginBottom:12, textAlign:'center', fontFamily:"'DM Sans',sans-serif" }}>
          Already purchased? Enter your code
        </div>
        <div style={{ display:'flex', gap:8 }}>
          <input
            type={showCode ? 'text' : 'password'}
            value={code}
            onChange={e => setCode(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleUnlock()}
            placeholder="Enter unlock code"
            style={{
              flex:1, padding:'10px 14px',
              border:`1px solid ${error ? '#C47A7A' : '#2A2A28'}`,
              borderRadius:4, fontSize:'0.85rem', color:'white',
              background:'#161614', outline:'none',
              fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.1em',
            }}
          />
          <button onClick={handleUnlock} style={{
            background:'#4AB8A8', color:'#1A1A18', border:'none',
            borderRadius:4, padding:'10px 20px', fontSize:'0.78rem',
            cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
            letterSpacing:'0.08em', fontWeight:600, whiteSpace:'nowrap'
          }}>Unlock</button>
        </div>
        {error && <div style={{ fontSize:'0.72rem', color:'#C47A7A', marginTop:8, textAlign:'center' }}>{error}</div>}
        <button onClick={() => setShowCode(!showCode)} style={{
          background:'none', border:'none', fontSize:'0.65rem',
          color:'rgba(255,255,255,0.25)', cursor:'pointer', marginTop:8,
          display:'block', width:'100%', textAlign:'center',
          fontFamily:"'DM Sans',sans-serif", letterSpacing:'0.06em'
        }}>{showCode ? 'Hide code' : 'Show code'}</button>
      </div>

      <div style={{ marginTop:24, fontSize:'0.58rem', color:'rgba(255,255,255,0.15)', letterSpacing:'0.1em', textTransform:'uppercase', textAlign:'center' }}>
        by OneView Studio · Simple Tools. Big Clarity.
      </div>
    </div>
  );
}
