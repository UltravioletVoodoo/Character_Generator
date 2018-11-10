import { attributes } from "./attributes";
import { skills } from "./skills";
import { range } from "./range";
import { spells } from "./spells";
import { colors } from "./colors";
import { artAssets } from "./artAssets";

export interface character {
    name: string;
    raceName: string;
    alignment: string;
    attributes: attributes;
    proficiencyBonus: 2;
    savingThrows: attributes;
    skills: skills;
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
    age: range;
    colors: colors;
    artAssets: artAssets;
    spells: spells;
}