export function mergeAttributes(a, b = {
    str: 0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0
}) {
    return {
        str: a.str + b.str,
        dex: a.dex + b.dex,
        con: a.con + b.con,
        int: a.int + b.int,
        wis: a.wis + b.wis,
        cha: a.cha + b.cha
    };
}
