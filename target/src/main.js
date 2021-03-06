import { util } from "./Util";
import { generateCharacter } from "./Character";
import { getOptions, checkOptions } from "./Options";
function generateSheet() {
    // Get the values from the options modal to be passed to generate character
    let options = getOptions();
    let optionsReport = checkOptions(options);
    if (!optionsReport.report) {
        handleNoticeModal(optionsReport);
        return;
    }
    const character = generateCharacter(options);
    console.log(character);
    // Replace the "No shield" string with empty string so as to not show up on the charsheet
    let shieldName = character.shield.name;
    let shieldAc = character.shield.acBonus.toString();
    if (character.shield.name == "No shield") {
        shieldName = "";
        shieldAc = "";
    }
    // Take the character elements and manipulate the DOM to place them on the sheet
    util.getElement("className").value = character.className;
    util.getElement("level").value = character.level.toString();
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
    util.getElement("acWithShield").value = character.acWithShield.toString();
    util.getElement("acWithoutShield").value = character.acWithoutShield.toString();
    util.getElement("initiative").value = character.initiative.toString();
    util.getElement("speed").value = character.speed.toString();
    util.getElement("hitDice").value = character.level.toString();
    util.getElement("hdType").value = "D" + character.hitDice.toString();
    util.getElement("hp").value = character.hp.toString();
    util.getElement("armorAC").value = character.armor.ac.base.toString();
    util.getElement("armorName").value = character.armor.name;
    util.getElement("shieldAC").value = shieldAc;
    util.getElement("shieldName").value = shieldName;
    util.getElement("personality").value = character.personality;
    util.getElement("ideals").value = character.ideal;
    util.getElement("bonds").value = character.bond;
    util.getElement("flaws").value = character.flaw;
    util.getElement("traits").value = Array.from(character.traits).join("\n");
    util.getElement("abilities").value = Array.from(character.abilities).join("\n");
    util.getElement("weapons").value = Array.from(character.weapons).map(weapon => weapon.name).join("\n");
    util.getElement("tools").value = Array.from(character.tools).map(tool => tool.name).join("\n");
    util.getElement("misc").value = Array.from(character.miscItems).map(miscItem => miscItem.name).join("\n");
    util.getElement("gold").value = character.gold.toFixed(2).toString();
    util.getElement("cantrips").value = character.spells[0].join("\n");
    util.getElement("levelOneSpells").value = character.spells[1].join("\n");
    util.getElement("levelTwoSpells").value = character.spells[2].join("\n");
    util.getElement("portraitEar").src = character.ear;
    util.getElement("portraitEye").src = character.eye;
    util.getElement("portraitHair").src = character.hair;
    util.getElement("portraitHead").src = character.head;
    util.getElement("portraitMouth").src = character.mouth;
    util.getElement("portraitNeck").src = character.neck;
    util.getElement("portraitNose").src = character.nose;
    util.getElement("portraitChin").src = character.chin;
    //print the page
    window.print();
}
function untoggle(list) {
    for (let x of list) {
        util.getElement(x).checked = false;
    }
}
function untoggleRaces() {
    const raceIds = [
        "dwarfToggle",
        "elfToggle",
        "halflingToggle",
        "humanToggle",
        "dragonbornToggle",
        "gnomeToggle",
        "halfElfToggle",
        "halfOrcToggle",
        "tieflingToggle"
    ];
    untoggle(raceIds);
}
function untoggleClasses() {
    const classIds = [
        "barbarianToggle",
        "bardToggle",
        "clericToggle",
        "druidToggle",
        "fighterToggle",
        "monkToggle",
        "paladinToggle",
        "rangerToggle",
        "rogueToggle",
        "sorcererToggle",
        "warlockToggle",
        "wizardToggle"
    ];
    untoggle(classIds);
}
function handleNoticeModal(report) {
    let text = "Terribly sorry, it would seem that you forgot to select any";
    if (!report.races && report.classes)
        text = text + " races.";
    if (report.races && !report.classes)
        text = text + " classes.";
    if (!report.races && !report.classes)
        text = text + " races or classes.";
    util.getElement("noticeText").innerHTML = text;
    util.getElement("noticeModal").style.display = "block";
    util.getElement("noticeModalField").style.display = "block";
}
// BUTTONS
//===============================================
//Generate character button
util.getElement("generateSheetBtn").addEventListener("click", generateSheet);
//Untoggle all races button
util.getElement("unselectRaces").addEventListener("click", untoggleRaces);
//Untoggle all classes button
util.getElement("unselectClasses").addEventListener("click", untoggleClasses);
