export interface Attributes {
    [key: string]: number;
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
}

export function mergeAttributes(a: Attributes, b: Attributes = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
}): Attributes {
    
    return {
        str: a.str + b.str,
        dex: a.dex + b.dex,
        con: a.con + b.con,
        int: a.int + b.int,
        wis: a.wis + b.wis,
        cha: a.cha + b.cha
    }
}