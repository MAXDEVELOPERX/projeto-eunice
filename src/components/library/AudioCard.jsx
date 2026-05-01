import { Download, FileText, Trash2 } from 'lucide-react'
import KaraokePlayer from './KaraokePlayer.jsx'

export default function AudioCard({ item }) {
  return (
    <article className="glass-card rounded-[2.25rem] p-5">
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-lilac">{item.source}</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-ink">{item.title}</h3>
          <p className="mt-2 text-sm font-semibold text-muted">{item.voice} · {item.provider} · {item.model}</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border border-line bg-white p-2.5 text-muted transition hover:text-ink"><FileText className="h-4 w-4" /></button>
          <button className="rounded-full border border-line bg-white p-2.5 text-muted transition hover:text-ink"><Download className="h-4 w-4" /></button>
          <button className="rounded-full border border-line bg-white p-2.5 text-muted transition hover:text-ink"><Trash2 className="h-4 w-4" /></button>
        </div>
      </div>
      <KaraokePlayer item={item} />
    </article>
  )
}
