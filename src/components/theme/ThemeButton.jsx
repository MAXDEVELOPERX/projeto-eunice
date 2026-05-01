import { Palette } from 'lucide-react'

export default function ThemeButton() {
  return (
    <button
      className="group flex items-center gap-2 rounded-full border border-line bg-white/72 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md"
      aria-label="Alternar tema"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-lilac via-blush to-mint">
        <Palette className="h-3.5 w-3.5 text-white" />
      </span>
      <span className="hidden sm:inline">Tema</span>
    </button>
  )
}
