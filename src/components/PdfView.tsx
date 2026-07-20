import React from 'react';
import { PDF_ITEMS } from '../data';
import { PdfItem } from '../types';
import { Printer, FileText, ExternalLink, ArrowUpRight, Award } from 'lucide-react';

export function PdfView() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in duration-300" id="pdf-view-container">
      
      {/* Information Header Block */}
      <div className="bg-white/90 p-6 md:p-8 rounded-3xl border-2 border-gray-200/60 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center shadow-xs" id="pdf-header">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#0a51c2]/10 text-[#0a51c2] rounded-2xl flex items-center justify-center border border-blue-100 shrink-0">
            <Printer className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-gray-950">Schede PDF Stampabili</h2>
            <p className="text-sm text-gray-500 mt-0.5">Eserciziari di scrittura e tabelle di studio offline per il tuo coreano.</p>
          </div>
        </div>

        <div className="bg-amber-50/70 border-2 border-amber-100 p-4 rounded-2xl max-w-sm text-xs text-amber-900 leading-relaxed font-medium shrink-0">
          <span className="font-bold text-amber-950">💡 Istruzioni:</span> Cliccando su stampa, potrai scaricare o stampare direttamente il file PDF che avrai caricato nella cartella <code className="bg-white/90 px-1 py-0.5 rounded border border-amber-200 font-mono text-[10px]">public/pdf/</code>.
        </div>
      </div>

      {/* Printable Grid of resource sheets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" id="pdf-grid-list">
        {PDF_ITEMS.map((pdf) => {
          return (
            <div 
              key={pdf.id} 
              className="bg-white/90 border-2 border-gray-200/60 rounded-3xl p-6 flex flex-col justify-between hover:border-[#0a51c2] hover:shadow-md transition-all duration-200 group relative overflow-hidden"
              id={`pdf-card-${pdf.id}`}
            >
              {/* Subtle design ribbon on left */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#0a51c2]"></div>

              <div className="space-y-4 pl-1">
                {/* Meta tags */}
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[10px] font-black text-[#0a51c2] bg-[#0a51c2]/10 px-3 py-1 rounded-xl uppercase tracking-wider">
                    {pdf.category}
                  </span>
                  <span className="text-[10px] font-extrabold text-gray-500 bg-[#FAF7F2] border border-gray-200/60 px-2.5 py-0.5 rounded-lg">
                    {pdf.badge}
                  </span>
                </div>

                {/* Info titles */}
                <div className="space-y-1.5">
                  <h3 className="text-lg font-black text-gray-950 group-hover:text-[#0a51c2] transition-colors leading-tight">
                    {pdf.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium">
                    {pdf.description}
                  </p>
                </div>
              </div>

              {/* Action area */}
              <div className="mt-6 pt-4 border-t-2 border-gray-100 flex items-center justify-between pl-1">
                <span className="text-xs text-gray-400 font-extrabold flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-[#0a51c2]" />
                  {pdf.pages} {pdf.pages === 1 ? 'pagina' : 'pagine'}
                </span>

                {/* Bold download link */}
                <a
                  href={pdf.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0a51c2] border-b-4 border-[#073fa1] hover:border-b-2 active:border-b-0 active:translate-y-[2px] text-white font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
                  id={`pdf-download-link-${pdf.id}`}
                >
                  <span>Stampa / Salva</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative Tips Box */}
      <div className="bg-amber-50/60 border-2 border-amber-100 rounded-3xl p-6 flex items-start gap-4 shadow-2xs" id="pdf-footer-tips">
        <div className="p-2.5 bg-amber-100 text-amber-800 rounded-2xl shrink-0">
          <Award className="w-6 h-6 stroke-[2.5]" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-black text-amber-950">Il consiglio di studio di Duri</h4>
          <p className="text-xs text-amber-900/80 leading-relaxed font-medium">
            Conserva questi PDF all'interno di un raccoglitore ad anelli. Esercitarti sulla scrittura dei blocchi sillabici coreani 10 minuti ogni giorno prima di andare a dormire consoliderà incredibilmente la tua memoria fotografica!
          </p>
        </div>
      </div>

    </div>
  );
}
