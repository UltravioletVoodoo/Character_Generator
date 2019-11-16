import { util } from "./Util";
const ears = [
    "ears1",
    "ears2",
    "ears3"
];
const eyes = [
    "eyes1",
    "eyes2",
    "eyes3",
    "eyes4",
    "eyes5"
];
const hairs = [
    "hair1",
    "hair2",
    "hair3",
    "hair4"
];
const heads = [
    "head"
];
const mouths = [
    "mouth1",
    "mouth2",
    "mouth3",
    "mouth4",
    "mouth5",
    "mouth6"
];
const necks = [
    "neck1",
    "neck2",
    "neck3",
    "neck4"
];
const noses = [
    "nose1",
    "nose2",
    "nose3",
    "nose4",
    "nose5"
];
export function generatePortrait(character) {
    character.ear = "img/portraitAssets/" + util.choice(ears) + ".png";
    character.eye = "img/portraitAssets/" + util.choice(eyes) + ".png";
    character.hair = "img/portraitAssets/" + util.choice(hairs) + ".png";
    character.head = "img/portraitAssets/" + util.choice(heads) + ".png";
    character.mouth = "img/portraitAssets/" + util.choice(mouths) + ".png";
    character.neck = "img/portraitAssets/" + util.choice(necks) + ".png";
    character.nose = "img/portraitAssets/" + util.choice(noses) + ".png";
}
