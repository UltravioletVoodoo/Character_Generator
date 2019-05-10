import { util } from "./Util";
import { dragonBornNames } from "./NameSets";
export function generateRace() {
    return util.choice(races);
}
const races = [
    {
        raceName: "Black Dragonborn",
        nameSet: dragonBornNames,
        attributes: {
            str: 2,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 1
        },
        ageRange: [15, 100],
        speed: 30,
        languages: new Set(["Common", "Draconic"]),
        traits: new Set(["Acid Resistance", "Acid Breath"])
    },
];
