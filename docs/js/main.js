const googleFormEntries = new Map([
  ["name", ""],
  ["lastName", ""],
  ["idNumber", ""],
  ["birthDate", ""],
  ["email", ""],
  ["phoneNumber", ""],
  ["streetAddress", ""],
  ["postalCode", ""],
  ["city", ""],
  ["region", ""],
  ["fee", ""],
  ["bankNumber", ""],
  ["fullNameBankAccountOwner", ""],
  ["idNumberBankAccountOwner", ""],
]);

function setInputName(value, key, map) {
  let input = document.getElementById(key);
  input.setAttribute("name", value);
}

addEventListener("DOMContentLoaded", formEntries.forEach(setInputName));

