import { wizardSpells, necromancySpells, druidSpells, warlockSpells } from "./Spells";
import { util } from "./Util";
import { martialMelee, martialRanged } from "./WeaponSets";
import { findArmor, heavy } from "./ArmorSets";
import { languages } from "./Languages";
export function addClericSubClassFeatures(character) {
    util.choice(clericSubClassFunctionList)(character);
}
export function addSorcererSubClassFeatures(character) {
    util.choice(sorcererSubClassFunctionList)(character);
}
export function addWarlockSubClassFeatures(character) {
    util.choice(warlockSubClassFunctionsList)(character);
}
export function addDruidSubClassFeatures(character) {
    util.choice(druidSubClassFunctionList)(character);
}
export function addWizardSubClassFeatures(character) {
    util.choice(wizardSubClassFunctionList)(character);
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
const sorcererSubClassFunctionList = [
    addDraconicAncestryOriginFeatures,
    addWildMagicOriginFeatures,
    addFavoredSoulOriginFeatures,
    addShadowMagicOriginFeatures,
    addStormSorceryOriginFeatures
];
const warlockSubClassFunctionsList = [
    addArchfeyPatronFeatures,
    addFiendPatronFeatures,
    addGreatOldOnePatronFeatures,
    addCelestialPatronFeatures,
    addHexBladePatronFeatures
];
const druidSubClassFunctionList = [
    addCircleOfTheLandFeatures,
    addCircleOfTheMoonFeatures,
    addCircleOfDreamsFeatures,
    addCircleOfTheShepherdFeatures
];
const wizardSubClassFunctionList = [
    addSchoolOfAbjuration,
    addSchoolOfConjuration,
    addSchoolOfDiviniation,
    addSchoolOfEnchantment,
    addSchoolOfEvocation,
    addSchoolOfIllusion,
    addSchoolOfNecromancy,
    addSchoolOfTransmutation,
    addSchoolOfWarMagic
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
function addDraconicAncestryOriginFeatures(character) {
    character.armorProfs = character.armorProfs.concat(findArmor("Unarmored defence draconic"));
    character.hp = character.hp + 1;
    character.traits = character.traits.concat("Draconic Bloodline", util.choice([
        "Black Draconic Ancestry",
        "Blue Draconic Ancestry",
        "Brass Draconic Ancestry",
        "Bronze Draconic Ancestry",
        "Copper Draconic Ancestry",
        "Gold Draconic Ancestry",
        "Green Draconic Ancestry",
        "Red Draconic Ancestry",
        "Silver Draconic Ancestry",
        "White Draconic Ancestry"
    ], character.traits));
}
function addGoodAffinityFeatures(character) {
    character.traits = character.traits.concat("Good Divine Magic");
    character.level1Spells = character.level1Spells.concat("Cure wounds");
}
function addEvilAffinityFeatures(character) {
    character.traits = character.traits.concat("Evil Divine Magic");
    character.level1Spells = character.level1Spells.concat("Inflict wounds");
}
function addLawAffinityFeatures(character) {
    character.traits = character.traits.concat("Lawful Divine Magic");
    character.level1Spells = character.level1Spells.concat("Bless");
}
function addChaosAffinityFeatures(character) {
    character.traits = character.traits.concat("Chaotic Divine Magic");
    character.level1Spells = character.level1Spells.concat("Bane");
}
function addNeutralityAffinityFeatures(character) {
    character.traits = character.traits.concat("Neutral Divine Magic");
    character.level1Spells = character.level1Spells.concat("Protection from good and evil");
}
function addFavoredSoulOriginFeatures(character) {
    util.choice([
        addGoodAffinityFeatures,
        addEvilAffinityFeatures,
        addLawAffinityFeatures,
        addChaosAffinityFeatures,
        addNeutralityAffinityFeatures
    ])(character);
    character.traits = character.traits.concat("Favored by the Gods");
}
function addShadowMagicOriginFeatures(character) {
    character.traits = character.traits.concat("Shadow Magic", "Superior Darkvision", "Strength of the Grave");
}
function addStormSorceryOriginFeatures(character) {
    character.traits = character.traits.concat("Storm Sorcery", "Tempestuous Magic");
    character.languages = character.languages.concat("Primordial");
}
function addWildMagicOriginFeatures(character) {
    character.traits = character.traits.concat("Wild Magic", "Wild Magic Surge", "Tides of Chaos");
}
function addArchfeyPatronFeatures(character) {
    character.level1Spells = character.level1Spells.concat(util.choices(warlockSpells[1].concat("Faerie fire", "Sleep"), 2, character.level1Spells));
    character.traits = character.traits.concat("Archefey Patron", "Fey Presence");
}
function addFiendPatronFeatures(character) {
    character.level1Spells = character.level1Spells.concat(util.choices(warlockSpells[1].concat("Burning hands", "Command"), 2, character.level1Spells));
    character.traits = character.traits.concat("Fiend Patron", "Dark One's Blessing");
}
function addGreatOldOnePatronFeatures(character) {
    character.level1Spells = character.level1Spells.concat(util.choices(warlockSpells[1].concat("Dissonant whispers", "Tasha's hideous laughter"), 2, character.level1Spells));
    character.traits = character.traits.concat("Great Old One Patron", "Awakened Mind");
}
function addCelestialPatronFeatures(character) {
    character.level1Spells = character.level1Spells.concat(util.choices(warlockSpells[1].concat("Cure wounds", "Guiding bolt"), 2, character.level1Spells));
    character.level0Spells = character.level0Spells.concat("Light", "Sacred flame");
    character.traits = character.traits.concat("Celestial Patron", "Healing Light");
}
function addHexBladePatronFeatures(character) {
    character.level1Spells = character.level1Spells.concat(util.choices(warlockSpells[1].concat("Shield", "Wrathful smite"), 2, character.level1Spells));
    character.traits = character.traits.concat("Hexblade", "Hexblade's Curse", "Hex Warrior");
}
function addCircleOfTheLandFeatures(character) {
    character.level0Spells = character.level0Spells.concat(util.choice(druidSpells[0], character.level0Spells));
    character.traits = character.traits.concat([
        "Circle of the Land",
        "Natural Recovery"
    ]);
}
function addCircleOfTheMoonFeatures(character) {
    character.traits = character.traits.concat([
        "Circle of the Moon",
        "Combat wild shape",
        "Circle forms"
    ]);
}
function addCircleOfDreamsFeatures(character) {
    character.traits = character.traits.concat([
        "Circle of Dreams",
        "Balm of the Summer Court"
    ]);
}
function addCircleOfTheShepherdFeatures(character) {
    character.traits = character.traits.concat([
        "Circle of the Shepherd",
        "Speech of the Woods",
        "Spirit Totem"
    ]);
    character.languages.concat("Sylvan");
}
function addSchoolOfAbjuration(character) {
    character.traits = character.traits.concat([
        "School of Abjuration",
        "Abjuration Savant",
        "Arcane Ward"
    ]);
}
function addSchoolOfConjuration(character) {
    character.traits = character.traits.concat([
        "School of Conjuration",
        "Conjuration Savant",
        "Minor Conjuration"
    ]);
}
function addSchoolOfDiviniation(character) {
    character.traits = character.traits.concat([
        "School of Divination",
        "Divination Savant",
        "Portent"
    ]);
}
function addSchoolOfEnchantment(character) {
    character.traits = character.traits.concat([
        "School of Enchantment",
        "Enchantment Savant",
        "Hypnotic Gaze"
    ]);
}
function addSchoolOfEvocation(character) {
    character.traits = character.traits.concat([
        "School of Evocation",
        "Evocation Savant",
        "Sculpt Spells"
    ]);
}
function addSchoolOfIllusion(character) {
    character.traits = character.traits.concat([
        "School of Illusion",
        "Illusion Savant",
        "Improved Minor Illusion"
    ]);
    if (character.level0Spells.includes("Minor illusion")) {
        character.level0Spells.push(util.choice(wizardSpells[0], character.level0Spells));
    }
    else {
        character.level0Spells.push("Minor illusion");
    }
}
function addSchoolOfNecromancy(character) {
    character.traits = character.traits.concat([
        "School of Necromancy",
        "Necromancy Savant",
        "Grim Harvest"
    ]);
}
function addSchoolOfTransmutation(character) {
    character.traits = character.traits.concat([
        "School of Transmutation",
        "Transmutation Savant",
        "Minor Alchemy"
    ]);
}
function addSchoolOfWarMagic(character) {
    character.traits = character.traits.concat([
        "Arcane Tradition: War Magic",
        "Arcane Deflection",
        "Tactical Wit"
    ]);
}
