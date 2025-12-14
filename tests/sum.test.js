// tests/sum.test.js
const sum = require("../src/sum");

test("menjumlahkan 1 + 2 menjadi 3", () => {
  expect(sum(9, 2)).toBe(11);
});
