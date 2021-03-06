export function generateSpells(character) {
    // add in all of the inherent spells
    character.spells[0] = character.spells[0].concat(character.inherentSpells[0]);
    character.spells[1] = character.spells[1].concat(character.inherentSpells[1]);
    character.spells[2] = character.spells[2].concat(character.inherentSpells[2]);
    // add in all of the memorized spells
    character.spells[0] = character.spells[0].concat(character.memorizedSpells[0]);
    character.spells[1] = character.spells[1].concat(character.memorizedSpells[1]);
    character.spells[2] = character.spells[2].concat(character.memorizedSpells[2]);
}
export const bardSpells = [
    [
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
    ],
    [
        "Animal friendship",
        "Bane",
        "Charm person",
        "Comprehend languages",
        "Cure wounds",
        "Detect magic",
        "Disguise self",
        "Dissonant whispers",
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
        "Tasha’s hideous laughter",
        "Thunderwave",
        "Unseen servant",
        "Earth tremor"
    ],
    [
        "Animal messenger",
        "Blindness/deafness",
        "Calm emotions",
        "Cloud of daggers",
        "Crown of madness",
        "Detect thoughts",
        "Enhance ability",
        "Enthrall",
        "Heat metal",
        "Hold person",
        "Invisibility",
        "Knock",
        "Lesser restoration",
        "Locate animals or plants",
        "Locate object",
        "Magic mouth",
        "Phantasmal force",
        "See invisibility",
        "Shatter",
        "Silence",
        "Suggestion",
        "Zone of truth",
        "Pyrotechnics",
        "Skywrite",
        "Warding wind"
    ]
];
export const clericSpells = [
    [
        "Guidance",
        "Light",
        "Mending",
        "Resistance",
        "Sacred Flame",
        "Spare the Dying",
        "Thaumaturgy",
        "Toll the dead",
        "Word of radiance"
    ],
    [
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
    ],
    [
        "Aid",
        "Augury",
        "Blindness/deafness",
        "Calm emotions",
        "Continual flame",
        "Enhance ability",
        "Find traps",
        "Gentle repose",
        "Hold person",
        "Lesser restoration",
        "Locate object",
        "Prayer of healing",
        "Protection from poison",
        "Silence",
        "Spiritual weapon",
        "Warding bond",
        "Zone of truth",
    ]
];
export const paladinSpells = [
    [],
    [
        "Bless",
        "Command",
        "Compelled duel",
        "Cure wounds",
        "Detect evil and good",
        "Detect magic",
        "Detect poison and disease",
        "Divine favor",
        "Heroism",
        "Protection from evil and good",
        "Purify food and drink",
        "Searing smite",
        "Shield of faith",
        "Thunderous smite",
        "Wrathful smite",
        "Ceremony"
    ]
];
export const rangerSpells = [
    [],
    [
        "Alarm",
        "Animal friendship",
        "Cure wounds",
        "Detect magic",
        "Detect poison and disease",
        "Ensnaring strike",
        "Fog cloud",
        "Goodberry",
        "Hail of thorns",
        "Hunter's mark",
        "Jump",
        "Longstrider",
        "Speak with animals",
        "Absorb elements",
        "Beast bond",
        "Snare",
        "Zephyr strike"
    ]
];
export const druidSpells = [
    [
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
    ],
    [
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
    ],
    [
        "Animal messenger",
        "Barkskin",
        "Beast sense",
        "Darkvision",
        "Enhance ability",
        "Find traps",
        "Flame blade",
        "Flame sphere",
        "Gust of wind",
        "Heat metal",
        "Hold person",
        "Lesser restoration",
        "Locate animals or plants",
        "Locate object",
        "Moonbeam",
        "Pass without trace",
        "Protection from poison",
        "Spike growth",
        "Dust devil",
        "Earthbind",
        "Healing spirit",
        "Skywrite",
        "Warding wind"
    ]
];
export const sorcererSpells = [
    [
        "Acid splash",
        "Blade ward",
        "Chill touch",
        "Control flames",
        "Create bonfire",
        "Dancing lights",
        "Fire bolt",
        "Friends",
        "Frostbite",
        "Gust",
        "Infestation",
        "Light",
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
        "Thunderclap",
        "True strike"
    ],
    [
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
    ],
    [
        "Alter self",
        "Blindness/deafness",
        "Blur",
        "Cloud of daggers",
        "Crown of madness",
        "Darkness",
        "Darkvision",
        "Detect thoughts",
        "Enhance ability",
        "Enlarge/reduce",
        "Gust of wind",
        "Hold person",
        "Invisibility",
        "Knock",
        "Levitate",
        "Mirror image",
        "Misty step",
        "Phantasmal force",
        "Scorching ray",
        "See invisibility",
        "Shatter",
        "Spider climb",
        "Suggestion",
        "Web",
        "Agnazzar's scorcher",
        "Dragon's breath",
        "Earthbind",
        "Maximillian's earthen grasp",
        "Mind spike",
        "Pyrotechnics",
        "Shadow blade",
        "Snilloc's snowball swarm",
        "Warding wind",
    ]
];
export const warlockSpells = [
    [
        "Blade ward",
        "Chill touch",
        "Create bonfire",
        "Eldritch blast",
        "Friends",
        "Frostbite",
        "Infestation",
        "Mage hand",
        "Magic stone",
        "Minor illusion",
        "Poison spray",
        "Prestidigitation",
        "Thunderclap",
        "Toll the dead",
        "True strike"
    ],
    [
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
    ],
    [
        "Cloud of daggers",
        "Crown of madness",
        "Darkness",
        "Enthrall",
        "Hold person",
        "Invisibility",
        "Mirror image",
        "Misty step",
        "Ray of enfeeblement",
        "Shatter",
        "Spider climb",
        "Suggestion",
        "Earthbind",
        "Mind spike",
        "Shadow blade"
    ]
];
export const wizardSpells = [
    [
        "Acid splash",
        "Blade ward",
        "Chill touch",
        "Control flames",
        "Create bonfire",
        "Dancing lights",
        "Fire bolt",
        "Friends",
        "Frostbite",
        "Gust",
        "Infestation",
        "Light",
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
        "Thunderclap",
        "Toll the dead",
        "True strike"
    ],
    [
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
    ],
    [
        "Alter self",
        "Arcane lock",
        "Blindness/deafness",
        "Blur",
        "Cloud of daggers",
        "Continual flame",
        "Crown of madness",
        "Darkness",
        "Darkvision",
        "Detect thoughts",
        "Enlarge/reduce",
        "Flaming sphere",
        "Gentle repose",
        "Gust of wind",
        "Hold person",
        "Invisibility",
        "Knock",
        "Levitate",
        "Locate object",
        "Magic mouth",
        "Magic weapon",
        "Melf's acid arrow",
        "Mirror image",
        "Misty step",
        "Nystul's magic aura",
        "Phantasmal force",
        "Ray of enfeeblement",
        "Rope trick",
        "Scorching ray",
        "See invisibility",
        "Shatter",
        "Spider climb",
        "Suggestion",
        "Web",
        "Aganazzar's scorcher",
        "Dragon's breath",
        "Dust devil",
        "Earthbind",
        "Maximilian's earthen grasp",
        "Mind spike",
        "Pyrotechnics",
        "Shadow blade",
        "Skywrite",
        "Snilloc's snowball swarm",
        "Warding wind"
    ]
];
export const necromancySpells = [
    [
        "Chill touch",
        "Spare the dying",
        "Toll the dead"
    ],
    [
        "False life",
        "Inflict wounds",
        "Ray of sickness",
        "Cause fear"
    ]
];
export const eldritchKnightSpells = [
    "Absorb elements",
    "Alarm",
    "Burning hands",
    "Chromatic orb",
    "Earth tremor",
    "Mage armor",
    "Magic missile",
    "Protection from evil and good",
    "Shield",
    "Thunderwave",
    "Witch bolt"
];
export const rogueSpells = [
    "Charm person",
    "Color spray",
    "Disguise self",
    "Illusory script",
    "Silent image",
    "Sleep",
    "Tasha's hideous laughter"
];
export const level1Spells = [
    "Alarm",
    "Animal friendship",
    "Bane",
    "Bless",
    "Burning hands",
    "Charm person",
    "Color spray",
    "Command",
    "Comprehend languages",
    "Create or destroy water",
    "Cure wounds",
    "Detect evil and good",
    "Detect magic",
    "Detect poison and disease",
    "Disguise self",
    "Divine favor",
    "Entangle",
    "Expeditious retreat",
    "Faerie fire",
    "False life",
    "Feather fall",
    "Find familiar",
    "Tenser's floating disk",
    "Fog cloud",
    "Goodberry",
    "Grease",
    "Guiding bolt",
    "Healing word",
    "Hellish rebuke",
    "Heroism",
    "Tasha's hideous laughter",
    "Hunter's mark",
    "Identify",
    "Illusory script",
    "Inflict wounds",
    "Jump",
    "Longstrider",
    "Mage armor",
    "Magic missile",
    "Protection from evil and good",
    "Purify food and drink",
    "Sanctuary",
    "Shield",
    "Shield of faith",
    "Silent image",
    "Sleep",
    "Speak with animals",
    "Thunderwave",
    "Unseen servant"
];
export const level2Spells = [
    "Acid arrow",
    "Aid",
    "Alter self",
    "Animal messenger",
    "Arcane lock",
    "Arcanist's magic aura",
    "Augury",
    "Barkskin",
    "Blindness deafness",
    "Blur",
    "Branding smite",
    "Calm emotions",
    "Continual flame",
    "Darkness",
    "Darkvision",
    "Detect thoughts",
    "Enhance ability",
    "Enlarge reduce",
    "Enthrall",
    "Find steed",
    "Find traps",
    "Flame blade",
    "Flaming sphere",
    "Gentle repose",
    "Gust of wind",
    "Heat metal",
    "Hold person",
    "Invisibility",
    "Knock",
    "Lesser restoration",
    "Levitate",
    "Locate animals or plants",
    "Locate object",
    "Magic mouth",
    "Magic weapon",
    "Mirror image",
    "Misty step",
    "Moonbeam",
    "Pass without trace",
    "Prayer of healing",
    "Protection from poison",
    "Ray of enfeeblement",
    "Rope trick",
    "Scorching ray",
    "See invisibility",
    "Shatter",
    "Silence",
    "Spider climb",
    "Spike growth",
    "Spiritual weapon",
    "Suggestion",
    "Warding bond",
    "Web",
    "Zone of truth"
];
export const level3Spells = [
    "Animate dead",
    "Beacon of hope",
    "Bestow curse",
    "Blink",
    "Call lightning",
    "Clairvoyance",
    "Conjure animals",
    "Counterspell",
    "Create food and water",
    "Daylight",
    "Dispel magic",
    "Fear",
    "Fireball",
    "Fly",
    "Gaseous form",
    "Glyph of warding",
    "Haste",
    "Hypnotic pattern",
    "Lightning bolt",
    "Magic circle",
    "Major image",
    "Mass healing word",
    "Meld into stone",
    "Nondetection",
    "Phantom steed",
    "Plant growth",
    "Protection from energy",
    "Remove curse",
    "Revivify",
    "Sending",
    "Sleet storm",
    "Slow",
    "Speak with dead",
    "Speak with plants",
    "Spirit guardians",
    "Stinking cloud",
    "Tiny hut",
    "Tongues",
    "Vampiric touch",
    "Water breathing",
    "Water walk",
    "Wind wall"
];
