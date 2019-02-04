export interface Spell {
    name: string;
}

export interface Spells {
    level: number;
    known: number;
    spellList: Spell[];
}

export const bardSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            {
                name: "Blade ward"
            },
            {
                name: "Dancing lights"
            },
            {
                name: "Friends"
            },
            {
                name: "Light"
            },
            {
                name: "Mage hand"
            },
            {
                name: "Mending"
            },
            {
                name: "Message"
            },
            {
                name: "Minor illusion"
            },
            {
                name: "Prestidigitation"
            },
            {
                name: "Thunderclap"
            },
            {
                name: "True strike"
            },
            {
                name: "Vicious mockery"
            }
        ]
    },
    {
        level: 1,
        known: 4,
        spellList: [
            {
                name: "Animal friendship"
            },
            {
                name: "Bane"
            },
            {
                name: "Charm person"
            },
            {
                name: "Comprehend languages"
            },
            {
                name: "Cure wounds"
            },
            {
                name: "Detect magic"
            },
            {
                name: "Disguise self"
            },
            {
                name: "Dissonant whispers"
            },
            {
                name: "Earth tremor"
            },
            {
                name: "Faerie fire"
            },
            {
                name: "Feather fall"
            },
            {
                name: "Healing word"
            },
            {
                name: "Heroism"
            },
            {
                name: "Identify"
            },
            {
                name: "Illusory script"
            },
            {
                name: "Longstrider"
            },
            {
                name: "Silent image"
            },
            {
                name: "Sleep"
            },
            {
                name: "Speak with animals"
            },
            {
                name: "Tasha's hideous laughter"
            },
            {
                name: "Thunderwave"
            },
            {
                name: "Unseen servant"
            }
        ]
    }
];

export const clericSpells: Spells[] = [
    {
        level: 0,
        known: 3,
        spellList: [
            {
                name: "Guidance"
            },
            {
                name: "Light"
            },
            {
                name: "Mending"
            },
            {
                name: "Resistance"
            },
            {
                name: "Sacred flame"
            },
            {
                name: "Spare the dying"
            },
            {
                name: "Thaumaturgy"
            },
            {
                name: "Toll the dead"
            },
            {
                name: "Word of radiance"
            }
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            {
                name: "Bane"
            },
            {
                name: "Bless"
            },
            {
                name: "Ceremony"
            },
            {
                name: "Command"
            },
            {
                name: "Create or destroy water"
            },
            {
                name: "Cure wounds"
            },
            {
                name: "Detect evil and good"
            },
            {
                name: "Detect magic"
            },
            {
                name: "Detect poison and disease"
            },
            {
                name: "Guiding bolt"
            },
            {
                name: "Healing word"
            },
            {
                name: "Inflict wounds"
            },
            {
                name: "Protection from evil and good"
            },
            {
                name: "Purify food and drink"
            },
            {
                name: "Sanctuary"
            },
            {
                name: "Shield of faith"
            }
        ]
    }
];

export const druidSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            {
                name: "Control flames"
            },
            {
                name: "Create bonfire"
            },
            {
                name: "Druidcraft"
            },
            {
                name: "Frostbite"
            },
            {
                name: "Guidance"
            },
            {
                name: "Gust"
            },
            {
                name: "Infestation"
            },
            {
                name: "Magic stone"
            },
            {
                name: "Mending"
            },
            {
                name: "Mold earth"
            },
            {
                name: "Poison spray"
            },
            {
                name: "Primal savagery"
            },
            {
                name: "Produce flame"
            },
            {
                name: "Resistance"
            },
            {
                name: "Shape water"
            },
            {
                name: "Shillelagh"
            },
            {
                name: "Thorn whip"
            },
            {
                name: "Thunderclap"
            }
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            {
                name: "Absorb elements"
            },
            {
                name: "Animal friendship"
            },
            {
                name: "Beast bond"
            },
            {
                name: "Charm person"
            },
            {
                name: "Create or destroy water"
            },
            {
                name: "Cure wounds"
            },
            {
                name: "Detect magic"
            },
            {
                name: "Detect poison and disease"
            },
            {
                name: "Earth tremor"
            },
            {
                name: "Entangle"
            },
            {
                name: "Faerie fire"
            },
            {
                name: "Fog cloud"
            },
            {
                name: "Goodberry"
            },
            {
                name: "Healing word"
            },
            {
                name: "Ice knife"
            },
            {
                name: "Jump"
            },
            {
                name: "Longstrider"
            },
            {
                name: "Purify food and drink"
            },
            {
                name: "Snare"
            },
            {
                name: "Speak with animals"
            },
            {
                name: "Thunderwave"
            }
        ]
    }
];

export const sorcererSpells: Spells[] = [
    {
        level: 0,
        known: 4,
        spellList: [
            {
                name: "Acid splash"
            },
            {
                name: "Blade ward"
            },
            {
                name: "Booming blade"
            },
            {
                name: "Chill touch"
            },
            {
                name: "Control flames"
            },
            {
                name: "Create bonfire"
            },
            {
                name: "Dancing lights"
            },
            {
                name: "Fire bolt"
            },
            {
                name: "Friends"
            },
            {
                name: "Frostbite"
            },
            {
                name: "Green flame blade"
            },
            {
                name: "Gust"
            },
            {
                name: "Infestation"
            },
            {
                name: "Light"
            },
            {
                name: "Lightning lure"
            },
            {
                name: "Mage hand"
            },
            {
                name: "Mending"
            },
            {
                name: "Message"
            },
            {
                name: "Minor illusion"
            },
            {
                name: "Mold earth"
            },
            {
                name: "Poison spray"
            },
            {
                name: "Prestidigitation"
            },
            {
                name: "Ray of frost"
            },
            {
                name: "Shape water"
            },
            {
                name: "Shocking grasp"
            },
            {
                name: "Sword burst"
            },
            {
                name: "Thunderclap"
            },
            {
                name: "True strike"
            }
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            {
                name: "Absorb elements"
            },
            {
                name: "Burning hands"
            },
            {
                name: "Catapult"
            },
            {
                name: "Chaos bolt"
            },
            {
                name: "Charm person"
            },
            {
                name: "Chromatic orb"
            },
            {
                name: "Color spray"
            },
            {
                name: "Comprehend languages"
            },
            {
                name: "Detect magic"
            },
            {
                name: "Disguise self"
            },
            {
                name: "Earth tremor"
            },
            {
                name: "Expeditious retreat"
            },
            {
                name: "False life"
            },
            {
                name: "Feather fall"
            },
            {
                name: "Fog cloud"
            },
            {
                name: "Ice knife"
            },
            {
                name: "Jump"
            },
            {
                name: "Mage armor"
            },
            {
                name: "Magic missile"
            },
            {
                name: "Ray of sickness"
            },
            {
                name: "Shield"
            },
            {
                name: "Silent image"
            },
            {
                name: "Sleep"
            },
            {
                name: "Thunderwave"
            },
            {
                name: "Witch bolt"
            }
        ]
    }
];

export const warlockSpells: Spells[] = [
    {
        level: 0,
        known: 2,
        spellList: [
            {
                name: "Blade ward"
            },
            {
                name: "Booming blade"
            },
            {
                name: "Chill touch"
            },
            {
                name: "Create bonfire"
            },
            {
                name: "Eldritch blast"
            },
            {
                name: "Friends"
            },
            {
                name: "Frostbite"
            },
            {
                name: "Green flame blade"
            },
            {
                name: "Infestation"
            },
            {
                name: "Lightning lure"
            },
            {
                name: "Mage hand"
            },
            {
                name: "Magic stone"
            },
            {
                name: "Minor illusion"
            },
            {
                name: "Poison spray"
            },
            {
                name: "Prestidigitation"
            },
            {
                name: "Sword burst"
            },
            {
                name: "Thunderclap"
            },
            {
                name: "Toll the dead"
            },
            {
                name: "True strike"
            }
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            {
                name: "Armor of agathys"
            },
            {
                name: "Arms of hadar"
            },
            {
                name: "Cause fear"
            },
            {
                name: "Charm person"
            },
            {
                name: "Comprehend languages"
            },
            {
                name: "Expeditious retreat"
            },
            {
                name: "Hellish rebuke"
            },
            {
                name: "Hex"
            },
            {
                name: "Illusory script"
            },
            {
                name: "Protection from evil and good"
            },
            {
                name: "Unseen servant"
            },
            {
                name: "Witch bolt"
            }
        ]
    }
];

export const wizardSpells: Spells[] = [
    {
        level: 0,
        known: 3,
        spellList: [
            {
                name: "Acid splash"
            },
            {
                name: "Blade ward"
            },
            {
                name: "Booming blade"
            },
            {
                name: "Chill touch"
            },
            {
                name: "Control flames"
            },
            {
                name: "Create bonfire"
            },
            {
                name: "Dancing lights"
            },
            {
                name: "Encode thoughts"
            },
            {
                name: "Fire bolt"
            },
            {
                name: "Friends"
            },
            {
                name: "Frostbite"
            },
            {
                name: "Green flame blade"
            },
            {
                name: "Gust"
            },
            {
                name: "Infestation"
            },
            {
                name: "Light"
            },
            {
                name: "Lightnight lure"
            },
            {
                name: "Mage hand"
            },
            {
                name: "Mending"
            },
            {
                name: "Message"
            },
            {
                name: "Minor illusion"
            },
            {
                name: "Mold earth"
            },
            {
                name: "Poison spray"
            },
            {
                name: "Prestidigitation"
            },
            {
                name: "Ray of frost"
            },
            {
                name: "Shape water"
            },
            {
                name: "Shocking grasp"
            },
            {
                name: "Sword burst"
            },
            {
                name: "Thunderclap"
            },
            {
                name: "Toll the dead"
            },
            {
                name: "True strike"
            }
        ]
    },
    {
        level: 1,
        known: 2,
        spellList: [
            {
                name: "Absorb elements"
            },
            {
                name: "Alarm"
            },
            {
                name: "Burning hands"
            },
            {
                name: "Catapult"
            },
            {
                name: "Cause fear"
            },
            {
                name: "Charm person"
            },
            {
                name: "Chromatic orb"
            },
            {
                name: "Color spray"
            },
            {
                name: "Comprehend languages"
            },
            {
                name: "Detect magic"
            },
            {
                name: "Disguise self"
            },
            {
                name: "Earth tremor"
            },
            {
                name: "Expeditious retreat"
            },
            {
                name: "False life"
            },
            {
                name: "Feather fall"
            },
            {
                name: "Find familiar"
            },
            {
                name: "Fog cloud"
            },
            {
                name: "Grease"
            },
            {
                name: "Ice knife"
            },
            {
                name: "Identify"
            },
            {
                name: "Illusory script"
            },
            {
                name: "Jump"
            },
            {
                name: "Longstrider"
            },
            {
                name: "Mage armor"
            },
            {
                name: "Magic missile"
            },
            {
                name: "Protection from evil and good"
            },
            {
                name: "Ray of sickness"
            },
            {
                name: "Shield"
            },
            {
                name: "Silent image"
            },
            {
                name: "Sleep"
            },
            {
                name: "Snare"
            },
            {
                name: "Tasha's hideous laughter"
            },
            {
                name: "Tenser's floating disk"
            },
            {
                name: "Thunderwave"
            },
            {
                name: "Unseen servant"
            },
            {
                name: "Witch bolt"
            }
        ]
    }
];