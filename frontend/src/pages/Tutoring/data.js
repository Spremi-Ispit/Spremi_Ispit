const subjects = {
  AlgoritmiIProgramiranje: 'Algoritmi i programiranje',
  DigitalnaElektronika: 'Digitalna Elektronika',
  UvodURačunarstvo: 'Uvod u računarstvo',
  Matematika1: 'Matematika 1',
  Matematika2: 'Matematika 2',
  Matematika3: 'Matematika 3',
  DiskretnaMatematika: 'Diskretna matematika',
  TeorijaGrafova: 'Teorija Grafova',
  VerovatnoćaIStatistika: 'Verovatnoća i statistika',
  Fizika: 'Fizika',
  ElektronskeKomponente: 'Elektronske komponente',
  ObjektnoOrijentisanoProgramiranje:
    'Objektno orijentisano programiranje ( C++)',
  ProgramskiJezici: 'Programski jezici ( Java, C#)',
  StrukturePodataka: 'Strukture podataka ( C++)',
  RacunarskiSistemi: 'Računarski sistemi',
  OrganizacijaRačunarskogSistema: 'Organizacija računarskog sistema',
  ArhitekturaIOrganizacijaRačunara1: 'Arhitektura i organizacija računara 1',
  BazePodataka: 'Baze podataka',
  MikroprocesorskiSistemi: 'Mikroprocesorski sistemi',
  Programiranje1Python: 'Programiranje 1 (Python)',
  Programiranje2C: 'Programiranje 2 (C)',
  OrganizacijaRačunarskeTehnike: 'Organizacija računarske tehnike',
  WebProgramiranje: 'Web programiranje',
  RacunarskaGrafika: 'Računarska grafika',
  VestackaInteligencija: 'Veštačka inteligencija',
  OsnoviElektronike: 'Osnovi elektronike',
  ImpulsnaIDigitalnaElektronskaKola: 'Impulsna i digitalna elektronska kola',
  ArhitektureDigitalnihSistema: 'Arhitekture digitalnih sistema',
  NumeričkaMatematika: 'Numerička matematika',
  ParalelniSistemi: 'Paralelni sistemi',
};

const tutors = [
  // {
  //   id: 11,
  //   link: '',
  //   name: 'Jasmina',
  //   description: 'Časovi iz Paralelnih sistema, zadaci i teorija!',
  //   subjects: [subjects.ParalelniSistemi],
  //   price: {
  //     personally: 1000,
  //     group: null,
  //   },
  //   rating: [],
  // },
  {
    id: 10,
    link: 'https://www.instagram.com/direct/t/116366959757524/',
    name: 'Mina',
    description:
      'Diplomirani matematičar sa 10 godina iskustva u nastavi drži časove matematike, individualno ili u malim grupama - do 4 studenta. Sa fokusom na vaše potrebe i ciljeve, uz individualan pristup i prilagodjen tempo, naš zajednički rad će biti usmeren ka tome da ispit pripremite sa lakoćom.',
    subjects: [
      subjects.Matematika1,
      subjects.Matematika2,
      subjects.Matematika3,
      subjects.DiskretnaMatematika,
      subjects.TeorijaGrafova,
      subjects.VerovatnoćaIStatistika,
    ],
    price: {
      personally: 2000,
      group: 1000,
    },
    rating: [],
  },
  {
    id: 9,
    link: 'https://www.instagram.com/direct/t/111252743606139/',
    name: 'Andrija',
    description:
      'Kompletna priprema. I teorija i zadaci. Sve ono što novi profesor traži. Polaganje zagarantovano!',
    subjects: [subjects.DiskretnaMatematika],
    price: {
      personally: 800,
      group: 600,
    },
    rating: [],
  },
  {
    id: 8,
    link: 'https://www.instagram.com/direct/t/108508627206967/',
    name: 'Petar',
    description:
      'Iskustvo s predavanjem predmeta vezanih za analognu i digitalnu elektroniku, C i VHDL',
    subjects: [
      subjects.OsnoviElektronike,
      subjects.DigitalnaElektronika,
      subjects.ObjektnoOrijentisanoProgramiranje,
      subjects.ImpulsnaIDigitalnaElektronskaKola,
      subjects.ArhitektureDigitalnihSistema,
      subjects.NumeričkaMatematika,
      subjects.Matematika3,
    ],
    price: {
      personally: 700,
      group: 500,
    },
    rating: [],
  },
  {
    id: 7,
    link: 'https://www.instagram.com/direct/t/112004303531637/',
    name: 'Andrija',
    description:
      'Priprema kolokvijuma i ispita, pomoc pri izradi laboratorijskih vežbi. Fleksibilno vreme i prilagođavanje vašim potrebama. Mogućnost online predavanja.',
    subjects: [
      subjects.UvodURačunarstvo,
      subjects.AlgoritmiIProgramiranje,
      subjects.ObjektnoOrijentisanoProgramiranje,
      subjects.ProgramskiJezici,
      subjects.StrukturePodataka,
      subjects.WebProgramiranje,
      subjects.RacunarskaGrafika,
      subjects.VestackaInteligencija,
    ],
    price: {
      personally: 1000,
      group: 500,
    },
    rating: [],
  },
  {
    id: 6,
    link: 'https://www.instagram.com/direct/t/113975953328518/',
    name: 'Filip',
    description: '',
    subjects: [
      subjects.AlgoritmiIProgramiranje,
      subjects.DigitalnaElektronika,
      subjects.UvodURačunarstvo,
    ],
    price: {
      personally: 400,
      group: 300,
    },
    rating: [],
  },
  {
    id: 5,
    link: 'https://www.instagram.com/direct/t/17844869285287110/',
    name: 'Jelena',
    description: '',
    subjects: [
      subjects.Matematika1,
      subjects.Matematika2,
      subjects.Matematika3,
      subjects.DiskretnaMatematika,
      subjects.TeorijaGrafova,
      subjects.VerovatnoćaIStatistika,
    ],
    price: {
      personally: null,
      group: 800,
    },
    rating: [],
  },
  {
    id: 4,
    link: 'https://www.facebook.com/messages/e2ee/t/7521900767862414',
    name: 'Jovana',
    description:
      'Višegodišnje iskustvo u držanju privatne nastave i iskustvo predavača u srednjoj školi.',
    subjects: [subjects.AlgoritmiIProgramiranje],
    price: {
      personally: 1500,
      group: 1200,
    },
    rating: [],
  },
  {
    id: 2,
    link: 'link',
    name: 'Aleksandra',
    description: '',
    subjects: [
      subjects.AlgoritmiIProgramiranje,
      subjects.UvodURačunarstvo,
      subjects.ElektronskeKomponente,
      subjects.ObjektnoOrijentisanoProgramiranje,
      subjects.ProgramskiJezici,
      subjects.StrukturePodataka,
      subjects.RacunarskiSistemi,
      subjects.OrganizacijaRačunarskogSistema,
      subjects.ArhitekturaIOrganizacijaRačunara1,
      subjects.DiskretnaMatematika,
      subjects.BazePodataka,
      subjects.MikroprocesorskiSistemi,
      subjects.Programiranje1Python,
      subjects.Programiranje2C,
      subjects.OrganizacijaRačunarskeTehnike,
    ],
    price: {
      personally: 1000,
      group: 1000,
    },
    rating: [
      {
        link: '',
        name: '',
        rate: 1,
        comment: '',
        subject: subjects.AlgoritmiIProgramiranje,
        time: new Date(),
      },
    ],
  },
  {
    id: 1,
    link: 'link',
    name: 'Aleksandra',
    description:
      'Višegodišnje iskustvo u pripremi studenata za uspešno polaganje ispita iz fizike na Elektronskom fakultetu.',
    subjects: [subjects.Fizika],
    price: {
      personally: 1500,
      group: 1000,
    },
    rating: [],
  },
];

export default tutors;
