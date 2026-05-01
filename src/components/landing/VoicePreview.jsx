import { voices } from '../../data/voices.js'

export default function VoicePreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="glass-card overflow-hidden rounded-[2.5rem] p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.22em] text-lilac">Vozes</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-ink">Eunice é a voz principal.</h2>
            <p className="mt-4 leading-7 text-muted">Cada nome é uma identidade amigável para o usuário, enquanto o sistema escolhe o provedor e modelo corretos por trás.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {voices.map((voice) => (
              <div key={voice.id} className="rounded-3xl border border-line bg-white/72 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-black text-ink">{voice.name}</p>
                    <p className="text-sm text-muted">{voice.tone}</p>
                  </div>
                  <span className="rounded-full bg-lavender px-3 py-1 text-xs font-bold text-ink">{voice.provider}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
