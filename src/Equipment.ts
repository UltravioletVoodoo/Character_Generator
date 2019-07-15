import { Character } from "./Character";
import { chooseArmor } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { chooseTools } from "./ToolSets";
import { chooseShields } from "./ShieldSets";

export function chooseEquipment(character: Character){
    chooseArmor(character);
    chooseWeapons(character);
    chooseShields(character);
    chooseTools(character);
    //chooseMiscItems(character);
}