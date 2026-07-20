export interface LessonNode {
  id: string;
  title: string;
  korean: string;
  link: string; // Direct link to /lezioni/lezioneX.html
  color: string; // e.g. bg-emerald-500, bg-amber-500
  borderColor: string; // e.g. border-emerald-600, border-amber-600 for the 3D look
  iconName: string; // Lucide icon
  description: string;
}

export interface PdfItem {
  id: string;
  title: string;
  description: string;
  category: 'Scrittura' | 'Vocabolario' | 'Grammatica' | 'Eserciziario';
  link: string; // Direct link to /pdf/schedaX.pdf
  pages: number;
  badge: string; // e.g. "Principiante", "Consigliato"
}

export interface ExerciseItem {
  id: string;
  title: string;
  description: string;
  link: string; // Direct link to /esercizi/giocoX.html
  difficulty: 'Facile' | 'Medio' | 'Sfida';
  iconName: string; // Lucide icon
}
