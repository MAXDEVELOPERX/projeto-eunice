import { motion } from 'framer-motion'
import { ArrowRight, FileText, Link2, Mic2, Sparkles } from 'lucide-react'

export default function Hero({ onStart }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-semibold text-muted shadow-sm"
        >
          <Sparkles className="h-4 w-4 text-lilac" />
          Text-to-speech open-source com leitura sincronizada
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.06em] text-ink md:text-7xl"
        >
          Transforme textos em áudios suaves com a voz da Eunice.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-muted"
        >
          Cole textos, envie PDFs ou insira links. A IA limpa o conteúdo, escolhe a melhor narração e entrega áudio com acompanhamento estilo karaoke.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-bold text-white shadow-xl shadow-lilac/20 transition hover:-translate-y-1"
          >
            Criar áudio agora
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white/74 px-6 py-3 font-bold text-ink transition hover:-translate-y-1 hover:shadow-lg">
            Ver demonstração
          </button>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            { icon: FileText, label: 'Texto e PDF' },
            { icon: Link2, label: 'Extração por link' },
            { icon: Mic2, label: 'ElevenLabs + Cartesia' },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="glass-card rounded-3xl p-4">
                <Icon className="mb-3 h-5 w-5 text-lilac" />
                <p className="font-semibold text-ink">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, rotateX: 12, rotateY: -10, y: 22 }}
        animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute -right-4 bottom-6 h-40 w-40 rounded-full bg-mint/50 blur-3xl" />
        <div className="glass-card relative overflow-hidden rounded-[2.5rem] p-3 soft-shadow">
          <img
            src="/eunice-hero.jpg"
            alt="Ilustração pastel gerada por IA para o Projeto Eunice"
            className="aspect-square w-full rounded-[2rem] object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/70 bg-white/78 p-4 shadow-xl backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-muted">Voz ativa</p>
                <p className="text-3xl font-black text-ink">Eunice</p>
              </div>
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm">
                <Mic2 className="h-7 w-7 text-lilac" />
              </div>
            </div>
            <p className="text-sm font-semibold leading-6 text-muted">
              <span className="rounded-xl bg-lilac/35 px-2 py-1 text-ink">Karaoke</span> sincronizado com a narração.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
