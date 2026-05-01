import { AudioLines, Code2, LayoutDashboard, Library, Sparkles } from 'lucide-react'
import ThemeButton from '../theme/ThemeButton.jsx'

const navItems = [
  { id: 'home', label: 'Início', icon: Sparkles },
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'libraries', label: 'Libraries', icon: Library },
]

export default function Header({ activePage, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/72 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-3 rounded-full text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-line">
            <AudioLines className="h-5 w-5 text-lilac" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-[0.22em] text-muted">PROJETO</span>
            <span className="block text-xl font-bold text-ink">Eunice</span>
          </span>
        </button>

        <nav className="hidden items-center gap-2 rounded-full border border-line bg-white/62 p-1 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-lavender text-ink shadow-sm' : 'text-muted hover:bg-lavender/60 hover:text-ink'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeButton />
          <a
            href="https://github.com/"
            className="hidden items-center gap-2 rounded-full border border-line bg-white/72 px-4 py-2 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:shadow-md sm:flex"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
