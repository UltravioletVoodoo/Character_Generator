import { Character } from "./Character";

export function addLevel3Features(character: Character) {
    addLevel3RaceFeatures(character);
    addLevel3ClassFeatures(character);
}

function addLevel3RaceFeatures(character: Character) {
    if (character.raceName == "Drow Elf") character.level1Spells.concat("Faerie Fire");
    if (character.traits.includes("Drow Magic")) character.level1Spells.concat("Faerie Fire");
    if (character.raceName == "Tiefling") character.level1Spells.concat("Hellish rebuke");
}

function addLevel3ClassFeatures(character: Character) {

}