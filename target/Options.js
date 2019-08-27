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
        magicItems: util.getElement("magicItemsToggle").checked
    };
}
