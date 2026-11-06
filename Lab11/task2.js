// Name: Ramandeep Kaur
// Roll Number / Student ID: BCS2025395
// Section: E
// Lab 11 - Task 2: Closure counter function

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let counter = makeCounter();
console.log(counter());
console.log(counter());
