import { Character } from "./Character";
import { addLevel2Features } from "./Level2";
import { addLevel3Features } from "./Level3";
import { chooseMagicItem } from "./MagicItemTableB";

export function addLevelUpFeatures(character: Character, level: number) {
    if (level > 1) {
        // Level up to level 2
        addBasicLevelupFeatures(character);
        addLevel2Features(character);
    }
    if (level > 2) {
        // Level up to level 3
        addBasicLevelupFeatures(character);
        addLevel3Features(character);
        chooseMagicItem(character);
    }
}

function addBasicLevelupFeatures(character: Character) {
    console.log("Character is leveling up\nHp before level: " + character.hp);
    console.log("Character level: " + character.level);
    console.log("Character con mod: " + character.attrMods.con);
    character.hp += Math.floor(character.hitDice / 2) + 1 + character.attrMods.con;
    character.level += 1;
    // deal with hill dwarf and draconic sorcerer bonus hp
    if (character.raceName == "Hill Dwarf") character.hp += 1;
    if (character.traits.includes("Draconic Bloodline")) character.hp += 1;
    console.log("Hp after level: " + character.hp);
}