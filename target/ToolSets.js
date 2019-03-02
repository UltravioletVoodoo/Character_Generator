export function findTool(name) {
    for (const toolList of [artisan, gaming, musical]) {
        for (const tool of toolList) {
            if (tool.name == name) {
                return tool;
            }
        }
    }
    return {
        name: "No tool found",
        cost: 0,
        weight: 0
    };
}
export const artisan = [
    {
        name: "Alchemist's supplies",
        cost: 50,
        weight: 8
    },
    {
        name: "Brewer's supplies",
        cost: 20,
        weight: 9
    },
    {
        name: "Calligrapher's supplies",
        cost: 10,
        weight: 5
    },
    {
        name: "Carpenter's tools",
        cost: 8,
        weight: 6
    },
    {
        name: "Cartographer's tools",
        cost: 15,
        weight: 6
    },
    {
        name: "Cobbler's tools",
        cost: 5,
        weight: 5
    },
    {
        name: "Cook's utensils",
        cost: 1,
        weight: 8
    },
    {
        name: "Glassblower's tools",
        cost: 30,
        weight: 5
    },
    {
        name: "Jeweler's tools",
        cost: 25,
        weight: 2
    },
    {
        name: "Leatherworker's tools",
        cost: 5,
        weight: 5
    },
    {
        name: "Mason's tools",
        cost: 10,
        weight: 8
    },
    {
        name: "Painter's supplies",
        cost: 10,
        weight: 5
    },
    {
        name: "Potter's tools",
        cost: 10,
        weight: 3
    },
    {
        name: "Smith's tools",
        cost: 20,
        weight: 8
    },
    {
        name: "Tinker's tools",
        cost: 50,
        weight: 10
    },
    {
        name: "Weaver's tools",
        cost: 1,
        weight: 5
    },
    {
        name: "Woodcarver's tools",
        cost: 1,
        weight: 5
    }
];
export const gaming = [
    {
        name: "Dice set",
        cost: 0.1,
        weight: 0
    },
    {
        name: "Playing Card Set",
        cost: 0.5,
        weight: 0
    }
];
export const musical = [
    {
        name: "Bagpipes",
        cost: 30,
        weight: 6
    },
    {
        name: "Drum",
        cost: 6,
        weight: 3
    },
    {
        name: "Dulcimer",
        cost: 25,
        weight: 10
    },
    {
        name: "Flute",
        cost: 2,
        weight: 1
    },
    {
        name: "Lute",
        cost: 35,
        weight: 2
    },
    {
        name: "Lyre",
        cost: 30,
        weight: 2
    },
    {
        name: "Horn",
        cost: 3,
        weight: 2
    },
    {
        name: "Pan flute",
        cost: 12,
        weight: 2
    },
    {
        name: "Shawm",
        cost: 2,
        weight: 1
    },
    {
        name: "Viol",
        cost: 30,
        weight: 1
    }
];
export const miscTools = [
    {
        name: "Navigator's tools",
        cost: 25,
        weight: 2
    },
    {
        name: "Theive's tools",
        cost: 25,
        weight: 1
    },
];
