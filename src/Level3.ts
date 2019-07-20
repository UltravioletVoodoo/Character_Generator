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
    switch(character.className) {
        case "Barbarian": 
            addBarbarianLevel3Features(character);
            break;
        case "Bard"     : 
            addBardLevel3Features(character);
            break;
        case "Cleric"   : 
            addClericLevel3Features(character);
            break;
        case "Druid"    : 
            addDruidLevel3Features(character);
            break;
        case "Fighter"  : 
            addFighterLevel3Features(character);
            break;
        case "Monk"     : 
            addMonkLevel3Features(character);
            break;
        case "Paladin"  : 
            addPaladinLevel3Features(character);
            break;
        case "Ranger"   : 
            addRangerLevel3Features(character);
            break;
        case "Rogue"    : 
            addRogueLevel3Features(character);
            break;
        case "Sorcerer" : 
            addSorcererLevel3Features(character);
            break;
        case "Warlock"  : 
            addWarlockLevel3Features(character);
            break;
        case "Wizard"   : 
            addWizardLevel3Features(character);
            break;
        default         : throw new Error(
            "Character class '"
            + character.className +
            "' is invalid and can't be leveled..."
            );
    }
}

function addBarbarianLevel3Features(character: Character) {
    
}