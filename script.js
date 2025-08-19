const dictionary = {
  "hola": "hello",
  "adiós": "goodbye",
  "gracias": "thank you",
  "por favor": "please",
  "perro": "dog",
  "gato": "cat",
  "hello": "hola",
  "goodbye": "adiós",
  "thank you": "gracias",
  "please": "por favor",
  "dog": "perro",
  "cat": "gato"
};

function translateText() {
  let text = document.getElementById("inputText").value.toLowerCase().trim();
  let translation = dictionary[text] || "No encontrado en el diccionario";
  document.getElementById("outputText").innerText = translation;
}