import { libraryItems } from '../../data/library.js'
import AudioCard from './AudioCard.jsx'

export default function AudioLibraryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8">
        <p className="font-bold uppercase tracking-[0.22em] text-lilac">Libraries</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-ink md:text-5xl">Seus áudios, textos e leituras sincronizadas.</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {libraryItems.map((item) => <AudioCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}
