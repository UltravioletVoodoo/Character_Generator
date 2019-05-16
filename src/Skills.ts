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

export const zeroSkills: Skills = {
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

export const allSkillPartialProfs: DeepPartial<Skills>[] = [
    {str: {athletics: 2}},
    {dex: {acrobatics: 2}},
    {dex: {sleightOfHand: 2}},
    {dex: {stealth: 2}},
    {int: {arcana: 2}},
    {int: {history: 2}},
    {int: {investigation: 2}},
    {int: {nature: 2}},
    {int: {religion: 2}},
    {wis: {animalHandling: 2}},
    {wis: {insight: 2}},
    {wis: {medicine: 2}},
    {wis: {perception: 2}},
    {wis: {survival: 2}},
    {cha: {deception: 2}},
    {cha: {intimidation: 2}},
    {cha: {performance: 2}},
    {cha: {persuasion: 2}},
]

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
    const skills: any = { ...zeroSkills };
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
    let sum = zeroSkills;
    while (array.length > 0){
        sum = addSkills(sum, array.pop() as DeepPartial<Skills>);
    }
    return sum;
}

export function skillProfCap(s : Skills): Skills{
    for (let attr of Object.keys(s)){
        for (let skill of Object.keys(attr)){
            if ((s as any)[attr][skill] > 0) {
                (s as any)[attr][skill] == 2;
            }
        }
    }
    return s;
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