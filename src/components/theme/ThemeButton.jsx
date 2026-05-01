import { Check, Monitor, Moon, Palette, Sun } from 'lucide-react'
import { useState } from 'react'
import { useTheme } from './themeContext.js'

const modes = [
  { id: 'system', label: 'Sistema', icon: Monitor },
  { id: 'light', label: 'Claro', icon: Sun },
  { id: 'dark', label: 'Escuro', icon: Moon },
]

export default function ThemeButton() {
  const [open, setOpen] = useState(false)
  const { theme, themes, mode, setTheme, setMode } = useTheme()
  const activeTheme = themes.find((item) => item.id === theme)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        className="group flex items-center gap-2 rounded-full border border-line bg-white/72 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md"
        aria-label="Abrir opções de tema"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: activeTheme?.color }}>
          <Palette className="h-3.5 w-3.5 text-white" />
        </span>
        <span className="hidden sm:inline">Tema</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 rounded-[2rem] border border-line bg-white/90 p-3 text-ink shadow-2xl backdrop-blur-2xl">
          <p className="px-3 pb-2 text-xs font-black uppercase tracking-[0.2em] text-muted">Aparência</p>
          <div className="grid grid-cols-3 gap-2">
            {modes.map((item) => {
              const Icon = item.icon
              const active = mode === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setMode(item.id)}
                  className={`rounded-2xl border p-3 text-left transition ${active ? 'border-lilac bg-lavender' : 'border-line bg-white/70 hover:bg-lavender/50'}`}
                >
                  <Icon className="mb-2 h-4 w-4" />
                  <span className="text-xs font-bold">{item.label}</span>
                </button>
              )
            })}
          </div>

          <p className="px-3 pb-2 pt-4 text-xs font-black uppercase tracking-[0.2em] text-muted">Paletas</p>
          <div className="space-y-2">
            {themes.map((item) => (
              <button
                key={item.id}
                onClick={() => setTheme(item.id)}
                className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-left transition hover:bg-lavender/50"
              >
                <span className="h-8 w-8 rounded-full shadow-inner" style={{ background: item.color }} />
                <span className="flex-1 text-sm font-bold">{item.name}</span>
                {theme === item.id && <Check className="h-4 w-4 text-lilac" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
