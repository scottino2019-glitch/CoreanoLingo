import React, { useState } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';

const TIGER_TIPS = [
  "Duri dice: Sapevi che l'alfabeto coreano (Hangul) ha solo 24 lettere base ed è considerato uno dei più logici al mondo?",
  "Consiglio del giorno: Stampa la scheda di scrittura Hangul e traccia i simboli con la penna per fissarli nella memoria muscolare!",
  "Duri dice: Inizia dalla Lezione 1 per imparare a combinare le consonanti e le vocali in sillabe!",
  "Lo sapevi? La parola coreana 'Fighting!' (파이팅) viene usata spessissimo per incoraggiare qualcuno a dare il massimo!",
  "Duri consiglia: Iscriviti ai giochi della sezione Esercizi per testare la tua velocità e memoria visiva!",
  "In coreano, il verbo si trova sempre alla fine della frase. Ricordati la struttura Soggetto-Oggetto-Verbo (SOV)!"
];

export function Mascot() {
  const [tipIndex, setTipIndex] = useState(0);

  const rotateTip = () => {
    setTipIndex((prev) => (prev + 1) % TIGER_TIPS.length);
  };

  return (
    <div className="bg-white border-2 border-gray-200/80 p-5 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-4" id="mascot-section">
      
      {/* Cartoon Tiger Avatar */}
      <div 
        onClick={rotateTip}
        className="w-20 h-20 rounded-2xl bg-[#ff9600]/10 border-2 border-[#ff9600]/25 flex items-center justify-center relative shrink-0 cursor-pointer group hover:scale-105 active:scale-95 transition-all"
        title="Clicca per un altro consiglio!"
        id="mascot-avatar-container"
      >
        <svg viewBox="0 0 100 100" className="w-16 h-16 drop-shadow-sm">
          {/* Ears */}
          <ellipse cx="22" cy="24" rx="10" ry="8" fill="#ff9600" />
          <ellipse cx="22" cy="24" rx="5" ry="4" fill="#fee2e2" />
          <ellipse cx="78" cy="24" rx="10" ry="8" fill="#ff9600" />
          <ellipse cx="78" cy="24" rx="5" ry="4" fill="#fee2e2" />

          {/* Head */}
          <ellipse cx="50" cy="52" rx="30" ry="26" fill="#ff9600" />

          {/* Cheeks Overlay */}
          <ellipse cx="38" cy="62" rx="12" ry="9" fill="#ffffff" />
          <ellipse cx="62" cy="62" rx="12" ry="9" fill="#ffffff" />

          {/* Eyes */}
          <circle cx="36" cy="46" r="3.5" fill="#1e293b" />
          <circle cx="36" cy="44" r="1" fill="#ffffff" />
          <circle cx="64" cy="46" r="3.5" fill="#1e293b" />
          <circle cx="64" cy="44" r="1" fill="#ffffff" />

          {/* Stripes */}
          <path d="M50 28 L50 36" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
          <path d="M44 32 L56 32" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 50 L28 51" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M78 50 L72 51" stroke="#451a03" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cute Tiger Nose & Smile */}
          <polygon points="48,56 52,56 50,59" fill="#451a03" />
          <path d="M46 62 Q50 65 54 62" stroke="#451a03" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Blush */}
          <circle cx="28" cy="53" r="3" fill="#ef4444" opacity="0.4" />
          <circle cx="72" cy="53" r="3" fill="#ef4444" opacity="0.4" />
        </svg>

        {/* Small floating badge */}
        <span className="absolute -bottom-1 -right-1 bg-[#ffc800] border-2 border-white text-white p-1 rounded-full shadow-xs">
          <Sparkles className="w-3 h-3 fill-white" />
        </span>
      </div>

      {/* Bubble Dialog Box */}
      <div className="flex-1 space-y-2 relative text-center sm:text-left">
        <div className="bg-gray-50 border-2 border-gray-100 p-4 rounded-2xl text-sm text-gray-800 font-medium leading-relaxed">
          {TIGER_TIPS[tipIndex]}
        </div>
        
        {/* Helper tips rotator button */}
        <button 
          onClick={rotateTip}
          className="text-xs font-black text-[#ff9600] hover:text-[#e07b00] flex items-center gap-1 mx-auto sm:ml-0 transition-colors focus:outline-none"
          id="mascot-tip-rotator"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Cambia consiglio</span>
        </button>
      </div>

    </div>
  );
}
