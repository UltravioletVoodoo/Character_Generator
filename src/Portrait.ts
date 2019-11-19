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

const basePath = "img/portraitAssets/";
const extension = ".png";

export function generatePortrait(character: Character) {
    character.ear     = basePath + util.choice(ears) + extension;
    character.eye     = basePath + util.choice(eyes) + extension;
    character.hair    = basePath + util.choice(hairs) + extension;
    character.head    = basePath + util.choice(heads) + extension;
    character.mouth   = basePath + util.choice(mouths) + extension;
    character.neck    = basePath + util.choice(necks) + extension;
    character.nose    = basePath + util.choice(noses) + extension;
}