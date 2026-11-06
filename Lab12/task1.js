// Name: Ramandeep Kaur
// Roll Number / Student ID: BCS2025395
// Section: E
// Lab 12 - Task 1: Higher-order function applyTwice

function applyTwice(fn, val) {
  return fn(fn(val));
}

function addTen(num) {
  return num + 10;
}

console.log(applyTwice(addTen, 5));
