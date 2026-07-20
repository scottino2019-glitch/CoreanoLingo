import React from 'react';
import { EXERCISE_ITEMS } from '../data';
import * as Icons from 'lucide-react';
import { Gamepad2, Play, Compass, Award } from 'lucide-react';

export function ExercisesView() {
  // Dynamically render Lucide icons with Taegeuk Red style
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-[#cd2e3a]" />;
    }
    return <Gamepad2 className="w-6 h-6 text-[#cd2e3a]" />;
  };

  const getDifficultyColor = (difficulty: 'Facile' | 'Medio' | 'Sfida') => {
    switch (difficulty) {
      case 'Facile':
        return 'bg-[#009688]/10 text-[#009688] border-[#009688]/20';
      case 'Medio':
        return 'bg-[#ffc800]/10 text-[#d4a000] border-[#ffc800]/20';
      case 'Sfida':
        return 'bg-[#cd2e3a]/10 text-[#cd2e3a] border-[#cd2e3a]/20';
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-300" id="exercises-view-container">
      
      {/* Informative header block with Crimson Red accents */}
      <div className="bg-white/90 p-6 md:p-8 rounded-3xl border-2 border-gray-200/60 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-xs" id="exercises-header">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#cd2e3a]/10 text-[#cd2e3a] rounded-2xl flex items-center justify-center border border-red-100 shrink-0">
            <Gamepad2 className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-gray-950">Esercizi Pratici Interattivi</h2>
            <p className="text-sm text-gray-500 mt-0.5">Gioca con i quiz di memoria, cruciverba e costruttori di frasi.</p>
          </div>
        </div>

        <div className="bg-amber-50/70 border-2 border-amber-100 p-4 rounded-2xl max-w-sm text-xs text-amber-900 leading-relaxed font-medium shrink-0">
          <span className="font-bold text-amber-950">🎯 Nota Tecnica:</span> Ciascun esercizio punta direttamente a file ospitati in <code className="bg-white/95 px-1 py-0.5 rounded border border-amber-200 font-mono text-[10px]">public/esercizi/</code> per renderne facile la modifica e l'aggiunta!
        </div>
      </div>

      {/* Grid List of Interactive Drills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="exercises-grid-list">
        {EXERCISE_ITEMS.map((exercise) => {
          return (
            <div 
              key={exercise.id} 
              className="bg-white/90 border-2 border-gray-200/60 rounded-3xl p-6 flex flex-col justify-between hover:border-[#cd2e3a] hover:shadow-md transition-all duration-200 group relative overflow-hidden"
              id={`exercise-card-${exercise.id}`}
            >
              {/* Subtle design ribbon on left */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#cd2e3a]"></div>

              <div className="space-y-4 pl-1">
                {/* Meta Header */}
                <div className="flex justify-between items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#cd2e3a]/10 border border-red-100 flex items-center justify-center">
                    {renderIcon(exercise.iconName)}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-gray-950 group-hover:text-[#cd2e3a] transition-colors leading-tight">
                    {exercise.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {exercise.description}
                  </p>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="mt-6 pt-4 border-t-2 border-gray-100 flex justify-end pl-1">
                <a
                  href={exercise.link}
                  className="bg-[#cd2e3a] border-b-4 border-[#b5222d] hover:border-b-2 active:border-b-0 active:translate-y-[2px] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-xs transition-all w-full md:w-auto justify-center cursor-pointer"
                  id={`exercise-link-${exercise.id}`}
                >
                  <Play className="w-3.5 h-3.5 fill-white stroke-none" />
                  <span>Avvia Gioco</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fun encouragement card */}
      <div className="bg-[#0a51c2]/5 border-2 border-[#0a51c2]/10 rounded-3xl p-6 flex items-start gap-4 shadow-2xs" id="exercises-footer-tips">
        <div className="p-2.5 bg-[#0a51c2]/10 text-[#0a51c2] rounded-2xl shrink-0">
          <Compass className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-black text-[#0a51c2]">Ti piacciono le sfide?</h4>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            I giochi di abbinamento sono perfetti per allenare i tuoi riflessi linguistici. Completa un esercizio della sezione per consolidare i termini che hai scoperto nelle lezioni a mappa.
          </p>
        </div>
      </div>

    </div>
  );
}
