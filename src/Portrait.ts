import { util } from "./Util";
import { Character } from "./Character";
import * as assetStructure from "./assetStructure.json";

const basePath = "img/Assets/";

export function generatePortrait(character: Character) {

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
    console.log("name is: " + character.raceName);
    console.log(isDragonborn.test(character.raceName));
    if (isDragonborn.test(character.raceName)) addDragonbornAssets(character);
    if (isDwarf.test(character.raceName)) addDwarfAssets(character);
    if (isElf.test(character.raceName)) addElfAssets(character);
    if (isGnome.test(character.raceName)) addGnomeAssets(character);
    if (isHalfElf.test(character.raceName)) addHalfElfAssets(character);
    if (isHalfOrc.test(character.raceName)) addHalfOrcAssets(character);
    if (isHalfling.test(character.raceName)) addHalflingAssets(character);
    if (isHuman.test(character.raceName)) addHumanAssets(character);
    if (isTiefling.test(character.raceName)) addTieflingAssets(character);
}

function addDragonbornAssets(character: Character) {
    character.hair  = basePath + "Dragonborn/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Hair));
    character.ear   = "";
    character.eye   = basePath + "Dragonborn/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Eyes));
    character.nose  = basePath + "Dragonborn/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Noses));
    character.mouth = basePath + "Dragonborn/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Mouths));
    character.chin  = basePath + "Dragonborn/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dragonborn.Chins));
}

function addDwarfAssets(character: Character) {
    character.hair  = basePath + "Dwarf/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Hair));
    character.ear   = basePath + "Dwarf/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Ears));
    character.eye   = basePath + "Dwarf/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Eyes));
    character.nose  = basePath + "Dwarf/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Noses));
    character.mouth = basePath + "Dwarf/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Mouths));
    character.chin  = basePath + "Dwarf/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Dwarf.Chins));
}

function addElfAssets(character: Character) {
    character.hair  = basePath + "Elf/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Hair));
    character.ear   = basePath + "Elf/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Ears));
    character.eye   = basePath + "Elf/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Eyes));
    character.nose  = basePath + "Elf/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Noses));
    character.mouth = basePath + "Elf/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Mouths));
    character.chin  = basePath + "Elf/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Elf.Chins));
}

function addGnomeAssets(character: Character) {
    character.hair  = basePath + "Gnome/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Hair));
    character.ear   = basePath + "Gnome/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Ears));
    character.eye   = basePath + "Gnome/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Eyes));
    character.nose  = basePath + "Gnome/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Noses));
    character.mouth = basePath + "Gnome/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Mouths));
    character.chin  = basePath + "Gnome/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Gnome.Chins));
}

function addHalfElfAssets(character: Character) {
    character.hair  = basePath + "Half-Elf/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Hair));
    character.ear   = basePath + "Half-Elf/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Ears));
    character.eye   = basePath + "Half-Elf/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Eyes));
    character.nose  = basePath + "Half-Elf/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Noses));
    character.mouth = basePath + "Half-Elf/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Mouths));
    character.chin  = basePath + "Half-Elf/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Elf"].Chins));
}

function addHalfOrcAssets(character: Character) {
    character.hair  = basePath + "Half-Orc/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Hair));
    character.ear   = basePath + "Half-Orc/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Ears));
    character.eye   = basePath + "Half-Orc/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Eyes));
    character.nose  = basePath + "Half-Orc/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Noses));
    character.mouth = basePath + "Half-Orc/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Mouths));
    character.chin  = basePath + "Half-Orc/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"]["Half-Orc"].Chins));
}

function addHalflingAssets(character: Character) {
    character.hair  = basePath + "Halfling/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Hair));
    character.ear   = basePath + "Halfling/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Ears));
    character.eye   = basePath + "Halfling/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Eyes));
    character.nose  = basePath + "Halfling/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Noses));
    character.mouth = basePath + "Halfling/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Mouths));
    character.chin  = basePath + "Halfling/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Halfling.Chins));
}

function addHumanAssets(character: Character) {
    character.hair  = basePath + "Human/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Hair));
    character.ear   = basePath + "Human/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Ears));
    character.eye   = basePath + "Human/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Eyes));
    character.nose  = basePath + "Human/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Noses));
    character.mouth = basePath + "Human/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Mouths));
    character.chin  = basePath + "Human/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Human.Chins));
}

function addTieflingAssets(character: Character) {
    character.hair  = basePath + "Tiefling/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Hair));
    character.ear   = basePath + "Tiefling/Ears/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Ears));
    character.eye   = basePath + "Tiefling/Eyes/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Eyes));
    character.nose  = basePath + "Tiefling/Noses/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Noses));
    character.mouth = basePath + "Tiefling/Mouths/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Mouths));
    character.chin  = basePath + "Tiefling/Chins/" + util.choice(Object.keys(assetStructure["./img/Assets"].Tiefling.Chins));
}

// function getAsset(type: string, race: string): string {
//     return basePath + race + "/Hair/" + util.choice(Object.keys(assetStructure["./img/Assets"][race][type]));
// }