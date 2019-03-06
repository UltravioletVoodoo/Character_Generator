import { Character } from "./Character";

import { generateRace } from "./GenerateRace";
import { generateCharacterClass } from "./GenerateCharacterClass";

import SVG from "svg.js";
import { util } from "./Util";
import { alignment } from "./Alignment";
import { pointBuy } from "./PointBuy";
import { mergeAttributes, generateMods } from "./Attributes"
import { sumSkills, Skills, convertAttrToSkills, baseSkills } from "./Skills";
import { Armor } from "./ArmorSets"
import { Weapon } from "./WeaponSets"


console.log("Generating race...")
const race = generateRace();

console.log("Generating class...")
const characterClass = generateCharacterClass();

console.log("Merging class/race...")
const attr = mergeAttributes(pointBuy(), race.attributes)
const armor = util.choice(Array.from(new Set([race.armorProficiencies, characterClass.armorProficiencies])))
const handOptions = util.choice([1,2,3,4])

//God damn it I have no clue what I am doing here lol. Taking a break
let oneHandFull = false
switch(handOptions) {
    case 1: //weapon pick
    case 2: //shield pick
}

const player: Partial<Character> = {
    name: race.name,
    raceName: race.raceName,
    className: characterClass.className,
    alignment: util.choice(alignment),
    attributes: attr,
    proficiencyBonus: 2,
    skills: sumSkills([
        convertAttrToSkills(generateMods(attr)),
        race.skillProficiencies != null ? 
            race.skillProficiencies : baseSkills
    ]),
    ac: 
}

console.log(race)
console.log(characterClass)
console.log(player)


let draw = SVG('drawing').size(300, 300);
let rect = draw.rect(100, 100).attr({fill: '#f06'});