// Name: Ramandeep Kaur
// Roll Number / Student ID: BCS2025395
// Section: E
// Lab 9 - Task 2: Form validation function validateForm

function validateForm(name) {
  let errors = [];
  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }
  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
