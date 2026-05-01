import { useMemo, useState } from 'react'
import { Bot, FileUp, Link2, Loader2, Sparkles } from 'lucide-react'
import SourceSelector from './SourceSelector.jsx'
import VoiceSelector from './VoiceSelector.jsx'
import KaraokePlayer from '../library/KaraokePlayer.jsx'
import { voices } from '../../data/voices.js'
import { generateMockAlignment } from '../../services/tts/mockGenerator.js'
import { cleanTextForNarration, generateAudioTitle, TEXT_AI_PROVIDER } from '../../services/textAi.js'

const initialText = 'O Projeto Eunice transforma conteúdos em áudios naturais, com uma experiência minimalista e acompanhamento de texto no estilo karaoke.'

export default function Dashboard() {
  const [source, setSource] = useState('text')
  const [title, setTitle] = useState('Nova leitura com Eunice')
  const [text, setText] = useState(initialText)
  const [provider, setProvider] = useState('elevenlabs')
  const [voice, setVoice] = useState('eunice')
  const [style, setStyle] = useState('Natural')
  const [generated, setGenerated] = useState(null)
  const [isCleaning, setIsCleaning] = useState(false)
  const [isTitling, setIsTitling] = useState(false)

  const selectedVoice = voices.find((item) => item.id === voice)

  const previewItem = useMemo(() => generated ?? {
    id: 'preview',
    title,
    voice: selectedVoice?.name ?? 'Eunice',
    provider: provider === 'elevenlabs' ? 'ElevenLabs' : 'Cartesia',
    model: provider === 'elevenlabs' ? 'eleven_flash_v2_5' : 'economy',
    duration: '00:42',
    source: source === 'text' ? 'Texto colado' : source === 'pdf' ? 'PDF' : 'Link',
    text,
    alignment: generateMockAlignment(text),
  }, [generated, provider, selectedVoice, source, text, title])

  async function cleanText() {
    setIsCleaning(true)
    const result = await cleanTextForNarration(text)
    setText(result.text)
    setIsCleaning(false)
  }

  async function generateTitle() {
    setIsTitling(true)
    const result = await generateAudioTitle(text)
    setTitle(result.title)
    setIsTitling(false)
  }

  async function generateAudio() {
    let nextTitle = title.trim()

    if (!nextTitle || nextTitle === 'Nova leitura com Eunice') {
      const result = await generateAudioTitle(text)
      nextTitle = result.title
      setTitle(nextTitle)
    }

    setGenerated({ ...previewItem, title: nextTitle, id: crypto.randomUUID(), alignment: generateMockAlignment(text) })
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <p className="font-bold uppercase tracking-[0.22em] text-lilac">Dashboard</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-ink md:text-6xl">Crie uma narração limpa e sincronizada.</h1>
        </div>
        <div className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-bold text-muted">
          IA texto: {TEXT_AI_PROVIDER.model} · TTS: ElevenLabs/Cartesia
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-[2.5rem] p-5 md:p-6">
          <div className="space-y-6">
            <SourceSelector selected={source} onChange={setSource} />

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Título do áudio</span>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input value={title} onChange={(event) => setTitle(event.target.value)} className="w-full rounded-2xl border border-line bg-white/86 px-4 py-3 text-ink outline-none focus:border-lilac" />
                <button type="button" onClick={generateTitle} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-md">
                  {isTitling ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bot className="h-4 w-4" />}
                  Gerar título
                </button>
              </div>
              <span className="mt-2 block text-xs font-semibold text-muted">DeepSeek sugere o título a partir do texto inserido.</span>
            </label>

            {source === 'pdf' && (
              <div className="rounded-3xl border border-dashed border-lilac bg-lavender/50 p-6 text-center">
                <FileUp className="mx-auto mb-3 h-8 w-8 text-lilac" />
                <p className="font-bold text-ink">Arraste seu PDF aqui</p>
                <p className="mt-1 text-sm text-muted">Interface preparada para extração real na próxima fase.</p>
              </div>
            )}

            {source === 'link' && (
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-bold text-ink"><Link2 className="h-4 w-4" /> Link para extração</span>
                <input placeholder="https://exemplo.com/artigo" className="w-full rounded-2xl border border-line bg-white/86 px-4 py-3 text-ink outline-none focus:border-lilac" />
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Texto para narração</span>
              <textarea value={text} onChange={(event) => setText(event.target.value)} rows={10} className="w-full resize-none rounded-[1.5rem] border border-line bg-white/86 px-4 py-4 leading-7 text-ink outline-none focus:border-lilac" />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={cleanText} className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-md">
                {isCleaning ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bot className="h-4 w-4" />}
                Limpar com IA
              </button>
              <button onClick={generateAudio} className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
                <Sparkles className="h-4 w-4" />
                Gerar áudio
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="glass-card overflow-hidden rounded-[2rem] p-3">
            <img src="/eunice-dashboard.jpg" alt="Ilustração do dashboard do Projeto Eunice" className="aspect-[16/10] w-full rounded-[1.5rem] object-cover" />
          </div>
          <VoiceSelector provider={provider} setProvider={setProvider} voice={voice} setVoice={setVoice} style={style} setStyle={setStyle} />
          <div className="glass-card rounded-[2rem] p-5">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-lilac">Prévia karaoke</p>
            <h3 className="mb-4 text-2xl font-black text-ink">{style} com {selectedVoice?.name}</h3>
            <KaraokePlayer item={previewItem} />
          </div>
        </div>
      </div>
    </section>
  )
}
