import { Character } from "./Character";

import { generateRace } from "./GenerateRace";
import { generateCharacterClass } from "./GenerateCharacterClass";

import SVG from "svg.js";


console.log("Creating an empty character...")

let race = generateRace();
let characterClass = generateCharacterClass();
console.log(race)
console.log(characterClass)
//let player = generatePlayer();
//player = mergeCharacterPartials(race, characterClass, player);


let draw = SVG('drawing').size(300, 300);
let rect = draw.rect(100, 100).attr({fill: '#f06'});