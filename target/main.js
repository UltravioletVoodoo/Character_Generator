console.log("Nothing here yet. Complain to the dev for being lazy");
const Elf = { name: "Elf", subRace: [{ name: "High Elf", abilityScores: { int: 2 } }, { abilityScores: { dex: 2 } }] };
if (Elf.subRace) {
    console.log(Elf.name + " has one or more subraces");
    for (let x of Elf.subRace) {
        for (let attr in x) {
            if (attr) {
                console.log(attr + ": " + x[attr]);
            }
        }
    }
}
else {
    console.log(Elf.name + " has no subraces");
}
