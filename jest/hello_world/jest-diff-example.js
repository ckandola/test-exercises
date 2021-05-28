const diff = require('jest-diff').default;

const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};
const c = {a: {b: {c: 6}}};

const result = diff(a, b);

console.log(`A and B: ${result}`);
console.log(`B and C: ${diff(b, c)}`);
