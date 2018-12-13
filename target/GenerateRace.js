import { util } from "./Util";
export function generateRace() {
    return util.choice(races);
}
const races = [
    {
        raceName: "Human"
    },
    {
        raceName: "Variant Human"
    },
];
