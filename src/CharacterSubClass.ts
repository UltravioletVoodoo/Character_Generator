import { Character } from "./Character";
import { wizardSpells, necromancySpells } from "./Spells";
import { util } from "./Util";
import { martialMelee, martialRanged } from "./WeaponSets";

export function addClericSubClassFeatures(character: Character){

}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
    character.traits = character.traits.concat("Arcana Domain");
}

function addDeathDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "False life",
        "Ray of sickness"
    );
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.level0Spells = character.level0Spells.concat(
        util.choice(necromancySpells[0], character.level0Spells)
    );
    character.traits = character.traits.concat("Death Domain","Reaper");
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}

function addArcanaDomainFeatures(character: Character){
    character.level1Spells = character.level1Spells.concat(
        "Detect magic",
        "Magic missile"
    );
    character.skillProfs = character.skillProfs.concat(
        {int: {arcana: 2}}
    );
    character.level0Spells = character.level0Spells.concat(
        util.choices(wizardSpells[0], 2, character.level0Spells)
    );
}