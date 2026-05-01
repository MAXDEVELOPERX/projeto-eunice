import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './themeContext.js'
import { themes } from './themeOptions.js'


function getSystemMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => localStorage.getItem('eunice-theme') ?? 'eunice')
  const [mode, setModeState] = useState(() => localStorage.getItem('eunice-mode') ?? 'system')
  const [resolvedMode, setResolvedMode] = useState(() => (mode === 'system' ? getSystemMode() : mode))
  const [transition, setTransition] = useState(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncMode = () => setResolvedMode(mode === 'system' ? getSystemMode() : mode)
    syncMode()
    media.addEventListener('change', syncMode)
    return () => media.removeEventListener('change', syncMode)
  }, [mode])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.mode = resolvedMode
  }, [resolvedMode, theme])

  const animate = useCallback((color) => {
    setTransition({ color, id: crypto.randomUUID() })
    window.setTimeout(() => setTransition(null), 720)
  }, [])

  const setTheme = useCallback((nextTheme) => {
    const selected = themes.find((item) => item.id === nextTheme)
    localStorage.setItem('eunice-theme', nextTheme)
    setThemeState(nextTheme)
    animate(selected?.color ?? '#b8a7e8')
  }, [animate])

  const setMode = useCallback((nextMode) => {
    localStorage.setItem('eunice-mode', nextMode)
    setModeState(nextMode)
    animate(nextMode === 'dark' ? '#2f2a35' : '#faf7f2')
  }, [animate])

  const value = useMemo(() => ({ theme, themes, mode, resolvedMode, setTheme, setMode }), [mode, resolvedMode, setMode, setTheme, theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {transition && <div key={transition.id} className="theme-burst" style={{ '--burst-color': transition.color }} />}
    </ThemeContext.Provider>
  )
}
