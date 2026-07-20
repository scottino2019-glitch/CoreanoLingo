import React, { useState, useRef, useEffect } from 'react';
import { LESSON_NODES } from '../data';
import { LessonNode } from '../types';
import { Mascot } from './Mascot';
import * as Icons from 'lucide-react';
import { 
  Flame, 
  Zap, 
  Trophy, 
  Star,
  Play, 
  X, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

export function HomeView() {
  const [selectedNode, setSelectedNode] = useState<LessonNode | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        // Only close if we didn't click another lesson button
        const target = event.target as HTMLElement;
        if (!target.closest('.lesson-node-btn')) {
          setSelectedNode(null);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dynamically render a lucide icon based on name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-white stroke-[2.5]" />;
    }
    return <BookOpen className="w-8 h-8 text-white stroke-[2.5]" />;
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto animate-in fade-in duration-300" id="home-view-container">
      
      {/* Upper gamified stats bar - Custom Korean aesthetic with Taegeuk top-border ribbon */}
      <div className="bg-white px-6 py-4 rounded-2xl border-2 border-gray-200/60 flex justify-between items-center relative overflow-hidden shadow-xs" id="home-stats-bar">
        {/* Beautiful Top Border Taegeuk Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-[4px] flex">
          <div className="w-1/2 h-full bg-[#cd2e3a]"></div>
          <div className="w-1/2 h-full bg-[#0a51c2]"></div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0a51c2]/10 to-[#cd2e3a]/10 flex items-center justify-center text-2xl shadow-inner border border-gray-100" title="Lingua Attiva">
            🇰🇷
          </div>
          <div>
            <span className="text-[10px] text-gray-400 font-extrabold tracking-wider uppercase block">LINGUA ATTIVA</span>
            <span className="text-base font-black text-gray-950">Coreano (한국어)</span>
          </div>
        </div>

        {/* Gamified stats */}
        <div className="flex items-center gap-5">
          {/* Streak */}
          <div className="flex items-center gap-2" title="Serie di giorni consecutivi">
            <Flame className="w-7 h-7 text-[#cd2e3a] fill-[#cd2e3a]" />
            <div>
              <span className="text-[10px] text-gray-400 font-extrabold block leading-tight">SERIE</span>
              <span className="text-base font-black text-[#cd2e3a]">7 Giorni</span>
            </div>
          </div>

          {/* XP */}
          <div className="flex items-center gap-2" title="Punti Esperienza Totali">
            <Zap className="w-7 h-7 text-[#0a51c2] fill-[#0a51c2]" />
            <div>
              <span className="text-[10px] text-gray-400 font-extrabold block leading-tight">PUNTI XP</span>
              <span className="text-base font-black text-[#0a51c2]">240 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mascot encouragement section */}
      <Mascot />

      {/* DUOLINGO LEARNING MAP */}
      <div className="relative bg-white/95 border-2 border-gray-200/60 rounded-3xl p-8 md:p-12 flex flex-col items-center select-none overflow-visible shadow-xs" id="learning-path-map">
        
        {/* Unit Header Badge - Beautifully Styled with Crimson & Blue Split/Gradient */}
        <div className="relative bg-gradient-to-r from-[#cd2e3a] to-[#0a51c2] border-b-4 border-[#073fa1] text-white px-8 py-4 rounded-2xl text-center w-full max-w-md shadow-md mb-12 transform hover:scale-[1.01] transition-all overflow-hidden">
          {/* Decorative geometric accent lines */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%),linear-gradient(-45deg,#000_25%,transparent_25%)] bg-[size:10px_10px]"></div>
          <h3 className="relative text-[10px] font-black uppercase tracking-widest text-red-100 z-10">Sezione 1: Le Basi della Lingua</h3>
          <p className="relative text-lg font-black leading-tight mt-0.5 z-10">Muovi i tuoi primi passi in coreano</p>
        </div>

        {/* Path SVG Connector Line styled with Dancheong Teal & Blue-Red segments */}
        <div className="absolute top-44 bottom-24 left-0 right-0 pointer-events-none hidden md:block" id="path-svg-connectors">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M 320,10 Q 400,100 320,200 T 320,400 Q 400,500 320,600 T 320,800" 
              fill="none" 
              stroke="#e7e2d8" 
              strokeWidth="10" 
              strokeLinecap="round"
            />
            <path 
              d="M 320,10 Q 400,100 320,200 T 320,400 Q 400,500 320,600 T 320,800" 
              fill="none" 
              stroke="#0a51c2" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeDasharray="16,16"
            />
          </svg>
        </div>

        {/* Snake-like Zig-zag Nodes */}
        <div className="flex flex-col items-center space-y-10 w-full relative z-10" id="nodes-stack">
          {LESSON_NODES.map((node, index) => {
            const isSelected = selectedNode?.id === node.id;
            
            // Generate classic Duolingo offset classes
            // Alternates: center, right, center, left, center, right...
            const pattern = [
              'translate-x-0', 
              'md:translate-x-16', 
              'translate-x-0', 
              'md:-translate-x-16', 
              'translate-x-0', 
              'md:translate-x-12'
            ];
            const offsetClass = pattern[index % pattern.length];

            return (
              <div key={node.id} className={`flex flex-col items-center relative ${offsetClass}`} id={`node-wrap-${node.id}`}>
                
                {/* Crown / Trophy icon floating above active or first node */}
                {index === 0 && (
                  <span className="absolute -top-4 bg-[#cd2e3a] text-white rounded-full p-1 shadow-md border-2 border-white animate-bounce z-20">
                    <Star className="w-3.5 h-3.5 fill-white" />
                  </span>
                )}

                {/* Main Node Circular Button */}
                <button
                  onClick={() => setSelectedNode(node)}
                  className={`lesson-node-btn w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-3xl shadow-lg border-b-6 active:border-b-2 active:translate-y-[4px] transition-all duration-150 ${node.color} ${node.borderColor} focus:outline-none cursor-pointer`}
                  title={node.title}
                  id={`lesson-node-${node.id}`}
                >
                  {renderIcon(node.iconName)}
                </button>

                {/* Compact lesson title underneath */}
                <div className="mt-3 text-center bg-[#FAF7F2] border-2 border-gray-200/50 rounded-2xl px-3 py-1.5 shadow-2xs max-w-[160px]">
                  <p className="text-xs font-black text-gray-900 truncate leading-none">{node.title}</p>
                  <p className="text-[10px] text-[#0a51c2] font-black tracking-wider mt-1">{node.korean}</p>
                </div>

                {/* FLOATING POPOVER CARD - Duolingo style bubble dialog */}
                {isSelected && (
                  <div 
                    ref={popoverRef}
                    className="absolute z-30 bottom-24 bg-white border-2 border-gray-200/90 p-5 rounded-2xl shadow-xl w-64 text-center space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200"
                    id="lesson-popover-bubble"
                  >
                    {/* Small speech-bubble pointer arrow */}
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-200 rotate-45"></div>

                    {/* Popover Header */}
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        LEZIONE {index + 1}
                      </span>
                      <h4 className="text-base font-black text-gray-950">
                        {node.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#cd2e3a] font-mono">
                        {node.korean}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      {node.description}
                    </p>

                    {/* Direct link to HTML page in public */}
                    <a
                      href={node.link}
                      className={`w-full py-3.5 px-4 rounded-xl text-white font-black text-xs uppercase tracking-wider block border-b-4 text-center transition-all duration-150 active:border-b-0 active:translate-y-[4px] shadow-sm ${node.color} ${node.borderColor}`}
                      id={`start-anchor-${node.id}`}
                    >
                      Inizia Lezione
                    </a>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Final milestone trophy at bottom of path */}
        <div className="mt-16 flex flex-col items-center" id="path-milestone-end">
          <div className="w-16 h-16 rounded-full bg-[#ffc800] border-4 border-[#e6b400] flex items-center justify-center text-white shadow-md">
            <Trophy className="w-7 h-7 fill-white stroke-[2.5]" />
          </div>
          <p className="text-xs font-black text-gray-500 mt-2 uppercase tracking-wider">Traguardo Sezione</p>
        </div>

      </div>

    </div>
  );
}
