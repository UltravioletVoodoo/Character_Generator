import { util } from "./Util"
import { generateCharacter } from "./Character";
import { isFinesse } from "./WeaponSets";


function generateSheet(){
    const character = generateCharacter();
    console.log(character);

    util.getElement("className").value = character.className;
    util.getElement("level").value = "1";

    util.getElement("raceName").value = character.raceName;
    util.getElement("alignment").value = character.alignment;
    util.getElement("ageAndSex").value = character.age.toString() + '\t\t' + character.sex;

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

    util.getElement("strSaveProf").checked = character.savingThrowProfsFlat.str > 0;
    util.getElement("dexSaveProf").checked = character.savingThrowProfsFlat.dex > 0;
    util.getElement("conSaveProf").checked = character.savingThrowProfsFlat.con > 0;
    util.getElement("intSaveProf").checked = character.savingThrowProfsFlat.int > 0;
    util.getElement("wisSaveProf").checked = character.savingThrowProfsFlat.wis > 0;
    util.getElement("chaSaveProf").checked = character.savingThrowProfsFlat.cha > 0;

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

    util.getElement("athleticsProf").checked = character.skillProfsFlat.str.athletics > 0;
    util.getElement("acrobaticsProf").checked = character.skillProfsFlat.dex.acrobatics > 0;
    util.getElement("sleightOfHandProf").checked = character.skillProfsFlat.dex.sleightOfHand > 0;
    util.getElement("stealthProf").checked = character.skillProfsFlat.dex.stealth > 0;
    util.getElement("arcanaProf").checked = character.skillProfsFlat.int.arcana > 0;
    util.getElement("historyProf").checked = character.skillProfsFlat.int.history > 0;
    util.getElement("investigationProf").checked = character.skillProfsFlat.int.investigation > 0;
    util.getElement("natureProf").checked = character.skillProfsFlat.int.nature > 0;
    util.getElement("religionProf").checked = character.skillProfsFlat.int.religion > 0;
    util.getElement("animalHandlingProf").checked = character.skillProfsFlat.wis.animalHandling > 0;
    util.getElement("insightProf").checked = character.skillProfsFlat.wis.insight > 0;
    util.getElement("medicineProf").checked = character.skillProfsFlat.wis.medicine > 0;
    util.getElement("perceptionProf").checked = character.skillProfsFlat.wis.perception > 0;
    util.getElement("survivalProf").checked = character.skillProfsFlat.wis.survival > 0;
    util.getElement("deceptionProf").checked = character.skillProfsFlat.cha.deception > 0;
    util.getElement("intimidationProf").checked = character.skillProfsFlat.cha.intimidation > 0;
    util.getElement("performanceProf").checked = character.skillProfsFlat.cha.performance > 0;
    util.getElement("persuasionProf").checked = character.skillProfsFlat.cha.persuasion > 0;

    util.getElement("proficiencyBonus").value = character.proficiencyBonus.toString();
    util.getElement("languages").innerHTML = Array.from(character.languages).join("\n");
    util.getElement("toolProfs").innerHTML = Array.from(character.toolProfs).map(tool => tool.name).join("\n");

    util.getElement("ac").value = character.ac.toString();
    util.getElement("initiative").value = character.initiative.toString();
    util.getElement("speed").value = character.speed.toString();
    util.getElement("hitDice").value = character.hitDice.toString();
    util.getElement("hp").value = character.hp.toString();
    util.getElement("weapon1Name").value = character.weapons[0].name;
    let weaponMod = character.attrMods.str;
    if(isFinesse(character.weapons[0])){
        weaponMod = character.attrMods.dex;
    }
    util.getElement("weapon1AtkBonus").value = "+ " + (weaponMod + character.proficiencyBonus).toString();
    util.getElement("weapon1DamageType").value = character.weapons[0].damageType;
    util.getElement("weapon1Damage").value = character.weapons[0].damage + " + " + weaponMod.toString();
    weaponMod = 0;
    let weaponName = "";
    let weaponAtkBonus = "";
    let weaponDamageType = "";
    let weaponDamage = "";
    if(character.weapons[1]){
        weaponMod = character.attrMods.str;
        if(isFinesse(character.weapons[1])){
            weaponMod = character.attrMods.dex;
        }
        weaponName = character.weapons[1].name;
        weaponAtkBonus = "+ " + (weaponMod + character.proficiencyBonus).toString();
        weaponDamageType = character.weapons[1].damageType;
        weaponDamage = character.weapons[1].damage + " + " + weaponMod.toString();
    }
    util.getElement("weapon2Name").value = weaponName;
    util.getElement("weapon2AtkBonus").value = weaponAtkBonus;
    util.getElement("weapon2DamageType").value = weaponDamageType;
    util.getElement("weapon2Damage").value = weaponDamage;
    util.getElement("armorAC").value = character.armor.ac.base.toString();
    util.getElement("armorName").value = character.armor.name;
    util.getElement("startingGold").value = character.startingGold.toFixed(2).toString();
    if(character.shield.cost != 0){
        util.getElement("shieldAC").value = character.shield.acBonus.toString();
        util.getElement("shieldName").value = character.shield.name;
    } else {
        util.getElement("shieldAC").value = "";
        util.getElement("shieldName").value = "";
    }
    util.getElement("tool").value = character.tool.name;

    util.getElement("personality").value = character.personality;
    util.getElement("ideals").value = character.ideal;
    util.getElement("bonds").value = character.bond;
    util.getElement("flaws").value = character.flaw;
    util.getElement("traits").value = Array.from(character.traits).join("\n");

    util.getElement("cantrips").value = character.level0Spells.join("\n");
    util.getElement("levelOneSpells").value = character.level1Spells.join("\n");

    //print the page
    window.print();
}

util.getElement("generateSheetBtn").addEventListener("click", generateSheet);