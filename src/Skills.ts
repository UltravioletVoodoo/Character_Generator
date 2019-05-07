import { util } from "./Util";
import { Attributes } from "./Attributes";


export interface Skills {
    str: {
        athletics: number;
    }
    dex: {
        acrobatics: number;
        sleightOfHand: number;
        stealth: number;
    }
    int: {
        arcana: number;
        history: number;
        investigation: number;
        nature: number;
        religion: number;
    }
    wis: {
        animalHandling: number;
        insight: number;
        medicine: number;
        perception: number;
        survival: number;
    }
    cha: {
        deception: number;
        intimidation: number;
        performance: number;
        persuasion: number;
    }
}

export interface SkillProfs {
    str: {
        athletics: boolean;
    }
    dex: {
        acrobatics: boolean;
        sleightOfHand: boolean;
        stealth: boolean;
    }
    int: {
        arcana: boolean;
        history: boolean;
        investigation: boolean;
        nature: boolean;
        religion: boolean;
    }
    wis: {
        animalHandling: boolean;
        insight: boolean;
        medicine: boolean;
        perception: boolean;
        survival: boolean;
    }
    cha: {
        deception: boolean;
        intimidation: boolean;
        performance: boolean;
        persuasion: boolean;
    }
}

export const baseSkillProfs: SkillProfs = {
    str: {
        athletics: false
    },
    dex: {
        acrobatics: false,
        sleightOfHand: false,
        stealth: false
    },
    int: {
        arcana: false,
        history: false,
        investigation: false,
        nature: false,
        religion: false
    },
    wis: {
        animalHandling: false,
        insight: false,
        medicine: false,
        perception: false,
        survival: false
    },
    cha: {
        deception: false,
        intimidation: false,
        performance: false,
        persuasion: false
    }
}

export const baseSkills: Skills = {
    str: {
        athletics: 0,
    },
    dex: {
        acrobatics: 0,
        sleightOfHand: 0,
        stealth: 0
    },
    int: {
        arcana: 0,
        history: 0,
        investigation: 0,
        nature: 0,
        religion: 0
    },
    wis: {
        animalHandling: 0,
        insight: 0,
        medicine: 0,
        perception: 0,
        survival: 0
    },
    cha: {
        deception: 0,
        intimidation: 0,
        performance: 0,
        persuasion: 0
    }

}

//Define the DeepPartial
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>
  };

//take 2 DeepPartial<Skills>, return them combined into 1 DeepPartial<Skills>
function addSkills(item1: DeepPartial<Skills>, item2: DeepPartial<Skills>): Skills{
    //implementation
    const skills: any = { ...baseSkills };
    if (!item1) {
        throw 'item1 is null!';
    }
    if (!item2) {
        throw 'item2 is null!';
    }
    for (let attr of Object.keys(item1)) {
        let baseAttrSkills = { ...skills[attr] };
        let attrSkills = (item1 as any)[attr];
        for (let skill of Object.keys(attrSkills)) {
            baseAttrSkills[skill] = baseAttrSkills[skill] + attrSkills[skill]
        }
        skills[attr] = baseAttrSkills;
    }
    for (let attr of Object.keys(item2)) {
        let baseAttrSkills = { ...skills[attr] };
        let attrSkills = (item2 as any)[attr];
        for (let skill of Object.keys(attrSkills)) {
            baseAttrSkills[skill] = baseAttrSkills[skill] + attrSkills[skill]
        }
        skills[attr] = baseAttrSkills;
    }
    return skills;
}

//take an array of DeepPartial<Skills>, return them all combined
export function sumSkills(array: DeepPartial<Skills>[]){
    let sum = baseSkills;
    while (array.length > 0){
        sum = addSkills(sum, array.pop() as DeepPartial<Skills>);
    }
    return sum;
}

export function generateSkillProfs(array: DeepPartial<SkillProfs>[]): SkillProfs{
    let results = baseSkillProfs;//refactor with eric RIP in Peace
    for (let prof of array){
        if(prof.str){
            if(prof.str.athletics){
                results.str.athletics = true;
            }
        }
        if(prof.dex){
            if(prof.dex.acrobatics){
                results.dex.acrobatics = true;
            }
            if(prof.dex.sleightOfHand){
                results.dex.sleightOfHand = true;
            }
            if(prof.dex.stealth){
                results.dex.stealth = true;
            }
        }
        if(prof.int){
            if(prof.int.arcana){
                results.int.arcana = true;
            }
            if(prof.int.history){
                results.int.history = true;
            }
            if(prof.int.investigation){
                results.int.investigation = true;
            }
            if(prof.int.nature){
                results.int.nature = true;
            }
            if(prof.int.religion){
                results.int.religion = true;
            }
        }
        if(prof.wis){
            if(prof.wis.animalHandling){
                results.wis.animalHandling = true;
            }
            if(prof.wis.insight){
                results.wis.insight = true;
            }
            if(prof.wis.medicine){
                results.wis.medicine = true;
            }
            if(prof.wis.perception){
                results.wis.perception = true;
            }
            if(prof.wis.survival){
                results.wis.survival = true;
            }
        }
        if(prof.cha){
            if(prof.cha.deception){
                results.cha.deception = true;
            }
            if(prof.cha.intimidation){
                results.cha.intimidation = true;   
            }
            if(prof.cha.performance){
                results.cha.performance = true;
            }
            if(prof.cha.persuasion){
                results.cha.persuasion = true;
            }
        }
    }
    return results;
}

export function convertAttrToSkills(mods: Attributes): Skills{
    return {str: {
        athletics: mods.str,
    },
    dex: {
        acrobatics: mods.dex,
        sleightOfHand: mods.dex,
        stealth: mods.dex
    },
    int: {
        arcana: mods.int,
        history: mods.int,
        investigation: mods.int,
        nature: mods.int,
        religion: mods.int
    },
    wis: {
        animalHandling: mods.wis,
        insight: mods.wis,
        medicine: mods.wis,
        perception: mods.wis,
        survival: mods.wis
    },
    cha: {
        deception: mods.cha,
        intimidation: mods.cha,
        performance: mods.cha,
        persuasion: mods.cha
    }
}
}