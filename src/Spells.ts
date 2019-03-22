export interface Spells {
    level: number;
    known: number;
    spellList: string[];
}

export const bardSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            "Blade ward",
            "Dancing lights",
            "Friends",
            "Light",
            "Mage hand",
            "Mending",
            "Message",
            "Minor illusion",
            "Prestidigitation",
            "Thunderclap",
            "True strike",
            "Vicious mockery"
        ]
    },
    {
        level: 1,
        known: 4,
        spellList: [
            "Animal friendship",
            "Bane",
            "Charm person",
            "Comprehend languages",
            "Cure wounds",
            "Detect magic",
            "Disguise self",
            "Dissonant whispers",
            "Earth tremor",
            "Faerie fire",
            "Feather fall",
            "Healing word",
            "Heroism",
            "Identify",
            "Illusory script",
            "Longstrider",
            "Silent image",
            "Sleep",
            "Speak with animals",
            "Tasha's hideous laughter",
            "Thunderwave",
            "Unseen servant"
        ]
    }
];

export const clericSpells: Spells[] = [
    {
        level: 0,
        known: 3,
        spellList: [
            "Guidance",
            "Light",
            "Mending",
            "Resistance",
            "Sacred flame",
            "Spare the dying",
            "Thaumaturgy",
            "Toll the dead",
            "Word of radiance"
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            "Bane",
            "Bless",
            "Ceremony",
            "Command",
            "Create or destroy water",
            "Cure wounds",
            "Detect evil and good",
            "Detect magic",
            "Detect poison and disease",
            "Guiding bolt",
            "Healing word",
            "Inflict wounds",
            "Protection from evil and good",
            "Purify food and drink",
            "Sanctuary",
            "Shield of faith"
        ]
    }
];

export const druidSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            "Control flames",
            "Create bonfire",
            "Druidcraft",
            "Frostbite",
            "Guidance",
            "Gust",
            "Infestation",
            "Magic stone",
            "Mending",
            "Mold earth",
            "Poison spray",
            "Primal savagery",
            "Produce flame",
            "Resistance",
            "Shape water",
            "Shillelagh",
            "Thorn whip",
            "Thunderclap"
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            "Absorb elements",
            "Animal friendship",
            "Beast bond",
            "Charm person",
            "Create or destroy water",
            "Cure wounds",
            "Detect magic",
            "Detect poison and disease",
            "Earth tremor",
            "Entangle",
            "Faerie fire",
            "Fog cloud",
            "Goodberry",
            "Healing word",
            "Ice knife",
            "Jump",
            "Longstrider",
            "Purify food and drink",
            "Snare",
            "Speak with animals",
            "Thunderwave"
        ]
    }
];

export const sorcererSpells: Spells[] = [
    {
        level: 0,
        known: 4,
        spellList: [
            "Acid splash",
            "Blade ward",
            "Booming blade",
            "Chill touch",
            "Control flames",
            "Create bonfire",
            "Dancing lights",
            "Fire bolt",
            "Friends",
            "Frostbite",
            "Green flame blade",
            "Gust",
            "Infestation",
            "Light",
            "Lightning lure",
            "Mage hand",
            "Mending",
            "Message",
            "Minor illusion",
            "Mold earth",
            "Poison spray",
            "Prestidigitation",
            "Ray of frost",
            "Shape water",
            "Shocking grasp",
            "Sword burst",
            "Thunderclap",
            "True strike"
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            "Absorb elements",
            "Burning hands",
            "Catapult",
            "Chaos bolt",
            "Charm person",
            "Chromatic orb",
            "Color spray",
            "Comprehend languages",
            "Detect magic",
            "Disguise self",
            "Earth tremor",
            "Expeditious retreat",
            "False life",
            "Feather fall",
            "Fog cloud",
            "Ice knife",
            "Jump",
            "Mage armor",
            "Magic missile",
            "Ray of sickness",
            "Shield",
            "Silent image",
            "Sleep",
            "Thunderwave",
            "Witch bolt"
        ]
    }
];

export const warlockSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            "Blade ward",
            "Booming blade",
            "Chill touch",
            "Create bonfire",
            "Eldritch blast",
            "Friends",
            "Frostbite",
            "Green flame blade",
            "Infestation",
            "Lightning lure",
            "Mage hand",
            "Magic stone",
            "Minor illusion",
            "Poison spray",
            "Prestidigitation",
            "Sword burst",
            "Thunderclap",
            "Toll the dead",
            "True strike"
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            "Armor of agathys",
            "Arms of hadar",
            "Cause fear",
            "Charm person",
            "Comprehend languages",
            "Expeditious retreat",
            "Hellish rebuke",
            "Hex",
            "Illusory script",
            "Protection from evil and good",
            "Unseen servant",
            "Witch bolt"
        ]
    }
];

export const wizardSpells: Spells[] = [
    {
        level: 0,
        known: 3,
        spellList: [
            "Acid splash",
            "Blade ward",
            "Booming blade",
            "Chill touch",
            "Control flames",
            "Create bonfire",
            "Dancing lights",
            "Encode thoughts",
            "Fire bolt",
            "Friends",
            "Frostbite",
            "Green flame blade",
            "Gust",
            "Infestation",
            "Light",
            "Lightnight lure",
            "Mage hand",
            "Mending",
            "Message",
            "Minor illusion",
            "Mold earth",
            "Poison spray",
            "Prestidigitation",
            "Ray of frost",
            "Shape water",
            "Shocking grasp",
            "Sword burst",
            "Thunderclap",
            "Toll the dead",
            "True strike"
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            "Absorb elements",
            "Alarm",
            "Burning hands",
            "Catapult",
            "Cause fear",
            "Charm person",
            "Chromatic orb",
            "Color spray",
            "Comprehend languages",
            "Detect magic",
            "Disguise self",
            "Earth tremor",
            "Expeditious retreat",
            "False life",
            "Feather fall",
            "Find familiar",
            "Fog cloud",
            "Grease",
            "Ice knife",
            "Identify",
            "Illusory script",
            "Jump",
            "Longstrider",
            "Mage armor",
            "Magic missile",
            "Protection from evil and good",
            "Ray of sickness",
            "Shield",
            "Silent image",
            "Sleep",
            "Snare",
            "Tasha's hideous laughter",
            "Tenser's floating disk",
            "Thunderwave",
            "Unseen servant",
            "Witch bolt"
        ]
    }
];