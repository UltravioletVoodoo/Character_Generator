import { util } from "./Util";
import { Character } from "./Character";

export function findTool(name: string): Tool{
    for(const toolList of [artisan, gaming, musical, miscTools]){
        for(const tool of toolList){
            if(tool.name == name){
                return tool;
            }
        }
    }
    throw new Error("No tool '" + name + "' found...");
}

export interface Tool {
    name: string;
    cost: number; //cost in gp
}

export function chooseTools(character: Character){
    function getToolOptions(): Tool[] {
        let options: Tool[] = [];
        for (let x of character.toolProfs) {
            if(x.cost <= character.gold && !character.tools.includes(x)) {
                options.push(x);
            }
        }
        return options;
    }
    while (true) {
        let toolOptions = getToolOptions();
        if (toolOptions.length == 0) {
            break;
        }
        let toolChoice = util.choice(toolOptions);
        character.tools.push(toolChoice);
        character.gold -= toolChoice.cost;
    }
}

export const artisan: Tool[] = [
    {
        name: "Alchemist's supplies",
        cost: 50
    },
    {
        name: "Brewer's supplies",
        cost: 20
    },
    {
        name: "Calligrapher's supplies",
        cost: 10
    },
    {
        name: "Carpenter's tools",
        cost: 8
    },
    {
        name: "Cartographer's tools",
        cost: 15
    },
    {
        name: "Cobbler's tools",
        cost: 5
    },
    {
        name: "Cook's utensils",
        cost: 1
    },
    {
        name: "Glassblower's tools",
        cost: 30
    },
    {
        name: "Jeweler's tools",
        cost: 25
    },
    {
        name: "Leatherworker's tools",
        cost: 5
    },
    {
        name: "Mason's tools",
        cost: 10
    },
    {
        name: "Painter's supplies",
        cost: 10
    },
    {
        name: "Potter's tools",
        cost: 10
    },
    {
        name: "Smith's tools",
        cost: 20
    },
    {
        name: "Tinker's tools",
        cost: 50
    },
    {
        name: "Weaver's tools",
        cost: 1
    },
    {
        name: "Woodcarver's tools",
        cost: 1
    }
];

export const gaming: Tool[] = [
    {
        name: "Dice set",
        cost: 0.1
    },
    {
        name: "Playing Card Set",
        cost: 0.5
    }
];

export const musical: Tool[] = [
    {
        name: "Bagpipes",
        cost: 30
    },
    {
        name: "Drum",
        cost: 6
    },
    {
        name: "Dulcimer",
        cost: 25
    },
    {
        name: "Flute",
        cost: 2
    },
    {
        name: "Lute",
        cost: 35
    },
    {
        name: "Lyre",
        cost: 30
    },
    {
        name: "Horn",
        cost: 3
    },
    {
        name: "Pan flute",
        cost: 12
    },
    {
        name: "Shawm",
        cost: 2
    },
    {
        name: "Viol",
        cost: 30
    }
];

export const miscTools: Tool[] = [
    {
        name: "Navigator's tools",
        cost: 25
    },
    {
        name: "Thieve's tools",
        cost: 25
    },
    {
        name: "Herbalism kit",
        cost: 5
    }
];