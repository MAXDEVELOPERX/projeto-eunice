import { useEffect, useMemo, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { normalizeAlignment } from '../../services/tts/providers.js'
import { generateMockAlignment } from '../../services/tts/mockGenerator.js'

export default function KaraokePlayer({ item }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [time, setTime] = useState(0)

  const alignment = useMemo(() => {
    const source = item.alignment?.length ? item.alignment : generateMockAlignment(item.text)
    return normalizeAlignment(source)
  }, [item])

  const duration = alignment.at(-1)?.end ?? 1

  useEffect(() => {
    if (!isPlaying) return undefined
    const interval = window.setInterval(() => {
      setTime((current) => (current >= duration ? 0 : Number((current + 0.12).toFixed(2))))
    }, 120)
    return () => window.clearInterval(interval)
  }, [duration, isPlaying])

  const progress = Math.min(100, (time / duration) * 100)

  return (
    <div className="rounded-[2rem] border border-line bg-white/72 p-5">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsPlaying((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition hover:-translate-y-0.5"
          aria-label={isPlaying ? 'Pausar' : 'Tocar'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 fill-white" />}
        </button>
        <div className="flex-1">
          <div className="h-3 overflow-hidden rounded-full bg-lavender">
            <div className="h-full rounded-full bg-gradient-to-r from-lilac to-mint transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs font-bold text-muted">
            <span>{time.toFixed(1)}s</span>
            <span>{item.duration}</span>
          </div>
        </div>
      </div>

      <p className="mt-5 flex flex-wrap gap-1.5 text-lg font-semibold leading-9 text-muted">
        {alignment.map((part) => {
          const active = time >= part.start && time <= part.end
          return (
            <span key={part.id} className={`karaoke-word rounded-xl px-1.5 py-0.5 ${active ? 'karaoke-active' : ''}`}>
              {part.word}
            </span>
          )
        })}
      </p>
    </div>
  )
}
