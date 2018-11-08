import { race } from "./race";


console.log("Nothing here yet. Complain to the dev for being lazy");


const Elf: Partial<race> = {name: "Elf", subRace: [{name: "High Elf", abilityScores: {int: 2}}, {abilityScores: {dex: 2}}]};


console.log(Elf["name"]);

console.log(Elf["subRace"]? Elf["subRace"][0]["name"]:"");

if (Elf["subRace"]) {
    console.log(Elf["name"] + " has one or more subraces")
    for (let x of Elf["subRace"]!) {
        console.log(x["name"]); // but I didnt have to define this name. It could have been undefined. Heckin' heck.
    }
}else {
    console.log(Elf["name"] + " has no subraces")
}
