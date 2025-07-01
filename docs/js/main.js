const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSdKOxV2cs-TiIz1Lmjj9c421Uh-FQ05jPRTC48pRly2JYZXnA/formResponse"
const googleFormEntries = new Map([
  ["name", "2013521895"],
  ["lastName", "1758078663"],
  ["idNumber", "2005431508"],
  ["birthDate", "555002916"],
  ["email", "811220221"],
  ["phoneNumber", "356561953"],
  ["streetAddress", "1171888018"],
  ["postalCode", "586063522"],
  ["city", "825585537"],
  ["region", "802463913"],
  ["fee", "357527510"],
  ["bankNumber", "995604611"],
  ["fullNameAccountOwner", "214980461"],
  ["idNumberAccountOwner", "572879379"],
]);



addEventListener("DOMContentLoaded", () => {

  function setInputName(value, key, map) {
  let input = document.getElementById(key);
  input.setAttribute("name", "entry."+ value);
}

  document.getElementById("altaSocio").setAttribute("action", formURL)
  googleFormEntries.forEach(setInputName)
});

