import { Character } from "./Character";
import { wizardSpells, necromancySpells, druidSpells, warlockSpells, eldritchKnightSpells, rogueSpells } from "./Spells";
import { util } from "./Util";
import { martialMelee, martialRanged, findWeapon, simpleMelee, simpleRanged } from "./WeaponSets";
import { findArmor, heavy, medium } from "./ArmorSets";
import { languages } from "./Languages";
import { DeepPartial, Skills, allSkillPartialProfs } from "./Skills";
import { findTool, gaming } from "./ToolSets";

export function addClericSubClassFeatures(character: Character){
    util.choice(clericSubClassFunctionList)(character);
}

export function addSorcererSubClassFeatures(character: Character){
    util.choice(sorcererSubClassFunctionList)(character);
}

export function addWarlockSubClassFeatures(character: Character){
    util.choice(warlockSubClassFunctionsList)(character);
}

export function addDruidSubClassFeatures(character: Character) {
    util.choice(druidSubClassFunctionList)(character);
}

export function addWizardSubClassFeatures(character: Character) {
    util.choice(wizardSubClassFunctionList)(character);
}

export function addBarbarionSubClassFeatures(character: Character) {
    util.choice(barbarianSubClassFunctionList)(character);
}

export function addBardSubClassFeatures(character: Character) {
    util.choice(bardSubClassFunctionList)(character);
}

export function addFighterSubClassFeatures(character: Character) {
    util.choice(fighterSubClassFunctionList)(character);
}

export function addMonkSubClassFeatures(character: Character) {
    util.choice(monkSubClassFunctionsList)(character);
}

export function addPaladinSubClassFeatures(character: Character) {
    util.choice(paladinSubClassFunctionsList)(character);
}

export function addRangerSubClassFeatures(character: Character) {
    util.choice(rangerSubClassFunctionsList)(character);
}

export function addRogueSubClassFeatures(character: Character) {
    util.choice(rogueSubClassFunctionsList)(character);
}

const clericSubClassFunctionList: ((character: Character) => void)[] = [
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

const sorcererSubClassFunctionList: ((character: Character) => void)[] = [
    addDraconicAncestryOriginFeatures,
    addWildMagicOriginFeatures,
    addFavoredSoulOriginFeatures,
    addShadowMagicOriginFeatures,
    addStormSorceryOriginFeatures
];

const warlockSubClassFunctionsList: ((character: Character) => void)[] = [
    addArchfeyPatronFeatures,
    addFiendPatronFeatures,
    addGreatOldOnePatronFeatures,
    addCelestialPatronFeatures,
    addHexBladePatronFeatures
];

const druidSubClassFunctionList: ((character: Character) => void)[] = [
    addCircleOfTheLandFeatures,
    addCircleOfTheMoonFeatures,
    addCircleOfDreamsFeatures,
    addCircleOfTheShepherdFeatures
];

const wizardSubClassFunctionList: ((character: Character) => void)[] = [
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

const barbarianSubClassFunctionList: ((character: Character) => void)[] = [
    addPathOfTheBeserker,
    addPathOfTheTotemWarrior,
    addPathOfTheAncestralGuardian,
    addPathOfTheStormHerald,
    addPathOfTheZealot
];

const bardSubClassFunctionList: ((character: Character) => void)[] = [
    addCollegeOfLore,
    addCollegeOfValor,
    addCollegeOfGlamour,
    addCollegeOfSwords,
    addCollegeOfWhispers
];

const fighterSubClassFunctionList: ((character: Character) => void)[] = [
    addChampionArchetype,
    addBattleMasterArchetype,
    addEldritchKnightArchetype,
    addArcaneArcherArchetype,
    addCavalierArchetype,
    addSamuraiArchetype
]; 

const monkSubClassFunctionsList: ((character: Character) => void)[] = [
    addWayOfTheOpenHand,
    addWayOfShadow,
    addWayOfTheFourElements,
    addWayOfTheDrunkenMaster,
    addWayOfTheKensei,
    addWayOfTheSunSoul
];

const paladinSubClassFunctionsList: ((character: Character) => void)[] = [
    addOathOfDevotion,
    addOathOfTheAncients,
    addOathOfVengeance,
    addOathOfConquest,
    addOathOfRedemption
];

const rangerSubClassFunctionsList: ((character: Character) => void)[] = [
    addBeastConclave,
    addHunterConclave,
    addDeepStalkerConclave
];

const rogueSubClassFunctionsList: ((character: Character) => void)[] = [
    addThief,
    addAssassin,
    addArcaneTrickster,
    addInquisitive,
    addMastermind,
    addScout,
    addSwashbuckler
];

function addForgeDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Searing smite",
        "Shield"
    );
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Forge Domain", "Blessing of the Forge");
}

function addGraveDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Bane",
        "False life"
    );
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Grave Domain", "Circle of Mortality", "Eyes of the Grave");
}

function addKnowledgeDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Command",
        "Identify"
    );
    character.languages = character.languages.concat(
        util.choices(languages, 2, character.languages)
    );
    const blessingOfKnowledge = util.choices<DeepPartial<Skills>>([
        {int: {arcana: 2}},
        {int: {history: 2}},
        {int: {nature: 2}},
        {int: {religion: 2}}
    ], 2, character.skillProfs);
    character.skillProfs = character.skillProfs.concat(blessingOfKnowledge);
    character.expertise = character.expertise.concat(blessingOfKnowledge);
    character.traits = character.traits.concat("Knowledge Domain");
}

function addLifeDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Bless",
        "Cure wounds"
    );
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Life Domain", "Disciple of Life");
}

function addLightDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Burning hands",
        "Faerie fire"
    );
    character.inherentSpells[0] = character.inherentSpells[0].concat("Light");
    character.traits = character.traits.concat("Light Domain", "Warding Flare");
}

function addNatureDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Animal friendship",
        "Speak with animals"
    );
    character.skillProfs = character.skillProfs.concat(
        util.choice<DeepPartial<Skills>>([
            {int: {nature: 2}},
            {wis: {animalHandling: 2}},
            {wis: {survival: 2}}
        ], character.skillProfs)
    );
    character.inherentSpells[0] = character.inherentSpells[0].concat(
        util.choice(druidSpells[0], character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Nature Domain");
}

function addTempestDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Fog cloud",
        "Thunderwave"
    );
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("Tempest Domain", "Wrath of the Storm");
}

function addTrickeryDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Charm person",
        "Disguise self"
    );
    character.traits = character.traits.concat("Trickery Domain", "Blessing of the Trickster");
}

function addWarDomainFeatures(character: Character){
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Divine favor",
        "Shield of faith"
    );
    character.weaponProfs = character.weaponProfs.concat(martialMelee, martialRanged);
    character.armorProfs = character.armorProfs.concat(heavy);
    character.traits = character.traits.concat("War Domain", "War Priest");
}

function addDraconicAncestryOriginFeatures(character: Character) {
    character.armorProfs = character.armorProfs.concat(findArmor("Unarmored defence draconic"));
    character.hp = character.hp + 1;
    character.traits = character.traits.concat(
        "Draconic Bloodline",
        util.choice([
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
        ], character.traits)
    );
}

function addGoodAffinityFeatures(character: Character){
    character.traits = character.traits.concat("Good Divine Magic");
    character.inherentSpells[1] = character.inherentSpells[1].concat("Cure wounds");
}

function addEvilAffinityFeatures(character: Character){
    character.traits = character.traits.concat("Evil Divine Magic");
    character.inherentSpells[1] = character.inherentSpells[1].concat("Inflict wounds");
}

function addLawAffinityFeatures(character: Character){
    character.traits = character.traits.concat("Lawful Divine Magic");
    character.inherentSpells[1] = character.inherentSpells[1].concat("Bless");
}

function addChaosAffinityFeatures(character: Character){
    character.traits = character.traits.concat("Chaotic Divine Magic");
    character.inherentSpells[1] = character.inherentSpells[1].concat("Bane");
}

function addNeutralityAffinityFeatures(character: Character){
    character.traits = character.traits.concat("Neutral Divine Magic");
    character.inherentSpells[1] = character.inherentSpells[1].concat("Protection from good and evil");
}

function addFavoredSoulOriginFeatures(character: Character) {
    util.choice([
        addGoodAffinityFeatures,
        addEvilAffinityFeatures,
        addLawAffinityFeatures,
        addChaosAffinityFeatures,
        addNeutralityAffinityFeatures
    ])(character);
    character.traits = character.traits.concat("Favored by the Gods");
}

function addShadowMagicOriginFeatures(character: Character) {
    character.traits = character.traits.concat("Shadow Magic", "Superior Darkvision", "Strength of the Grave");
}

function addStormSorceryOriginFeatures(character: Character) {
    character.traits = character.traits.concat("Storm Sorcery", "Tempestuous Magic");
    character.languages = character.languages.concat("Primordial");
}

function addWildMagicOriginFeatures(character: Character){
    character.traits = character.traits.concat("Wild Magic", "Wild Magic Surge", "Tides of Chaos");
}

function addArchfeyPatronFeatures(character: Character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(warlockSpells[1].concat("Faerie fire", "Sleep"), 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.traits = character.traits.concat(
        "Archefey Patron",
        "Fey Presence"
    );
}

function addFiendPatronFeatures(character: Character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(warlockSpells[1].concat("Burning hands", "Command"), 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.traits = character.traits.concat(
        "Fiend Patron",
        "Dark One's Blessing"
    );
}

function addGreatOldOnePatronFeatures(character: Character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(warlockSpells[1].concat("Dissonant whispers", "Tasha's hideous laughter"), 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.traits = character.traits.concat(
        "Great Old One Patron",
        "Awakened Mind"
    );
}

function addCelestialPatronFeatures(character: Character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(warlockSpells[1].concat("Cure wounds", "Guiding bolt"), 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.inherentSpells[0] = character.inherentSpells[0].concat(
        "Light",
        "Sacred flame"
    );
    character.traits = character.traits.concat(
        "Celestial Patron",
        "Healing Light"
    );
}

function addHexBladePatronFeatures(character: Character) {
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(warlockSpells[1].concat("Shield", "Wrathful smite"), 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.traits = character.traits.concat(
        "Hexblade",
        "Hexblade's Curse",
        "Hex Warrior"
    );
}

function addCircleOfTheLandFeatures(character: Character) {
    character.inherentSpells[0].push(util.choice(druidSpells[0], character.inherentSpells[0].concat(character.memorizedSpells[0])))
    character.traits = character.traits.concat([
        "Circle of the Land",
        "Circle Spells: " + util.choice([
            "Arctic",
            "Coast",
            "Desert",
            "Forest",
            "Grassland",
            "Mountain",
            "Swamp",
            "Underdark"
        ]),
        "Natural Recovery"
    ]);
}

function addCircleOfTheMoonFeatures(character: Character) {
    character.traits = character.traits.concat([
        "Circle of the Moon",
        "Combat wild shape",
        "Circle forms"
    ]);
}

function addCircleOfDreamsFeatures(character: Character) {
    character.traits = character.traits.concat([
        "Circle of Dreams",
        "Balm of the Summer Court"
    ]);
}

function addCircleOfTheShepherdFeatures(character: Character) {
    character.traits = character.traits.concat([
        "Circle of the Shepherd",
        "Speech of the Woods",
        "Spirit Totem"
    ]);
    character.languages.concat("Sylvan");
}

function  addSchoolOfAbjuration(character: Character) {
    character.traits = character.traits.concat([
        "School of Abjuration",
        "Abjuration Savant",
        "Arcane Ward"
    ]);
}

function addSchoolOfConjuration(character: Character) {
    character.traits = character.traits.concat([
        "School of Conjuration",
        "Conjuration Savant",
        "Minor Conjuration"
    ]);
}

function addSchoolOfDiviniation(character: Character) {
    character.traits = character.traits.concat([
        "School of Divination",
        "Divination Savant",
        "Portent"
    ]);
}

function addSchoolOfEnchantment(character: Character) {
    character.traits = character.traits.concat([
        "School of Enchantment",
        "Enchantment Savant",
        "Hypnotic Gaze"
    ]);
}

function addSchoolOfEvocation(character: Character) {
    character.traits = character.traits.concat([
        "School of Evocation",
        "Evocation Savant",
        "Sculpt Spells"
    ]);
}

function addSchoolOfIllusion(character: Character) {
    character.traits = character.traits.concat([
        "School of Illusion",
        "Illusion Savant",
        "Improved Minor Illusion"
    ]);
    if (character.inherentSpells[0].includes("Minor illusion") || character.memorizedSpells[0].includes("Minor illusion")) {
        character.inherentSpells[0].push(util.choice(wizardSpells[0], character.inherentSpells[0].concat(character.memorizedSpells[0])));
    } else {
        character.inherentSpells[0].push("Minor illusion");
    }
}

function addSchoolOfNecromancy(character: Character) {
    character.traits = character.traits.concat([
        "School of Necromancy",
        "Necromancy Savant",
        "Grim Harvest"
    ]);
}

function addSchoolOfTransmutation(character: Character) {
    character.traits = character.traits.concat([
        "School of Transmutation",
        "Transmutation Savant",
        "Minor Alchemy"
    ]);
}

function addSchoolOfWarMagic(character: Character) {
    character.traits = character.traits.concat([
        "Arcane Tradition: War Magic",
        "Arcane Deflection",
        "Tactical Wit"
    ]);
}

function addPathOfTheBeserker(character: Character) {
    character.traits = character.traits.concat([
        "Path of the Beserker",
        "Frenzy"
    ]);
}

function addPathOfTheTotemWarrior(character: Character) {
    character.traits = character.traits.concat([
        "Path of the Totem Warrior",
        "Spirit Seeker",
        "Totem Spirit: " + util.choice([
            "Bear",
            "Eagle",
            "Wolf"
        ])
    ]);
    character.inherentSpells[1].push("Speak with animals (Ritual Only)");
    character.inherentSpells[2].push("Beast sense (Ritual Only)")
}

function addPathOfTheAncestralGuardian(character: Character) {
    character.traits = character.traits.concat([
        "Path of the Ancestral Guardian",
        "Ancestral Protectors"
    ]);
}

function addPathOfTheStormHerald(character: Character) {
    character.traits = character.traits.concat([
        "Path of the Storm Herald",
        "Storm Aura: " + util.choice([
            "Desert",
            "Sea",
            "Tundra"
        ])
    ]);
}

function addPathOfTheZealot(character: Character) {
    character.traits = character.traits.concat([
        "Path of the Zealot",
        "Divine Fury",
        "Warrior of the Gods"
    ]);
}

function addCollegeOfLore(character: Character) {
    character.skillProfs = character.skillProfs.concat(
        util.choices(allSkillPartialProfs, 3, character.skillProfs)
    );
    character.traits = character.traits.concat([
        "College of Lore",
        "Cutting Words"
    ]);
}

function addCollegeOfValor(character: Character) {
    character.traits = character.traits.concat([
        "College of Valor",
        "Combat Inspiration"
    ]);
    character.armorProfs = character.armorProfs.concat(medium);
    character.weaponProfs = character.weaponProfs.concat(martialMelee.concat(martialRanged));
}

function addCollegeOfGlamour(character: Character) {
    character.traits = character.traits.concat([
        "College of Glamour",
        "Mantle of Inspiration",
        "Enthralling Performance"
    ]);
}

function addCollegeOfSwords(character: Character) {
    character.traits = character.traits.concat([
        "College of Swords",
        "Fighting Style: " + util.choice([
            "Dueling",
            "Two-Weapon Fighting"
        ]),
        "Blade Flourish"
    ]);
    character.weaponProfs.push(findWeapon("Scimitar"));
    character.armorProfs = character.armorProfs.concat(medium);
}

function addCollegeOfWhispers(character: Character) {
    character.traits = character.traits.concat([
        "College of Whispers",
        "Psychic Blades",
        "Words of Terror"
    ]);
}

function addChampionArchetype(character: Character) {
    character.traits = character.traits.concat([
        "Martial Archetype: Champion",
        "Improved Critical"
    ]);
}

function addBattleMasterArchetype(character: Character) {
    character.traits.push("Combat Superiority")
    character.traits = character.traits.concat(
        util.choices([
            "Maneuver: Commander's Strike",
            "Maneuver: Disarming Attack",
            "Maneuver: Distracting Strike",
            "Maneuver: Evasive Footwork",
            "Maneuver: Feinting Attack",
            "Maneuver: Goading Attack",
            "Maneuver: Lunging Attack",
            "Maneuver: Maneuvering Attack",
            "Maneuver: Menacing Attack",
            "Maneuver: Parry",
            "Maneuver: Precision Attack",
            "Maneuver: Pushing Attack",
            "Maneuver: Rally",
            "Maneuver: Riposte",
            "Maneuver: Sweeping Attack",
            "Maneuver: Trip Attack"
        ], 3)
    );
}

function addEldritchKnightArchetype(character: Character) {
    character.traits = character.traits.concat([
        "Martial Archetype: Eldritch Knight",
        "Weapon Bond"
    ]);
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(
        util.choices(wizardSpells[0], 2, character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(eldritchKnightSpells, 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choice(wizardSpells[1], character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
}

function addArcaneArcherArchetype(character: Character) {
    character.traits = character.traits.concat([
        "Martial Archetype: Arcane Archer",
        "Arcane Archer Lore"
    ]);
    character.skillProfs.push(util.choice([
        {int: {arcana: 2}},
        {int: {nature: 2}}
    ]));
    character.inherentSpells[0] = character.inherentSpells[0].concat(
        util.choice([
            "Prestidigitation",
            "Druidcraft"
        ], character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    character.traits = character.traits.concat(
        util.choices([
            "Arcane Shot: Banishing Arrow",
            "Arcane Shot: Beguiling Arrow",
            "Arcane Shot: Bursting Arrow",
            "Arcane Shot: Enfeebling Arrow",
            "Arcane Shot: Grasping Arrow",
            "Arcane Shot: Piercing Arrow",
            "Arcane Shot: Seeking Arrow",
            "Arcane Shot: Shadow Arrow"
        ], 2)
    );
}

function addCavalierArchetype(character: Character) {
    if (util.choice([1,2]) == 1) {
        character.skillProfs.push(util.choice<DeepPartial<Skills>>([
            {wis: {animalHandling: 2}},
            {int: {history: 2}},
            {wis: {insight: 2}},
            {cha: {performance: 2}},
            {cha: {persuasion: 2}}
        ]));
    } else {
        character.languages.push(util.choice(languages, character.languages))
    }
    character.traits = character.traits.concat([
        "Martial Archetype: Cavalier",
        "Born to the Saddle",
        "Unwavering Mark"
    ]);
}

function addSamuraiArchetype(character: Character) {
    if (util.choice([1,2]) == 1) {
        character.skillProfs.push(util.choice<DeepPartial<Skills>>([
            {int: {history: 2}},
            {wis: {insight: 2}},
            {cha: {performance: 2}},
            {cha: {persuasion: 2}}
        ]));
    } else {
        character.languages.push(util.choice(languages, character.languages))
    }
    character.traits = character.traits.concat([
        "Martial Archetype: Samurai",
        "Fighting Spirit"
    ]);
}

function addWayOfTheOpenHand(character: Character) {
    character.traits = character.traits.concat(
        "Way of the Open Hand",
        "Open Hand Technique"
    );
}

function addWayOfShadow(character: Character) {
    character.traits = character.traits.concat([
        "Way of Shadow",
        "Shadow Arts"
    ]);
    character.inherentSpells[0].push("Minor illusion");
}

function addWayOfTheFourElements(character: Character) {
    character.traits.push("Way of the Four Elements");
    character.traits = character.traits.concat([
        "Elemental Attunement",
        util.choice([
            "Fangs of the Fire Snake",
            "Fist of Four Thunders",
            "Fist of Unbroken Air",
            "Rush of the Gale Spirits",
            "Shape of the Flowing River",
            "Sweeping Cinder Strike",
            "Water Whip"
        ])
    ]);
}

function addWayOfTheDrunkenMaster(character: Character) {
    character.traits = character.traits.concat([
        "Way of the Drunken Master",
        "Drunken Technique"
    ]);
    character.skillProfs.push({cha: {performance: 2}});
    character.toolProfs.push(findTool("Brewer's supplies"));
}

function addWayOfTheKensei(character: Character) {
    function getRangedKenseiOptions(character: Character) {
        let options = [];
        for (let x of simpleRanged.concat(martialRanged)) {
            if (!(x.properties.includes("Heavy") || x.properties.includes("Special"))) {
                options.push(x);
            }
        }
        options.push(findWeapon("Longbow"));
        return options;
    }
    function getMeleeKenseiOptions(character: Character) {
        let options = [];
        for (let x of simpleMelee.concat(martialMelee)) {
            if (!(x.properties.includes("Heavy") || x.properties.includes("Special"))) {
                options.push(x);
            }
        }
        return options;
    }
    let rangedKensei = util.choice(getRangedKenseiOptions(character));
    let meleeKensei = util.choice(getMeleeKenseiOptions(character));
    if (character.gold -= rangedKensei.cost) character.weapons.push(rangedKensei);
    if (character.gold -= meleeKensei.cost) character.weapons.push(meleeKensei);

    character.traits = character.traits.concat([
        "Path of the Kensei",
        "Agile Parry",
        "Kensei's Shot",
        "Way of the Brush"
    ]);

    character.toolProfs.push(util.choice([
        findTool("Calligrapher's supplies"),
        findTool("Painter's supplies")
    ], character.toolProfs));
}

function addWayOfTheSunSoul(character: Character) {
    character.traits = character.traits.concat([
        "Way of the Sun Soul",
        "Radiant Sun Bolt"
    ]);
}

function addOathOfDevotion(character: Character) {
    character.traits = character.traits.concat([
        "Oath of Devotion",
        "Channel Divinity: Sacred Weapon",
        "Channel Divinity: Turn the Unholy"
    ]);
    character.inherentSpells[1] = character.inherentSpells[1].concat(
        "Protection from evil and good",
        "Sanctuary"
    );
}

function addOathOfTheAncients(character: Character) {
    character.traits = character.traits.concat([
        "Oath of the Ancients",
        "Channel Divinity: Nature's Wrath",
        "Channel Divinity: Turn the Faithless"
    ]);
    character.inherentSpells[1] = character.inherentSpells[1].concat([
        "Ensnaring strike",
        "Speak with animals"
    ]);
}

function addOathOfVengeance(character: Character) {
    character.traits = character.traits.concat([
        "Oath of Vengeance",
        "Channel Divinity: Abjure Enemy",
        "Channel Divinity: Vow of Emnity"
    ]);
    character.inherentSpells[1] = character.inherentSpells[1].concat([
        "Bane",
        "Hunter's mark"
    ]);
}

function addOathOfConquest(character: Character) {
    character.traits = character.traits.concat([
        "Oath of Conquest",
        "Channel Divinity: Conquering Presence",
        "Channel Divinity: Guided Strike"
    ]);
    character.inherentSpells[1] = character.inherentSpells[1].concat([
        "Armor of agathys",
        "Command"
    ]);
}

function addOathOfRedemption(character: Character) {
    character.traits = character.traits.concat([
        "Oath of Redemption",
        "Channel Divinity: Emissary of Peace",
        "Channel Divinity: Rebuke the Violent"
    ]);
    character.inherentSpells[1] = character.inherentSpells[1].concat([
        "Sanctuary",
        "Sleep"
    ]);
}

function addBeastConclave(character: Character) {
    character.traits = character.traits.concat([
        "Beast Conclave",
        "Animal Companion: " + util.choice([
            "Ape",
            "Black Bear",
            "Boar",
            "Giant Badger",
            "Giant Weasel",
            "Mule",
            "Panther",
            "Wolf"
        ])
    ]);
}

function addHunterConclave(character: Character) {
    character.traits = character.traits.concat([
        "Hunter Conclave",
        "Hunter's Prey: " + util.choice([
            "Colossus Slayer",
            "Giant Killer",
            "Horde Breaker"
        ])
    ]);
}

function addDeepStalkerConclave(character: Character) {
    character.traits = character.traits.concat([
        "Deep Stalker Conclave",
        "Underdark Scout",
        "Deep Stalker Magic",
        "Darkvision"
    ]);
    character.inherentSpells[1].push("Disguise self");
}

function addThief(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Thief",
        "Fast Hands",
        "Second-Story Work"
    ]);
}

function addAssassin(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Assassin",
        "Assassinate"
    ]);
    character.toolProfs = character.toolProfs.concat([
        findTool("Disguise kit"),
        findTool("Poisoner's kit")
    ]);
}

function addArcaneTrickster(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Arcane Trickster",
        "Mage Hand Legerdemain"
    ]);
    character.inherentSpells[0].push("Mage hand");
    character.memorizedSpells[0] = character.memorizedSpells[0].concat(
        util.choices(wizardSpells[0], 2, character.inherentSpells[0].concat(character.memorizedSpells[0]))
    );
    character.memorizedSpells[1] = character.memorizedSpells[1].concat(
        util.choices(rogueSpells, 2, character.inherentSpells[1].concat(character.memorizedSpells[1]))
    );
    character.memorizedSpells[1].push(util.choice(wizardSpells[1], character.inherentSpells[1].concat(character.memorizedSpells[1])));
}

function addInquisitive(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Inquisitive",
        "Ear for Deceit",
        "Eye for Detail",
        "Insightful Fighting"
    ]);
}

function addMastermind(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Mastermind",
        "Master of Intrigue",
        "Master of Tactics"
    ]);
    character.toolProfs = character.toolProfs.concat([
        findTool("Disguise kit"),
        findTool("Forgery kit"),
        util.choice(gaming, character.toolProfs)
    ]);
}

function addScout(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Scout",
        "Skirmisher"
    ]);
    character.skillProfs = character.skillProfs.concat([
        {int: {nature: 2}},
        {wis: {survival: 2}}
    ]);
    character.expertise = character.expertise.concat([
        {int: {nature: 2}},
        {wis: {survival: 2}}
    ]);
}

function addSwashbuckler(character: Character) {
    character.traits = character.traits.concat([
        "Roguish Archetype: Swashbuckler",
        "Fancy Footwork",
        "Rakish Audacity"
    ]);
}