import { light, medium, heavy } from "./ArmorSets";
import { util } from "./Util";
export function chooseShields(character) {
    let shieldProfs = [noShield];
    if (containsArmorSet(character.armorProfs, light) && lightShield.cost <= character.gold) {
        shieldProfs.push(lightShield);
    }
    if (containsArmorSet(character.armorProfs, medium) && mediumShield.cost <= character.gold) {
        shieldProfs.push(mediumShield);
    }
    if (containsArmorSet(character.armorProfs, heavy) && heavyShield.cost <= character.gold) {
        shieldProfs.push(heavyShield);
    }
    let shieldChoice = util.choice(shieldProfs);
    character.shield = shieldChoice;
    character.gold -= shieldChoice.cost;
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
export const noShield = {
    name: "No shield",
    acBonus: 0,
    cost: 0
};
export const lightShield = {
    name: "Light shield",
    acBonus: 1,
    cost: 10
};
export const mediumShield = {
    name: "Medium shield",
    acBonus: 2,
    cost: 10
};
export const heavyShield = {
    name: "Heavy shield",
    acBonus: 2,
    cost: 35
};
