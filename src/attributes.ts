export interface Attributes {
    [key: string]: number;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

const zeroAttributes: Attributes = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
}

export function mergeAttributes(a: Attributes, b: Attributes = zeroAttributes): Attributes { 
    return {
        str: a.str + b.str,
        dex: a.dex + b.dex,
        con: a.con + b.con,
        int: a.int + b.int,
        wis: a.wis + b.wis,
        cha: a.cha + b.cha
    }
}

export function generateMods(a: Attributes): Attributes{
    return {
        str: calculateMod(a.str),
        dex: calculateMod(a.dex),
        con: calculateMod(a.con),
        int: calculateMod(a.int),
        wis: calculateMod(a.wis),
        cha: calculateMod(a.cha)
    }
}

function calculateMod(n: number): number{
    return Math.ceil((n - 10) / 2)
}