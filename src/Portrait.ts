import { util } from "./Util";
import { Character } from "./Character";
import assetStructure from "./assetStructure.json";

const basePath = "img/Assets/";

export function generatePortrait(character: Character) {

    // Give all players the standard, shared head
    character.assets.Heads = util.choice(assetStructure.Shared.Heads);

    // Pick a neck from the standard shared neck assets
    character.assets.Necks = util.choice(assetStructure.Shared.Necks);

    // Choose Asset sets based on character
    addAssets(character);
}


interface AssetStructure {
    [race: string]: {
        [feature: string]: string[];
    }
}

const assetTypes: string[] = [
    "Hair",
    "Ears",
    "Eyes",
    "Noses",
    "Mouths",
    "Chins"
];

function addAssets(character: Character) {
    for (let type of assetTypes) {
        character.assets[type] = util.choice((assetStructure as AssetStructure)[character.raceName][type]);
    }
}