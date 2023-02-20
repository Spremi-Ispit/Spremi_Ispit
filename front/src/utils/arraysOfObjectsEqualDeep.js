import { objectsEqualDeep } from './objectsEqualDeep';

export const arraysOfObjectsEqualDeep = (a1, a2) =>
  a1.length === a2.length && a1.every((o, idx) => objectsEqualDeep(o, a2[idx]));
