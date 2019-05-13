import { util } from "./Util";

export function chooseName(nameSet: string[][], sex: string): (string){
    let firstNames: string[] = []
    console.log(sex);
    if (sex === "Male"){
        firstNames = nameSet[0];
    } else{
    firstNames = nameSet[1]
    }
    return util.choice(firstNames) + " " + util.choice(nameSet[2])
}


export const dragonBornNames: string[][] = [
    [
    "m-Dragon-Fn"
    ],
    [
    "f-Dragon-Fn"
    ],
    [
    "Dragon-Ln"
    ],
];


export const dwarfNames: string[][] = [
    [
        "m-Dwarf-Fn"
    ],
    [
        "f-Dwarf-Fn"
    ],
    [
        "Dwarf-Ln"
    ]
];


export const elfNames: string[][] = [
    [
        "m-Elf-Fn"
    ],
    [
        "f-Elf-Fn"
    ],
    [
        "Elf-Ln"
    ]
];

export const gnomeNames: string[][] = [
    [
        "m-gnome-Fn"
    ],
    [
        "f-gnome-Fn"
    ],
    [
        "gnome-Ln"
    ]
];


export const halfElfNames: string[][] = [
    [
        "m-halfElf-Fn"
    ],
    [
        "f-halfElf-Fn"
    ],
    [
        "halfElf-Ln"
    ]
];


export const halfOrcNames: string[][] = [
    [
        "m-halfOrc-Fn"
    ],
    [
        "f-halfOrc-Fn"
    ],
    [
        "halfOrc-Ln"
    ]
];


export const halflingNames: string[][] = [
    [
        "m-halfling-Fn"
    ],
    [
        "f-halfling-Fn"
    ],
    [
        "halfling-Ln"
    ]
];


export const humanNames: string[][] = [
    [
        "m-human-Fn"
    ],
    [
        "f-human-Fn"
    ],
    [
        "human-Ln"
    ]
];


export const tieflingNames: string[][] = [
    [
        "m-tiefling-Fn"
    ],
    [
        "f-tiefling-Fn"
    ],
    [
        "tiefling-Ln"
    ]
];