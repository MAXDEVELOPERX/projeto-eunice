import { FileText, Link2, Type, Upload } from 'lucide-react'

const sources = [
  { id: 'text', label: 'Colar texto', icon: Type },
  { id: 'pdf', label: 'Inserir PDF', icon: Upload },
  { id: 'link', label: 'Inserir link', icon: Link2 },
]

export default function SourceSelector({ selected, onChange }) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-muted">
        <FileText className="h-4 w-4" />
        Origem do conteúdo
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        {sources.map((source) => {
          const Icon = source.icon
          const isActive = selected === source.id
          return (
            <button
              key={source.id}
              onClick={() => onChange(source.id)}
              className={`rounded-3xl border p-4 text-left transition hover:-translate-y-0.5 ${
                isActive ? 'border-lilac bg-lavender/70 shadow-md' : 'border-line bg-white/72 hover:bg-white'
              }`}
            >
              <Icon className="mb-3 h-5 w-5 text-lilac" />
              <span className="font-bold text-ink">{source.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
