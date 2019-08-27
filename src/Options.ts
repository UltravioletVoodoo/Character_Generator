import { util } from "./Util";

export interface Options {
    level: number;
    dwarf: boolean;
    elf: boolean;
    halfling: boolean;
    human: boolean;
    dragonborn: boolean;
    gnome: boolean;
    halfElf: boolean;
    halfOrc: boolean;
    tiefling: boolean;
    barbarian: boolean;
    bard: boolean;
    cleric: boolean;
    druid: boolean;
    fighter: boolean;
    monk: boolean;
    paladin: boolean;
    ranger: boolean;
    rogue: boolean;
    sorcerer: boolean;
    warlock: boolean;
    wizard: boolean;
    magicItems: boolean;
}

export function getOptions(): Options {
    let levelElement = document.getElementById("levelChoice") as HTMLSelectElement;
    let level = parseInt(levelElement.options[levelElement.selectedIndex].value);
    return {
        level: level,
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
    }
}