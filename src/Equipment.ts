import { Character } from "./Character";
import { Armor, chooseArmor, findArmor, light, medium, heavy, blankShield } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { util } from "./Util";
import { chooseTool } from "./ToolSets";

export function chooseEquipment(character: Character){
    chooseArmor(character);
    chooseWeapons(character);
    chooseShields(character);
    chooseTool(character);
}

function chooseShields(character: Character){
    let shieldProfs = [blankShield];
    let Light = findArmor("Light shield");
    let Medium = findArmor("Medium shield");
    let Heavy= findArmor("Heavy shield");

    if(containsArmorSet(character.armorProfs, light)){
        if(Light.cost <= character.startingGold){
            shieldProfs.push(Light);
        }
    }
    if(containsArmorSet(character.armorProfs, medium)){
        if(Medium.cost <= character.startingGold){
            shieldProfs.push(Medium);
        }
    }
    if(containsArmorSet(character.armorProfs, heavy)){
        if(Heavy.cost <= character.startingGold){
            shieldProfs.push(Heavy);
        }
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