import { useState } from 'react'
import { ThemeProvider } from './components/theme/ThemeProvider.jsx'
import Header from './components/layout/Header.jsx'
import Hero from './components/landing/Hero.jsx'
import FeatureSection from './components/landing/FeatureSection.jsx'
import VoicePreview from './components/landing/VoicePreview.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import AudioLibraryGrid from './components/library/AudioLibraryGrid.jsx'

export default function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-hidden">
        <Header activePage={activePage} onNavigate={setActivePage} />
        <main>
          {activePage === 'home' && (
            <>
              <Hero onStart={() => setActivePage('dashboard')} />
              <FeatureSection />
              <VoicePreview />
            </>
          )}
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'libraries' && <AudioLibraryGrid />}
        </main>
        <footer className="mx-auto max-w-7xl px-5 py-10 text-sm font-semibold text-muted">
          Projeto Eunice · Open-source text-to-speech com estética pastel minimalista.
        </footer>
      </div>
    </ThemeProvider>
  )
}
