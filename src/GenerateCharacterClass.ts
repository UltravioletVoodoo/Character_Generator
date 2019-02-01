import { util } from "./Util";
import { Character } from "./Character"
import { simpleMelee, martialMelee, simpleRanged, martialRanged } from "./WeaponSets"
import { light, medium, shield } from "./ArmorSets"


export function generateCharacterClass(race: Partial<Character>){
    return util.choice(characterClass);
}

const characterClass: Partial<Character>[] = [
    {
        className: "Barbarian",
        hitDice: 12,
        armorProficiencies: new Set(light.concat(medium).concat(shield)),
        weaponProficiencies: new Set(simpleMelee.concat(martialMelee).concat(simpleRanged).concat(martialRanged)),
        toolProficiencies: new Set(),
        savingThrowProficiencies: {
            str: 2,
            con: 2,
        },
        //Hmmmmmm I would like to redesign Skills to be more like weaponSets and armorSets if possible.
        //skillProficiencies: //uuuuuuugh.... i dunno
    }
];