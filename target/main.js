import { generateRace } from "./GenerateRace";
import { generateCharacterClass } from "./GenerateCharacterClass";
import SVG from "svg.js";
import { util } from "./Util";
import { alignment } from "./Alignment";
import { pointBuy } from "./PointBuy";
import { mergeAttributes, generateMods } from "./Attributes";
import { sumSkills, convertAttrToSkills, baseSkills } from "./Skills";
import { chooseArmor, none, calculateAc } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
console.log("Generating race...");
const race = generateRace();
console.log("Generating class...");
const characterClass = generateCharacterClass();
console.log("Merging class/race...");
const attr = mergeAttributes(pointBuy(), race.attributes);
const mods = generateMods(attr);
let money = characterClass.startingGold != null ? characterClass.startingGold : 0;
const weaponProfs = new Set([
    ...race.weaponProficiencies ? race.weaponProficiencies : [],
    ...characterClass.weaponProficiencies ? characterClass.weaponProficiencies : []
]);
const weapons = chooseWeapons(Array.from(weaponProfs.values()), money);
//reduce spending money by the cost of weapons we just chose
for (let x of weapons) {
    money -= x.cost;
}
const armorProfs = new Set([
    ...race.armorProficiencies ? race.armorProficiencies : [],
    ...characterClass.armorProficiencies ? characterClass.armorProficiencies : []
]);
const armor = chooseArmor(Array.from(armorProfs.values()), money);
money -= armor.cost;
const shieldProfs = new Set([
    ...race.shieldProficiencies ? race.shieldProficiencies : [],
    ...characterClass.shieldProficiencies ? characterClass.shieldProficiencies : []
]);
let shield = none;
let x = util.choice([1, 2, 3]);
if (x === 1 || x === 2) {
    shield = chooseArmor(Array.from(shieldProfs.values()), money);
}
money -= shield.cost;
const player = {
    name: race.name,
    raceName: race.raceName,
    className: characterClass.className,
    alignment: util.choice(alignment),
    attributes: attr,
    proficiencyBonus: 2,
    skills: sumSkills([
        convertAttrToSkills(mods),
        race.skillProficiencies != null ?
            race.skillProficiencies : baseSkills
    ]),
    armorProficiencies: armorProfs,
    shieldProficiencies: shieldProfs,
    armor: armor,
    shield: shield,
    ac: calculateAc(armor, shield, mods)
};
console.log(race);
console.log(characterClass);
console.log(player);
let draw = SVG('drawing').size(300, 300);
let rect = draw.rect(100, 100).attr({ fill: '#f06' });
