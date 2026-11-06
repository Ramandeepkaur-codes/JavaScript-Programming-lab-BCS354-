// Name: Ramandeep Kaur
// Roll Number / Student ID: BCS2025395
// Section: E
// Lab 14 - Task 2: Cancel timer with clearTimeout

let timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");
