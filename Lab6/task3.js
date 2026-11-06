// Name: Ramandeep Kaur
// Roll Number / Student ID: BCS2025395
// Section: E
// Lab 6 - Task 3: Catch invalid JSON with try-catch

let invalidJson = "{name: Rohan}";

try {
  JSON.parse(invalidJson);
} catch (error) {
  console.log("Invalid JSON");
}
