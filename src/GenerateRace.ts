import { Character } from "./Character";
import { util } from "./Util";

export function generateRace(){
    return util.choice(races);
}

const races: Partial<Character>[] = [
    {
        raceName: "Human"
    },
    {
        raceName: "Variant Human"
    },
];