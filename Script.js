import Algarisms from "./utils/Algarisms.js";
import Converter from "./utils/Converter.js";

const converterClient = new Converter(Algarisms);

console.log(converterClient.convertAlgarismToInteger("MDCCLXV"));
console.log(converterClient.convertIntegerToAlgarism(1765));