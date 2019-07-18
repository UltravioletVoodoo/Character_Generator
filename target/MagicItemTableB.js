import { util } from "./Util";
import { level2Spells, level3Spells } from "./Spells";
import { medium, heavy } from "./ArmorSets";
export function chooseMagicItem(character) {
    function getChoice() {
        let dieRoll = util.randomNumberFromRange([1, 100]);
        if (dieRoll <= 15)
            return "Potion of greater healing";
        if (dieRoll <= 22)
            return "Potion of fire breath";
        if (dieRoll <= 29)
            return "Potion of resistance";
        if (dieRoll <= 34)
            return "+1 " + util.choice(plusOneAmmo);
        if (dieRoll <= 39)
            return "Potion of animal friendship";
        if (dieRoll <= 44)
            return "Potion of hill giant strength";
        if (dieRoll <= 49)
            return "Potion of growth";
        if (dieRoll <= 54)
            return "Potion of water breathing";
        if (dieRoll <= 59)
            return "Scroll of " + util.choice(level2Spells);
        if (dieRoll <= 64)
            return "Scroll of " + util.choice(level3Spells);
        if (dieRoll <= 67)
            return "Bag of holding";
        if (dieRoll <= 70)
            return "Keoghtom's ointment";
        if (dieRoll <= 73)
            return "Oil of slipperiness";
        if (dieRoll <= 75)
            return "Dust of appearance";
        if (dieRoll <= 77)
            return "Dust of dryness";
        if (dieRoll <= 79)
            return "Dust of sneezing and choking";
        if (dieRoll <= 81)
            return "Elemental gem " + util.choice(elementalGem);
        if (dieRoll <= 83)
            return "Philter of love";
        if (dieRoll <= 84)
            return "Alchemy jug";
        if (dieRoll <= 85)
            return "Cap of water breathing";
        if (dieRoll <= 86)
            return "Cloak of the manta ray";
        if (dieRoll <= 87)
            return "Driftglobe";
        if (dieRoll <= 88)
            return "Goggles of night";
        if (dieRoll <= 89)
            return "Helm of comprehending languages";
        if (dieRoll <= 90)
            return "Immovable rod";
        if (dieRoll <= 91)
            return "Lantern of revealing";
        if (dieRoll <= 92)
            return "Mariner's armor";
        if (dieRoll <= 93)
            return "Mithral " + util.choice(medium.concat(heavy));
        if (dieRoll <= 94)
            return "Potion of poison";
        if (dieRoll <= 95)
            return "Ring of swimming";
        if (dieRoll <= 96)
            return "Robe of useful items";
        if (dieRoll <= 97)
            return "Rope of climbing";
        if (dieRoll <= 98)
            return "Saddle of the cavalier";
        if (dieRoll <= 99)
            return "Wand of magic detection";
        return "Wand of secrets";
    }
    character.miscItems.push({
        name: getChoice(),
        cost: 0
    });
}
const plusOneAmmo = [
    "Crossbow bolt",
    "Arrow"
];
const elementalGem = [
    "(blue sapphire)",
    "(yellow diamond)",
    "(red corundum)",
    "(emerald)"
];
