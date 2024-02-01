import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import env from '../../config/env';

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMAIN,
  databaseURL: env.DATABASE_URL,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGE_BUCKET,
  messagingSenderId: env.MESSAGING_SENDER_ID,
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

const chatGroups = [
  'I - Opsti smer',
  'II - Računarstvo i informatika',
  'II - Upravljanje sistemima',
  'II - Telekomunikacije',
  'II - Elektronika',
  'II - Elektronske komponente i mikrosistemi',
  'II - Elektroenergetika',
  'III - Računarstvo i informatika',
  'III - Upravljanje sistemima',
  'III - Telekomunikacije',
  'III - Elektronika',
  'III - Elektronske komponente i mikrosistemi',
  'III - Elektroenergetika',
  'IV - Računarstvo i informatika',
  'IV - Upravljanje sistemima',
  'IV - Telekomunikacije',
  'IV - Elektronika',
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
