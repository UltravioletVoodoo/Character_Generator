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

//take a number to pick, and a list of DeepPartial<Skills>. Return the choices combined
export function chooseProf(n: number, options: DeepPartial<Skills>[]){
    return sumSkills((util.choices(options, n)));
}

export function convertAttrToSkills(attr: Attributes): Skills{

}