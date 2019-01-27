import { util } from "./Util";
import { Character } from "./Character"
import { simpleMelee } from "./WeaponSets"


export function generateCharacterClass(race: Partial<Character>){
    return util.choice(characterClass);
}

const characterClass: Partial<Character>[] = [
    {
        hitDice: 12,
        armorProficiencies: new Set(["Light", "Medium", "Shields"]),
        weaponProficiencies: new Set(simpleMelee)
    }
];