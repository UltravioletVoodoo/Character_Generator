import { util } from "./Util";
import * as assetStructure from "../assetStructure.json";
const basePath = "img/Assets/";
export function generatePortrait(character) {
    // Give all players the standard, shared head
    character.head = basePath + "Shared/BaseHead.png";
    // Pick a neck from the standard shared neck assets
    character.neck = basePath + "Shared/Necks/" + util.choice(Object.keys(assetStructure["./img/Assets"].Shared.Necks));
    // Choose Asset sets based on character
    const isDragonborn = /dragonborn/i;
    const isDwarf = / dwarf/i;
    const isElf = / elf/i;
    const isGnome = / gnome/i;
    const isHalfElf = /half-elf/i;
    const isHalfOrc = /half-orc/i;
    const isHalfling = /halfling/i;
    const isHuman = /human/i;
    const isTiefling = /tiefling/i;
    if (isDragonborn.test(character.raceName))
        addDragonbornAssets(character);
    if (isDwarf.test(character.raceName))
        addDwarfAssets(character);
    if (isElf.test(character.raceName))
        addElfAssets(character);
    if (isGnome.test(character.raceName))
        addGnomeAssets(character);
    if (isHalfElf.test(character.raceName))
        addHalfElfAssets(character);
    if (isHalfOrc.test(character.raceName))
        addHalfOrcAssets(character);
    if (isHalfling.test(character.raceName))
        addHalflingAssets(character);
    if (isHuman.test(character.raceName))
        addHumanAssets(character);
    if (isTiefling.test(character.raceName))
        addTieflingAssets(character);
}
function addDragonbornAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Hair));
    character.ear = "";
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Chins));
}
function addDwarfAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Chins));
}
function addElfAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Chins));
}
function addGnomeAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Chins));
}
function addHalfElfAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Chins));
}
function addHalfOrcAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Chins));
}
function addHalflingAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Chins));
}
function addHumanAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Human.Chins));
}
function addTieflingAssets(character) {
    character.hair = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Hair));
    character.ear = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Ears));
    character.eye = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Eyes));
    character.nose = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Noses));
    character.mouth = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Mouths));
    character.chin = util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Chins));
}
