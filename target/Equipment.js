import { chooseArmor } from "./ArmorSets";
import { chooseWeapons } from "./WeaponSets";
import { chooseTools } from "./ToolSets";
import { chooseShields } from "./ShieldSets";
import { chooseMiscItems } from "./MiscSet";
export function chooseEquipment(character) {
    chooseArmor(character);
    chooseWeapons(character);
    chooseShields(character);
    chooseTools(character);
    chooseMiscItems(character);
}
