import { util } from "./Util";


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

//Define the DeepPartial
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
      ? Array<DeepPartial<U>>
      : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>
  };

//take 2 DeepPartial<Skills>, return them combined into 1 DeepPartial<Skills>
function addSkills(item1: DeepPartial<Skills>, item2: DeepPartial<Skills>){
    //implementation
    return item1;
}

//take an array of DeepPartial<Skills>, return them all combined
function sumSkills(array: DeepPartial<Skills>[]){
    //implementation
    let sum = array.pop() as DeepPartial<Skills>;
    while (array.length > 0){
        sum = addSkills(sum, array.pop() as DeepPartial<Skills>);
    }
    return sum;
}

//take a number to pick, and a list of DeepPartial<Skills>. Return the choices combined
export function chooseProf(n: number, options: DeepPartial<Skills>[]){
    return sumSkills((util.choices(options, n)));
}