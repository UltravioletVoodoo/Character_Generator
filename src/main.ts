import { util } from "./Util"
import { generateCharacter } from "./Character";

const character = generateCharacter();
console.log(character);

util.getElement("name").value = character.name;

util.getElement("className").value = character.className;
util.getElement("level").value = "1";

util.getElement("raceName").value = character.raceName;
util.getElement("alignment").value = character.alignment;
util.getElement("sex").value = character.sex;

util.getElement("str").value = character.attributes.str.toString();
util.getElement("dex").value = character.attributes.dex.toString();
util.getElement("con").value = character.attributes.con.toString();
util.getElement("int").value = character.attributes.int.toString();
util.getElement("wis").value = character.attributes.wis.toString();
util.getElement("cha").value = character.attributes.cha.toString();
util.getElement("strMod").value = character.attrMods.str.toString();
util.getElement("dexMod").value = character.attrMods.dex.toString();
util.getElement("conMod").value = character.attrMods.con.toString();
util.getElement("intMod").value = character.attrMods.int.toString();
util.getElement("wisMod").value = character.attrMods.wis.toString();
util.getElement("chaMod").value = character.attrMods.cha.toString();

util.getElement("strSaving").value = character.savingThrows.str.toString();
util.getElement("dexSaving").value = character.savingThrows.dex.toString();
util.getElement("conSaving").value = character.savingThrows.con.toString();
util.getElement("intSaving").value = character.savingThrows.int.toString();
util.getElement("wisSaving").value = character.savingThrows.wis.toString();
util.getElement("chaSaving").value = character.savingThrows.cha.toString();

util.getElement("strSaveProf").checked = character.savingThrowProfs.str > 0 ? true : false;
util.getElement("dexSaveProf").checked = character.savingThrowProfs.dex > 0 ? true : false;
util.getElement("conSaveProf").checked = character.savingThrowProfs.con > 0 ? true : false;
util.getElement("intSaveProf").checked = character.savingThrowProfs.int > 0 ? true : false;
util.getElement("wisSaveProf").checked = character.savingThrowProfs.wis > 0 ? true : false;
util.getElement("chaSaveProf").checked = character.savingThrowProfs.cha > 0 ? true : false;

util.getElement("athletics").value = character.skills.str.athletics.toString();
util.getElement("acrobatics").value = character.skills.dex.acrobatics.toString();
util.getElement("sleightOfHand").value = character.skills.dex.sleightOfHand.toString();
util.getElement("stealth").value = character.skills.dex.stealth.toString();
util.getElement("arcana").value = character.skills.int.arcana.toString();
util.getElement("history").value = character.skills.int.history.toString();
util.getElement("investigation").value = character.skills.int.investigation.toString();
util.getElement("nature").value = character.skills.int.nature.toString();
util.getElement("religion").value = character.skills.int.religion.toString();
util.getElement("animalHandling").value = character.skills.wis.animalHandling.toString();
util.getElement("insight").value = character.skills.wis.insight.toString();
util.getElement("medicine").value = character.skills.wis.medicine.toString();
util.getElement("perception").value = character.skills.wis.perception.toString();
util.getElement("survival").value = character.skills.wis.survival.toString();
util.getElement("deception").value = character.skills.cha.deception.toString();
util.getElement("intimidation").value = character.skills.cha.intimidation.toString();
util.getElement("performance").value = character.skills.cha.performance.toString();
util.getElement("persuasion").value = character.skills.cha.persuasion.toString();

util.getElement("athleticsProf").checked = character.skillProfs.str.athletics > 0 ? true : false;
util.getElement("acrobaticsProf").checked = character.skillProfs.dex.acrobatics > 0 ? true : false;
util.getElement("sleightOfHandProf").checked = character.skillProfs.dex.sleightOfHand > 0 ? true : false;
util.getElement("stealthProf").checked = character.skillProfs.dex.stealth > 0 ? true : false;
util.getElement("arcanaProf").checked = character.skillProfs.int.arcana > 0 ? true : false;
util.getElement("historyProf").checked = character.skillProfs.int.history > 0 ? true : false;
util.getElement("investigationProf").checked = character.skillProfs.int.investigation > 0 ? true : false;
util.getElement("natureProf").checked = character.skillProfs.int.nature > 0 ? true : false;
util.getElement("religionProf").checked = character.skillProfs.int.religion > 0 ? true : false;
util.getElement("animalHandlingProf").checked = character.skillProfs.wis.animalHandling > 0 ? true : false;
util.getElement("insightProf").checked = character.skillProfs.wis.insight > 0 ? true : false;
util.getElement("medicineProf").checked = character.skillProfs.wis.medicine > 0 ? true : false;
util.getElement("perceptionProf").checked = character.skillProfs.wis.perception > 0 ? true : false;
util.getElement("survivalProf").checked = character.skillProfs.wis.survival > 0 ? true : false;
util.getElement("deceptionProf").checked = character.skillProfs.cha.deception > 0 ? true : false;
util.getElement("intimidationProf").checked = character.skillProfs.cha.intimidation > 0 ? true : false;
util.getElement("performanceProf").checked = character.skillProfs.cha.performance > 0 ? true : false;
util.getElement("persuasionProf").checked = character.skillProfs.cha.persuasion > 0 ? true : false;

util.getElement("proficiencyBonus").value = character.proficiencyBonus.toString();
util.getElement("languages").innerHTML = Array.from(character.languages).toString();
util.getElement("toolProfs").innerHTML = Array.from(character.toolProfs).map(tool => tool.name).toString();

util.getElement("ac").value = character.ac.toString();
util.getElement("initiative").value = character.initiative.toString();
util.getElement("speed").value = character.speed.toString();
util.getElement("hitDice").value = character.hitDice.toString();
util.getElement("hp").value = character.hp.toString();
// util.getElement("weapon1Name").value = character.weapons[0].name;
// let weaponMod = character.attrMods.str;
// if(isFinesse(character.weapons[0])){
//     weaponMod = character.attrMods.dex;
// }
// util.getElement("weapon1AtkBonus").value = "+ " + (weaponMod + character.proficiencyBonus).toString();
// util.getElement("weapon1DamageType").value = character.weapons[0].damageType;
// util.getElement("weapon1Damage").value = character.weapons[0].damage + " + " + weaponMod.toString();
// weaponMod = 0;
// let weaponName = "";
// let weaponAtkBonus = "";
// let weaponDamageType = "";
// let weaponDamage = "";
// if(character.weapons[1]){
//     weaponMod = character.attrMods.str;
//     if(isFinesse(character.weapons[1])){
//         weaponMod = character.attrMods.dex;
//     }
//     weaponName = character.weapons[1].name;
//     weaponAtkBonus = "+ " + (weaponMod + character.proficiencyBonus).toString();
//     weaponDamageType = character.weapons[1].damageType;
//     weaponDamage = character.weapons[1].damage + " + " + weaponMod.toString();
// }
// util.getElement("weapon2Name").value = weaponName;
// util.getElement("weapon2AtkBonus").value = weaponAtkBonus;
// util.getElement("weapon2DamageType").value = weaponDamageType;
// util.getElement("weapon2Damage").value = weaponDamage;
// util.getElement("armorAC").value = character.armor.ac.base.toString();
// util.getElement("armorName").value = character.armor.name;
// util.getElement("startingGold").value = character.startingGold.toString();
// if(character.shield.cost != 0){
//     util.getElement("shieldAC").value = character.shield.ac.base.toString();
//     util.getElement("shieldName").value = character.shield.name;
// }
// util.getElement("tool").value = character.tool.name;

util.getElement("personality").value = character.personality;
util.getElement("ideals").value = character.ideal;
util.getElement("bonds").value = character.bond;
util.getElement("flaws").value = character.flaw;
util.getElement("traits").value = Array.from(character.traits).toString();