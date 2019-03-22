import { util } from "./Util";
import { alignment } from "./Alignment";
import { pointBuy } from "./PointBuy";
import { mergeAttributes, generateMods, fleshOutAttributes, zeroAttributes } from "./Attributes";
import { sumSkills, convertAttrToSkills, baseSkills } from "./Skills";
import { chooseArmor, none, calculateAc } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { chooseTool } from "./ToolSets";
import { personalityTraits } from "./TraitSets";
import { ideals } from "./IdealSets";
import { bonds } from "./BondSets";
import { flaws } from "./FlawSets";
import { generateRace } from "./GenerateRace";
import { generateCharacterClass } from "./GenerateCharacterClass";
import { sex } from "./Sex";
export function generatePlayer() {
    const race = generateRace();
    const characterClass = generateCharacterClass();
    const attr = mergeAttributes(pointBuy(), race.attributes);
    const mods = generateMods(attr);
    let money = characterClass.startingGold ? characterClass.startingGold : 0;
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
    if ((x === 1 || x === 2) && weapons.length != 2 && !weapons[0].twoHanded) {
        shield = chooseArmor(Array.from(shieldProfs.values()), money);
    }
    money -= shield.cost;
    const toolProfs = new Set([
        ...race.toolProficiencies ? race.toolProficiencies : [],
        ...characterClass.toolProficiencies ? characterClass.toolProficiencies : []
    ]);
    const tool = chooseTool(Array.from(toolProfs.values()), money);
    money -= tool.cost;
    const traits = new Set([
        ...race.traits ? race.traits : [],
        ...characterClass.traits ? characterClass.traits : []
    ]);
    const hp = (race.hitPoints ? race.hitPoints : 0) + (characterClass.hitDice ? characterClass.hitDice : 0) + mods.con;
    return {
        name: race.name,
        sex: util.choice(sex),
        raceName: race.raceName,
        className: characterClass.className,
        alignment: util.choice(alignment),
        attributes: attr,
        attrMods: mods,
        proficiencyBonus: 2,
        skills: sumSkills([
            convertAttrToSkills(mods),
            race.skillProficiencies ? race.skillProficiencies : baseSkills,
            characterClass.skillProficiencies ? characterClass.skillProficiencies : baseSkills
        ]),
        armorProficiencies: armorProfs,
        shieldProficiencies: shieldProfs,
        armor: armor,
        shield: shield,
        ac: calculateAc(armor, shield, mods),
        weaponProficiencies: weaponProfs,
        weapons: weapons,
        initiative: mods.dex,
        speed: race.speed,
        hitDice: characterClass.hitDice,
        hitPoints: hp,
        languages: race.languages,
        toolProficiencies: toolProfs,
        tool: tool,
        savingThrowProficiencies: characterClass.savingThrowProficiencies,
        savingThrow: mergeAttributes(fleshOutAttributes(characterClass.savingThrowProficiencies ? characterClass.savingThrowProficiencies : zeroAttributes), mods),
        startingGold: money,
        personalityTraits: util.choices(personalityTraits, 3),
        ideals: util.choices(ideals, 3),
        bonds: util.choices(bonds, 3),
        flaws: util.choices(flaws, 3),
        traits: traits,
        age: util.choice(util.range(race.ageRange ? race.ageRange[0] : 0, race.ageRange ? race.ageRange[1] : 0)),
        spells: characterClass.spells ? characterClass.spells : [],
    };
}
