import { util } from "./Util";
export function chooseName(nameSet, sex) {
    let firstNames = [];
    console.log(sex);
    if (sex === "Male") {
        firstNames = nameSet[0];
    }
    else {
        firstNames = nameSet[1];
    }
    return util.choice(firstNames) + " " + util.choice(nameSet[2]);
}
export const dragonBornNames = [
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
export const dwarfNames = [
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
export const elfNames = [
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
export const gnomeNames = [
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
export const halfElfNames = [
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
export const halfOrcNames = [
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
export const halflingNames = [
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
export const humanNames = [
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
export const tieflingNames = [
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
