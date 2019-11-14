import { addLevel2Features } from "./Level2";
import { addLevel3Features } from "./Level3";
export function addLevelUpFeatures(character, options) {
    if (options.level > 1) {
        // Level up to level 2
        addBasicLevelupFeatures(character);
        addLevel2Features(character);
    }
    if (options.level > 2) {
        // Level up to level 3
        addBasicLevelupFeatures(character);
        addLevel3Features(character);
    }
}
function addBasicLevelupFeatures(character) {
    character.hp += Math.floor(character.hitDice / 2) + 1 + character.attrMods.con;
    character.level += 1;
    // deal with hill dwarf and draconic sorcerer bonus hp
    if (character.raceName == "Hill Dwarf")
        character.hp += 1;
    if (character.traits.includes("Draconic Bloodline"))
        character.hp += 1;
}
