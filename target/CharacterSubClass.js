import { wizardSpells, necromancySpells, druidSpells } from "./Spells";
import { util } from "./Util";
import { martialMelee, martialRanged } from "./WeaponSets";
import { heavy } from "./ArmorSets";
import { languages } from "./Languages";
export function addClericSubClassFeatures(character) {
    util.choice(clericSubClassFunctionList)(character);
}
const clericSubClassFunctionList = [
    addArcanaDomainFeatures,
    addDeathDomainFeatures,
    addForgeDomainFeatures,
    addGraveDomainFeatures,
    addKnowledgeDomainFeatures,
    addLifeDomainFeatures,
    addLightDomainFeatures,
    addNatureDomainFeatures,
    addTempestDomainFeatures,
    addTrickeryDomainFeatures,
    addWarDomainFeatures
];
function addArcanaDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Detect magic", "Magic missle");
    character.level0Spells = character.level0Spells.concat(util.choices(wizardSpells[0], 2, character.level0Spells));
    character.skillProfs = character.skillProfs.concat({ int: { arcana: 2 } });
    character.traits = character.traits.concat("Arcana Domain");
}
function addDeathDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("False life", "Ray of sickness");
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.level0Spells = character.level0Spells.concat(util.choice(necromancySpells[0], character.level0Spells));
    character.traits = character.traits.concat("Death Domain", "Reaper");
}
function addForgeDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Searing smite", "Shield");
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Forge Domain", "Blessing of the Forge");
}
function addGraveDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Bane", "False life");
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Grave Domain", "Circle of Mortality", "Eyes of the Grave");
}
function addKnowledgeDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Command", "Identify");
    character.languages = character.languages.concat(util.choices(languages, 2, character.languages));
    const blessingOfKnowledge = util.choices([
        { int: { arcana: 2 } },
        { int: { history: 2 } },
        { int: { nature: 2 } },
        { int: { religion: 2 } }
    ], 2, character.skillProfs);
    character.skillProfs = character.skillProfs.concat(blessingOfKnowledge);
    character.expertise = character.expertise.concat(blessingOfKnowledge);
    character.traits = character.traits.concat("Knowledge Domain");
}
function addLifeDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Bless", "Cure wounds");
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Life Domain", "Disciple of Life");
}
function addLightDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Burning hands", "Faerie fire");
    character.level0Spells = character.level0Spells.concat("Light");
    character.traits = character.traits.concat("Light Domain", "Warding Flare");
}
function addNatureDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Animal friendship", "Speak with animals");
    character.skillProfs = character.skillProfs.concat(util.choice([
        { int: { nature: 2 } },
        { wis: { animalHandling: 2 } },
        { wis: { survival: 2 } }
    ], character.skillProfs));
    character.level0Spells = character.level0Spells.concat(util.choice(druidSpells[0], character.level0Spells));
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Nature Domain");
}
function addTempestDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Fog cloud", "Thunderwave");
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Tempest Domain", "Wrath of the Storm");
}
function addTrickeryDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Charm person", "Disguise self");
    character.traits = character.traits.concat("Trickery Domain", "Blessing of the Trickster");
}
function addWarDomainFeatures(character) {
    character.level1Spells = character.level1Spells.concat("Divine favor", "Shield of faith");
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("War Domain", "War Priest");
}
