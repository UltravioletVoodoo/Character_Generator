import { chooseArmor, findArmor, light, medium, heavy, blankShield } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { util } from "./Util";
import { chooseTool } from "./ToolSets";
export function chooseEquipment(character) {
    chooseArmor(character);
    chooseWeapons(character);
    chooseShields(character);
    chooseTool(character);
}
function chooseShields(character) {
    let shieldProfs = [blankShield];
    let Buckler = findArmor("Buckler");
    let Medium = findArmor("Medium shield");
    let Tower = findArmor("Tower shield");
    if (containsArmorSet(character.armorProfs, light)) {
        if (Buckler.cost <= character.startingGold) {
            shieldProfs.push(Buckler);
        }
    }
    if (containsArmorSet(character.armorProfs, medium)) {
        if (Medium.cost <= character.startingGold) {
            shieldProfs.push(Medium);
        }
    }
    if (containsArmorSet(character.armorProfs, heavy)) {
        if (Tower.cost <= character.startingGold) {
            shieldProfs.push(Tower);
        }
    }
    let shieldChoice = util.choice(shieldProfs);
    character.shield = shieldChoice;
    character.startingGold -= shieldChoice.cost;
}
function containsArmorSet(armorProfs, set) {
    let bool = true;
    for (let armor of set) {
        if (!containsArmor(armorProfs, armor)) {
            bool = false;
        }
    }
    return bool;
}
function containsArmor(armorProfs, peice) {
    let bool = false;
    for (let armor of armorProfs) {
        if (armor.name === peice.name) {
            bool = true;
            break;
        }
    }
    return bool;
}
