import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = JSON.parse(import.meta.env.VITE_CHAT_CONFIG);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

const chatGroups = [
  'I - Opsti smer',
  'II - Računarstvo i informatika',
  'II - Upravljanje sistemima',
  'II - Telekomunikacije',
  'II - Elektronika i mikroprocesorska tehnika',
  'II - Elektronske komponente i mikrosistemi',
  'II - Elektroenergetika',
  'III - Računarstvo i informatika',
  'III - Upravljanje sistemima',
  'III - Telekomunikacije',
  'III - Elektronika i mikroprocesorska tehnika',
  'III - Elektronske komponente i mikrosistemi',
  'III - Elektroenergetika',
  'IV - Računarstvo i informatika',
  'IV - Upravljanje sistemima',
  'IV - Telekomunikacije',
  'IV - Elektronika i mikroprocesorska tehnika',
  'IV - Elektronske komponente i mikrosistemi',
  'IV - Elektroenergetika',
  'V - Master',
];

const useChat = () => ({
  auth,
  firestore,
  analytics,
  chatGroups,
});

export default useChat;
