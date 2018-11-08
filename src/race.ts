import {abilityScores} from "./abilityScores";
import {range} from "./range";
import { artAssets } from "./artAssets";

export interface race {
    name: string;
    abilityScores: Partial<abilityScores>;
    speed: number;
    size: string;
    traits: {[key: string]: string};
    ageRange: range;
    languages: string[];
    proficiencies: string[];
    skinColour: string;
    artAssets: artAssets;
    subRace: Partial<race>[];
}