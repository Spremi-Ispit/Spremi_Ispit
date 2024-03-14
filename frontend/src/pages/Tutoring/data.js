const tutors = [
  {
    id: 6,
    link: 'https://www.instagram.com/direct/t/113975953328518/',
    name: 'Filip',
    description: '',
    subjects: [
      'Algoritmi i programiranje',
      'Digitalna Elektronika',
      'Uvod u računarstvo',
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
      'Matematika 1',
      'Matematika 2',
      'Matematika 3',
      'Diskretna matematika',
      'Teorija Grafova',
      'Verovatnoća i statistika',
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
    subjects: ['Algoritmi i programiranje'],
    price: {
      personally: 1500,
      group: 1200,
    },
    rating: [],
  },
  {
    id: 3,
    link: 'https://www.instagram.com/direct/t/17851676354629512/',
    name: 'Đorđe',
    description:
      'Takmičio sam se iz programiranja, tako da jako dobro stojim sa Algoritmima i programiranjem!',
    subjects: ['Algoritmi i programiranje'],
    price: {
      personally: null,
      group: null,
    },
    rating: [],
  },
  {
    id: 2,
    link: 'link',
    name: 'Aleksandra',
    description: '',
    subjects: [
      'Algoritmi i programiranje',
      'Uvod u računarstvo',
      'Elektronske komponente',
      'Objektno orijentisano programiranje ( C++)',
      'Programski jezici ( Java, C#)',
      'Strukture podataka ( C++)',
      'Računarski sistemi',
      'Organizacija računarskog sistema',
      'Arhitektura i organizacija računara 1',
      'Diskretna matematika',
      'Baze podataka',
      'Mikroprocesorski sistemi',
      'Programiranje 1 (Python)',
      'Programiranje 2 (C)',
      'Organizacija računarske tehnike',
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
        subject: 'Algoritmi i programiranje',
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
    subjects: ['Fizika'],
    price: {
      personally: 1500,
      group: 1000,
    },
    rating: [],
  },
];

export default tutors;

// const subjects = {
//   AlgoritmiIProgramiranje: 'Algoritmi i programiranje',
//   DigitalnaElektronika: 'Digitalna Elektronika',
//   UvodURačunarstvo: 'Uvod u računarstvo',
//   Matematika1: 'Matematika 1',
//   Matematika2: 'Matematika 2',
//   Matematika3: 'Matematika 3',
//   DiskretnaMatematika: 'Diskretna matematika',
//   TeorijaGrafova: 'Teorija Grafova',
//   VerovatnoćaIStatistika: 'Verovatnoća i statistika',
//   Fizika: 'Fizika',
//   ElektronskeKomponente: 'Elektronske komponente',
//   ObjektnoOrijentisanoProgramiranje:
//     'Objektno orijentisano programiranje ( C++)',
//   ProgramskiJezici: 'Programski jezici ( Java, C#)',
//   StrukturePodataka: 'Strukture podataka ( C++)',
//   RacunarskiSistemi: 'Računarski sistemi',
//   OrganizacijaRačunarskogSistema: 'Organizacija računarskog sistema',
//   ArhitekturaIOrganizacijaRačunara1: 'Arhitektura i organizacija računara 1',
//   BazePodataka: 'Baze podataka',
//   MikroprocesorskiSistemi: 'Mikroprocesorski sistemi',
//   Programiranje1Python: 'Programiranje 1 (Python)',
//   Programiranje2C: 'Programiranje 2 (C)',
//   OrganizacijaRačunarskeTehnike: 'Organizacija računarske tehnike',
// };

// const tutors = [
//   {
//     id: 6,
//     link: 'https://www.instagram.com/direct/t/113975953328518/',
//     name: 'Filip',
//     description: '',
//     subjects: [
//       subjects.AlgoritmiIProgramiranje,
//       subjects.DigitalnaElektronika,
//       subjects.UvodURačunarstvo,
//     ],
//     price: {
//       personally: 400,
//       group: 300,
//     },
//     rating: [],
//   },
//   {
//     id: 5,
//     link: 'https://www.instagram.com/direct/t/17844869285287110/',
//     name: 'Jelena',
//     description: '',
//     subjects: [
//       subjects.Matematika1,
//       subjects.Matematika2,
//       subjects.Matematika3,
//       subjects.DiskretnaMatematika,
//       subjects.TeorijaGrafova,
//       subjects.VerovatnoćaIStatistika,
//     ],
//     price: {
//       personally: null,
//       group: 800,
//     },
//     rating: [],
//   },
//   {
//     id: 4,
//     link: 'https://www.facebook.com/messages/e2ee/t/7521900767862414',
//     name: 'Jovana',
//     description:
//       'Višegodišnje iskustvo u držanju privatne nastave i iskustvo predavača u srednjoj školi.',
//     subjects: [subjects.AlgoritmiIProgramiranje],
//     price: {
//       personally: 1500,
//       group: 1200,
//     },
//     rating: [],
//   },
//   {
//     id: 3,
//     link: 'https://www.instagram.com/direct/t/17851676354629512/',
//     name: 'Đorđe',
//     description:
//       'Takmičio sam se iz programiranja, tako da jako dobro stojim sa Algoritmima i programiranjem!',
//     subjects: [subjects.AlgoritmiIProgramiranje],
//     price: {
//       personally: null,
//       group: null,
//     },
//     rating: [],
//   },
//   {
//     id: 2,
//     link: 'link',
//     name: 'Aleksandra',
//     description: '',
//     subjects: [
//       subjects.AlgoritmiIProgramiranje,
//       subjects.UvodURačunarstvo,
//       subjects.ElektronskeKomponente,
//       subjects.ObjektnoOrijentisanoProgramiranje,
//       subjects.ProgramskiJezici,
//       subjects.StrukturePodataka,
//       subjects.RacunarskiSistemi,
//       subjects.OrganizacijaRačunarskogSistema,
//       subjects.ArhitekturaIOrganizacijaRačunara1,
//       subjects.DiskretnaMatematika,
//       subjects.BazePodataka,
//       subjects.MikroprocesorskiSistemi,
//       subjects.Programiranje1Python,
//       subjects.Programiranje2C,
//       subjects.OrganizacijaRačunarskeTehnike,
//     ],
//     price: {
//       personally: 1000,
//       group: 1000,
//     },
//     rating: [
//       {
//         link: '',
//         name: '',
//         rate: 1,
//         comment: '',
//         subject: subjects.AlgoritmiIProgramiranje,
//         time: new Date(),
//       },
//     ],
//   },
//   {
//     id: 1,
//     link: 'link',
//     name: 'Aleksandra',
//     description:
//       'Višegodišnje iskustvo u pripremi studenata za uspešno polaganje ispita iz fizike na Elektronskom fakultetu.',
//     subjects: [subjects.Fizika],
//     price: {
//       personally: 1500,
//       group: 1000,
//     },
//     rating: [],
//   },
// ];

// export default tutors;
