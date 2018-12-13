import { util } from "./Util";
export function generateCharacterClass() {
    return util.choice(characterClass);
}
const characterClass = [
    {
        attributes: { str: 2, dex: 1, con: 0, int: 0, wis: 0, cha: 0 }
    },
    {
        attributes: { str: 0, dex: 0, con: 0, int: 1, wis: 2, cha: 0 }
    },
];
