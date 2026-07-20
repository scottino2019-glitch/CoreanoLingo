import { LessonNode, PdfItem, ExerciseItem } from './types';

export const LESSON_NODES: LessonNode[] = [
  {
    id: '1',
    title: 'Hangul-Consonanti',
    korean: '한글 자음',
    link: '/lezioni/consonanti.html',
    color: 'bg-[#58cc02]',
    borderColor: 'border-[#46a302]',
    iconName: 'BookOpen',
    description: 'Impara l\'ordine dei tratti delle consonanti dell\'alfabeto coreano.'
  },
  {
    id: '2',
    title: 'Hangul-Vocali',
    korean: '인사와 소개',
    link: '/lezioni/vocali.html',
    color: 'bg-[#1cb0f6]',
    borderColor: 'border-[#1899d6]',
    iconName: 'BookOpen',
    description: 'Impara l\'ordine dei tratti delle consonanti dell\'alfabeto coreano.'
  },
  {
    id: '3',
    title: 'Numeri e Quantità',
    korean: '숫자와 개수',
    link: '/lezioni/numeri.html',
    color: 'bg-[#ffc800]',
    borderColor: 'border-[#e6b400]',
    iconName: 'Hash',
    description: 'Usa correttamente il sistema di conteggio nativo e sino-coreano per prezzi ed età.'
  },
  {
    id: '4',
    title: 'Cibo e Ristorante',
    korean: '음식과 주문',
    link: '/lezioni/cibo.html',
    color: 'bg-[#ff4b4b]',
    borderColor: 'border-[#ea2b2b]',
    iconName: 'Utensils',
    description: 'Impara i nomi delle prelibatezze coreane (Kimchi, Bibimbap) e come ordinare ai tavoli di Seul.'
  },
  {
    id: '5',
    title: 'Vita Quotidiana',
    korean: '일상 생활',
    link: '/lezioni/quotidiano.html',
    color: 'bg-[#a346ff]',
    borderColor: 'border-[#8626e3]',
    iconName: 'Clock',
    description: 'Formule per parlare del tempo libero, orari, appuntamenti e azioni giornaliere base.'
  },
  {
    id: '6',
    title: 'Viaggio in Corea',
    korean: '한국 여행',
    link: '/lezioni/viaggio.html',
    color: 'bg-[#ff9600]',
    borderColor: 'border-[#e07b00]',
    iconName: 'Compass',
    description: 'Espressioni essenziali per chiedere indicazioni, prendere la metro e fare acquisti nei mercati.'
  }
];

export const PDF_ITEMS: PdfItem[] = [
  {
    id: 'pdf-1',
    title: 'Griglia di Scrittura Hangul',
    description: 'Foglio a quadretti con le linee guida per esercitarsi a mano libera nel disegno di consonanti e vocali base.',
    category: 'Scrittura',
    link: '/pdf/scrittura_hangul.pdf',
    pages: 2,
    badge: 'Principiante'
  },
  {
    id: 'pdf-2',
    title: 'Dizionario dei Saluti Comuni',
    description: 'Scheda di consultazione tascabile con i saluti formali, standard ed informali più diffusi in Corea.',
    category: 'Vocabolario',
    link: '/pdf/saluti_tascabili.pdf',
    pages: 1,
    badge: 'Consigliato'
  },
  {
    id: 'pdf-3',
    title: 'Sintassi e Struttura della Frase',
    description: 'Spiegazione schematica delle differenze grammaticali tra la struttura SVO italiana e la struttura SOV coreana.',
    category: 'Grammatica',
    link: '/pdf/sintassi_base.pdf',
    pages: 3,
    badge: 'Intermedio'
  },
  {
    id: 'pdf-4',
    title: 'Eserciziario di Lettura Introduttiva',
    description: 'Un PDF completo di parole reali e frasi semplici da trascrivere e leggere ad alta voce con pronuncia figurata.',
    category: 'Eserciziario',
    link: '/pdf/lettura_esercizi.pdf',
    pages: 5,
    badge: 'Principiante'
  }
];

export const EXERCISE_ITEMS: ExerciseItem[] = [
  {
    id: 'ex-1',
    title: 'Memory delle Sillabe Hangul',
    description: 'Un gioco interattivo per abbinare le tessere con i caratteri coreani alle rispettive lettere romane.',
    link: '/esercizi/memory_hangul.html',
    difficulty: 'Facile',
    iconName: 'Gamepad2'
  },
  {
    id: 'ex-2',
    title: 'Cruciverba dei Saluti',
    description: 'Trova le parole coreane per completare il cruciverba e metti alla prova la tua memoria ortografica.',
    link: '/esercizi/cruciverba.html',
    difficulty: 'Medio',
    iconName: 'Grid'
  },
  {
    id: 'ex-3',
    title: 'Ascolto e Pronuncia',
    description: 'Un modulo per ascoltare file audio e selezionare la sillaba coreana corrispondente al suono pronunciato.',
    link: '/esercizi/ascolto.html',
    difficulty: 'Sfida',
    iconName: 'Volume2'
  },
  {
    id: 'ex-4',
    title: 'Costruttore di Frasi (Drag & Drop)',
    description: 'Trascina i blocchi di parole nell\'ordine corretto per formare frasi di senso compiuto in coreano.',
    link: '/esercizi/frasi.html',
    difficulty: 'Sfida',
    iconName: 'GitCommit'
  }
];
