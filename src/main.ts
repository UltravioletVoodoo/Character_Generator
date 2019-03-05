import { Character } from "./Character";

import { generateRace } from "./GenerateRace";
import { generateCharacterClass } from "./GenerateCharacterClass";

import SVG from "svg.js";
import { util } from "./Util";
import { alignment } from "./Alignment";


console.log("Generating race...")
let race = generateRace();

console.log("Generating class...")
let characterClass = generateCharacterClass();

console.log("Merging class/race...")
let player: Partial<Character> = {
    name: race.name,
    raceName: race.raceName,
    className: characterClass.className,
    alignment: util.choice(alignment)
}

console.log(race)
console.log(characterClass)
console.log(player)


//let player = generatePlayer();
//player = mergeCharacterPartials(race, characterClass, player);


let draw = SVG('drawing').size(300, 300);
let rect = draw.rect(100, 100).attr({fill: '#f06'});