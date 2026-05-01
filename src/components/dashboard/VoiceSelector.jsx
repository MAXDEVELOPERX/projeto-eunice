import { Mic2, SlidersHorizontal } from 'lucide-react'
import { narrationStyles, providers, voices } from '../../data/voices.js'

export default function VoiceSelector({ provider, setProvider, voice, setVoice, style, setStyle }) {
  const currentProvider = providers.find((item) => item.id === provider)

  return (
    <div className="glass-card rounded-[2rem] p-5">
      <div className="mb-5 flex items-center gap-2 text-sm font-bold text-muted">
        <SlidersHorizontal className="h-4 w-4" />
        Configuração da narração
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Provedor</span>
          <select value={provider} onChange={(event) => setProvider(event.target.value)} className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-lilac">
            {providers.map((item) => (
              <option key={item.id} value={item.id}>{item.name} — {item.model}</option>
            ))}
          </select>
          <span className="mt-2 block text-xs leading-5 text-muted">{currentProvider?.description}</span>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Voz</span>
          <select value={voice} onChange={(event) => setVoice(event.target.value)} className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-lilac">
            {voices.map((item) => (
              <option key={item.id} value={item.id}>{item.name} — {item.tone}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-ink">Estilo</span>
          <select value={style} onChange={(event) => setStyle(event.target.value)} className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-ink outline-none focus:border-lilac">
            {narrationStyles.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>

        <div className="rounded-3xl bg-gradient-to-br from-lavender to-mint/50 p-4">
          <Mic2 className="mb-3 h-5 w-5 text-ink" />
          <p className="text-sm font-semibold leading-6 text-ink">Modelo ElevenLabs fixado em <strong>eleven_flash_v2_5</strong>. Cartesia usará o modo econômico na integração real.</p>
        </div>
      </div>
    </div>
  )
}
