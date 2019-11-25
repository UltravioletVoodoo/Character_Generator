import { util } from "./Util";
import assetStructure from "./assetStructure.json";
const basePath = "img/Assets/";
export function generatePortrait(character) {
    // Give all players the standard, shared head
    character.assets.Heads = util.choice(assetStructure.Shared.Heads);
    // Pick a neck from the standard shared neck assets
    character.assets.Necks = util.choice(assetStructure.Shared.Necks);
    // Choose Asset sets based on character
    addAssets(character);
}
const assetTypes = [
    "Hair",
    "Ears",
    "Eyes",
    "Noses",
    "Mouths",
    "Chins"
];
function addAssets(character) {
    for (let type of assetTypes) {
        character.assets[type] = util.choice(assetStructure[character.raceName][type]);
    }
}
