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
    let LightShield = findArmor("Light shield");
    let MediumShield = findArmor("Medium shield");
    let HeavyShield = findArmor("Heavy shield");
    if (containsArmorSet(character.armorProfs, light)) {
        if (LightShield.cost <= character.startingGold) {
            shieldProfs.push(LightShield);
        }
    }
    if (containsArmorSet(character.armorProfs, medium)) {
        if (MediumShield.cost <= character.startingGold) {
            shieldProfs.push(MediumShield);
        }
    }
    if (containsArmorSet(character.armorProfs, heavy)) {
        if (HeavyShield.cost <= character.startingGold) {
            shieldProfs.push(HeavyShield);
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
