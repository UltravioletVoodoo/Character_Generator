import { util } from "./Util";
export function chooseMiscItems(character) {
    function getOptions() {
        let options = [];
        for (let x of misc) {
            if (character.gold >= x.cost) {
                options.push(x);
            }
        }
        return options;
    }
    let itemCap = util.choice([2, 3, 4]);
    while (character.miscItems.length < itemCap) {
        let options = getOptions();
        if (options.length == 0) {
            break;
        }
        let itemChoice = util.choice(options);
        character.miscItems.push(itemChoice);
        character.gold -= itemChoice.cost;
    }
}
const misc = [
    {
        name: "Abacus",
        cost: 2
    },
    {
        name: "Acid (vial)",
        cost: 25
    },
    {
        name: "Alchemist's fire (flask)",
        cost: 50
    },
    {
        name: "Antitoxin",
        cost: 50
    },
    {
        name: "Backpack",
        cost: 2
    },
    {
        name: "Ball bearings (bag of 1,000)",
        cost: 1
    },
    {
        name: "Barrel",
        cost: 2
    },
    {
        name: "Basket",
        cost: 0.4
    },
    {
        name: "Bedroll",
        cost: 1
    },
    {
        name: "Bell",
        cost: 1
    },
    {
        name: "Blanket",
        cost: 0.5
    },
    {
        name: "Block and tackle",
        cost: 1
    },
    {
        name: "Book",
        cost: 25
    },
    {
        name: "Bottle, glass",
        cost: 2
    },
    {
        name: "Bucket",
        cost: 0.05
    },
    {
        name: "Caltrops (bag of 20)",
        cost: 1
    },
    {
        name: "Candle",
        cost: 0.01
    },
    {
        name: "Case, crossbow bolt",
        cost: 1
    },
    {
        name: "Case, map or scroll",
        cost: 1
    },
    {
        name: "Chain (10 feet)",
        cost: 5
    },
    {
        name: "Chalk (1 piece)",
        cost: 0.01
    },
    {
        name: "Chest",
        cost: 5
    },
    {
        name: "Clothes, common",
        cost: 0.5
    },
    {
        name: "Clothes, costume",
        cost: 5
    },
    {
        name: "Clothes, fine",
        cost: 15
    },
    {
        name: "Clothes, traveler's",
        cost: 2
    },
    {
        name: "Component pouch",
        cost: 25
    },
    {
        name: "Crowbar",
        cost: 2
    },
    {
        name: "Fishing tackle",
        cost: 1
    },
    {
        name: "Flask or Tankard",
        cost: 0.02
    },
    {
        name: "Grappling hook",
        cost: 2
    },
    {
        name: "Hammer",
        cost: 1
    },
    {
        name: "Hammer, sledge",
        cost: 2
    },
    {
        name: "Holy water (flask)",
        cost: 25
    },
    {
        name: "Hourglass",
        cost: 25
    },
    {
        name: "Hunting trap",
        cost: 5
    },
    {
        name: "Ink (1 ounce bottle)",
        cost: 10
    },
    {
        name: "Ink pen",
        cost: 0.02
    },
    {
        name: "Jug or Pitcher",
        cost: 0.02
    },
    {
        name: "Kit, climber's",
        cost: 25
    },
    {
        name: "Kit, disguise",
        cost: 25
    },
    {
        name: "Kit, forgery",
        cost: 15
    },
    {
        name: "Kit, herbalism",
        cost: 5
    },
    {
        name: "Kit, healer's",
        cost: 5
    },
    {
        name: "Kit, mess",
        cost: 0.2
    },
    {
        name: "Kit, poisoner's",
        cost: 50
    },
    {
        name: "Ladder (10ft)",
        cost: 0.1
    },
    {
        name: "Lamp",
        cost: 0.5
    },
    {
        name: "Lantern, bullseye",
        cost: 10
    },
    {
        name: "Lantern, hooded",
        cost: 5
    },
    {
        name: "Lock",
        cost: 10
    },
    {
        name: "Magnifying glass",
        cost: 100
    },
    {
        name: "Manacles",
        cost: 2
    },
    {
        name: "Mirror, steel",
        cost: 5
    },
    {
        name: "Oil (flask)",
        cost: 0.1
    },
    {
        name: "Paper (one sheet)",
        cost: 5
    },
    {
        name: "Parchment (one sheet)",
        cost: 0.1
    },
    {
        name: "Perfume (vial)",
        cost: 5
    },
    {
        name: "Pick, miner's",
        cost: 2
    },
    {
        name: "Piton",
        cost: 0.05
    },
    {
        name: "Poison, basic (vial)",
        cost: 100
    },
    {
        name: "Pole (10-foot)",
        cost: 0.05
    },
    {
        name: "Pot, iron",
        cost: 2
    },
    {
        name: "Potion of Healing",
        cost: 50
    },
    {
        name: "Pouch",
        cost: 5
    },
    {
        name: "Quiver",
        cost: 1
    },
    {
        name: "Ram, portable",
        cost: 4
    },
    {
        name: "Rations (one day)",
        cost: 0.5
    },
    {
        name: "Robes",
        cost: 1
    },
    {
        name: "Rope, hempen (50 feet)",
        cost: 1
    },
    {
        name: "Rope, silk (50 feet)",
        cost: 10
    },
    {
        name: "Sack",
        cost: 0.01
    },
    {
        name: "Scale, merchant's",
        cost: 5
    },
    {
        name: "Sealing wax",
        cost: 0.5
    },
    {
        name: "Shovel",
        cost: 2
    },
    {
        name: "Signal whistle",
        cost: 0.05
    },
    {
        name: "Signet ring",
        cost: 5
    },
    {
        name: "Soap",
        cost: 2
    },
    {
        name: "Spellbook",
        cost: 50
    },
    {
        name: "Spikes, iron (10)",
        cost: 1
    },
    {
        name: "Spyglass",
        cost: 1000
    },
    {
        name: "Tent, two-person",
        cost: 2
    },
    {
        name: "Tinderbox",
        cost: 0.5
    },
    {
        name: "Torch",
        cost: 0.01
    },
    {
        name: "Vial",
        cost: 1
    },
    {
        name: "Waterskin",
        cost: 0.2
    },
    {
        name: "Whetstone",
        cost: 0.01
    },
];
