const tutors = [
  {
    id: 5,
    link: 'https://www.instagram.com/direct/t/17844869285287110/',
    name: 'Jelena Ivković',
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
    description: '',
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
    name: 'Aleksandra Despotović',
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
