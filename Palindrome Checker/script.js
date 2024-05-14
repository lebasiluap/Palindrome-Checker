// Grabbing elements
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.querySelector(".result"); // Use querySelector for a single element

// Palindrome checker
function palindromeChecker() {
  var originalValue = textInput.value;
  var cleanedValue = cleanInput(originalValue);
  var reversedValue = cleanedValue.split("").reverse().join("");

  if (cleanedValue === reversedValue) {
    result.textContent = `${originalValue} is a palindrome`;
  } else {
    result.textContent = `${originalValue} is not a palindrome`;
  }
}

// Check if input is empty
function emptyInput() {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    palindromeChecker();
  }
}

// Remove non-alphanumeric characters and convert to lowercase
function cleanInput(input) {
  return input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
}
