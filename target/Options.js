import { util } from "./Util";
export function getOptions() {
    let level = util.getElement("levelRange").value;
    util.getElement("levelValue").innerHTML = level;
    return {
        level: parseInt(level),
        dwarf: util.getElement("dwarfToggle").checked,
        elf: util.getElement("elfToggle").checked,
        halfling: util.getElement("halflingToggle").checked,
        human: util.getElement("humanToggle").checked,
        dragonborn: util.getElement("dragonbornToggle").checked,
        gnome: util.getElement("gnomeToggle").checked,
        halfElf: util.getElement("halfElfToggle").checked,
        halfOrc: util.getElement("halfOrcToggle").checked,
        tiefling: util.getElement("tieflingToggle").checked,
        barbarian: util.getElement("barbarianToggle").checked,
        bard: util.getElement("bardToggle").checked,
        cleric: util.getElement("clericToggle").checked,
        druid: util.getElement("druidToggle").checked,
        fighter: util.getElement("fighterToggle").checked,
        monk: util.getElement("monkToggle").checked,
        paladin: util.getElement("paladinToggle").checked,
        ranger: util.getElement("rangerToggle").checked,
        rogue: util.getElement("rogueToggle").checked,
        sorcerer: util.getElement("sorcererToggle").checked,
        warlock: util.getElement("warlockToggle").checked,
        wizard: util.getElement("wizardToggle").checked,
        magicItems: util.getElement("magicItemsToggle").checked,
        statBias: util.getElement("statBiasToggle").checked,
        UARanger: util.getElement("UARangerToggle").checked,
        generatePortrait: util.getElement("generatePortraitToggle").checked
    };
}
function atLeastOneRace(options) {
    if (options.dwarf)
        return true;
    if (options.elf)
        return true;
    if (options.halfling)
        return true;
    if (options.human)
        return true;
    if (options.dragonborn)
        return true;
    if (options.gnome)
        return true;
    if (options.halfElf)
        return true;
    if (options.halfOrc)
        return true;
    if (options.tiefling)
        return true;
    return false;
}
function atLeastOneClass(options) {
    if (options.barbarian)
        return true;
    if (options.bard)
        return true;
    if (options.cleric)
        return true;
    if (options.druid)
        return true;
    if (options.fighter)
        return true;
    if (options.monk)
        return true;
    if (options.paladin)
        return true;
    if (options.ranger)
        return true;
    if (options.rogue)
        return true;
    if (options.sorcerer)
        return true;
    if (options.warlock)
        return true;
    if (options.wizard)
        return true;
    return false;
}
export function checkOptions(options) {
    let result = {
        races: false,
        classes: false,
        report: false
    };
    if (atLeastOneRace(options))
        result.races = true;
    if (atLeastOneClass(options))
        result.classes = true;
    if (result.races && result.classes)
        result.report = true;
    return result;
}
