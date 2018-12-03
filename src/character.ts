import { Attributes } from "./Attributes";
import { Skills } from "./Skills";
import { Range } from "./Range";
import { Spells } from "./Spells";
import { Colors } from "./Colors";
import { ArtAssets } from "./ArtAssets";

export interface Character {
    name: string;
    raceName: string;
    alignment: string;
    attributes: Attributes;
    proficiencyBonus: 2;
    savingThrows: Attributes;
    skills: Skills;
    ac: number;
    initiative: number;
    speed: number;
    hitPoints: number;
    hitDice: number;
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
    languages: string[];
    proficiencies: string[];
    weapons: string[];
    armor: string[];
    traits: string[]
    age: Range;
    colors: Colors;
    artAssets: ArtAssets;
    spells: Spells;
}