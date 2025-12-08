// tests/sum.test.js
const sum = require("../src/sum");

test("menjumlahkan 1 + 2 menjadi 3", () => {
  expect(sum(1, 2)).toBe(3);
});