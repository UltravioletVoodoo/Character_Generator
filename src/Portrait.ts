import { util } from "./Util";
import { Character } from "./Character";

const ears: string[] = [
    "ears1",
    "ears2",
    "ears3"
];
const eyes: string[] = [
    "eyes1",
    "eyes2",
    "eyes3",
    "eyes4",
    "eyes5"
];
const hairs: string[] = [
    "hair1",
    "hair2",
    "hair3",
    "hair4"
];
const heads: string[] = [
    "head"
];
const mouths: string[] = [
    "mouth1",
    "mouth2",
    "mouth3",
    "mouth4",
    "mouth5",
    "mouth6"
];
const necks: string[] = [
    "neck1",
    "neck2",
    "neck3",
    "neck4"
];
const noses: string[] = [
    "nose1",
    "nose2",
    "nose3",
    "nose4",
    "nose5"
];

export function generatePortrait(character: Character) {
    character.ear     = "img/portraitAssets/" + util.choice(ears) + ".png";
    character.eye     = "img/portraitAssets/" + util.choice(eyes) + ".png";
    character.hair    = "img/portraitAssets/" + util.choice(hairs) + ".png";
    character.head    = "img/portraitAssets/" + util.choice(heads) + ".png";
    character.mouth   = "img/portraitAssets/" + util.choice(mouths) + ".png";
    character.neck    = "img/portraitAssets/" + util.choice(necks) + ".png";
    character.nose    = "img/portraitAssets/" + util.choice(noses) + ".png";
}