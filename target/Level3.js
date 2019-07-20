export function addLevel3Features(character) {
    addLevel3RaceFeatures(character);
    addLevel3ClassFeatures(character);
}
function addLevel3RaceFeatures(character) {
    if (character.raceName == "Drow Elf")
        character.level1Spells.concat("Faerie Fire");
    if (character.traits.includes("Drow Magic"))
        character.level1Spells.concat("Faerie Fire");
    if (character.raceName == "Tiefling")
        character.level1Spells.concat("Hellish rebuke");
}
function addLevel3ClassFeatures(character) {
}
