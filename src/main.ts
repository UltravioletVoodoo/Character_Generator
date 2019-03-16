import SVG from "svg.js";

import { generatePlayer } from "./GeneratePlayer";
import { util } from "./Util"
import { Character } from "./Character";
import { isFinesse } from "./WeaponSets";

const player = generatePlayer() as Character;
console.log(player);


util.getElement("name").innerHTML = player.name;

util.getElement("className").innerHTML = player.className;
util.getElement("level").innerHTML = "1";

util.getElement("raceName").innerHTML = player.raceName;
util.getElement("alignment").innerHTML = player.alignment;

util.getElement("str").innerHTML = player.attributes.str.toString();
util.getElement("dex").innerHTML = player.attributes.dex.toString();
util.getElement("con").innerHTML = player.attributes.con.toString();
util.getElement("int").innerHTML = player.attributes.int.toString();
util.getElement("wis").innerHTML = player.attributes.wis.toString();
util.getElement("cha").innerHTML = player.attributes.cha.toString();
util.getElement("strMod").innerHTML = player.attrMods.str.toString();
util.getElement("dexMod").innerHTML = player.attrMods.dex.toString();
util.getElement("conMod").innerHTML = player.attrMods.con.toString();
util.getElement("intMod").innerHTML = player.attrMods.int.toString();
util.getElement("wisMod").innerHTML = player.attrMods.wis.toString();
util.getElement("chaMod").innerHTML = player.attrMods.cha.toString();

util.getElement("strSaving").innerHTML = player.savingThrow.str.toString();
util.getElement("dexSaving").innerHTML = player.savingThrow.dex.toString();
util.getElement("conSaving").innerHTML = player.savingThrow.con.toString();
util.getElement("intSaving").innerHTML = player.savingThrow.int.toString();
util.getElement("wisSaving").innerHTML = player.savingThrow.wis.toString();
util.getElement("chaSaving").innerHTML = player.savingThrow.cha.toString();
util.getElement("athletics").innerHTML = player.skills.str.athletics.toString();
util.getElement("acrobatics").innerHTML = player.skills.dex.acrobatics.toString();
util.getElement("sleightOfHand").innerHTML = player.skills.dex.sleightOfHand.toString();
util.getElement("stealth").innerHTML = player.skills.dex.stealth.toString();
util.getElement("arcana").innerHTML = player.skills.int.arcana.toString();
util.getElement("history").innerHTML = player.skills.int.history.toString();
util.getElement("investigation").innerHTML = player.skills.int.investigation.toString();
util.getElement("nature").innerHTML = player.skills.int.nature.toString();
util.getElement("religion").innerHTML = player.skills.int.religion.toString();
util.getElement("animalHandling").innerHTML = player.skills.wis.animalHandling.toString();
util.getElement("insight").innerHTML = player.skills.wis.insight.toString();
util.getElement("medicine").innerHTML = player.skills.wis.medicine.toString();
util.getElement("perception").innerHTML = player.skills.wis.perception.toString();
util.getElement("survival").innerHTML = player.skills.wis.survival.toString();
util.getElement("deception").innerHTML = player.skills.cha.deception.toString();
util.getElement("intimidation").innerHTML = player.skills.cha.intimidation.toString();
util.getElement("performance").innerHTML = player.skills.cha.performance.toString();
util.getElement("persuasion").innerHTML = player.skills.cha.persuasion.toString();

util.getElement("proficiencyBonus").innerHTML = player.proficiencyBonus.toString();
util.getElement("languages").innerHTML = Array.from(player.languages).toString();
util.getElement("toolProfs").innerHTML = Array.from(player.toolProficiencies).map(tool => tool.name).toString();

util.getElement("ac").innerHTML = player.ac.toString();
util.getElement("initiative").innerHTML = player.initiative.toString();
util.getElement("speed").innerHTML = player.speed.toString();
util.getElement("hitdice").innerHTML = player.hitDice.toString();
util.getElement("weapon1Name").innerHTML = player.weapons[0].name;
let weaponMod = player.attrMods.str;
if(isFinesse(player.weapons[0])){
    weaponMod = player.attrMods.dex;
}
util.getElement("weapon1AtkBonus").innerHTML = "+ " + (weaponMod + player.proficiencyBonus).toString();
util.getElement("weapon1DamageType").innerHTML = player.weapons[0].damageType;
util.getElement("weapon1Damage").innerHTML = player.weapons[0].damage + " + " + weaponMod.toString();
weaponMod = 0;
let weaponName = "";
let weaponAtkBonus = "";
let weaponDamageType = "";
let weaponDamage = "";
if(player.weapons[1]){
    weaponMod = player.attrMods.str;
    if(isFinesse(player.weapons[1])){
        weaponMod = player.attrMods.dex;
    }
    weaponName = player.weapons[1].name;
    weaponAtkBonus = "+ " + (weaponMod + player.proficiencyBonus).toString();
    weaponDamageType = player.weapons[1].damageType;
    weaponDamage = player.weapons[1].damage + " + " + weaponMod.toString();
}
util.getElement("weapon2Name").innerHTML = weaponName;
util.getElement("weapon2AtkBonus").innerHTML = weaponAtkBonus;
util.getElement("weapon2DamageType").innerHTML = weaponDamageType;
util.getElement("weapon2Damage").innerHTML = weaponDamage;
util.getElement("armorAC").innerHTML = player.armor.ac.base.toString();
util.getElement("armorName").innerHTML = player.armor.name;
if(player.shield.cost != 0){
    util.getElement("shieldAC").innerHTML = player.shield.ac.base.toString();
    util.getElement("shieldName").innerHTML = player.shield.name;
}
util.getElement("tool").innerHTML = player.tool.name;


util.getElement("personalityTraits").innerHTML = player.personalityTraits.toString();
util.getElement("ideals").innerHTML = player.ideals.toString();
util.getElement("bonds").innerHTML = player.bonds.toString();
util.getElement("flaws").innerHTML = player.flaws.toString();
util.getElement("traits").innerHTML = Array.from(player.traits).toString();


// let draw = SVG('drawing').size(300, 300);
// let rect = draw.rect(100, 100).attr({fill: '#f06'});