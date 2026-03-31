import { Moon, Sun } from 'lucide-react'

export default function FloatingControls({
  fontSizeScale,
  increaseFontSize,
  decreaseFontSize,
  isDarkMode,
  toggleDarkMode
}) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        background: 'var(--color-bg-card)',
        padding: '8px 12px',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--color-border)',
        zIndex: 1000,
      }}
    >
      <button
        onClick={decreaseFontSize}
        disabled={fontSizeScale <= 70}
        title="Diminuir fonte (Atalho: -)"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text)',
          cursor: fontSizeScale <= 70 ? 'not-allowed' : 'pointer',
          opacity: fontSizeScale <= 70 ? 0.5 : 1,
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-highlight-bg)')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        A-
      </button>

      <span
        style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          width: '4ch',
          textAlign: 'center',
        }}
      >
        {fontSizeScale}%
      </span>

      <button
        onClick={increaseFontSize}
        disabled={fontSizeScale >= 150}
        title="Aumentar fonte (Atalho: +)"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text)',
          cursor: fontSizeScale >= 150 ? 'not-allowed' : 'pointer',
          opacity: fontSizeScale >= 150 ? 0.5 : 1,
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-highlight-bg)')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        A+
      </button>

      <div style={{ width: '1px', height: '24px', background: 'var(--color-border)', margin: '0 4px' }} />

      <button
        onClick={toggleDarkMode}
        title="Alternar Tema (Dark/Light)"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--color-text)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-highlight-bg)')}
        onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  )
}
