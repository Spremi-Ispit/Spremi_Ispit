export const objectsEqualDeep = (o1, o2) =>
  typeof o1 === 'object' && Object.keys(o1).length > 0
    ? Object.keys(o1).length === Object.keys(o2).length &&
      Object.keys(o1).every((p) => objectsEqualDeep(o1[p], o2[p]))
    : o1 === o2;

// const obj1 = { name: 'John', age: 33, info: { married: true, hobbies: ['sport', 'art'] } };
// const obj2 = { age: 33, name: 'John', info: { hobbies: ['sport', 'art'], married: true } };
// const obj3 = { name: 'John', age: 33 };

// console.log(objectsEqualDeep(obj1, obj2)); // true
// console.log(objectsEqualDeep(obj1, obj3)); // false

export const arraysOfObjectsEqualDeep = (a1, a2) =>
  a1.length === a2.length && a1.every((o, idx) => objectsEqualDeep(o, a2[idx]));
