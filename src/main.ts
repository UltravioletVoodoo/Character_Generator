import { generatePlayer } from "./GeneratePlayer";
import { util } from "./Util"
import { Character } from "./Character";
import { isFinesse } from "./WeaponSets";

const player = generatePlayer() as Character;
console.log(player);


util.getElement("name").value = player.name;

util.getElement("className").value = player.className;
util.getElement("level").value = "1";

util.getElement("raceName").value = player.raceName;
util.getElement("alignment").value = player.alignment;
util.getElement("sex").value = player.sex;

util.getElement("str").value = player.attributes.str.toString();
util.getElement("dex").value = player.attributes.dex.toString();
util.getElement("con").value = player.attributes.con.toString();
util.getElement("int").value = player.attributes.int.toString();
util.getElement("wis").value = player.attributes.wis.toString();
util.getElement("cha").value = player.attributes.cha.toString();
util.getElement("strMod").value = player.attrMods.str.toString();
util.getElement("dexMod").value = player.attrMods.dex.toString();
util.getElement("conMod").value = player.attrMods.con.toString();
util.getElement("intMod").value = player.attrMods.int.toString();
util.getElement("wisMod").value = player.attrMods.wis.toString();
util.getElement("chaMod").value = player.attrMods.cha.toString();

util.getElement("strSaving").value = player.savingThrow.str.toString();
util.getElement("dexSaving").value = player.savingThrow.dex.toString();
util.getElement("conSaving").value = player.savingThrow.con.toString();
util.getElement("intSaving").value = player.savingThrow.int.toString();
util.getElement("wisSaving").value = player.savingThrow.wis.toString();
util.getElement("chaSaving").value = player.savingThrow.cha.toString();

util.getElement("athletics").value = player.skills.str.athletics.toString();
util.getElement("acrobatics").value = player.skills.dex.acrobatics.toString();
util.getElement("sleightOfHand").value = player.skills.dex.sleightOfHand.toString();
util.getElement("stealth").value = player.skills.dex.stealth.toString();
util.getElement("arcana").value = player.skills.int.arcana.toString();
util.getElement("history").value = player.skills.int.history.toString();
util.getElement("investigation").value = player.skills.int.investigation.toString();
util.getElement("nature").value = player.skills.int.nature.toString();
util.getElement("religion").value = player.skills.int.religion.toString();
util.getElement("animalHandling").value = player.skills.wis.animalHandling.toString();
util.getElement("insight").value = player.skills.wis.insight.toString();
util.getElement("medicine").value = player.skills.wis.medicine.toString();
util.getElement("perception").value = player.skills.wis.perception.toString();
util.getElement("survival").value = player.skills.wis.survival.toString();
util.getElement("deception").value = player.skills.cha.deception.toString();
util.getElement("intimidation").value = player.skills.cha.intimidation.toString();
util.getElement("performance").value = player.skills.cha.performance.toString();
util.getElement("persuasion").value = player.skills.cha.persuasion.toString();

util.getElement("athleticsProf").checked = player.skillProficiencies.str.athletics > 0 ? true : false;
util.getElement("acrobaticsProf").checked = player.skillProficiencies.dex.acrobatics > 0 ? true : false;
util.getElement("sleightOfHandProf").checked = player.skillProficiencies.dex.sleightOfHand > 0 ? true : false;
util.getElement("stealthProf").checked = player.skillProficiencies.dex.stealth > 0 ? true : false;
util.getElement("arcanaProf").checked = player.skillProficiencies.int.arcana > 0 ? true : false;
util.getElement("historyProf").checked = player.skillProficiencies.int.history > 0 ? true : false;
util.getElement("investigationProf").checked = player.skillProficiencies.int.investigation > 0 ? true : false;
util.getElement("natureProf").checked = player.skillProficiencies.int.nature > 0 ? true : false;
util.getElement("religionProf").checked = player.skillProficiencies.int.religion > 0 ? true : false;
util.getElement("animalHandlingProf").checked = player.skillProficiencies.wis.animalHandling > 0 ? true : false;
util.getElement("insightProf").checked = player.skillProficiencies.wis.insight > 0 ? true : false;
util.getElement("medicineProf").checked = player.skillProficiencies.wis.medicine > 0 ? true : false;
util.getElement("perceptionProf").checked = player.skillProficiencies.wis.perception > 0 ? true : false;
util.getElement("survivalProf").checked = player.skillProficiencies.wis.survival > 0 ? true : false;
util.getElement("deceptionProf").checked = player.skillProficiencies.cha.deception > 0 ? true : false;
util.getElement("intimidationProf").checked = player.skillProficiencies.cha.intimidation > 0 ? true : false;
util.getElement("performanceProf").checked = player.skillProficiencies.cha.performance > 0 ? true : false;
util.getElement("persuasionProf").checked = player.skillProficiencies.cha.persuasion > 0 ? true : false;

util.getElement("proficiencyBonus").value = player.proficiencyBonus.toString();
util.getElement("languages").innerHTML = Array.from(player.languages).toString();
util.getElement("toolProfs").innerHTML = Array.from(player.toolProficiencies).map(tool => tool.name).toString();

util.getElement("ac").value = player.ac.toString();
util.getElement("initiative").value = player.initiative.toString();
util.getElement("speed").value = player.speed.toString();
util.getElement("hitDice").value = player.hitDice.toString();
util.getElement("hp").value = player.hitPoints.toString();
util.getElement("weapon1Name").value = player.weapons[0].name;
let weaponMod = player.attrMods.str;
if(isFinesse(player.weapons[0])){
    weaponMod = player.attrMods.dex;
}
util.getElement("weapon1AtkBonus").value = "+ " + (weaponMod + player.proficiencyBonus).toString();
util.getElement("weapon1DamageType").value = player.weapons[0].damageType;
util.getElement("weapon1Damage").value = player.weapons[0].damage + " + " + weaponMod.toString();
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
util.getElement("weapon2Name").value = weaponName;
util.getElement("weapon2AtkBonus").value = weaponAtkBonus;
util.getElement("weapon2DamageType").value = weaponDamageType;
util.getElement("weapon2Damage").value = weaponDamage;
util.getElement("armorAC").value = player.armor.ac.base.toString();
util.getElement("armorName").value = player.armor.name;
util.getElement("startingGold").value = player.startingGold.toString();
if(player.shield.cost != 0){
    util.getElement("shieldAC").value = player.shield.ac.base.toString();
    util.getElement("shieldName").value = player.shield.name;
}
util.getElement("tool").value = player.tool.name;


util.getElement("personalityTraits").value = player.personalityTraits.toString();
util.getElement("ideals").value = player.ideals.toString();
util.getElement("bonds").value = player.bonds.toString();
util.getElement("flaws").value = player.flaws.toString();
util.getElement("traits").value = Array.from(player.traits).toString();


// let draw = SVG('drawing').size(300, 300);
// let rect = draw.rect(100, 100).attr({fill: '#f06'});