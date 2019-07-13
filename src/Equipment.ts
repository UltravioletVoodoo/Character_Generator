import { Character } from "./Character";
import { Armor, chooseArmor, findArmor, light, medium, heavy } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { util } from "./Util";
import { chooseTool } from "./ToolSets";
import { noShield, lightShield, mediumShield, heavyShield } from "./ShieldSets";

export function chooseEquipment(character: Character){
    chooseArmor(character);
    chooseWeapons(character);
    chooseShields(character);
    chooseTool(character);
}

function chooseShields(character: Character){
    let shieldProfs     = [noShield];

    if(containsArmorSet(character.armorProfs, light) && lightShield.cost <= character.startingGold){
        shieldProfs.push(lightShield);
    }
    if(containsArmorSet(character.armorProfs, medium) && mediumShield.cost <= character.startingGold){
        shieldProfs.push(mediumShield);
    }
    if(containsArmorSet(character.armorProfs, heavy) && heavyShield.cost <= character.startingGold){
        shieldProfs.push(heavyShield);
    }
    let shieldChoice = util.choice(shieldProfs);
    character.shield = shieldChoice;
    character.startingGold -= shieldChoice.cost;
}

function containsArmorSet(armorProfs: Armor[], set: Armor[]){
    let bool = true;
    for(let armor of set){
        if(!containsArmor(armorProfs, armor)){
            bool = false;
        }
    }
    return bool;
}

function containsArmor(armorProfs: Armor[], peice: Armor){
    let bool = false;
    for (let armor of armorProfs){
        if (armor.name === peice.name){
            bool = true;
            break;
        }
    }
    return bool;
}