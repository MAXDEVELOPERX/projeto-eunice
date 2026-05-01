import { Brain, Captions, Database, WandSparkles } from 'lucide-react'

const features = [
  {
    icon: WandSparkles,
    title: 'Limpeza com IA',
    text: 'Remove quebras estranhas, cabeçalhos, rodapés e caracteres ruins antes da narração.',
  },
  {
    icon: Captions,
    title: 'Karaoke de texto',
    text: 'Acompanhe palavra por palavra enquanto o áudio toca, ideal para estudos e revisão.',
  },
  {
    icon: Brain,
    title: 'Vozes com personalidade',
    text: 'Eunice, Aurora, Lia e outras vozes fictícias mapeadas para provedores reais.',
  },
  {
    icon: Database,
    title: 'Libraries organizada',
    text: 'Guarde áudio, texto limpo, provedor, modelo e histórico em uma biblioteca simples.',
  },
]

export default function FeatureSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-lilac">Recursos</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">Uma experiência calma para criar áudio.</h2>
        </div>
        <p className="max-w-xl text-muted">Projetado para começar simples com dados mockados e evoluir para integrações reais com ElevenLabs, Cartesia, PDF, links e IA.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <article key={feature.title} className="glass-card rounded-[2rem] p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-lavender to-mint/60">
                <Icon className="h-5 w-5 text-ink" />
              </div>
              <h3 className="text-xl font-black text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{feature.text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
