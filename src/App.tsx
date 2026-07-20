import React, { useState } from 'react';
import { HomeView } from './components/HomeView';
import { PdfView } from './components/PdfView';
import { ExercisesView } from './components/ExercisesView';
import { 
  Home, 
  Printer, 
  Gamepad2, 
  BookOpen,
  Info,
  ExternalLink
} from 'lucide-react';

type TabType = 'home' | 'pdf' | 'exercises';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <div className="min-h-screen korean-lattice-bg text-gray-900 font-sans flex flex-col md:flex-row" id="app-root-container">
      
      {/* 1. DUOLINGO LEFT SIDEBAR (Desktop only - hidden on print) */}
      <aside 
        className="hidden md:flex flex-col w-64 border-r-2 border-gray-200/60 fixed left-0 top-0 bottom-0 bg-white/95 backdrop-blur-xs px-6 py-8 justify-between z-40 print:hidden shadow-xs" 
        id="app-desktop-sidebar"
      >
        <div className="space-y-8">
          {/* Logo Brand / Mascot with South Korean Flag Colors (Red/Blue Taegeuk) */}
          <div className="flex items-center gap-3 px-2">
            <div className="relative w-11 h-11 shrink-0 rounded-2xl bg-[#0a51c2] flex items-center justify-center shadow-md overflow-hidden border-b-4 border-[#073fa1]">
              {/* Dual Red/Blue split overlay resembling the Taegeuk */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#cd2e3a] border-b border-white/20"></div>
              <span className="relative text-white text-lg font-black font-display z-10">한</span>
            </div>
            <div>
              <h1 className="text-base font-black text-gray-950 tracking-tight font-display flex items-center gap-1 leading-none">
                <span>CoreanoLingo</span>
                <span className="text-xs">🇰🇷</span>
              </h1>
              <p className="text-[9px] text-[#cd2e3a] font-extrabold tracking-widest uppercase mt-1">한국어 • Percorso</p>
            </div>
          </div>

          {/* Navigation links - Duolingo trademark uppercase thick fonts with K-Colors */}
          <nav className="space-y-2.5" id="desktop-nav-links">
            {/* 1. Home Link (Dancheong Teal / Korean Palace Green) */}
            <button
              onClick={() => setActiveTab('home')}
              className={`w-full py-3.5 px-4 rounded-2xl flex items-center gap-4 border-2 font-black uppercase text-xs tracking-wider transition-all duration-150 ${
                activeTab === 'home'
                  ? 'bg-[#009688]/10 border-[#009688] text-[#009688]'
                  : 'bg-transparent border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
              id="desktop-nav-home"
            >
              <Home className={`w-5 h-5 ${activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span>Percorso</span>
            </button>

            {/* 2. PDF Worksheets Link (Taegeuk Blue) */}
            <button
              onClick={() => setActiveTab('pdf')}
              className={`w-full py-3.5 px-4 rounded-2xl flex items-center gap-4 border-2 font-black uppercase text-xs tracking-wider transition-all duration-150 ${
                activeTab === 'pdf'
                  ? 'bg-[#0a51c2]/10 border-[#0a51c2] text-[#0a51c2]'
                  : 'bg-transparent border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
              id="desktop-nav-pdf"
            >
              <Printer className={`w-5 h-5 ${activeTab === 'pdf' ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span>Stampa PDF</span>
            </button>

            {/* 3. Exercises Link (Taegeuk Red) */}
            <button
              onClick={() => setActiveTab('exercises')}
              className={`w-full py-3.5 px-4 rounded-2xl flex items-center gap-4 border-2 font-black uppercase text-xs tracking-wider transition-all duration-150 ${
                activeTab === 'exercises'
                  ? 'bg-[#cd2e3a]/10 border-[#cd2e3a] text-[#cd2e3a]'
                  : 'bg-transparent border-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-800'
              }`}
              id="desktop-nav-exercises"
            >
              <Gamepad2 className={`w-5 h-5 ${activeTab === 'exercises' ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span>Esercizi</span>
            </button>
          </nav>
        </div>

        {/* Small copyright footer inside sidebar */}
        <div className="px-2 space-y-3">
          <div className="bg-amber-50/60 border border-amber-100 p-3.5 rounded-2xl text-[10px] text-amber-900 leading-normal font-medium">
            <span className="font-bold text-amber-950 block mb-0.5">📂 Risorse Integrate:</span>
            Lezioni e file stampabili PDF puntano direttamente ai tuoi file in <code className="bg-white/80 px-1 py-0.5 rounded border border-amber-200">public/</code>.
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
            © 2026 CoreanoLingo
          </p>
        </div>
      </aside>

      {/* 2. MAIN SCROLLABLE CONTENT VIEWPORT (offset on desktop to leave space for sidebar) */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen" id="app-main-view">
        
        {/* Mobile Header Banner (Only visible on mobile - hidden on print) */}
        <header className="md:hidden bg-white/95 backdrop-blur-md border-b-2 border-gray-200/80 py-4 px-6 sticky top-0 z-40 flex items-center justify-between print:hidden shadow-xs" id="app-mobile-header">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-lg bg-[#0a51c2] flex items-center justify-center overflow-hidden border-b-2 border-[#073fa1]">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#cd2e3a]"></div>
              <span className="relative text-white text-xs font-black z-10">한</span>
            </div>
            <h1 className="text-base font-black text-gray-950 tracking-tight font-display">CoreanoLingo 🇰🇷</h1>
          </div>
          <span className="text-[10px] font-black text-[#cd2e3a] uppercase tracking-widest bg-red-50 border border-red-100 px-2.5 py-1 rounded-lg">
            한국어
          </span>
        </header>

        {/* Dynamic page container */}
        <main className="flex-1 p-5 md:p-8 max-w-4xl w-full mx-auto pb-28 md:pb-8" id="app-viewport-inner">
          {activeTab === 'home' && <HomeView />}
          {activeTab === 'pdf' && <PdfView />}
          {activeTab === 'exercises' && <ExercisesView />}
        </main>

      </div>

      {/* 3. MOBILE BOTTOM NAVIGATION UTILITY BAR (Only visible on mobile - hidden on print) */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t-2 border-gray-200/80 py-3.5 px-6 z-40 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] flex justify-around items-center print:hidden" 
        id="app-mobile-bottom-nav"
      >
        {/* Mobile Home Tab (Dancheong Teal) */}
        <button
          onClick={() => setActiveTab('home')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all duration-150 ${
            activeTab === 'home'
              ? 'text-[#009688] scale-105'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          id="mobile-nav-home"
        >
          <Home className={`w-5 h-5 ${activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] font-black uppercase tracking-wider">Percorso</span>
        </button>

        {/* Mobile PDF Tab (Taegeuk Blue) */}
        <button
          onClick={() => setActiveTab('pdf')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all duration-150 ${
            activeTab === 'pdf'
              ? 'text-[#0a51c2] scale-105'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          id="mobile-nav-pdf"
        >
          <Printer className={`w-5 h-5 ${activeTab === 'pdf' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] font-black uppercase tracking-wider">Stampabili</span>
        </button>

        {/* Mobile Exercises Tab (Taegeuk Red) */}
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all duration-150 ${
            activeTab === 'exercises'
              ? 'text-[#cd2e3a] scale-105'
              : 'text-gray-400 hover:text-gray-600'
          }`}
          id="mobile-nav-exercises"
        >
          <Gamepad2 className={`w-5 h-5 ${activeTab === 'exercises' ? 'stroke-[2.5]' : 'stroke-2'}`} />
          <span className="text-[10px] font-black uppercase tracking-wider">Esercizi</span>
        </button>
      </nav>

    </div>
  );
}
