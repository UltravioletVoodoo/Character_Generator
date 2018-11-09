import { attributes } from "./attributes";
import { skills } from "./skills";
import { range } from "./range";
import { spells } from "./spells";

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
    height: number;
    weight: number;
    eyes: string;
    skin: string;
    hair: string;
    spells: spells;
}