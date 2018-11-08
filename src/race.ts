import {abilityScores} from "./abilityScores";
import {range} from "./range";

export class race {

    constructor(
        public name: string,
        public abilityScores: Partial<abilityScores>, 
        public speed: number, 
        public size: string, 
        public traits: {[key: string]: string}, 
        public ageRange: range, 
        public languages: string[]
    ){}
}