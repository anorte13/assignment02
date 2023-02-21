let input = prompt(
  'Please enter a language code, i.e("es", "de", "en" or "fr")'
);
if (input === "es") {
  console.log("Hello World translated in Spanish is: Hola Mundo");
} else if (input === "de") {
  console.log("Hello World translated in German is: Hallo Welt");
} else if (input === "fr") {
  console.log("Hello World translated in French is: Bonjour le monde");
} else if (input === "en") {
  console.log("Hello World translated in Enlgish is: Hello World");
} else {
  console.log("Hello World translated in Enlgish is: Hello World");
}
